"use client";

import { motion } from "framer-motion";
import { Cpu, Sparkles, Target } from "lucide-react";
import Image from "next/image";

import { AnimatedText, fadeUp, Reveal, staggerContainer } from "@/components/animations";
import { ButtonLink, SectionHeader, ServiceCard, ProcessStep, CTASection, SectionEyebrow } from "@/components/ui";
import { audience, differentials, processSteps, services } from "@/lib/site-data";
import { getWhatsappUrl } from "@/lib/site-config";
import { cn } from "@/lib/utils";

const iconMap = {
  target: Target,
  sparkles: Sparkles,
  cpu: Cpu,
};

export function HomeHero() {
  return (
    <section data-header-theme="dark" className="relative flex min-h-[89svh] items-center overflow-hidden bg-ink pt-28">
      <Image
        src="/brand/hero-office.jpg"
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-70"
      />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,8,12,0.26),rgba(6,8,12,0.78)_48%,rgba(6,8,12,0.96)),linear-gradient(0deg,#06080c_0%,rgba(6,8,12,0)_36%)]" />
      <div className="dark-grid absolute inset-0 opacity-[0.22] [mask-image:linear-gradient(90deg,transparent,black_42%,black)]" />

      <motion.div
        className="absolute right-[-10%] top-24 h-44 w-[58vw] rotate-[-12deg] bg-gradient-to-r from-transparent via-gold/[0.15] to-transparent blur-xl md:blur-2xl"
        animate={{ x: [0, -20, 0], opacity: [0.3, 0.6, 0.3] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-16 right-0 h-28 w-[46vw] rotate-[10deg] bg-gradient-to-r from-transparent via-cyanSoft/[0.1] to-transparent blur-xl md:blur-2xl"
        animate={{ x: [0, 16, 0], opacity: [0.2, 0.45, 0.2] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="container-shell relative z-10 flex w-full flex-col items-center justify-center text-center py-20 md:py-24">
        <div className="flex max-w-5xl flex-col items-center">
          <motion.div 
            className="mb-8"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            <motion.div
              animate={{ 
                filter: ["drop-shadow(0px 0px 0px rgba(239,211,139,0))", "drop-shadow(0px 0px 24px rgba(239,211,139,0.4))", "drop-shadow(0px 0px 0px rgba(239,211,139,0))"],
              }}
              transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            >
              <Image src="/brand/logo-principal.png" alt="Morales Soluções" width={300} height={60} className="h-12 w-auto md:h-16 object-contain" priority />
            </motion.div>
          </motion.div>

          <motion.div className="fade-entry mb-6">
            <SectionEyebrow dark={true}>Marketing, presença e tecnologia</SectionEyebrow>
          </motion.div>

          <AnimatedText as="h1" className="text-balance text-4xl font-black leading-[1.02] text-white md:text-5xl xl:text-[3.5rem] xl:leading-[1.1]">
            <span className="text-gold-gradient">Soluções digitais</span> para empresas que querem crescer com estratégia, tecnologia e presença online.
          </AnimatedText>

          <AnimatedText delay={0.18} className="mt-6 max-w-2xl text-base leading-7 text-white/[0.72] md:text-xl">
            Unimos tráfego pago, social media e tecnologia para transformar presença digital em captação, autoridade e resultado.
          </AnimatedText>

          <motion.div className="fade-entry mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row [--entry-delay:0.34s]">
            <ButtonLink href={getWhatsappUrl("Olá, gostaria de estruturar minha presença digital com a Morales.")}>Falar com a Morales</ButtonLink>
            <ButtonLink href="#servicos" variant="ghost">Conhecer soluções</ButtonLink>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

export function EcosystemIntro() {
  const ecosystemPoints = [
    {
      title: "Marketing que atrai",
      text: "Campanhas e mensagens orientadas para intenção, demanda e oportunidades reais.",
    },
    {
      title: "Conteúdo que sustenta",
      text: "Presença consistente para fortalecer lembrança, confiança e autoridade no digital.",
    },
    {
      title: "Tecnologia que organiza",
      text: "Páginas, automações, integrações e sistemas para profissionalizar a operação.",
    },
  ];

  return (
    <section className="section-shell bg-paper text-ink">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start">
        <Reveal>
          <SectionHeader
            eyebrow="Ecossistema digital"
            title="Uma operação completa para posicionar, atrair e converter melhor."
            text="A Morales conecta estratégia, comunicação, mídia paga, conteúdo, páginas, automações e tecnologia para que o crescimento digital tenha estrutura."
            dark={false}
          />
        </Reveal>

        <Reveal className="premium-card-light p-5 md:p-7">
          <div className="grid gap-5">
            {ecosystemPoints.map((point, index) => (
              <div key={point.title} className="grid gap-4 border-b border-ink/10 pb-5 last:border-0 last:pb-0 sm:grid-cols-[3.5rem_1fr]">
                <span className="font-mono text-sm font-black text-gold">{String(index + 1).padStart(2, "0")}</span>
                <div>
                  <h3 className="text-xl font-black text-ink">{point.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-ink/[0.62]">{point.text}</p>
                </div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}

export function ServicesSection() {
  return (
    <section data-header-theme="dark" id="solucoes" className="section-shell bg-[radial-gradient(circle_at_12%_0%,rgba(138,216,232,0.12),transparent_32%),linear-gradient(135deg,#0d1118,#06080c)]">
      <div className="container-shell">
        <Reveal>
          <SectionHeader
            eyebrow="O que fazemos"
            title="Três frentes conectadas para gerar presença, demanda e estrutura."
            text="Cada frente pode atuar sozinha, mas o maior valor aparece quando marketing, conteúdo e tecnologia trabalham com a mesma direção."
          />
        </Reveal>

        <motion.div
          className="mt-12 grid gap-4 lg:grid-cols-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.05 }}
        >
          {services.map((service) => {
            const IconComponent = iconMap[service.icon as keyof typeof iconMap];
            return (
              <ServiceCard 
                key={service.title} 
                title={service.title} 
                description={service.description} 
                icon={<IconComponent />} 
                items={service.items} 
                ctaText={service.cta} 
                href={service.href} 
              />
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}



export function ProcessTimeline() {
  return (
    <section data-header-theme="dark" className="section-shell relative bg-ink">
      <Image src="/brand/hero-social.png" alt="" fill sizes="100vw" className="object-cover opacity-[0.18]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#06080c,rgba(6,8,12,0.74)),linear-gradient(0deg,#06080c,rgba(6,8,12,0.18),#06080c)]" />
      <div className="container-shell relative grid gap-12 lg:grid-cols-[0.82fr_1fr] lg:items-start">
        <Reveal className="lg:sticky lg:top-28">
          <SectionHeader
            eyebrow="Como atuamos"
            title="Antes de executar, entendemos o negócio e desenhamos o caminho."
            text="A execução nasce de diagnóstico e acompanha os dados de perto para que campanhas, conteúdo e tecnologia trabalhem com o mesmo objetivo."
          />
        </Reveal>

        <div className="relative">
          <div className="absolute left-5 top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-goldSoft via-white/[0.18] to-transparent md:left-6" />
          <div className="grid gap-4">
            {processSteps.map((step, index) => (
              <Reveal key={step} delay={index * 0.05}>
                <ProcessStep 
                  index={index + 1} 
                  title={step} 
                  description={timelineCopy[index]} 
                />
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

const timelineCopy = [
  "Mapeamos o momento da empresa, canais atuais, gargalos e oportunidades de crescimento.",
  "Definimos prioridades, mensagens, canais e estrutura para a execução não depender de achismo.",
  "Criamos campanhas, conteúdos, páginas, automações e ativos digitais com acabamento profissional.",
  "Acompanhamos sinais de captação, alcance, conversão e operação para entender o que evolui.",
  "Ajustamos criativos, páginas, públicos, processos e tecnologia para melhorar o resultado ao longo do tempo.",
];

export function DifferentialsSection() {
  return (
    <section className="section-shell bg-paper text-ink">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.76fr_1fr] lg:items-start">
        <Reveal>
          <SectionHeader
            eyebrow="Diferenciais"
            title="Valor percebido não nasce de pacote pronto. Nasce de direção."
            text="A Morales atua com soluções sob medida, combinando estratégia, design, mídia e tecnologia em uma operação próxima do cliente."
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
          {differentials.map((item, index) => (
            <motion.div
              key={item}
              variants={fadeUp}
              className={cn(
                "premium-card-light premium-card-hover p-5",
                index === 4 && "sm:col-span-2",
              )}
            >
              <span className="accent-line mb-7" />
              <p className="text-lg font-black leading-snug text-ink">{item}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

export function AudienceSection() {
  return (
    <section data-header-theme="dark" className="section-shell bg-[radial-gradient(circle_at_82%_20%,rgba(201,154,60,0.16),transparent_30%),linear-gradient(180deg,#151b24,#06080c)]">
      <div className="container-shell grid gap-10 lg:grid-cols-[0.78fr_1fr] lg:items-start">
        <Reveal>
          <SectionHeader
            eyebrow="Para quem é"
            title="Para negócios que precisam ser encontrados, lembrados e escolhidos."
            text="A estrutura é pensada para empresas que dependem de presença digital, atendimento rápido e processos mais organizados para crescer."
          />
        </Reveal>

        <motion.div
          className="flex flex-col gap-4 md:gap-5"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-80px" }}
        >
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 md:gap-5">
            {audience.slice(0, 4).map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="premium-card-dark premium-card-hover flex min-h-[118px] items-center justify-center text-center p-5 text-base font-bold leading-snug text-white/[0.82]"
              >
                {item}
              </motion.div>
            ))}
          </div>

          <div className="grid grid-cols-1 gap-4 md:gap-5">
            {audience.slice(4).map((item) => (
              <motion.div
                key={item}
                variants={fadeUp}
                className="premium-card-dark premium-card-hover flex min-h-[118px] items-center justify-start text-left px-6 py-5 text-base font-bold leading-snug text-white/[0.82]"
              >
                {item}
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}

export function FinalCTA() {
  return (
    <CTASection 
      eyebrow="Próximo passo" 
      title="Pronto para transformar sua presença digital em resultado?" 
      text="Vamos entender o momento da sua empresa e indicar a melhor solução para gerar presença, autoridade e oportunidades reais." 
      ctaText="Chamar no WhatsApp" 
      ctaHref={getWhatsappUrl("Olá, estou pronto para dar o próximo passo e transformar os resultados da minha empresa.")} 
    />
  );
}
