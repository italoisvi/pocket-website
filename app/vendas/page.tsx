"use client";

import Image from "next/image";
import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

export default function Vendas() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  const getPhoneImage = () => {
    if (theme === "night") {
      return "/celular-night.png";
    }
    if (resolvedTheme === "dark") {
      return "/celular-light.png";
    }
    return "/celular-dark.png";
  };

  const cycleTheme = () => {
    if (theme === "light" || (theme === "system" && resolvedTheme === "light")) {
      setTheme("dark");
    } else if (theme === "dark" || (theme === "system" && resolvedTheme === "dark")) {
      setTheme("night");
    } else {
      setTheme("light");
    }
  };

  // Função para rastrear eventos do TikTok
  const trackTikTokEvent = (eventName: string, eventData?: Record<string, unknown>) => {
    if (typeof window !== "undefined" && (window as typeof window & { ttq?: { track: (event: string, data?: Record<string, unknown>) => void } }).ttq) {
      (window as typeof window & { ttq: { track: (event: string, data?: Record<string, unknown>) => void } }).ttq.track(eventName, eventData);
    }
  };

  // Handler para cliques nos CTAs intermediários
  const handleCtaClick = () => {
    trackTikTokEvent("ClickButton", {
      content_id: "pocket-1-ano",
      content_name: "CTA Vendas",
      content_category: "Botao Compra",
    });
  };

  // Handler para o botão de checkout final
  const handleCheckoutClick = () => {
    trackTikTokEvent("InitiateCheckout", {
      content_id: "pocket-1-ano",
      content_name: "Pocket 1 Ano",
      content_type: "product",
      value: 97,
      currency: "BRL",
    });
  };

  return (
    <div className="overflow-hidden min-h-screen">
      {/* Botão de tema fixo no canto superior direito */}
      {mounted && (
        <button
          onClick={cycleTheme}
          className="fixed top-4 right-4 md:top-6 md:right-6 z-50 p-3 rounded-full bg-surface border-2 border-border hover:bg-background transition-colors shadow-lg"
          aria-label="Alternar tema"
        >
          {/* Ícone do Sol - Modo Claro */}
          {(theme === "light" || (theme === "system" && resolvedTheme === "light")) && (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m23.5,11.5h-4.525c-.062-.865-.28-1.686-.629-2.436l3.961-2.19c.241-.134.329-.438.195-.68-.134-.242-.439-.327-.68-.195l-3.959,2.19c-.534-.818-1.232-1.517-2.05-2.05l2.189-3.96c.134-.242.046-.546-.196-.68-.242-.132-.546-.047-.679.195l-2.19,3.961c-.751-.349-1.571-.568-2.437-.629V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v4.525c-.865.062-1.686.28-2.437.629l-2.19-3.961c-.133-.241-.436-.329-.679-.195-.242.134-.33.438-.196.68l2.189,3.96c-.818.534-1.517,1.232-2.05,2.05l-3.959-2.19c-.244-.132-.546-.047-.68.195s-.046.546.195.68l3.961,2.19c-.349.751-.568,1.571-.629,2.436H.5c-.276,0-.5.224-.5.5s.224.5.5.5h4.525c.062.865.28,1.686.629,2.436l-3.961,2.19c-.241.134-.329.438-.195.68.091.165.262.258.438.258.082,0,.165-.021.242-.062l3.959-2.19c.534.818,1.232,1.517,2.05,2.05l-2.189,3.96c-.134.242-.046.546.196.68.077.042.159.062.241.062.176,0,.347-.093.438-.258l2.19-3.961c.751.349,1.571.568,2.437.629v4.525c0,.276.224.5.5.5s.5-.224.5-.5v-4.525c.865-.062,1.686-.28,2.437-.629l2.19,3.961c.091.165.262.258.438.258.082,0,.165-.021.241-.062.242-.134.33-.438.196-.68l-2.189-3.96c.818-.534,1.516-1.232,2.05-2.05l3.959,2.19c.077.042.16.062.242.062.176,0,.347-.093.438-.258.134-.242.046-.546-.195-.68l-3.961-2.19c.349-.751.568-1.571.629-2.436h4.525c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-11.5,6.5c-3.309,0-6-2.691-6-6s2.691-6,6-6,6,2.691,6,6-2.691,6-6,6Z"/>
            </svg>
          )}
          {/* Ícone da Lua - Modo Escuro */}
          {(theme === "dark" || (theme === "system" && resolvedTheme === "dark")) && (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="m20.199,19.831c-2.74-1.966-5.199-4.045-5.199-7.831s2.459-5.865,5.199-7.831c.588-.422.881-1.105.783-1.829-.099-.732-.589-1.347-1.28-1.603-1.367-.507-3.396-.737-4.702-.737C8.271,0,3,5.271,3,12s5.271,12,12,12c1.306,0,3.335-.23,4.702-.737.691-.256,1.182-.87,1.28-1.603.098-.724-.195-1.407-.783-1.829Zm-.208,1.695c-.05.371-.288.67-.637.799-1.251.464-3.134.675-4.354.675-6.168,0-11-4.832-11-11S8.832,1,15,1c1.22,0,3.103.211,4.354.675.349.129.587.428.637.799.047.351-.093.681-.375.883-2.841,2.039-5.616,4.387-5.616,8.644s2.774,6.604,5.616,8.644c.282.202.422.532.375.883Z"/>
            </svg>
          )}
          {/* Ícone Lua com Estrelas - Modo Noturno */}
          {theme === "night" && (
            <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path d="M12,12c0-3.146,1.446-5.925,4.421-8.494,.47-.405,.679-1.014,.562-1.628-.118-.614-.538-1.101-1.124-1.303C14.22,.01,12.008-.153,10.083,.152,4.827,.987,.613,5.432,.066,10.723c-.657,6.352,3.744,12.117,10.017,13.125,.656,.105,1.321,.15,1.999,.153,1.362,0,2.701-.204,3.777-.576,.585-.202,1.005-.689,1.124-1.303,.118-.614-.092-1.223-.562-1.628-2.975-2.569-4.421-5.347-4.421-8.494Zm3.533,10.479c-.975,.336-2.197,.521-3.453,.521-.62-.005-1.235-.043-1.839-.14C4.491,21.937,.458,16.65,1.061,10.826,1.562,5.978,5.423,1.904,10.24,1.14c.597-.095,1.223-.141,1.847-.141,1.23,0,2.456,.179,3.446,.521,.243,.084,.418,.288,.467,.546,.05,.259-.037,.514-.232,.683-3.208,2.77-4.768,5.796-4.768,9.25s1.56,6.48,4.768,9.25c.195,.169,.282,.424,.232,.683-.049,.258-.224,.462-.467,.546Z"/>
              <circle cx="17" cy="15" r="1"/>
              <circle cx="23" cy="19" r="1"/>
              <path d="M23.658,8.974c.204-.068,.342-.259,.342-.474s-.138-.406-.342-.474l-1.263-.421-.421-1.263c-.136-.408-.812-.408-.948,0l-.419,1.257-1.256,.393c-.205,.064-.347,.252-.351,.468s.13,.409,.333,.48l1.27,.449,.423,1.269c.068,.204,.259,.342,.474,.342s.406-.138,.474-.342l.421-1.263,1.263-.421Z"/>
            </svg>
          )}
        </button>
      )}
      {/* Seção 1 - Headline + Sub-headline */}
      <section className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="max-w-5xl mx-auto text-center">
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight mb-6 md:mb-8">
            Você gasta tudo e{" "}
            <span className="text-[#fee077]">não sabe como?</span>
          </h1>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-secondary leading-relaxed max-w-4xl mx-auto">
            Aprenda a controlar seu dinheiro com 5 minutos por dia usando apenas
            este app (sem planilhas, sem anotações chatas).
          </p>
        </div>
      </section>

      {/* Seção 2 - Dor / Problema */}
      <section className="bg-surface py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-8 md:mb-12 text-center">
              Isso parece familiar?
            </h2>
            <div className="space-y-6 md:space-y-8">
              <ProblemItem>
                Seu dinheiro acaba antes do fim do mês e você não sabe para onde
                foi?
              </ProblemItem>
              <ProblemItem>
                Já tentou usar planilhas ou aplicativos complicados e desistiu?
              </ProblemItem>
              <ProblemItem>
                Sente que está sempre no zero — ou pior, no negativo?
              </ProblemItem>
            </div>
            <p className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed mt-8 md:mt-12 text-center">
              Você não está sozinha. Isso acontece com milhares de pessoas todos
              os meses. O problema não é você, é o sistema chato e confuso que
              nunca funcionou para quem tem uma rotina corrida e não é
              especialista em finanças.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 3 - Solução Apresentada */}
      <section className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
              Conheça o <span className="text-[#fee077]">Pocket</span>
            </h2>
            <p className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed mb-6">
              O app criado por quem odeia planilhas — e que quer resolver de vez
              a sensação de &ldquo;meu dinheiro sumiu&rdquo;.
            </p>
            <p className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed mb-6">
              Com ele, você só precisa tirar{" "}
              <strong className="text-foreground">
                uma foto da sua conta ou nota fiscal
              </strong>
              , e pronto: seu gasto é registrado, categorizado e aparece de
              forma clara e visual na palma da mão.
            </p>
            <p className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed">
              E ainda tem o{" "}
              <strong className="text-foreground">Walt&apos;s</strong>, seu agente
              financeiro virtual, pronto para te orientar com dicas
              personalizadas e análises do seu dinheiro — como se fosse um
              mentor de bolso.
            </p>
          </div>
          <div className="relative flex justify-center md:justify-end">
            {mounted ? (
              <Image
                src={getPhoneImage()}
                alt="App Pocket no celular"
                width={400}
                height={800}
                className="relative z-10 w-full max-w-sm md:max-w-md h-auto"
              />
            ) : (
              <div
                className="relative z-10 w-full max-w-sm md:max-w-md h-auto"
                style={{ aspectRatio: "1/2" }}
              />
            )}
          </div>
        </div>
      </section>

      {/* Seção 4 - Como Funciona */}
      <section className="bg-surface py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-center">
              Como funciona?
            </h2>
            <p className="text-text-secondary text-base md:text-lg lg:text-xl text-center mb-10 md:mb-16">
              Simples assim, em 5 passos
            </p>
            <div className="space-y-6 md:space-y-8">
              <StepItem number={1}>
                Baixe o app no seu iPhone e ative seu acesso.
              </StepItem>
              <StepItem number={2}>
                Tire uma foto da conta ou nota — ele organiza tudo para você.
              </StepItem>
              <StepItem number={3}>
                Veja seus gastos categorizados com clareza.
              </StepItem>
              <StepItem number={4}>
                Siga as orientações simples do Walt&apos;s para fazer seu dinheiro
                durar.
              </StepItem>
              <StepItem number={5}>
                Use diariamente por 5 minutos e veja seu dinheiro render mais.
              </StepItem>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 5 - Benefícios */}
      <section className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-center">
            O que você vai conquistar
          </h2>
          <p className="text-text-secondary text-base md:text-lg lg:text-xl text-center mb-10 md:mb-16">
            Benefícios reais para sua vida financeira
          </p>
          <div className="grid sm:grid-cols-2 gap-4 md:gap-6">
            <BenefitCard>
              Tenha clareza de onde seu dinheiro está indo.
            </BenefitCard>
            <BenefitCard>Acabe com os sustos no fim do mês.</BenefitCard>
            <BenefitCard>
              Organize tudo sem planilhas ou anotações.
            </BenefitCard>
            <BenefitCard>
              Economize sem abrir mão do que você gosta.
            </BenefitCard>
            <BenefitCard className="sm:col-span-2">
              Sinta segurança, leveza e controle financeiro.
            </BenefitCard>
          </div>
        </div>
      </section>

      {/* Seção 6 - Diferenciais */}
      <section className="bg-surface py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-center">
              Por que o Pocket é diferente?
            </h2>
            <p className="text-text-secondary text-base md:text-lg lg:text-xl text-center mb-10 md:mb-16">
              Feito para quem quer simplicidade de verdade
            </p>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <DifferentialCard icon="📸" title="Basta uma foto">
                Sem digitar, sem planilhar, sem burocracia.
              </DifferentialCard>
              <DifferentialCard icon="🤖" title="Walt&apos;s">
                Seu agente financeiro pessoal 24h por dia.
              </DifferentialCard>
              <DifferentialCard icon="🎯" title="Foco em simplicidade">
                Interface limpa e fácil de entender.
              </DifferentialCard>
              <DifferentialCard icon="💬" title="Linguagem humana">
                Nada técnico, tudo simples e direto.
              </DifferentialCard>
              <DifferentialCard icon="🔒" title="Acesso seguro">
                Seus dados protegidos com criptografia.
              </DifferentialCard>
              <DifferentialCard icon="✨" title="Interface intuitiva">
                Bonito de ver, fácil de usar.
              </DifferentialCard>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 7 - Call to Action Inicial */}
      <section className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
            Comece hoje mesmo
          </h2>
          <p className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12">
            Clique no botão abaixo e comece hoje mesmo a organizar sua vida
            financeira com leveza. Ative seu acesso por 1 ano ao app Pocket por
            apenas{" "}
            <strong className="text-foreground text-xl md:text-2xl">
              R$97
            </strong>
            .
          </p>
          <a
            href="#comprar"
            onClick={handleCtaClick}
            className="inline-block px-8 py-4 md:px-12 md:py-5 bg-[#fee077] text-black rounded-xl hover:opacity-90 transition-opacity font-semibold text-lg md:text-xl"
          >
            Quero controlar meu dinheiro agora!
          </a>
        </div>
      </section>

      {/* Seção 8 - Prova Social */}
      <section className="bg-surface py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-5xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-center">
              O que dizem nossos usuários
            </h2>
            <p className="text-text-secondary text-base md:text-lg lg:text-xl text-center mb-10 md:mb-16">
              Histórias reais de transformação financeira
            </p>
            <div className="grid md:grid-cols-2 gap-6 md:gap-8">
              <TestimonialCard
                quote="Eu sempre fui péssima com dinheiro. Depois de 3 dias usando o Pocket, já vi que estava gastando o dobro com delivery! Só isso me economizou mais de R$150 no mês."
                author="Camila M."
                location="São Paulo"
              />
              <TestimonialCard
                quote="Eu desisti de todos os apps de finanças, mas esse é diferente. Em 5 minutos eu vejo tudo o que preciso. O Walt&apos;s me deu uma dica que me salvou de entrar no cheque especial!"
                author="Rodrigo T."
                location="Recife"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Seção 9 - Demonstração */}
      <section className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-center">
            Veja o Pocket em ação
          </h2>
          <p className="text-text-secondary text-base md:text-lg lg:text-xl text-center mb-10 md:mb-16">
            Interface limpa e intuitiva para você focar no que importa
          </p>
          <div className="flex justify-center">
            {mounted ? (
              <Image
                src={getPhoneImage()}
                alt="Demonstração do App Pocket"
                width={350}
                height={700}
                className="w-full max-w-xs md:max-w-sm h-auto"
              />
            ) : (
              <div
                className="w-full max-w-xs md:max-w-sm h-auto"
                style={{ aspectRatio: "1/2" }}
              />
            )}
          </div>
        </div>
      </section>

      {/* Seção 10 - Autoridade */}
      <section className="bg-surface py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
              Criado por quem entende sua dor
            </h2>
            <p className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed">
              O Pocket foi criado por um desenvolvedor que{" "}
              <strong className="text-foreground">sofreu na pele</strong> com a
              falta de controle financeiro. Cansado de planilhas e sistemas
              engessados, decidiu criar algo leve, simples e funcional — para
              ele mesmo, e agora para você.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 11 - Nova CTA */}
      <section className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
            Invista em você
          </h2>
          <p className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12">
            Invista apenas{" "}
            <strong className="text-foreground text-xl md:text-2xl">
              R$97
            </strong>{" "}
            e ganhe clareza sobre seu dinheiro já na primeira semana. Acesse
            agora o Pocket por 1 ano e transforme sua relação com o dinheiro.
          </p>
          <a
            href="#comprar"
            onClick={handleCtaClick}
            className="inline-block px-8 py-4 md:px-12 md:py-5 bg-[#fee077] text-black rounded-xl hover:opacity-90 transition-opacity font-semibold text-lg md:text-xl"
          >
            Quero controlar meu dinheiro agora!
          </a>
        </div>
      </section>

      {/* Seção 12 - FAQ */}
      <section className="bg-surface py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-4 text-center">
              Perguntas frequentes
            </h2>
            <p className="text-text-secondary text-base md:text-lg lg:text-xl text-center mb-10 md:mb-16">
              Tire suas dúvidas sobre o Pocket
            </p>
            <div className="space-y-4 md:space-y-6">
              <FAQItem question="Preciso saber de finanças para usar o Pocket?">
                De jeito nenhum. Ele foi feito exatamente para quem quer
                simplicidade e rapidez.
              </FAQItem>
              <FAQItem question="Preciso anotar tudo que gasto?">
                Não! Só tirar uma foto da conta ou nota fiscal — o app faz o
                resto.
              </FAQItem>
              <FAQItem question="Por quanto tempo terei acesso?">
                Você terá acesso completo ao Pocket por{" "}
                <strong>1 ano</strong>.
              </FAQItem>
              <FAQItem question="Funciona em Android e iPhone?">
                Atualmente, o Pocket está disponível{" "}
                <strong>apenas para iOS (iPhone)</strong>.
              </FAQItem>
              <FAQItem question="Em quanto tempo verei resultados?">
                Muita gente já vê diferença em 3 dias. Com uso diário, você
                sentirá controle e alívio já na primeira semana.
              </FAQItem>
            </div>
          </div>
        </div>
      </section>

      {/* Seção 13 - Garantia */}
      <section className="container mx-auto px-6 py-12 md:py-20">
        <div className="max-w-3xl mx-auto">
          <div className="bg-surface border-2 border-[#fee077] rounded-2xl p-6 md:p-10 text-center">
            <div className="text-5xl md:text-6xl mb-4">🛡️</div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-semibold mb-4">
              Garantia Incondicional de 7 Dias
            </h2>
            <p className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed">
              Testou e não achou útil? Basta enviar um e-mail e devolvemos{" "}
              <strong className="text-foreground">
                100% do seu investimento
              </strong>
              .
            </p>
          </div>
        </div>
      </section>

      {/* Seção 14 - Escassez / Urgência */}
      <section className="bg-[#fee077] py-8 md:py-12">
        <div className="container mx-auto px-6">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-black text-lg md:text-xl lg:text-2xl font-semibold">
              ⚠️ Oferta por tempo limitado: Ative seu acesso ao Pocket por{" "}
              <strong>R$97</strong> antes que o valor mude.
            </p>
          </div>
        </div>
      </section>

      {/* Seção 15 - Call-to-Action Final */}
      <section
        id="comprar"
        className="container mx-auto px-6 py-12 md:py-20 lg:py-32"
      >
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-6 md:mb-8">
            Comece hoje com apenas{" "}
            <span className="text-[#fee077]">R$97</span>
          </h2>
          <p className="text-text-secondary text-base md:text-lg lg:text-xl leading-relaxed mb-8 md:mb-12">
            Ative seu acesso de 1 ano ao Pocket, tenha clareza dos seus gastos e
            sinta o alívio de saber exatamente para onde seu dinheiro vai.
          </p>
          <a
            href="https://pay.kiwify.com.br/GujLHll"
            target="_blank"
            rel="noopener noreferrer"
            onClick={handleCheckoutClick}
            className="inline-block px-10 py-5 md:px-14 md:py-6 bg-[#fee077] text-black rounded-xl hover:opacity-90 transition-opacity font-bold text-xl md:text-2xl mb-6"
          >
            Quero controlar meu dinheiro agora!
          </a>
          <p className="text-text-secondary text-sm md:text-base">
            Pagamento 100% seguro • Acesso imediato
          </p>
        </div>
      </section>

      {/* Seção 16 - Compatibilidade e Suporte */}
      <section className="bg-surface py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-10 md:mb-16 text-center">
              Informações importantes
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
              <InfoCard icon="📱" title="Disponibilidade">
                Apenas para iOS (iPhone)
              </InfoCard>
              <InfoCard icon="⚡" title="Acesso">
                Imediato após a compra
              </InfoCard>
              <InfoCard icon="🪶" title="App leve">
                Fácil de usar no dia a dia
              </InfoCard>
              <InfoCard icon="📅" title="Validade">
                Acesso garantido por 1 ano
              </InfoCard>
              <InfoCard icon="💬" title="Suporte">
                Via e-mail ou chat com o Walt&apos;s
              </InfoCard>
              <InfoCard icon="🔒" title="Segurança">
                Dados criptografados
              </InfoCard>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProblemItem({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex items-start gap-4 p-4 md:p-6 bg-background rounded-xl border-2 border-border">
      <span className="text-2xl md:text-3xl flex-shrink-0">😰</span>
      <p className="text-base md:text-lg lg:text-xl text-foreground">
        {children}
      </p>
    </div>
  );
}

