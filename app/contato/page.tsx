import type { Metadata } from "next";

import { ContactPage } from "@/components/contact-page";

export const metadata: Metadata = {
  title: "Contato | Morales Soluções",
  description:
    "Fale com a Morales Soluções para estruturar marketing, social media, tráfego pago, sites, automações e soluções digitais.",
};

export default function ContatoPage() {
  return <ContactPage />;
}
