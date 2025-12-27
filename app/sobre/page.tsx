export default function Sobre() {
  return (
    <div className="container mx-auto px-6 py-20">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-5xl md:text-6xl font-semibold mb-6">Sobre o Pocket</h1>
        <p className="text-text-secondary mb-16 leading-relaxed">
          Transformando a forma como você gerencia suas finanças pessoais.
        </p>

        <div className="space-y-12">
          <section>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">Nossa Missão</h2>
            <p className="text-text-secondary leading-relaxed">
              O Pocket nasceu da necessidade de tornar o controle financeiro pessoal
              algo simples, intuitivo e acessível para todos. Acreditamos que
              qualquer pessoa deveria ter acesso a ferramentas poderosas para
              entender e gerenciar seu dinheiro, sem complicação.
            </p>
          </section>

          <section>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">O Que Nos Torna Diferentes</h2>
            <div className="space-y-6">
              <div>
                <h3 className="text-2xl md:text-3xl font-medium mb-2">Inteligência Artificial Integrada</h3>
                <p className="text-text-secondary leading-relaxed">
                  Utilizamos IA de ponta para categorizar automaticamente seus gastos,
                  extrair informações de recibos e fornecer insights personalizados
                  através do nosso assistente virtual Walts.
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium mb-2">Design Minimalista e Elegante</h3>
                <p className="text-text-secondary leading-relaxed">
                  Nossa interface foi cuidadosamente desenhada para ser bonita,
                  funcional e fácil de usar. Cada detalhe foi pensado para proporcionar
                  a melhor experiência possível.
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium mb-2">Privacidade em Primeiro Lugar</h3>
                <p className="text-text-secondary leading-relaxed">
                  Seus dados financeiros são extremamente sensíveis. Por isso,
                  implementamos as melhores práticas de segurança e criptografia
                  para garantir que suas informações estejam sempre protegidas.
                </p>
              </div>
              <div>
                <h3 className="text-2xl md:text-3xl font-medium mb-2">Simplicidade Sem Sacrificar Poder</h3>
                <p className="text-text-secondary leading-relaxed">
                  Oferecemos recursos poderosos de análise e categorização, mas
                  mantemos tudo simples e intuitivo. Você não precisa ser um expert
                  em finanças para usar o Pocket.
                </p>
              </div>
            </div>
          </section>

          <section>
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">Como Funciona</h2>
            <div className="space-y-6">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-foreground text-background rounded-xl flex items-center justify-center font-semibold text-2xl md:text-3xl">
                  1
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-2">Capture Seus Gastos</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Tire foto dos seus recibos ou adicione gastos manualmente. Nossa IA
                    cuida do resto, extraindo e organizando as informações automaticamente.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-foreground text-background rounded-xl flex items-center justify-center font-semibold text-2xl md:text-3xl">
                  2
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-2">Acompanhe e Analise</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Visualize seus gastos organizados por categoria, veja gráficos de
                    evolução e entenda para onde seu dinheiro está indo.
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-16 h-16 md:w-20 md:h-20 bg-foreground text-background rounded-xl flex items-center justify-center font-semibold text-2xl md:text-3xl">
                  3
                </div>
                <div>
                  <h3 className="text-2xl md:text-3xl font-medium mb-2">Tome Decisões Melhores</h3>
                  <p className="text-text-secondary leading-relaxed">
                    Com insights personalizados do Walts e análises detalhadas,
                    tome decisões financeiras mais conscientes e alcance seus objetivos.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="bg-surface rounded-2xl p-8 border-2 border-border">
            <h2 className="text-4xl md:text-5xl font-semibold mb-4">Junte-se a Nós</h2>
            <p className="text-text-secondary leading-relaxed">
              Estamos apenas começando nossa jornada para revolucionar o controle
              financeiro pessoal. Baixe o Pocket hoje e faça parte dessa transformação.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
