import type { Metadata } from "next";
import Image from "next/image";
import { Award, CalendarDays, Cpu, LayoutTemplate, Palette, Smartphone, Target, TrendingUp, Waypoints } from "lucide-react";

import { AnimatedText, Reveal } from "@/components/animations";
import { FAQSection } from "@/components/faq-section";
import { ButtonLink, SectionHeader, ServiceCard, ProcessStep, FeatureCard, CTASection, Section, Container, SectionEyebrow } from "@/components/ui";
import { faqContent } from "@/lib/faqs";
import { assetPath, getWhatsappUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Social Media Profissional | Morales Soluções",
  description: "Transformamos perfis amadores em canais de comunicação profissionais para fortalecer sua marca e apoiar o crescimento do seu negócio.",
};

export default function SocialMediaPage() {
  return (
    <>
      {/* Hero */}
      <Section className="flex min-h-[85svh] items-center overflow-hidden pt-28 pb-16 md:pb-24" data-header-theme="dark">
        <Image src={assetPath("/brand/hero-social.png")} alt="" fill sizes="100vw" priority className="object-cover opacity-[0.35]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,8,12,0.95),rgba(6,8,12,0.75)_50%,rgba(6,8,12,0.95)),linear-gradient(0deg,#06080c,rgba(6,8,12,0.15)_40%)]" />
        <div className="dark-grid absolute inset-0 opacity-[0.15]" />

        <Container>
          <Reveal className="mb-6 inline-block">
            <SectionEyebrow dark={true}>Social Media & Posicionamento</SectionEyebrow>
          </Reveal>

          <AnimatedText as="h1" className="max-w-5xl text-balance text-4xl font-black leading-[1.03] text-white md:text-6xl">
            <span className="text-gold-gradient">Social Media</span> com estratégia, consistência e posicionamento de marca.
          </AnimatedText>
          <AnimatedText delay={0.16} className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-xl">
            Transformamos perfis amadores em canais de comunicação profissionais, com conteúdo planejado para fortalecer sua marca, gerar confiança e apoiar o crescimento do seu negócio.
          </AnimatedText>

          <Reveal delay={0.28} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={getWhatsappUrl("Olá! Quero saber mais sobre Social Media com a Morales Soluções.")}>
              Falar com especialista
            </ButtonLink>
            <ButtonLink href="#entregas" variant="ghost">
              Conhecer entregas
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>

      {/* Muito além de postar */}
      <Section variant="paper" data-header-theme="light">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Estratégia Digital"
              title="Muito além de postar nas redes."
              text="Uma presença digital forte precisa de estratégia, consistência e clareza. Na Morales Soluções, cada conteúdo é pensado para comunicar valor, educar o público, fortalecer a marca e aproximar potenciais clientes do seu negócio."
              dark={false}
            />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { title: "Estratégia", text: "Conteúdos alinhados ao objetivo da empresa e ao perfil do público." },
              { title: "Consistência", text: "Presença ativa com calendário editorial organizado." },
              { title: "Posicionamento", text: "Comunicação visual e verbal que diferencia a marca." },
              { title: "Conversão", text: "Conteúdos pensados para gerar desejo, confiança e oportunidades." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1} className="premium-card-light p-6">
                <h3 className="text-xl font-black text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* O que fazemos */}
      <Section id="entregas" variant="dark-radial" data-header-theme="dark">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="O Que Fazemos"
              title="Entregas de Social Media."
              text="Não criamos apenas posts. Construímos canais de comunicação com estrutura e intencionalidade."
              dark={true}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ServiceCard 
              title="Planejamento de Conteúdo Estratégico"
              description="Definimos linhas editoriais, temas e formatos que comunicam os valores do negócio e dialogam com o público certo."
              icon={<LayoutTemplate />}
              items={["Linhas editoriais", "Ideias de conteúdo", "Datas estratégicas", "Direcionamento por objetivo"]}
              ctaText="Saiba mais sobre planejamento"
              href={getWhatsappUrl("Olá! Quero saber mais sobre planejamento de conteúdo com a Morales Soluções.")}
            />
            <ServiceCard 
              title="Gestão de Redes Sociais"
              description="Organização e administração profissional de perfis digitais, mantendo presença ativa e coerente."
              icon={<Smartphone />}
              items={["Instagram", "Facebook", "LinkedIn", "Organização de publicações", "Acompanhamento da presença digital"]}
              ctaText="Saiba mais sobre gestão"
              href={getWhatsappUrl("Olá! Quero saber mais sobre a gestão de redes sociais da Morales Soluções.")}
            />
            <ServiceCard 
              title="Identidade Visual e Linha Criativa"
              description="Criamos uma linguagem visual profissional para transmitir autoridade, reconhecimento e diferenciação."
              icon={<Palette />}
              items={["Direção visual", "Padrão gráfico", "Peças para feed e stories", "Consistência da marca"]}
              ctaText="Saiba mais sobre identidade visual"
              href={getWhatsappUrl("Olá! Quero saber mais sobre criação de identidade visual para redes sociais com a Morales Soluções.")}
            />
            <ServiceCard 
              title="Posicionamento de Marca"
              description="Construímos uma narrativa clara para gerar percepção de valor e diferenciar a empresa dos concorrentes."
              icon={<Award />}
              items={["Tom de voz", "Mensagem central", "Percepção de autoridade", "Clareza comercial"]}
              ctaText="Saiba mais sobre posicionamento"
              href={getWhatsappUrl("Olá! Quero saber mais sobre posicionamento de marca na Morales Soluções.")}
            />
            <ServiceCard 
              title="Conteúdo com Foco Comercial"
              description="Produzimos conteúdos que vão além de curtidas: eles educam, geram desejo e aproximam o público da compra."
              icon={<TrendingUp />}
              items={["Conteúdos educativos", "Conteúdos de autoridade", "Conteúdos de oferta", "Apoio à venda pelo WhatsApp"]}
              ctaText="Saiba mais sobre conteúdo"
              href={getWhatsappUrl("Olá! Quero saber mais sobre produção de conteúdo comercial com a Morales Soluções.")}
            />
            <ServiceCard 
              title="Organização de Calendário Editorial"
              description="Criamos um cronograma previsível de publicações para manter consistência e aproveitar oportunidades do mês."
              icon={<CalendarDays />}
              items={["Calendário mensal", "Datas comemorativas", "Campanhas sazonais", "Organização de frequência"]}
              ctaText="Saiba mais sobre o calendário"
              href={getWhatsappUrl("Olá! Quero saber mais sobre a organização de calendário editorial da Morales Soluções.")}
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
              text="Processo estruturado para organizar a casa, definir uma direção e manter sua marca sempre em movimento."
              dark={true}
            />
          </Reveal>

          <div className="relative">
            <div className="absolute left-5 top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-goldSoft via-white/[0.18] to-transparent md:left-6" />
            <div className="grid gap-4">
              {[
                { title: "Diagnóstico", desc: "Entendemos a empresa, público, serviços, diferenciais e objetivos." },
                { title: "Direção estratégica", desc: "Definimos posicionamento, linhas editoriais, tom de voz e prioridades de conteúdo." },
                { title: "Planejamento editorial", desc: "Organizamos temas, calendário, formatos e frequência das publicações." },
                { title: "Criação", desc: "Desenvolvemos artes, textos e conteúdos alinhados à identidade da marca." },
                { title: "Publicação e acompanhamento", desc: "Apoiamos a presença digital com consistência e avaliamos oportunidades de melhoria." }
              ].map((step, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <ProcessStep index={i + 1} title={step.title} description={step.desc} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Potencialize seus Resultados */}
      <Section variant="dark-radial" data-header-theme="dark">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Integração de Frentes"
              title="Potencialize seus resultados."
              text="O Social Media ganha ainda mais força quando está conectado às outras frentes da Morales Soluções. Conteúdo, tráfego pago e tecnologia trabalhando juntos."
              dark={true}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <ServiceCard 
              title="Tráfego Pago"
              description="Use os conteúdos criados no Social Media como base para campanhas no Google, Instagram e Facebook, ampliando a mensagem para o público certo."
              icon={<Target />}
              items={["Ampliação de alcance", "Base para remarketing", "Mais visualizações no conteúdo", "Otimização de verba"]}
              ctaText="Conhecer Tráfego Pago"
              href="/trafego-pago"
            />
            <ServiceCard 
              title="Tecnologia e Web"
              description="Direcione seguidores e interessados para landing pages, sites institucionais ou experiências digitais criadas especificamente para converter."
              icon={<Cpu />}
              items={["Landing Pages", "Link na bio avançado", "Sites otimizados", "Captação de leads"]}
              ctaText="Conhecer Tecnologia"
              href="/tecnologia"
            />
            <ServiceCard 
              title="Estratégia Integrada"
              description="Una posicionamento, conteúdo, anúncios e páginas de conversão para criar uma jornada digital muito mais clara e eficiente para o seu cliente final."
              icon={<Waypoints />}
              items={["Jornada completa", "Análise de múltiplos canais", "Consistência geral", "Resultados potencializados"]}
              ctaText="Falar com especialista"
              href={getWhatsappUrl("Olá! Quero saber mais sobre uma estratégia integrada conectando Redes Sociais, Tráfego e Tecnologia.")}
            />
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
              text="Ajudamos diversas empresas a elevarem o nível da sua comunicação digital."
              dark={false}
            />
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-3">
            {[
              "Empresas que querem profissionalizar o Instagram",
              "Negócios locais",
              "Prestadores de serviço",
              "Clínicas e consultórios",
              "Comércios",
              "Marcas que precisam melhorar autoridade",
              "Empresas que vendem pelo WhatsApp",
              "Negócios que querem alinhar conteúdo e campanhas"
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
              title="O diferencial Morales."
              text="Não criamos apenas posts. Construímos presença digital com intenção comercial e estratégica."
              dark={true}
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Conteúdo conectado ao negócio", text: "Cada formato serve a um propósito comercial ou de marca." },
              { title: "Visual consistente", text: "Design premium que reforça o valor percebido do seu negócio." },
              { title: "Foco em percepção de valor", text: "Mensagens claras que educam e encantam o cliente." },
              { title: "Apoio a campanhas", text: "Peças prontas para performarem bem no tráfego pago." },
              { title: "Integração web", text: "Direcionamento inteligente para sites e links úteis." },
              { title: "Planejamento focado", text: "Visão focada no crescimento da empresa, e não só nas métricas de vaidade." }
            ].map((diff, i) => (
              <Reveal key={i} delay={i * 0.1} className="h-full">
                <FeatureCard title={diff.title} text={diff.text} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      <FAQSection {...faqContent.socialMedia} />

      {/* CTA Final */}
      <CTASection 
        eyebrow="Próximo passo"
        title="Pronto para transformar suas redes em um canal de negócios?"
        text="Vamos entender o momento da sua marca e construir uma presença digital mais estratégica, profissional e alinhada aos objetivos da sua empresa."
        ctaText="Falar com especialista"
        ctaHref={getWhatsappUrl("Olá! Quero transformar minhas redes sociais em um canal mais profissional com a Morales Soluções.")}
      />
    </>
  );
}