function StepItem({
  number,
  children,
}: {
  number: number;
  children: React.ReactNode;
}) {
  return (
    <div className="flex items-center gap-4 md:gap-6">
      <div className="flex-shrink-0 w-12 h-12 md:w-16 md:h-16 bg-[#fee077] text-black rounded-xl flex items-center justify-center font-bold text-xl md:text-2xl">
        {number}
      </div>
      <p className="text-base md:text-lg lg:text-xl text-foreground">
        {children}
      </p>
    </div>
  );
}

function BenefitCard({
  children,
  className = "",
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`p-4 md:p-6 bg-surface rounded-xl border-2 border-border flex items-center gap-4 ${className}`}
    >
      <span className="text-2xl md:text-3xl text-[#fee077] flex-shrink-0">
        ✓
      </span>
      <p className="text-base md:text-lg lg:text-xl text-foreground">
        {children}
      </p>
    </div>
  );
}

function DifferentialCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 md:p-6 bg-background rounded-xl border-2 border-border hover:border-[#fee077] transition-colors">
      <div className="text-3xl md:text-4xl mb-3">{icon}</div>
      <h3 className="text-lg md:text-xl font-semibold mb-2">{title}</h3>
      <p className="text-text-secondary text-sm md:text-base">{children}</p>
    </div>
  );
}

