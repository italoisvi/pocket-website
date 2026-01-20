"use client";

import Link from "next/link";
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
import { ReactNode, useState } from "react";

// Floating Icon Component with spread effect
function FloatingIcon({
  icon,
  delay,
  top,
  left,
  duration,
  spreadX,
  spreadY,
  isHovered,
  size = 'medium'
}: {
  icon: ReactNode;
  delay: number;
  top: string;
  left: string;
  duration: number;
  spreadX: number;
  spreadY: number;
  isHovered: boolean;
  size?: 'tiny' | 'small' | 'medium' | 'large' | 'xlarge';
}) {
  const sizeClasses = {
    tiny: 'w-8 h-8 md:w-10 md:h-10',
    small: 'w-10 h-10 md:w-14 md:h-14',
    medium: 'w-14 h-14 md:w-18 md:h-18',
    large: 'w-18 h-18 md:w-22 md:h-22',
    xlarge: 'w-22 h-22 md:w-28 md:h-28'
  };

  return (
    <div
      className="absolute pointer-events-none transition-all duration-500 ease-out z-20"
      style={{
        top,
        left,
        animationName: 'float',
        animationDuration: `${duration}s`,
        animationDelay: `${delay}s`,
        animationIterationCount: 'infinite',
        animationTimingFunction: 'ease-in-out',
        transform: isHovered ? `translate(${spreadX}px, ${spreadY}px)` : 'translate(0, 0)',
      }}
    >
      <div
        className={`${sizeClasses[size]} bg-surface/80 backdrop-blur-sm rounded-2xl flex items-center justify-center shadow-lg border border-border transition-all duration-300 p-2 ${
          isHovered ? "scale-110" : ""
        }`}
      >
        <div className="w-full h-full flex items-center justify-center">{icon}</div>
      </div>
    </div>
  );
}

