import type { Metadata } from "next";
import { DM_Sans, Cormorant_Garamond } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import LayoutWrapper from "@/components/LayoutWrapper";

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
      <head>
        {/* TikTok Pixel Code */}
        <Script id="tiktok-pixel" strategy="afterInteractive">
          {`
            !function (w, d, t) {
              w.TiktokAnalyticsObject=t;var ttq=w[t]=w[t]||[];ttq.methods=["page","track","identify","instances","debug","on","off","once","ready","alias","group","enableCookie","disableCookie","holdConsent","revokeConsent","grantConsent"],ttq.setAndDefer=function(t,e){t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}};for(var i=0;i<ttq.methods.length;i++)ttq.setAndDefer(ttq,ttq.methods[i]);ttq.instance=function(t){for(
              var e=ttq._i[t]||[],n=0;n<ttq.methods.length;n++)ttq.setAndDefer(e,ttq.methods[n]);return e},ttq.load=function(e,n){var r="https://analytics.tiktok.com/i18n/pixel/events.js",o=n&&n.partner;ttq._i=ttq._i||{},ttq._i[e]=[],ttq._i[e]._u=r,ttq._t=ttq._t||{},ttq._t[e]=+new Date,ttq._o=ttq._o||{},ttq._o[e]=n||{};n=document.createElement("script")
              ;n.type="text/javascript",n.async=!0,n.src=r+"?sdkid="+e+"&lib="+t;e=document.getElementsByTagName("script")[0];e.parentNode.insertBefore(n,e)};
              ttq.load('D60F3A3C77U7EB9GUBM0');
              ttq.page();
            }(window, document, 'ttq');
          `}
        </Script>
      </head>
      <body className={`${dmSans.variable} ${cormorantGaramond.variable} antialiased`}>
        <ThemeProvider>
          <LayoutWrapper>{children}</LayoutWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}
