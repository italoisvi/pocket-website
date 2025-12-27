export default function Termos() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">Termos de Uso</h1>
        <p className="text-text-secondary mb-4">
          Última atualização: {new Date().toLocaleDateString('pt-BR')}
        </p>
        <p className="text-lg text-text-secondary mb-16 leading-relaxed">
          Ao usar o Pocket, você concorda com estes termos. Leia-os atentamente.
        </p>

        <div className="space-y-12 prose prose-lg max-w-none">
          <Section title="1. Aceitação dos Termos">
            <p className="text-text-secondary leading-relaxed">
              Ao acessar e usar o aplicativo Pocket, você aceita e concorda em estar
              vinculado a estes Termos de Uso. Se você não concordar com qualquer
              parte destes termos, não deverá usar o aplicativo. Estes termos se
              aplicam a todos os usuários do Pocket.
            </p>
          </Section>

          <Section title="2. Descrição do Serviço">
            <p className="text-text-secondary leading-relaxed mb-4">
              O Pocket é um aplicativo de gerenciamento de finanças pessoais que oferece:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li>Rastreamento e categorização de gastos</li>
              <li>Análise financeira com gráficos e relatórios</li>
              <li>Processamento automático de recibos via OCR</li>
              <li>Assistente virtual com inteligência artificial</li>
              <li>Ferramentas para divisão de despesas</li>
              <li>Sincronização segura de dados na nuvem</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              Reservamo-nos o direito de modificar ou descontinuar recursos a qualquer
              momento, com ou sem aviso prévio.
            </p>
          </Section>

          <Section title="3. Requisitos de Conta">
            <h3 className="text-xl font-medium mb-3">3.1 Criação de Conta</h3>
            <ul className="space-y-2 text-text-secondary mb-4">
              <li>Você deve ter pelo menos 18 anos de idade</li>
              <li>Fornecer informações verdadeiras, precisas e completas</li>
              <li>Manter suas informações de conta atualizadas</li>
              <li>Ser responsável pela segurança de sua senha</li>
              <li>Notificar-nos imediatamente sobre uso não autorizado</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">3.2 Responsabilidade da Conta</h3>
            <p className="text-text-secondary leading-relaxed">
              Você é totalmente responsável por todas as atividades que ocorrem em sua
              conta. Não compartilhe suas credenciais com terceiros. Caso suspeite de
              acesso não autorizado, altere sua senha imediatamente e entre em contato
              conosco.
            </p>
          </Section>

          <Section title="4. Uso Aceitável">
            <h3 className="text-xl font-medium mb-3">4.1 Você Concorda em NÃO:</h3>
            <ul className="space-y-2 text-text-secondary">
              <li>Usar o serviço para fins ilegais ou fraudulentos</li>
              <li>Tentar acessar contas de outros usuários</li>
              <li>Fazer engenharia reversa ou descompilar o aplicativo</li>
              <li>Sobrecarregar ou interferir com a infraestrutura do serviço</li>
              <li>Coletar dados de outros usuários sem consentimento</li>
              <li>Transmitir vírus, malware ou código malicioso</li>
              <li>Usar bots, scripts ou automação não autorizada</li>
              <li>Revender ou redistribuir o serviço</li>
            </ul>

            <h3 className="text-xl font-medium mb-3 mt-6">4.2 Consequências</h3>
            <p className="text-text-secondary leading-relaxed">
              Violações destes termos podem resultar em suspensão ou encerramento
              imediato de sua conta, sem aviso prévio e sem reembolso (se aplicável).
            </p>
          </Section>

          <Section title="5. Propriedade Intelectual">
            <p className="text-text-secondary leading-relaxed mb-4">
              O Pocket e todo o seu conteúdo (interface, design, código, logotipos,
              ícones, textos) são de propriedade exclusiva do Pocket e protegidos por
              leis de direitos autorais e propriedade intelectual.
            </p>
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-foreground">Seus Dados:</strong> Você mantém
              todos os direitos sobre os dados financeiros que inserir no aplicativo.
              Concede-nos apenas uma licença limitada para processar esses dados com
              o objetivo de fornecer o serviço.
            </p>
          </Section>

          <Section title="6. Privacidade e Dados">
            <p className="text-text-secondary leading-relaxed">
              O uso de suas informações pessoais é regido por nossa{" "}
              <a href="/privacidade" className="text-foreground underline hover:no-underline">
                Política de Privacidade
              </a>
              . Ao usar o Pocket, você concorda com a coleta e uso de informações
              conforme descrito naquela política.
            </p>
          </Section>

          <Section title="7. Processamento de IA e OCR">
            <p className="text-text-secondary leading-relaxed mb-4">
              O Pocket utiliza tecnologias de Inteligência Artificial e OCR para:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li>Extrair informações de recibos fotografados</li>
              <li>Categorizar automaticamente despesas</li>
              <li>Fornecer insights financeiros personalizados</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              <strong className="text-foreground">Precisão:</strong> Embora nos esforcemos
              para fornecer resultados precisos, a tecnologia de IA pode ocasionalmente
              cometer erros. Você é responsável por revisar e confirmar a precisão das
              informações processadas automaticamente.
            </p>
          </Section>

          <Section title="8. Limitação de Responsabilidade">
            <p className="text-text-secondary leading-relaxed mb-4">
              <strong className="text-foreground">O SERVIÇO É FORNECIDO "COMO ESTÁ"</strong>,
              sem garantias de qualquer tipo, expressas ou implícitas.
            </p>
            <p className="text-text-secondary leading-relaxed mb-4">
              O Pocket não se responsabiliza por:
            </p>
            <ul className="space-y-2 text-text-secondary">
              <li>Decisões financeiras tomadas com base em dados ou análises do app</li>
              <li>Erros ou imprecisões em categorizações automáticas</li>
              <li>Perda de dados devido a falhas técnicas (mantemos backups, mas acidentes podem ocorrer)</li>
              <li>Danos indiretos, incidentais ou consequenciais</li>
              <li>Interrupções temporárias do serviço para manutenção</li>
            </ul>
            <p className="text-text-secondary leading-relaxed mt-4">
              Nossa responsabilidade total não excederá o valor pago por você nos
              últimos 12 meses (se aplicável).
            </p>
          </Section>

          <Section title="9. Isenção de Consultoria Financeira">
            <p className="text-text-secondary leading-relaxed">
              <strong className="text-foreground">IMPORTANTE:</strong> O Pocket é uma
              ferramenta de organização e rastreamento financeiro. NÃO fornecemos
              consultoria financeira, de investimentos ou jurídica. As dicas e insights
              gerados pela IA são meramente informativos e não devem ser considerados
              como recomendações profissionais. Consulte um consultor financeiro
              certificado para decisões importantes.
            </p>
          </Section>

          <Section title="10. Disponibilidade do Serviço">
            <p className="text-text-secondary leading-relaxed">
              Embora nos esforcemos para manter o serviço disponível 24/7, não garantimos
              que o Pocket estará sempre acessível, ininterrupto ou livre de erros.
              Podemos realizar manutenções programadas e enfrentar interrupções
              inesperadas. Não seremos responsabilizados por indisponibilidades temporárias.
            </p>
          </Section>

          <Section title="11. Modificações do Serviço">
            <p className="text-text-secondary leading-relaxed">
              Reservamo-nos o direito de modificar, suspender ou descontinuar qualquer
              parte do Pocket a qualquer momento. Faremos esforços razoáveis para
              notificá-lo sobre mudanças significativas com antecedência. O uso
              continuado após modificações constitui aceitação das alterações.
            </p>
          </Section>

          <Section title="12. Encerramento de Conta">
            <h3 className="text-xl font-medium mb-3">12.1 Por Você</h3>
            <p className="text-text-secondary leading-relaxed mb-4">
              Você pode encerrar sua conta a qualquer momento através das configurações
              do app. Seus dados serão excluídos conforme descrito na Política de Privacidade.
            </p>

            <h3 className="text-xl font-medium mb-3">12.2 Por Nós</h3>
            <p className="text-text-secondary leading-relaxed">
              Podemos suspender ou encerrar sua conta se você violar estes Termos,
              usar o serviço de forma inadequada, ou se for legalmente requerido.
              Em caso de violação grave, o encerramento pode ser imediato sem aviso.
            </p>
          </Section>

          <Section title="13. Links de Terceiros">
            <p className="text-text-secondary leading-relaxed">
              O Pocket pode conter links para sites ou serviços de terceiros. Não
              somos responsáveis pelo conteúdo, privacidade ou práticas desses sites.
              O acesso a links externos é por sua conta e risco.
            </p>
          </Section>

          <Section title="14. Indenização">
            <p className="text-text-secondary leading-relaxed">
              Você concorda em indenizar e isentar o Pocket de quaisquer reivindicações,
              perdas, responsabilidades, danos, custos e despesas (incluindo honorários
              advocatícios) resultantes de: (a) seu uso do serviço, (b) violação destes
              Termos, ou (c) violação de direitos de terceiros.
            </p>
          </Section>

          <Section title="15. Lei Aplicável">
            <p className="text-text-secondary leading-relaxed">
              Estes Termos são regidos pelas leis da República Federativa do Brasil,
              sem consideração a conflitos de disposições legais. Qualquer disputa
              relacionada a estes Termos será resolvida nos tribunais competentes
              do Brasil.
            </p>
          </Section>

          <Section title="16. Divisibilidade">
            <p className="text-text-secondary leading-relaxed">
              Se qualquer disposição destes Termos for considerada inválida ou
              inexequível, essa disposição será limitada ou eliminada na medida mínima
              necessária, e as demais disposições permanecerão em pleno vigor.
            </p>
          </Section>

          <Section title="17. Acordo Integral">
            <p className="text-text-secondary leading-relaxed">
              Estes Termos, juntamente com a Política de Privacidade, constituem o
              acordo integral entre você e o Pocket, substituindo quaisquer acordos
              anteriores relacionados ao uso do serviço.
            </p>
          </Section>

          <Section title="18. Contato">
            <p className="text-text-secondary leading-relaxed mb-4">
              Para questões sobre estes Termos:
            </p>
            <div className="bg-surface p-6 rounded-xl border-2 border-border">
              <p className="text-text-secondary">
                <strong className="text-foreground">E-mail:</strong> suporte@pocket-app.com
                <br />
                <strong className="text-foreground">Legal:</strong> legal@pocket-app.com
              </p>
            </div>
          </Section>

          <div className="bg-foreground/5 p-6 rounded-xl border-2 border-border mt-12">
            <p className="text-text-secondary text-center">
              Ao usar o Pocket, você reconhece ter lido, compreendido e concordado
              com estes Termos de Uso.
            </p>
          </div>
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
      <h2 className="text-3xl font-semibold mb-6">{title}</h2>
      {children}
    </section>
  );
}
