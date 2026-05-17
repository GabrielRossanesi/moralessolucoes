"use client";

import { motion } from "framer-motion";
import { useState } from "react";

import { Reveal, staggerContainer } from "@/components/animations";
import { ContactChannelCard, PageHero, SectionHeader, Section, Container } from "@/components/ui";
import { siteConfig } from "@/lib/site-config";

export function ContactPage() {
  const channels = [
    { label: "WhatsApp", value: siteConfig.whatsapp, href: siteConfig.links.whatsapp, external: true },
    { label: "E-mail", value: siteConfig.email, href: `mailto:${siteConfig.email}`, external: true },
    { label: "Instagram", value: siteConfig.instagram, href: siteConfig.links.instagram, external: true },
    { label: "LinkedIn", value: "Morales Soluções", href: siteConfig.links.linkedin, external: true },
    { label: "YouTube", value: "@MoralesSolucoes", href: siteConfig.links.youtube, external: true },
  ];

  return (
    <>
      <PageHero 
        eyebrow="Fale com a Morales"
        title="Vamos entender o momento da sua empresa e desenhar o próximo passo."
        subtitle="Estruture sua presença digital, campanhas, conteúdo, páginas, automações ou soluções sob medida."
        image="/brand/hero-main.jpg"
      />

      <Section data-header-theme="light" variant="paper">
        <Container className="grid gap-16 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Canais de Atendimento"
              title="Escolha o melhor caminho para iniciar a conversa."
              text="O WhatsApp é o canal mais rápido. Preencha o formulário ao lado para já iniciar o atendimento com contexto, ou chame diretamente em um dos canais abaixo."
              dark={false}
            />

            <motion.div
              className="mt-10 grid gap-3"
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.05 }}
            >
              {channels.map((channel) => (
                <ContactChannelCard 
                  key={channel.href}
                  label={channel.label}
                  value={channel.value}
                  href={channel.href}
                  external={channel.external}
                />
              ))}
            </motion.div>
          </Reveal>

          <Reveal delay={0.1}>
            <ContactForm />
          </Reveal>
        </Container>
      </Section>
    </>
  );
}

function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    company: "",
    email: "",
    message: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    const text = `*Novo Contato via Site*%0A%0A*Nome:* ${formData.name}%0A*Empresa:* ${formData.company}%0A*E-mail:* ${formData.email}%0A*Mensagem:* ${formData.message}`;
    const whatsappUrl = `${siteConfig.links.whatsapp}?text=${text}`;
    
    window.open(whatsappUrl, "_blank");
  };

  return (
    <form onSubmit={handleSubmit} className="premium-card-light relative flex flex-col gap-5 p-6 sm:p-8">
      <div className="absolute -left-12 -top-12 h-32 w-32 rounded-full bg-gold/10 blur-3xl" />
      
      <div className="relative z-10 grid gap-5">
        <div className="grid gap-2">
          <label htmlFor="name" className="text-xs font-semibold uppercase tracking-wider text-ink/60">Seu nome</label>
          <input 
            id="name"
            type="text" 
            required
            placeholder="Como podemos te chamar?"
            className="rounded-lg border border-ink/10 bg-white/50 px-4 py-3 text-sm font-semibold text-ink placeholder:text-ink/30 focus:border-goldSoft focus:outline-none focus:ring-1 focus:ring-goldSoft"
            value={formData.name}
            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
          />
        </div>

        <div className="grid gap-5 sm:grid-cols-2">
          <div className="grid gap-2">
            <label htmlFor="company" className="text-xs font-semibold uppercase tracking-wider text-ink/60">Sua empresa</label>
            <input 
              id="company"
              type="text" 
              required
              placeholder="Nome do negócio"
              className="rounded-lg border border-ink/10 bg-white/50 px-4 py-3 text-sm font-semibold text-ink placeholder:text-ink/30 focus:border-goldSoft focus:outline-none focus:ring-1 focus:ring-goldSoft"
              value={formData.company}
              onChange={(e) => setFormData({ ...formData, company: e.target.value })}
            />
          </div>

          <div className="grid gap-2">
            <label htmlFor="email" className="text-xs font-semibold uppercase tracking-wider text-ink/60">E-mail corporativo</label>
            <input 
              id="email"
              type="email" 
              required
              placeholder="seu@email.com.br"
              className="rounded-lg border border-ink/10 bg-white/50 px-4 py-3 text-sm font-semibold text-ink placeholder:text-ink/30 focus:border-goldSoft focus:outline-none focus:ring-1 focus:ring-goldSoft"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
            />
          </div>
        </div>

        <div className="grid gap-2">
          <label htmlFor="message" className="text-xs font-semibold uppercase tracking-wider text-ink/60">Como podemos ajudar?</label>
          <textarea 
            id="message"
            required
            rows={4}
            placeholder="Conte um pouco sobre o momento atual da empresa..."
            className="resize-none rounded-lg border border-ink/10 bg-white/50 px-4 py-3 text-sm font-semibold text-ink placeholder:text-ink/30 focus:border-goldSoft focus:outline-none focus:ring-1 focus:ring-goldSoft"
            value={formData.message}
            onChange={(e) => setFormData({ ...formData, message: e.target.value })}
          />
        </div>

        <button 
          type="submit"
          className="mt-2 inline-flex h-12 w-full items-center justify-center rounded-lg bg-gradient-to-br from-goldSoft to-gold text-sm font-extrabold text-ink shadow-[0_12px_30px_rgba(201,154,60,0.22)] transition hover:-translate-y-0.5 hover:shadow-[0_18px_40px_rgba(201,154,60,0.32)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goldSoft focus-visible:ring-offset-2 focus-visible:ring-offset-white"
        >
          Iniciar atendimento via WhatsApp
        </button>
      </div>
    </form>
  );
}
