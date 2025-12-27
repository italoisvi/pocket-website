import Link from "next/link";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-5xl font-semibold mb-4">Pocket</h3>
            <p className="text-text-secondary text-2xl leading-relaxed">
              Sua jornada para uma vida financeira mais saudável começa aqui.
            </p>
          </div>

          <div>
            <h4 className="text-3xl font-medium mb-4">Produto</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/recursos" className="text-text-secondary hover:text-foreground transition-colors text-2xl">
                  Recursos
                </Link>
              </li>
              <li>
                <Link href="/sobre" className="text-text-secondary hover:text-foreground transition-colors text-2xl">
                  Sobre
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-3xl font-medium mb-4">Legal</h4>
            <ul className="space-y-4">
              <li>
                <Link href="/privacidade" className="text-text-secondary hover:text-foreground transition-colors text-2xl">
                  Política de Privacidade
                </Link>
              </li>
              <li>
                <Link href="/termos" className="text-text-secondary hover:text-foreground transition-colors text-2xl">
                  Termos de Uso
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-3xl font-medium mb-4">Download</h4>
            <div className="space-y-4">
              <a
                href="#"
                className="block text-text-secondary hover:text-foreground transition-colors text-2xl"
              >
                App Store (em breve)
              </a>
              <a
                href="#"
                className="block text-text-secondary hover:text-foreground transition-colors text-2xl"
              >
                Google Play (em breve)
              </a>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-border text-center text-text-secondary text-2xl">
          <p>&copy; {new Date().getFullYear()} Pocket. Todos os direitos reservados.</p>
        </div>
      </div>
    </footer>
  );
}
