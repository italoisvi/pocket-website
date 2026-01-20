"use client";

import Link from "next/link";
import Image from "next/image";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";

export default function Header() {
  const { theme, setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu when route changes
  useEffect(() => {
    setMobileMenuOpen(false);
  }, [pathname]);

  return (
    <header className="border-b border-border bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 sticky top-0 z-50">
      <nav className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Link href="/" className="flex items-center">
            {mounted ? (
              <Image
                src={resolvedTheme === "dark" ? "/kangurubranco.png" : "/kangurupreto.png"}
                alt="Pocket"
                width={50}
                height={50}
                className="h-12 w-auto"
              />
            ) : (
              <div className="h-12 w-12" />
            )}
          </Link>

          <div className="hidden md:flex items-center gap-8">
            <Link
              href="/"
              className={`transition-colors ${
                pathname === "/"
                  ? "text-foreground font-semibold border-b-2 border-foreground pb-1"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Início
            </Link>
            <Link
              href="/recursos"
              className={`transition-colors ${
                pathname === "/recursos"
                  ? "text-foreground font-semibold border-b-2 border-foreground pb-1"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Recursos
            </Link>
            <Link
              href="/sobre"
              className={`transition-colors ${
                pathname === "/sobre"
                  ? "text-foreground font-semibold border-b-2 border-foreground pb-1"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Sobre
            </Link>
            <Link
              href="/contato"
              className={`transition-colors ${
                pathname === "/contato"
                  ? "text-foreground font-semibold border-b-2 border-foreground pb-1"
                  : "text-foreground/80 hover:text-foreground"
              }`}
            >
              Contato
            </Link>
          </div>

          <div className="flex items-center gap-4">
            {mounted && (
              <button
                onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                className="p-2 rounded-lg hover:bg-surface transition-colors"
                aria-label="Alternar tema"
              >
                {resolvedTheme === "dark" ? (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m23.5,11.5h-4.525c-.062-.865-.28-1.686-.629-2.436l3.961-2.19c.241-.134.329-.438.195-.68-.134-.242-.439-.327-.68-.195l-3.959,2.19c-.534-.818-1.232-1.517-2.05-2.05l2.189-3.96c.134-.242.046-.546-.196-.68-.242-.132-.546-.047-.679.195l-2.19,3.961c-.751-.349-1.571-.568-2.437-.629V.5c0-.276-.224-.5-.5-.5s-.5.224-.5.5v4.525c-.865.062-1.686.28-2.437.629l-2.19-3.961c-.133-.241-.436-.329-.679-.195-.242.134-.33.438-.196.68l2.189,3.96c-.818.534-1.517,1.232-2.05,2.05l-3.959-2.19c-.244-.132-.546-.047-.68.195s-.046.546.195.68l3.961,2.19c-.349.751-.568,1.571-.629,2.436H.5c-.276,0-.5.224-.5.5s.224.5.5.5h4.525c.062.865.28,1.686.629,2.436l-3.961,2.19c-.241.134-.329.438-.195.68.091.165.262.258.438.258.082,0,.165-.021.242-.062l3.959-2.19c.534.818,1.232,1.517,2.05,2.05l-2.189,3.96c-.134.242-.046.546.196.68.077.042.159.062.241.062.176,0,.347-.093.438-.258l2.19-3.961c.751.349,1.571.568,2.437.629v4.525c0,.276.224.5.5.5s.5-.224.5-.5v-4.525c.865-.062,1.686-.28,2.437-.629l2.19,3.961c.091.165.262.258.438.258.082,0,.165-.021.241-.062.242-.134.33-.438.196-.68l-2.189-3.96c.818-.534,1.516-1.232,2.05-2.05l3.959,2.19c.077.042.16.062.242.062.176,0,.347-.093.438-.258.134-.242.046-.546-.195-.68l-3.961-2.19c.349-.751.568-1.571.629-2.436h4.525c.276,0,.5-.224.5-.5s-.224-.5-.5-.5Zm-11.5,6.5c-3.309,0-6-2.691-6-6s2.691-6,6-6,6,2.691,6,6-2.691,6-6,6Z"/>
                  </svg>
                ) : (
                  <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path d="m20.199,19.831c-2.74-1.966-5.199-4.045-5.199-7.831s2.459-5.865,5.199-7.831c.588-.422.881-1.105.783-1.829-.099-.732-.589-1.347-1.28-1.603-1.367-.507-3.396-.737-4.702-.737C8.271,0,3,5.271,3,12s5.271,12,12,12c1.306,0,3.335-.23,4.702-.737.691-.256,1.182-.87,1.28-1.603.098-.724-.195-1.407-.783-1.829Zm-.208,1.695c-.05.371-.288.67-.637.799-1.251.464-3.134.675-4.354.675-6.168,0-11-4.832-11-11S8.832,1,15,1c1.22,0,3.103.211,4.354.675.349.129.587.428.637.799.047.351-.093.681-.375.883-2.841,2.039-5.616,4.387-5.616,8.644s2.774,6.604,5.616,8.644c.282.202.422.532.375.883Z"/>
                  </svg>
                )}
              </button>
            )}

            <a
              href="https://apps.apple.com/us/app/pocket/id6756937003"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden md:inline-block px-6 py-2 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity font-medium"
            >
              Baixar App
            </a>

            {/* Mobile menu button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-2 rounded-lg hover:bg-surface transition-colors"
              aria-label="Menu"
            >
              {mobileMenuOpen ? (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu dropdown */}
        {mobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 border-t border-border pt-4 animate-in slide-in-from-top-5 duration-200">
            <div className="flex flex-col gap-4">
              <Link
                href="/"
                className={`text-base py-2 transition-colors ${
                  pathname === "/"
                    ? "text-foreground font-semibold"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                Início
              </Link>
              <Link
                href="/recursos"
                className={`text-base py-2 transition-colors ${
                  pathname === "/recursos"
                    ? "text-foreground font-semibold"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                Recursos
              </Link>
              <Link
                href="/sobre"
                className={`text-base py-2 transition-colors ${
                  pathname === "/sobre"
                    ? "text-foreground font-semibold"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                Sobre
              </Link>
              <Link
                href="/contato"
                className={`text-base py-2 transition-colors ${
                  pathname === "/contato"
                    ? "text-foreground font-semibold"
                    : "text-foreground/80 hover:text-foreground"
                }`}
              >
                Contato
              </Link>
              <a
                href="https://apps.apple.com/us/app/pocket/id6756937003"
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 px-6 py-3 bg-foreground text-background rounded-xl hover:opacity-90 transition-opacity font-medium text-center"
              >
                Baixar App
              </a>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
