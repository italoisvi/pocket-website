export default function Recursos() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">Recursos</h1>
        <p className="text-text-secondary mb-16 leading-relaxed">
          Descubra todas as funcionalidades que tornam o Pocket seu melhor aliado financeiro.
        </p>

        <div className="space-y-16">
          <FeatureSection
            title="Rastreamento Inteligente de Gastos"
            description="Capture seus gastos de forma rápida e eficiente"
            features={[
              {
                name: "Scan de Recibos com OCR",
                description:
                  "Tire foto de qualquer comprovante e nossa IA extrai automaticamente o valor, data, estabelecimento e categoria. Sem digitação manual.",
              },
              {
                name: "Upload de Galeria",
                description:
                  "Carregue fotos de recibos diretamente da sua galeria para processamento instantâneo.",
              },
              {
                name: "Categorização Automática",
                description:
                  "A IA do Pocket identifica automaticamente a categoria do gasto baseado no estabelecimento e tipo de compra.",
              },
            ]}
          />

          <FeatureSection
            title="Sistema de Categorias Completo"
            description="Organize seus gastos em 17 categorias principais"
            features={[
              {
                name: "Categorias Essenciais",
                description:
                  "Moradia, Alimentação, Transporte, Saúde e Educação com dezenas de subcategorias específicas.",
              },
              {
                name: "Categorias Não Essenciais",
                description:
                  "Lazer, Vestuário, Beleza, Eletrônicos e Delivery para acompanhar seus gastos variáveis.",
              },
              {
                name: "Investimentos e Dívidas",
                description:
                  "Acompanhe poupanças, investimentos, cartões de crédito, empréstimos e financiamentos.",
              },
            ]}
          />

          <FeatureSection
            title="Análise Financeira Detalhada"
            description="Entenda seus padrões de gastos com visualizações claras"
            features={[
              {
                name: "Dashboard Financeiro",
                description:
                  "Visualize seu saldo disponível, renda mensal e gastos totais em uma interface limpa e intuitiva.",
              },
              {
                name: "Gráficos e Tabelas",
                description:
                  "Acompanhe a evolução dos seus gastos ao longo do tempo com gráficos interativos.",
              },
              {
                name: "Análise de Custos Fixos vs Variáveis",
                description:
                  "Entenda quanto você gasta em despesas fixas e quanto em gastos variáveis.",
              },
            ]}
          />

          <FeatureSection
            title="Assistente Virtual Walts"
            description="Seu consultor financeiro pessoal com IA"
            features={[
              {
                name: "Chat Inteligente",
                description:
                  "Converse com Walts para tirar dúvidas, receber dicas e insights sobre suas finanças.",
              },
              {
                name: "Histórico de Conversas",
                description:
                  "Acesse todas as suas conversas anteriores com o assistente virtual.",
              },
              {
                name: "Dicas Personalizadas",
                description:
                  "Receba recomendações baseadas no seu perfil e padrões de gastos únicos.",
              },
            ]}
          />

          <FeatureSection
            title="Funcionalidades Sociais"
            description="Compartilhe e divida gastos facilmente"
            features={[
              {
                name: "Dividir Conta",
                description:
                  "Ferramenta prática para dividir despesas entre amigos e familiares de forma justa.",
              },
              {
                name: "Compartilhamento de Recibos",
                description:
                  "Compartilhe comprovantes com outras pessoas de forma rápida.",
              },
            ]}
          />

          <FeatureSection
            title="Design e Experiência"
            description="Interface elegante e acessível"
            features={[
              {
                name: "Tema Claro e Escuro",
                description:
                  "Alterne entre temas com um toque. O tema segue automaticamente as preferências do seu sistema.",
              },
              {
                name: "Design Minimalista",
                description:
                  "Interface limpa com fonte Cormorant Garamond elegante e espaçamento generoso.",
              },
              {
                name: "Experiência Fluida",
                description:
                  "Animações suaves, transições elegantes e navegação intuitiva.",
              },
            ]}
          />

          <FeatureSection
            title="Segurança e Privacidade"
            description="Seus dados protegidos sempre"
            features={[
              {
                name: "Criptografia End-to-End",
                description:
                  "Todos os seus dados são criptografados tanto em trânsito quanto em repouso.",
              },
              {
                name: "Autenticação Segura",
                description:
                  "Sistema de login robusto com autenticação via Supabase.",
              },
              {
                name: "Controle de Privacidade",
                description:
                  "Oculte valores sensíveis com um toque para maior privacidade em ambientes públicos.",
              },
            ]}
          />
        </div>
      </div>
    </div>
  );
}

function FeatureSection({
  title,
  description,
  features,
}: {
  title: string;
  description: string;
  features: Array<{ name: string; description: string }>;
}) {
  return (
    <div>
      <h2 className="text-4xl md:text-5xl font-semibold mb-2">{title}</h2>
      <p className="text-lg md:text-xl text-text-secondary mb-8">{description}</p>
      <div className="space-y-6">
        {features.map((feature) => (
          <div key={feature.name} className="border-l-2 border-border pl-6">
            <h3 className="text-2xl md:text-3xl font-medium mb-2">{feature.name}</h3>
            <p className="text-text-secondary leading-relaxed">
              {feature.description}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}
