import { NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { nome, email, assunto, mensagem } = await request.json();

    // Validação básica
    if (!nome || !email || !assunto || !mensagem) {
      return NextResponse.json(
        { error: 'Todos os campos são obrigatórios' },
        { status: 400 }
      );
    }

    // Mapear assuntos para português
    const assuntosMap: { [key: string]: string } = {
      suporte: 'Suporte Técnico',
      sugestao: 'Sugestão de Recurso',
      bug: 'Relatar Bug',
      parceria: 'Parcerias',
      privacidade: 'Privacidade e Dados',
      outro: 'Outro',
    };

    const assuntoFormatado = assuntosMap[assunto] || assunto;

    // Enviar email usando Resend
    // IMPORTANTE: Use 'onboarding@resend.dev' até verificar seu domínio no Resend
    // Depois de verificar, troque para 'noreply@gladiussistemas.com.br'
    const { data, error } = await resend.emails.send({
      from: 'Pocket Website <onboarding@resend.dev>',
      to: 'contato@gladiussistemas.com.br',
      replyTo: email,
      subject: `[Pocket Contato] ${assuntoFormatado} - ${nome}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <style>
            body {
              font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
              line-height: 1.6;
              color: #333;
              max-width: 600px;
              margin: 0 auto;
              padding: 20px;
            }
            .header {
              background: linear-gradient(135deg, #000000 0%, #1c1c1e 100%);
              color: white;
              padding: 30px;
              border-radius: 10px 10px 0 0;
              text-align: center;
            }
            .header h1 {
              margin: 0;
              font-size: 24px;
              font-weight: 600;
            }
            .content {
              background: #f9f9f9;
              padding: 30px;
              border-radius: 0 0 10px 10px;
            }
            .field {
              margin-bottom: 20px;
              background: white;
              padding: 15px;
              border-radius: 8px;
              border-left: 4px solid #000;
            }
            .field-label {
              font-weight: 600;
              color: #666;
              font-size: 12px;
              text-transform: uppercase;
              letter-spacing: 0.5px;
              margin-bottom: 5px;
            }
            .field-value {
              color: #000;
              font-size: 16px;
            }
            .message-box {
              background: white;
              padding: 20px;
              border-radius: 8px;
              border: 1px solid #e0e0e0;
              white-space: pre-wrap;
              word-wrap: break-word;
            }
            .footer {
              text-align: center;
              margin-top: 30px;
              padding-top: 20px;
              border-top: 1px solid #e0e0e0;
              color: #999;
              font-size: 14px;
            }
          </style>
        </head>
        <body>
          <div class="header">
            <h1>📬 Nova Mensagem de Contato</h1>
            <p style="margin: 10px 0 0 0; opacity: 0.9;">Pocket - Website Oficial</p>
          </div>

          <div class="content">
            <div class="field">
              <div class="field-label">Nome</div>
              <div class="field-value">${nome}</div>
            </div>

            <div class="field">
              <div class="field-label">Email</div>
              <div class="field-value"><a href="mailto:${email}" style="color: #000;">${email}</a></div>
            </div>

            <div class="field">
              <div class="field-label">Assunto</div>
              <div class="field-value">${assuntoFormatado}</div>
            </div>

            <div class="field">
              <div class="field-label">Mensagem</div>
              <div class="message-box">${mensagem}</div>
            </div>

            <div class="footer">
              <p>Mensagem recebida através do formulário de contato do site Pocket</p>
              <p>Para responder, basta clicar em "Responder" ou enviar email para: ${email}</p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
Nova Mensagem de Contato - Pocket Website

Nome: ${nome}
Email: ${email}
Assunto: ${assuntoFormatado}

Mensagem:
${mensagem}

---
Para responder, envie email para: ${email}
      `,
    });

    if (error) {
      console.error('Erro ao enviar email:', error);
      return NextResponse.json(
        { error: 'Erro ao enviar email. Tente novamente.' },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { message: 'Email enviado com sucesso!', data },
      { status: 200 }
    );
  } catch (error) {
    console.error('Erro ao enviar email:', error);
    return NextResponse.json(
      { error: 'Erro ao enviar email. Tente novamente.' },
      { status: 500 }
    );
  }
}
