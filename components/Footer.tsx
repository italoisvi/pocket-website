import Link from "next/link";
import { AppStoreBadge } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-20">
      <div className="container mx-auto px-6 py-8 md:py-12">
        {/* Pocket branding - sempre no topo */}
        <div className="text-left mb-8">
          <h3 className="font-cormorant text-3xl md:text-5xl font-semibold mb-3 md:mb-4">Pocket</h3>
          <p className="text-text-secondary text-base md:text-2xl leading-relaxed">
            Sua jornada para uma vida financeira mais saudável começa aqui.
          </p>
        </div>

        {/* Colunas: 3 no mobile, 4 no desktop */}
        <div className="grid grid-cols-3 md:grid-cols-3 gap-4 md:gap-8">
          <div className="text-left">
            <h4 className="text-sm md:text-3xl font-medium mb-2 md:mb-4">Produto</h4>
            <ul className="space-y-1 md:space-y-4">
              <li>
                <Link href="/recursos" className="text-text-secondary hover:text-foreground transition-colors text-xs md:text-2xl">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-text-secondary hover:text-foreground transition-colors text-xs md:text-2xl">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h4 className="text-sm md:text-3xl font-medium mb-2 md:mb-4">Legal</h4>
            <ul className="space-y-1 md:space-y-4">
              <li>
                <Link href="/privacidade" className="text-text-secondary hover:text-foreground transition-colors text-xs md:text-2xl">
                  Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-text-secondary hover:text-foreground transition-colors text-xs md:text-2xl">
                  Termos
                </Link>
              </li>
            </ul>
          </div>

          <div className="text-left">
            <h4 className="text-sm md:text-3xl font-medium mb-2 md:mb-4">Download</h4>
            <div className="flex justify-start">
              <a
                href="https://apps.apple.com/us/app/pocket/id6756937003"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block transition-opacity hover:opacity-80"
                aria-label="Baixar na App Store"
              >
                <AppStoreBadge className="h-8 md:h-14" />
              </a>
            </div>
          </div>
        </div>

        <div className="mt-8 md:mt-12 pt-6 md:pt-8 border-t border-border text-left md:text-center text-text-secondary text-xs md:text-2xl">
          <p>&copy; {new Date().getFullYear()} - Gladius Sistemas. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