function TestimonialCard({
  quote,
  author,
  location,
}: {
  quote: string;
  author: string;
  location: string;
}) {
  return (
    <div className="p-6 md:p-8 bg-background rounded-xl border-2 border-border">
      <p className="text-base md:text-lg lg:text-xl text-foreground leading-relaxed mb-6 italic">
        &ldquo;{quote}&rdquo;
      </p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 md:w-12 md:h-12 bg-[#fee077] rounded-full flex items-center justify-center text-black font-bold text-lg">
          {author.charAt(0)}
        </div>
        <div>
          <p className="font-semibold text-foreground">{author}</p>
          <p className="text-text-secondary text-sm">{location}</p>
        </div>
      </div>
    </div>
  );
}

function FAQItem({
  question,
  children,
}: {
  question: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 md:p-6 bg-background rounded-xl border-2 border-border">
      <h3 className="text-lg md:text-xl font-semibold mb-2 flex items-start gap-2">
        <span className="text-[#fee077]">📌</span>
        {question}
      </h3>
      <p className="text-text-secondary text-base md:text-lg pl-7">
        {children}
      </p>
    </div>
  );
}

function InfoCard({
  icon,
  title,
  children,
}: {
  icon: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="p-4 md:p-6 bg-background rounded-xl border-2 border-border text-center">
      <div className="text-3xl md:text-4xl mb-2">{icon}</div>
      <h3 className="text-base md:text-lg font-semibold mb-1">{title}</h3>
      <p className="text-text-secondary text-sm md:text-base">{children}</p>
    </div>
  );
}
