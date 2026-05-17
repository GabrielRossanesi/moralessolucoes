"use client";

import { motion } from "framer-motion";
import { Check } from "lucide-react";
import Image from "next/image";

import { AnimatedText, fadeUp, Reveal, staggerContainer } from "@/components/animations";
import { ButtonLink, SectionHeader, FeatureCard, CTASection, SectionEyebrow } from "@/components/ui";
import { servicePages } from "@/lib/site-data";
import { getWhatsappUrl } from "@/lib/site-config";

type ServicePageKey = keyof typeof servicePages;

export function ServicePage({ pageKey }: { pageKey: ServicePageKey }) {
  const page = servicePages[pageKey];

  return (
    <>
      <section data-header-theme="dark" className="relative flex min-h-[78svh] items-end overflow-hidden bg-ink pt-28">
        <Image src={page.image} alt="" fill sizes="100vw" priority className="object-cover opacity-[0.62]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,8,12,0.92),rgba(6,8,12,0.66)_52%,rgba(6,8,12,0.92)),linear-gradient(0deg,#06080c,rgba(6,8,12,0.08)_44%)]" />
        <div className="dark-grid absolute inset-0 opacity-[0.18]" />
        <motion.div
          className="absolute right-[-16%] top-32 h-36 w-[60vw] rotate-[-10deg] bg-gradient-to-r from-transparent via-gold/[0.18] to-transparent blur-2xl"
          animate={{ x: [0, -22, 0], opacity: [0.34, 0.62, 0.34] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
        />

        <div className="container-shell relative z-10 pb-16 md:pb-24">
          <motion.div className="fade-entry mb-6">
            <SectionEyebrow dark={true}>{page.eyebrow}</SectionEyebrow>
          </motion.div>

          <AnimatedText as="h1" className="max-w-5xl text-balance text-4xl font-black leading-[1.03] text-white md:text-6xl">
            {page.title}
          </AnimatedText>
          <AnimatedText delay={0.16} className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-xl">
            {page.message}
          </AnimatedText>

          <motion.div className="fade-entry mt-8 [--entry-delay:0.28s]">
            <ButtonLink href={page.whatsapp}>{page.cta}</ButtonLink>
          </motion.div>
        </div>
      </section>

      <section data-header-theme="light" className="section-shell bg-paper text-ink">
        <div className="container-shell grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Estrutura da frente"
              title="Cada entrega tem uma função clara no crescimento."
              text="A página aprofunda o que essa frente resolve, como ela se conecta à operação e quais ativos sustentam o resultado."
              dark={false}
            />
          </Reveal>

          <motion.div
            className="grid gap-3 sm:grid-cols-2"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {page.features.map((feature) => (
              <motion.div
                key={feature}
                variants={fadeUp}
                className="premium-card-light premium-card-hover flex min-h-[86px] items-center gap-4 p-5"
              >
                <span className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-ink text-goldSoft">
                  <Check className="h-4 w-4" />
                </span>
                <p className="font-extrabold leading-snug text-ink">{feature}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      <section data-header-theme="dark" className="section-shell bg-[radial-gradient(circle_at_14%_0%,rgba(138,216,232,0.12),transparent_30%),linear-gradient(135deg,#0d1118,#06080c)]">
        <div className="container-shell">
          <Reveal>
            <SectionHeader
              eyebrow="Como a solução ganha força"
              title="Uma operação específica, sem perder a visão do ecossistema."
              text="A Morales aprofunda cada frente com método, mas mantém a leitura do negócio inteiro para evitar ações soltas."
            />
          </Reveal>

          <motion.div
            className="mt-12 grid gap-4 lg:grid-cols-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.05 }}
          >
            {page.pillars.map((pillar) => (
              <FeatureCard 
                key={pillar.title} 
                title={pillar.title} 
                text={pillar.text} 
              />
            ))}
          </motion.div>
        </div>
      </section>

      <CTASection 
        eyebrow="Conversa inicial" 
        title="Vamos entender o que sua empresa precisa agora." 
        text="A partir do momento atual, indicamos a melhor combinação entre marketing, conteúdo, páginas, automações e tecnologia." 
        ctaText="Chamar no WhatsApp" 
        ctaHref={getWhatsappUrl("Olá, quero conversar sobre o momento da minha empresa.")} 
      />
    </>
  );
}
