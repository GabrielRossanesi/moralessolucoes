import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { FloatingWhatsApp } from "@/components/floating-whatsapp";
import { siteConfig } from "@/lib/site-config";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.url),
  title: {
    default: "Morales Soluções | Crescimento digital com marketing e tecnologia",
    template: "%s",
  },
  description:
    "A Morales Soluções une tráfego pago, social media e tecnologia para transformar presença digital em captação, autoridade e resultado.",
  openGraph: {
    title: "Morales Soluções | Crescimento digital com marketing e tecnologia",
    description:
      "Marketing, social media e tecnologia para empresas que querem crescer com estratégia, presença online e soluções digitais.",
    url: siteConfig.url,
    siteName: siteConfig.name,
    locale: "pt_BR",
    type: "website",
    images: [
      {
        url: "/brand/hero-main.jpg",
        width: 1200,
        height: 630,
        alt: siteConfig.name,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Morales Soluções | Crescimento digital com marketing e tecnologia",
    description: "A Morales Soluções une tráfego pago, social media e tecnologia para transformar presença digital em captação, autoridade e resultado.",
    images: ["/brand/hero-main.jpg"],
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className="bg-ink antialiased">
        <Header />
        <main>{children}</main>
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
