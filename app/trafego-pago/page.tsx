import type { Metadata } from "next";
import Image from "next/image";
import { Cpu, MonitorPlay, Target, Zap } from "lucide-react";

import { AnimatedText, Reveal } from "@/components/animations";
import { ButtonLink, SectionHeader, ServiceCard, ProcessStep, FeatureCard, CTASection, Section, Container, SectionEyebrow } from "@/components/ui";
import { assetPath, getWhatsappUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tráfego Pago Estratégico | Morales Soluções",
  description: "Campanhas em Google Ads, Meta Ads e YouTube Ads planejadas com estratégia, dados e otimização contínua para gerar oportunidades reais.",
};

export default function TrafegoPagoPage() {
  return (
    <>
      {/* Hero */}
      <Section className="flex min-h-[85svh] items-center overflow-hidden pt-28 pb-16 md:pb-24" data-header-theme="dark">
        <Image src={assetPath("/brand/hero-main.jpg")} alt="" fill sizes="100vw" priority className="object-cover opacity-[0.35]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,8,12,0.95),rgba(6,8,12,0.75)_50%,rgba(6,8,12,0.95)),linear-gradient(0deg,#06080c,rgba(6,8,12,0.15)_40%)]" />
        <div className="dark-grid absolute inset-0 opacity-[0.15]" />

        <Container>
          <Reveal className="mb-6 inline-block">
            <SectionEyebrow dark={true}>Mídia Paga & Performance</SectionEyebrow>
          </Reveal>

          <AnimatedText as="h1" className="max-w-5xl text-balance text-4xl font-black leading-[1.03] text-white md:text-6xl">
            <span className="text-gold-gradient">Tráfego pago</span> estratégico para atrair, impactar e converter o público certo.
          </AnimatedText>
          <AnimatedText delay={0.16} className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-xl">
            Campanhas em Google Ads, Meta Ads e YouTube Ads planejadas com estratégia, dados e otimização contínua para gerar oportunidades reais para o seu negócio.
          </AnimatedText>

          <Reveal delay={0.28} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={getWhatsappUrl("Olá! Quero falar com um especialista sobre tráfego pago.")}>
              Falar com especialista
            </ButtonLink>
            <ButtonLink href="#solucoes" variant="ghost">
              Conhecer soluções
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>

      {/* Mídia paga para cada momento */}
      <Section variant="paper" data-header-theme="light">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Jornada do Cliente"
              title="Mídia paga para cada momento da jornada."
              text="Cada canal tem uma função diferente. Não se trata apenas de apertar botões, mas de saber onde o seu cliente está e como impactá-lo no momento certo."
              dark={false}
            />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { title: "Google Ads", text: "Captura pessoas que já estão procurando ativamente por uma solução." },
              { title: "Meta Ads", text: "Gera demanda, fortalece a presença da marca e alcança públicos estratégicos no Facebook e Instagram." },
              { title: "YouTube Ads", text: "Amplia alcance, gera reconhecimento e fortalece campanhas com vídeos." },
              { title: "Tráfego Total", text: "Integra Google e Meta Ads para unir captura de demanda, geração de demanda, remarketing e análise unificada." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1} className="premium-card-light p-6">
                <h3 className="text-xl font-black text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Nossos Serviços */}
      <Section id="solucoes" variant="dark-radial" data-header-theme="dark">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Nossos Serviços"
              title="Soluções em tráfego pago."
              text="Apareça quando e onde importa. Estruturamos campanhas focadas no seu objetivo de negócio."
              dark={true}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ServiceCard 
              title="Google Ads"
              description="Apareça quando seu cliente está procurando por produtos ou serviços como os seus."
              icon={<Target />}
              items={["Campanhas de pesquisa", "Palavras-chave estratégicas", "Anúncios com foco em intenção de compra", "Otimização de conversão", "Acompanhamento de métricas"]}
              ctaText="Saiba mais sobre Google Ads"
              href={getWhatsappUrl("Olá! Quero saber mais sobre Google Ads com a Morales Soluções.")}
            />
            <ServiceCard 
              title="Meta Ads"
              description="Alcance o público certo no Facebook e Instagram com campanhas segmentadas e criativos estratégicos."
              icon={<Zap />}
              items={["Facebook Ads", "Instagram Ads", "Campanhas para WhatsApp", "Segmentação de público", "Remarketing", "Testes e otimizações"]}
              ctaText="Saiba mais sobre Meta Ads"
              href={getWhatsappUrl("Olá! Quero saber mais sobre Meta Ads com a Morales Soluções.")}
            />
            <ServiceCard 
              title="YouTube Ads"
              description="Use anúncios em vídeo para expandir alcance, fortalecer marca e gerar interesse em larga escala."
              icon={<MonitorPlay />}
              items={["Campanhas em vídeo", "Segmentação por interesse", "Alcance qualificado", "Construção de marca", "Estratégias para lançamentos"]}
              ctaText="Saiba mais sobre YouTube Ads"
              href={getWhatsappUrl("Olá! Quero saber mais sobre YouTube Ads com a Morales Soluções.")}
            />
            <ServiceCard 
              title="Tráfego Total"
              description="Google + Meta Ads trabalhando juntos para capturar demanda, gerar interesse e melhorar o retorno das campanhas."
              icon={<Cpu />}
              items={["Estratégia integrada", "Google Ads completo", "Meta Ads completo", "Remarketing avançado", "Relatórios unificados", "Otimizações quinzenais"]}
              ctaText="Quero uma estratégia completa"
              href={getWhatsappUrl("Olá! Quero saber mais sobre uma estratégia integrada de Google + Meta Ads com a Morales Soluções.")}
            />
          </div>
        </Container>
      </Section>

      {/* Como funciona */}
      <Section variant="ink" data-header-theme="dark">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-32">
            <SectionHeader
              eyebrow="Metodologia"
              title="Como funciona a gestão."
              text="Processo estruturado para garantir que as campanhas tragam oportunidades reais e não apenas cliques vazios."
              dark={true}
            />
          </Reveal>

          <div className="relative">
            <div className="absolute left-5 top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-goldSoft via-white/[0.18] to-transparent md:left-6" />
            <div className="grid gap-4">
              {[
                { title: "Diagnóstico", desc: "Entendemos o negócio, público, oferta e objetivo da campanha." },
                { title: "Planejamento", desc: "Definimos canais, estratégia, segmentações, verba e estrutura de campanhas." },
                { title: "Configuração", desc: "Criamos campanhas, anúncios, públicos, eventos, tags e estrutura de acompanhamento." },
                { title: "Otimização", desc: "Acompanhamos os dados e realizamos ajustes contínuos para melhorar desempenho." },
                { title: "Relatório e próximos passos", desc: "Apresentamos resultados, aprendizados e oportunidades de melhoria." }
              ].map((step, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <ProcessStep index={i + 1} title={step.title} description={step.desc} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Para quem é indicado */}
      <Section variant="light-radial" data-header-theme="light">
        <Container>
          <Reveal className="flex flex-col items-center">
            <SectionHeader
              align="center"
              eyebrow="Público Alvo"
              title="Para quem é indicado?"
              text="Nossa gestão de tráfego atende desde negócios locais até operações complexas."
              dark={false}
            />
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Negócios locais",
              "E-commerces",
              "Prestadores de serviço",
              "Marcas visuais",
              "Empresas que precisam captar leads",
              "Empresas que vendem pelo WhatsApp",
              "Empresas que querem reconhecimento de marca",
              "Lançamentos",
              "Empresas que querem unir Google e Meta Ads"
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05} className="premium-card-light flex items-center p-5 text-sm font-bold text-ink/80">
                <span className="mr-3 h-1.5 w-1.5 rounded-full bg-gold shrink-0 shadow-[0_0_8px_rgba(201,154,60,0.4)]"></span>
                {item}
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* O que diferencia */}
      <Section variant="ink" data-header-theme="dark">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Diferenciais"
              title="O que diferencia a gestão da Morales."
              text="Fugimos de pacotes genéricos para entregar estratégia focada no seu momento."
              dark={true}
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Estratégia antes da campanha", text: "Não subimos campanhas sem entender profundamente a oferta." },
              { title: "Escolha do canal certo", text: "A seleção exata da plataforma para cada objetivo de negócio." },
              { title: "Otimização com base em dados", text: "Decisões orientadas ao que efetivamente traz resultado." },
              { title: "Visão integrada", text: "Compreensão de como os canais se conectam na jornada." },
              { title: "Relatórios claros", text: "Transparência total nos resultados e nos próximos passos." },
              { title: "Oportunidades reais", text: "Foco absoluto em vendas e leads qualificados, não apenas cliques." }
            ].map((diff, i) => (
              <Reveal key={i} delay={i * 0.1} className="h-full">
                <FeatureCard title={diff.title} text={diff.text} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* CTA Final */}
      <CTASection 
        eyebrow="Próximo passo"
        title="Pronto para transformar tráfego em oportunidades reais?"
        text="Vamos entender o momento do seu negócio e indicar a melhor estratégia de mídia paga para atrair, impactar e converter o público certo."
        ctaText="Falar com especialista"
        ctaHref={getWhatsappUrl("Olá! Quero falar com um especialista sobre tráfego pago.")}
      />
    </>
  );
}
