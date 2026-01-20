"use client";

import Image from "next/image";
import {
  ScanIcon,
  TagIcon,
  ChartIcon,
  AIIcon,
  ThemeIcon,
  LockIcon,
  HouseIcon,
  BasketIcon,
  CarIcon,
  HealthIcon,
  EducationIcon,
  LeisureIcon,
  ClothingIcon,
  BeautyIcon,
  ElectronicsIcon,
  RestaurantIcon,
  SavingsIcon,
  InvestmentsIcon,
} from "@/components/icons";
import { ReactNode, useState, useEffect } from "react";
import { useTheme } from "next-themes";

export default function Home() {
  const { theme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Determina qual imagem do celular usar baseado no tema
  // Modo escuro: celular-light.png (tela clara no fundo escuro)
  // Modo claro: celular-dark.png (tela escura no fundo claro)
  // Modo noturno: celular-night.png
  const getPhoneImage = () => {
    if (theme === "night") {
      return "/celular-night.png";
    }
    if (resolvedTheme === "dark") {
      return "/celular-light.png";
    }
    return "/celular-dark.png";
  };

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-semibold tracking-tight mb-4 md:mb-6">
              Suas finanças,
              <br />
              <span className="text-text-secondary">simplificadas</span>
            </h1>
            <p className="text-text-secondary mb-8 md:mb-12 leading-relaxed text-base md:text-lg lg:text-xl">
              Gerencie seus gastos de forma inteligente com categorização automática,
              análise por IA e insights financeiros personalizados.
            </p>
            <div className="flex flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <a
                href="https://apps.apple.com/us/app/pocket/id6756937003"
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity font-medium text-sm sm:text-base md:text-lg text-center"
              >
                Baixar Agora
              </a>
              <a
                href="/recursos"
                className="px-4 py-2.5 sm:px-6 sm:py-3 md:px-8 md:py-4 border-2 border-border rounded-xl hover:bg-surface transition-colors font-medium text-sm sm:text-base md:text-lg text-center"
              >
                Ver Recursos
              </a>
            </div>
          </div>
          <div className="relative flex justify-center md:justify-center">
            {/* Phone Image */}
            {mounted ? (
              <Image
                src={getPhoneImage()}
                alt="App Pocket no celular"
                width={500}
                height={1000}
                className="relative z-10 w-full max-w-md md:max-w-lg h-auto"
                priority
              />
            ) : (
              <div className="relative z-10 w-full max-w-md md:max-w-lg h-auto" style={{ aspectRatio: '1/2' }} />
            )}
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-12 md:py-20">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">
            Tudo que voce precisa
          </h2>
          <p className="text-base md:text-xl text-text-secondary">
            Ferramentas poderosas para uma vida financeira saudavel
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <FeatureCard
            icon={<ScanIcon />}
            title="Scan de Recibos"
            description="Tire foto dos seus comprovantes e deixe a IA extrair todas as informacoes automaticamente."
          />
          <FeatureCard
            icon={<TagIcon />}
            title="Categorizacao Inteligente"
            description="17 categorias com subcategorias para organizar seus gastos de forma precisa e automatica."
          />
          <FeatureCard
            icon={<ChartIcon />}
            title="Analise Detalhada"
            description="Visualize seus gastos com graficos e tabelas para entender para onde seu dinheiro esta indo."
          />
          <FeatureCard
            icon={<AIIcon />}
            title="Assistente IA"
            description="Converse com Walts, seu assistente financeiro virtual, para dicas e insights personalizados."
          />
          <FeatureCard
            icon={<ThemeIcon />}
            title="Dark Mode"
            description="Interface elegante com suporte completo a tema claro e escuro para sua preferencia."
          />
          <FeatureCard
            icon={<LockIcon />}
            title="Seguro e Privado"
            description="Seus dados sao criptografados e protegidos. Privacidade e nossa prioridade."
          />
        </div>
      </section>

      {/* Categories Section */}
      <section className="bg-surface py-12 md:py-20">
        <div className="container mx-auto px-6">
          <div className="text-center mb-10 md:mb-16">
            <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">
              Categorias Inteligentes
            </h2>
            <p className="text-base md:text-xl text-text-secondary">
              Organize seus gastos em categorias que fazem sentido para voce
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 max-w-5xl mx-auto">
            <CategoryBadge icon={<HouseIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Moradia" color="#FF6B6B" />
            <CategoryBadge icon={<BasketIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Alimentacao" color="#4ECDC4" />
            <CategoryBadge icon={<CarIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Transporte" color="#FFD93D" />
            <CategoryBadge icon={<HealthIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Saude" color="#FCBAD3" />
            <CategoryBadge icon={<EducationIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Educacao" color="#95E1D3" />
            <CategoryBadge icon={<LeisureIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Lazer" color="#A8D8EA" />
            <CategoryBadge icon={<ClothingIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Vestuario" color="#FFB6B9" />
            <CategoryBadge icon={<BeautyIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Beleza" color="#E0BBE4" />
            <CategoryBadge icon={<ElectronicsIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Eletronicos" color="#C5E1A5" />
            <CategoryBadge icon={<RestaurantIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Delivery" color="#AA96DA" />
            <CategoryBadge icon={<SavingsIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Poupanca" color="#81C784" />
            <CategoryBadge icon={<InvestmentsIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Investimentos" color="#4DB6AC" />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-6xl font-semibold mb-4 md:mb-6">
            Comece sua jornada financeira hoje
          </h2>
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl text-text-secondary mb-8 md:mb-12">
            Junte-se a milhares de usuarios que ja transformaram sua relacao com o dinheiro.
          </p>
          <div id="download">
            {/* Download section moved to footer */}
          </div>
        </div>
      </section>
    </div>
  );
}

function FeatureCard({
  icon,
  title,
  description,
}: {
  icon: ReactNode;
  title: string;
  description: string;
}) {
  return (
    <div className="p-4 md:p-6 rounded-xl border-2 border-border hover:border-foreground/20 transition-colors">
      <div className="mb-4 md:mb-6 text-foreground">{icon}</div>
      <h3 className="text-lg md:text-xl lg:text-2xl font-semibold mb-2 md:mb-3">{title}</h3>
      <p className="text-text-secondary leading-relaxed text-sm md:text-base lg:text-lg">{description}</p>
    </div>
  );
}

function CategoryBadge({
  icon,
  name,
  color,
}: {
  icon: ReactNode;
  name: string;
  color: string;
}) {
  return (
    <div
      className="p-3 md:p-5 rounded-xl text-center transition-transform hover:scale-105"
      style={{ backgroundColor: color + "20" }}
    >
      <div className="mb-2 md:mb-3 flex justify-center" style={{ color }}>
        {icon}
      </div>
      <div className="text-xs md:text-sm lg:text-base font-medium" style={{ color }}>
        {name}
      </div>
    </div>
  );
}
