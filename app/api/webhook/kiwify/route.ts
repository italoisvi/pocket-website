import { NextRequest, NextResponse } from "next/server";
import crypto from "crypto";

// Tipos para o payload da Kiwify
interface KiwifyWebhookPayload {
  order_id: string;
  order_ref: string;
  order_status:
    | "paid"
    | "waiting_payment"
    | "refused"
    | "refunded"
    | "chargedback";
  product_id: string;
  product_name: string;
  customer_email: string;
  customer_name: string;
  customer_phone?: string;
  sale_value: number;
  created_at: string;
  approved_date?: string;
  installments?: number;
  payment_method?: string;
}

// Verifica assinatura do webhook da Kiwify
function verifyKiwifySignature(
  payload: string,
  signature: string,
  secret: string
): boolean {
  const hmac = crypto.createHmac("sha256", secret);
  hmac.update(payload);
  const expectedSignature = hmac.digest("hex");
  return crypto.timingSafeEqual(
    Buffer.from(signature),
    Buffer.from(expectedSignature)
  );
}

// Envia evento para TikTok Events API
async function sendTikTokEvent(
  eventName: string,
  eventData: {
    email?: string;
    phone?: string;
    value?: number;
    currency?: string;
    content_id?: string;
    content_name?: string;
    content_type?: string;
    order_id?: string;
  }
) {
  const TIKTOK_ACCESS_TOKEN = process.env.TIKTOK_ACCESS_TOKEN;
  const TIKTOK_PIXEL_ID = process.env.TIKTOK_PIXEL_ID || "D60F3A3C77U7EB9GUBM0";

  if (!TIKTOK_ACCESS_TOKEN) {
    console.error("TIKTOK_ACCESS_TOKEN não configurado");
    return false;
  }

  // Hash do email (TikTok exige SHA256)
  const hashedEmail = eventData.email
    ? crypto
        .createHash("sha256")
        .update(eventData.email.toLowerCase().trim())
        .digest("hex")
    : undefined;

  // Hash do telefone (se disponível)
  const hashedPhone = eventData.phone
    ? crypto
        .createHash("sha256")
        .update(eventData.phone.replace(/\D/g, ""))
        .digest("hex")
    : undefined;

  const payload = {
    pixel_code: TIKTOK_PIXEL_ID,
    event: eventName,
    event_id: eventData.order_id || crypto.randomUUID(),
    timestamp: new Date().toISOString(),
    context: {
      user: {
        email: hashedEmail,
        phone: hashedPhone,
      },
      page: {
        url: "https://pocket.gladiussistemas.com.br/vendas",
      },
    },
    properties: {
      value: eventData.value,
      currency: eventData.currency || "BRL",
      content_id: eventData.content_id || "pocket-1-ano",
      content_name: eventData.content_name,
      content_type: eventData.content_type || "product",
    },
  };

  try {
    const response = await fetch(
      "https://business-api.tiktok.com/open_api/v1.3/event/track/",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Access-Token": TIKTOK_ACCESS_TOKEN,
        },
        body: JSON.stringify({
          event_source: "web",
          event_source_id: TIKTOK_PIXEL_ID,
          data: [payload],
        }),
      }
    );

    const result = await response.json();

    if (response.ok && result.code === 0) {
      console.log(`TikTok Event ${eventName} enviado com sucesso:`, result);
      return true;
    } else {
      console.error(`Erro ao enviar evento TikTok:`, result);
      return false;
    }
  } catch (error) {
    console.error("Erro na requisição para TikTok:", error);
    return false;
  }
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.text();
    const signature = request.headers.get("x-kiwify-signature") || "";
    const KIWIFY_WEBHOOK_SECRET = process.env.KIWIFY_WEBHOOK_SECRET;

    // Verifica assinatura se o secret estiver configurado
    if (KIWIFY_WEBHOOK_SECRET) {
      if (!verifyKiwifySignature(body, signature, KIWIFY_WEBHOOK_SECRET)) {
        console.error("Assinatura do webhook inválida");
        return NextResponse.json(
          { error: "Assinatura inválida" },
          { status: 401 }
        );
      }
    }

    const payload: KiwifyWebhookPayload = JSON.parse(body);

    console.log("Webhook Kiwify recebido:", {
      order_id: payload.order_id,
      status: payload.order_status,
      product: payload.product_name,
      customer: payload.customer_email,
    });

    // Processa baseado no status do pedido
    switch (payload.order_status) {
      case "paid":
        // Envia evento de compra para o TikTok
        await sendTikTokEvent("CompletePayment", {
          email: payload.customer_email,
          phone: payload.customer_phone,
          value: payload.sale_value,
          currency: "BRL",
          content_id: "pocket-1-ano",
          content_name: payload.product_name,
          content_type: "product",
          order_id: payload.order_id,
        });

        // Também envia Purchase (alguns preferem este evento)
        await sendTikTokEvent("Purchase", {
          email: payload.customer_email,
          phone: payload.customer_phone,
          value: payload.sale_value,
          currency: "BRL",
          content_id: "pocket-1-ano",
          content_name: payload.product_name,
          content_type: "product",
          order_id: payload.order_id,
        });

        console.log(`Compra confirmada: ${payload.order_id}`);
        break;

      case "refunded":
        console.log(`Reembolso processado: ${payload.order_id}`);
        break;

      case "chargedback":
        console.log(`Chargeback: ${payload.order_id}`);
        break;

      default:
        console.log(`Status não processado: ${payload.order_status}`);
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Erro ao processar webhook:", error);
    return NextResponse.json(
      { error: "Erro interno do servidor" },
      { status: 500 }
    );
  }
}

// Endpoint para verificação (alguns serviços usam GET para verificar)
export async function GET() {
  return NextResponse.json({
    status: "ok",
    message: "Webhook endpoint ativo",
  });
}
