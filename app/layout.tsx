import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const dmSans = DM_Sans({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-dm-sans",
  display: "swap",
});

const cormorantGaramond = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-cormorant",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Pocket - Finanças Pessoais Inteligentes",
  description: "Gerencie suas finanças de forma simples e inteligente com o Pocket. Rastreie gastos, categorize despesas automaticamente e tome decisões financeiras mais conscientes.",
  keywords: ["finanças pessoais", "controle financeiro", "gastos", "economia", "orçamento"],
  authors: [{ name: "Pocket" }],
  icons: {
    icon: "/kanguroo.png",
  },
  openGraph: {
    title: "Pocket - Finanças Pessoais Inteligentes",
    description: "Gerencie suas finanças de forma simples e inteligente",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" suppressHydrationWarning>
      <body className={`${dmSans.variable} ${cormorantGaramond.variable} antialiased`}>
        <ThemeProvider>
          <div className="flex flex-col min-h-screen">
            <Header />
            <main className="flex-grow">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