export default function Home() {
  const [isIconAreaHovered, setIsIconAreaHovered] = useState(false);

  return (
    <div className="overflow-hidden">
      {/* Hero Section */}
      <section className="container mx-auto px-6 py-12 md:py-20 lg:py-32">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8 md:gap-12 items-center">
          <div className="text-center md:text-left">
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-7xl font-semibold tracking-tight mb-4 md:mb-6">
              Suas finanças,
              <br />
              <span className="text-text-secondary">simplificadas</span>
            </h1>
            <p className="text-text-secondary mb-8 md:mb-12 leading-relaxed text-sm md:text-base lg:text-lg">
              Gerencie seus gastos de forma inteligente com categorização automática,
              análise por IA e insights financeiros personalizados.
            </p>
            <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center md:justify-start">
              <Link
                href="#download"
                className="px-6 py-3 md:px-8 md:py-4 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity font-medium text-base md:text-lg"
              >
                Baixar Agora
              </Link>
              <Link
                href="/recursos"
                className="px-6 py-3 md:px-8 md:py-4 border-2 border-border rounded-xl hover:bg-surface transition-colors font-medium text-base md:text-lg"
              >
                Ver Recursos
              </Link>
            </div>
          </div>
          <div
            className="relative flex justify-center md:justify-center"
            onMouseEnter={() => setIsIconAreaHovered(true)}
            onMouseLeave={() => setIsIconAreaHovered(false)}
          >
            {/* Phone Image */}
            <Image
              src="/celular.png"
              alt="App Pocket no celular"
              width={400}
              height={800}
              className="relative z-10 max-w-sm w-full h-auto md:ml-16"
              priority
            />

            {/* Floating Icons - positioned around the phone (hidden on mobile) */}
            <div className="absolute inset-0 pointer-events-none hidden md:block">
              {/* Left side icons - varied sizes for depth */}
              <FloatingIcon icon={<HouseIcon />} delay={0} top="5%" left="-8%" duration={3.2} spreadX={-50} spreadY={-35} isHovered={isIconAreaHovered} size="xlarge" />
              <FloatingIcon icon={<BasketIcon />} delay={0.8} top="15%" left="-2%" duration={2.7} spreadX={-30} spreadY={-20} isHovered={isIconAreaHovered} size="tiny" />
              <FloatingIcon icon={<CarIcon />} delay={1} top="28%" left="-10%" duration={3.5} spreadX={-55} spreadY={-5} isHovered={isIconAreaHovered} size="large" />
              <FloatingIcon icon={<HealthIcon />} delay={1.7} top="40%" left="-3%" duration={3.0} spreadX={-35} spreadY={5} isHovered={isIconAreaHovered} size="small" />
              <FloatingIcon icon={<EducationIcon />} delay={2} top="52%" left="-7%" duration={2.9} spreadX={-48} spreadY={15} isHovered={isIconAreaHovered} size="medium" />
              <FloatingIcon icon={<RestaurantIcon />} delay={3} top="68%" left="-5%" duration={3.0} spreadX={-42} spreadY={28} isHovered={isIconAreaHovered} size="xlarge" />
              <FloatingIcon icon={<SavingsIcon />} delay={2.3} top="82%" left="-3%" duration={2.8} spreadX={-38} spreadY={40} isHovered={isIconAreaHovered} size="tiny" />
              <FloatingIcon icon={<InvestmentsIcon />} delay={3.5} top="92%" left="-6%" duration={3.1} spreadX={-45} spreadY={50} isHovered={isIconAreaHovered} size="small" />

              {/* Right side icons - varied sizes for depth */}
              <FloatingIcon icon={<ElectronicsIcon />} delay={0.5} top="8%" left="100%" duration={2.8} spreadX={55} spreadY={-25} isHovered={isIconAreaHovered} size="large" />
              <FloatingIcon icon={<ClothingIcon />} delay={1.2} top="18%" left="97%" duration={3.2} spreadX={50} spreadY={-15} isHovered={isIconAreaHovered} size="tiny" />
              <FloatingIcon icon={<LeisureIcon />} delay={1.5} top="32%" left="102%" duration={3.1} spreadX={65} spreadY={0} isHovered={isIconAreaHovered} size="xlarge" />
              <FloatingIcon icon={<BeautyIcon />} delay={2.2} top="45%" left="98%" duration={2.9} spreadX={52} spreadY={12} isHovered={isIconAreaHovered} size="small" />
              <FloatingIcon icon={<InvestmentsIcon />} delay={2.5} top="58%" left="100%" duration={3.3} spreadX={58} spreadY={22} isHovered={isIconAreaHovered} size="medium" />
              <FloatingIcon icon={<HouseIcon />} delay={3.5} top="72%" left="96%" duration={2.7} spreadX={48} spreadY={35} isHovered={isIconAreaHovered} size="tiny" />
              <FloatingIcon icon={<BasketIcon />} delay={1.8} top="85%" left="99%" duration={3.0} spreadX={54} spreadY={48} isHovered={isIconAreaHovered} size="large" />
              <FloatingIcon icon={<CarIcon />} delay={0.4} top="95%" left="97%" duration={2.8} spreadX={50} spreadY={55} isHovered={isIconAreaHovered} size="small" />

              {/* Top icons - varied sizes for depth */}
              <FloatingIcon icon={<HealthIcon />} delay={0.3} top="-8%" left="20%" duration={3.1} spreadX={-25} spreadY={-50} isHovered={isIconAreaHovered} size="tiny" />
              <FloatingIcon icon={<CarIcon />} delay={0.9} top="-6%" left="35%" duration={3.0} spreadX={-15} spreadY={-45} isHovered={isIconAreaHovered} size="medium" />
              <FloatingIcon icon={<BasketIcon />} delay={1.2} top="-10%" left="50%" duration={3.4} spreadX={0} spreadY={-55} isHovered={isIconAreaHovered} size="xlarge" />
              <FloatingIcon icon={<EducationIcon />} delay={2.0} top="-7%" left="65%" duration={2.9} spreadX={15} spreadY={-48} isHovered={isIconAreaHovered} size="small" />
              <FloatingIcon icon={<LeisureIcon />} delay={1.5} top="-5%" left="80%" duration={3.2} spreadX={28} spreadY={-42} isHovered={isIconAreaHovered} size="large" />

              {/* Bottom icons - varied sizes for depth */}
              <FloatingIcon icon={<RestaurantIcon />} delay={1.8} top="98%" left="15%" duration={3.0} spreadX={-30} spreadY={52} isHovered={isIconAreaHovered} size="small" />
              <FloatingIcon icon={<HealthIcon />} delay={2.8} top="100%" left="30%" duration={2.6} spreadX={-15} spreadY={58} isHovered={isIconAreaHovered} size="xlarge" />
              <FloatingIcon icon={<ElectronicsIcon />} delay={3.2} top="97%" left="50%" duration={3.3} spreadX={0} spreadY={55} isHovered={isIconAreaHovered} size="medium" />
              <FloatingIcon icon={<ClothingIcon />} delay={2.5} top="99%" left="70%" duration={2.9} spreadX={20} spreadY={56} isHovered={isIconAreaHovered} size="tiny" />
              <FloatingIcon icon={<SavingsIcon />} delay={1.3} top="96%" left="85%" duration={3.1} spreadX={35} spreadY={50} isHovered={isIconAreaHovered} size="large" />

              {/* Additional left area icons for filling space */}
              <FloatingIcon icon={<BeautyIcon />} delay={0.6} top="15%" left="-12%" duration={2.8} spreadX={-45} spreadY={-18} isHovered={isIconAreaHovered} size="tiny" />
              <FloatingIcon icon={<SavingsIcon />} delay={2.1} top="25%" left="-10%" duration={3.0} spreadX={-50} spreadY={-8} isHovered={isIconAreaHovered} size="small" />
              <FloatingIcon icon={<InvestmentsIcon />} delay={1.4} top="75%" left="-11%" duration={2.9} spreadX={-48} spreadY={38} isHovered={isIconAreaHovered} size="tiny" />
              <FloatingIcon icon={<ElectronicsIcon />} delay={3.1} top="80%" left="-9%" duration={3.2} spreadX={-52} spreadY={42} isHovered={isIconAreaHovered} size="small" />
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="container mx-auto px-6 py-12 md:py-20">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-semibold mb-3 md:mb-4">
            Tudo que você precisa
          </h2>
          <p className="text-base md:text-xl text-text-secondary">
            Ferramentas poderosas para uma vida financeira saudável
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8">
          <FeatureCard
            icon={<ScanIcon />}
            title="Scan de Recibos"
            description="Tire foto dos seus comprovantes e deixe a IA extrair todas as informações automaticamente."
          />
          <FeatureCard
            icon={<TagIcon />}
            title="Categorização Inteligente"
            description="17 categorias com subcategorias para organizar seus gastos de forma precisa e automática."
          />
          <FeatureCard
            icon={<ChartIcon />}
            title="Análise Detalhada"
            description="Visualize seus gastos com gráficos e tabelas para entender para onde seu dinheiro está indo."
          />
          <FeatureCard
            icon={<AIIcon />}
            title="Assistente IA"
            description="Converse com Walts, seu assistente financeiro virtual, para dicas e insights personalizados."
          />
          <FeatureCard
            icon={<ThemeIcon />}
            title="Dark Mode"
            description="Interface elegante com suporte completo a tema claro e escuro para sua preferência."
          />
          <FeatureCard
            icon={<LockIcon />}
            title="Seguro e Privado"
            description="Seus dados são criptografados e protegidos. Privacidade é nossa prioridade."
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
              Organize seus gastos em categorias que fazem sentido para você
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4 max-w-5xl mx-auto">
            <CategoryBadge icon={<HouseIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Moradia" color="#FF6B6B" />
            <CategoryBadge icon={<BasketIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Alimentação" color="#4ECDC4" />
            <CategoryBadge icon={<CarIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Transporte" color="#FFD93D" />
            <CategoryBadge icon={<HealthIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Saúde" color="#FCBAD3" />
            <CategoryBadge icon={<EducationIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Educação" color="#95E1D3" />
            <CategoryBadge icon={<LeisureIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Lazer" color="#A8D8EA" />
            <CategoryBadge icon={<ClothingIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Vestuário" color="#FFB6B9" />
            <CategoryBadge icon={<BeautyIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Beleza" color="#E0BBE4" />
            <CategoryBadge icon={<ElectronicsIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Eletrônicos" color="#C5E1A5" />
            <CategoryBadge icon={<RestaurantIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Delivery" color="#AA96DA" />
            <CategoryBadge icon={<SavingsIcon className="w-6 h-6 md:w-8 md:h-8 lg:w-10 lg:h-10" />} name="Poupança" color="#81C784" />
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
            Junte-se a milhares de usuários que já transformaram sua relação com o dinheiro.
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
