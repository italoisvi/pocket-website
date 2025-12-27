export default function Privacidade() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">
          Política de Privacidade
        </h1>
        <p className="text-text-secondary mb-4">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
        <p className="text-text-secondary mb-16 leading-relaxed">
          Sua privacidade é fundamental para nós. Esta política descreve como
          coletamos, usamos e protegemos suas informações.
        </p>

        <div className="space-y-12 prose prose-lg max-w-none">
          <Section title="1. Informações Que Coletamos">
            <p className="text-text-secondary leading-relaxed mb-4">
              Para fornecer nossos serviços, coletamos as seguintes informações:
            </p>
            <h3 className="text-2xl md:text-3xl font-medium mb-3 mt-6">1.1 Informações de Conta</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>Nome completo</li>
              <li>Endereço de e-mail</li>
              <li>Foto de perfil (opcional)</li>
              <li>Senha (armazenada de forma criptografada)</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-medium mb-3 mt-6">1.2 Informações Financeiras</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>Registros de transações e gastos</li>
              <li>Categorias de despesas</li>
              <li>Valores de renda mensal</li>
              <li>Imagens de recibos e comprovantes (opcional)</li>
              <li>Análises e padrões de gastos gerados automaticamente</li>
            </ul>

            <h3 className="text-2xl md:text-3xl font-medium mb-3 mt-6">1.3 Informações de Uso</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>Preferências de tema (claro/escuro)</li>
              <li>Interações com o assistente virtual Walts</li>
              <li>Logs de erros e crashes (via Sentry)</li>
              <li>Dados de uso do aplicativo para melhorias</li>
            </ul>
          </Section>

          <Section title="2. Como Usamos Suas Informações">
            <p className="text-text-secondary leading-relaxed mb-4">
              Utilizamos suas informações exclusivamente para:
            </p>
            <ul className="space-y-3 text-text-secondary">
              <li>
                <strong className="text-foreground">Fornecer o serviço:</strong> Processar
                e categorizar seus gastos, gerar análises financeiras e insights personalizados.
              </li>
              <li>
                <strong className="text-foreground">Melhorar a experiência:</strong> Aprimorar
                nossos algoritmos de categorização e análise baseados em padrões de uso anônimos.
              </li>
              <li>
                <strong className="text-foreground">Suporte ao cliente:</strong> Responder
                suas dúvidas e resolver problemas técnicos.
              </li>
              <li>
                <strong className="text-foreground">Comunicação:</strong> Enviar notificações
                importantes sobre sua conta e atualizações do serviço.
              </li>
              <li>
                <strong className="text-foreground">Segurança:</strong> Detectar e prevenir
                fraudes, abusos e atividades maliciosas.
              </li>
            </ul>
          </Section>

          <Section title="3. Processamento de Inteligência Artificial">
            <p className="text-text-secondary leading-relaxed mb-4">
              O Pocket utiliza serviços de Inteligência Artificial para:
            </p>
            <ul className="space-y-3 text-text-secondary">
              <li>
                <strong className="text-foreground">OCR de Recibos:</strong> Extrair
                automaticamente informações de comprovantes fotografados (valor, data,
                estabelecimento).
              </li>
              <li>
                <strong className="text-foreground">Categorização Automática:</strong>{" "}
                Classificar gastos em categorias apropriadas baseado no nome do
                estabelecimento e tipo de compra.
              </li>
              <li>
                <strong className="text-foreground">Assistente Virtual:</strong> Fornecer
                dicas e insights financeiros personalizados através do Walts.
              </li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              Essas funcionalidades processam seus dados de forma segura e não
              compartilhamos suas informações financeiras com terceiros para fins
              de treinamento de IA.
            </p>
          </Section>

          <Section title="4. Compartilhamento de Informações">
            <p className="text-text-secondary leading-relaxed mb-4">
              <strong className="text-foreground">Nós não vendemos seus dados.</strong> Suas
              informações financeiras são privadas e nunca serão comercializadas.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              Compartilhamos informações apenas nas seguintes situações limitadas:
            </p>
            <ul className="space-y-3 text-text-secondary">
              <li>
                <strong className="text-foreground">Provedores de Serviço:</strong> Com
                parceiros que nos ajudam a operar o serviço (Supabase para banco de dados,
                DeepSeek para IA, Sentry para monitoramento), sob rígidos acordos de
                confidencialidade.
              </li>
              <li>
                <strong className="text-foreground">Requisitos Legais:</strong> Quando
                obrigados por lei, ordem judicial ou solicitação governamental válida.
              </li>
              <li>
                <strong className="text-foreground">Com Seu Consentimento:</strong> Quando
                você explicitamente autorizar o compartilhamento (ex: dividir conta com amigos).
              </li>
            </ul>
          </Section>

          <Section title="5. Segurança dos Dados">
            <p className="text-text-secondary leading-relaxed mb-4">
              Implementamos medidas de segurança robustas para proteger suas informações:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li>Criptografia de dados em trânsito (HTTPS/TLS)</li>
              <li>Criptografia de dados em repouso no banco de dados</li>
              <li>Autenticação segura via Supabase Auth</li>
              <li>Row Level Security (RLS) para isolamento de dados por usuário</li>
              <li>Monitoramento contínuo de segurança e vulnerabilidades</li>
              <li>Backups regulares e redundância de dados</li>
            </ul>
          </Section>

          <Section title="6. Seus Direitos">
            <p className="text-text-secondary leading-relaxed mb-4">
              De acordo com a LGPD (Lei Geral de Proteção de Dados), você tem direito a:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li>
                <strong className="text-foreground">Acessar:</strong> Visualizar todas as
                informações que temos sobre você
              </li>
              <li>
                <strong className="text-foreground">Corrigir:</strong> Atualizar informações
                incorretas ou incompletas
              </li>
              <li>
                <strong className="text-foreground">Excluir:</strong> Solicitar a exclusão
                completa de sua conta e dados (irreversível)
              </li>
              <li>
                <strong className="text-foreground">Portabilidade:</strong> Exportar seus
                dados em formato estruturado
              </li>
              <li>
                <strong className="text-foreground">Revogação:</strong> Revogar
                consentimentos previamente dados
              </li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              Para exercer esses direitos, acesse as configurações do app ou entre em
              contato conosco.
            </p>
          </Section>

          <Section title="7. Retenção de Dados">
            <p className="text-text-secondary leading-relaxed">
              Mantemos suas informações enquanto sua conta estiver ativa. Ao excluir
              sua conta, todos os seus dados pessoais e financeiros são permanentemente
              removidos de nossos sistemas em até 30 dias. Logs de erro anônimos podem
              ser retidos por até 90 dias para fins de melhoria do serviço.
            </p>
          </Section>

          <Section title="8. Cookies e Tecnologias Similares">
            <p className="text-text-secondary leading-relaxed">
              O aplicativo móvel não utiliza cookies. Armazenamos preferências localmente
              no dispositivo (como tema escolhido) usando AsyncStorage, que permanece
              exclusivamente no seu aparelho.
            </p>
          </Section>

          <Section title="9. Privacidade de Menores">
            <p className="text-text-secondary leading-relaxed">
              O Pocket não é destinado a menores de 18 anos. Não coletamos intencionalmente
              informações de crianças ou adolescentes. Se você acredita que coletamos
              dados de um menor inadvertidamente, entre em contato para remoção imediata.
            </p>
          </Section>

          <Section title="10. Alterações a Esta Política">
            <p className="text-text-secondary leading-relaxed">
              Podemos atualizar esta política periodicamente. Notificaremos você sobre
              mudanças significativas via e-mail ou notificação no app. O uso continuado
              após alterações constitui aceitação da nova política.
            </p>
          </Section>

          <Section title="11. Contato">
            <p className="text-text-secondary leading-relaxed mb-4">
              Para questões sobre privacidade, dúvidas ou exercício de direitos:
            </p>
            <div className="bg-surface p-6 rounded-xl border-2 border-border">
              <p className="text-text-secondary">
                <strong className="text-foreground">E-mail:</strong> privacidade@pocket-app.com
                <br />
                <strong className="text-foreground">Encarregado de Dados (DPO):</strong> dpo@pocket-app.com
              </p>
            </div>
          </Section>
        </div>
      </div>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section>
      <h2 className="text-4xl md:text-5xl font-semibold mb-6">{title}</h2>
      {children}
    </section>
  );
}
