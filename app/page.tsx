import type { Metadata } from "next";

import {
  AudienceSection,
  DifferentialsSection,
  EcosystemIntro,
  FinalCTA,
  HomeHero,
  ProcessTimeline,
  ServicesSection,
} from "@/components/home-sections";

export const metadata: Metadata = {
  title: "Morales Soluções | Crescimento digital com marketing e tecnologia",
  description:
    "Soluções digitais para empresas que querem crescer com estratégia, tecnologia e presença online.",
};

export default function Home() {
  return (
    <>
      <HomeHero />
      <EcosystemIntro />
      <ServicesSection />
      <ProcessTimeline />
      <DifferentialsSection />
      <AudienceSection />
      <FinalCTA />
    </>
  );
}
