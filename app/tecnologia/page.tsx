import type { Metadata } from "next";
import Image from "next/image";
import { Bot, Globe, LayoutDashboard, MousePointerClick, Network, Share2, ShoppingCart, Target, Zap } from "lucide-react";

import { AnimatedText, Reveal } from "@/components/animations";
import { FAQSection } from "@/components/faq-section";
import { ButtonLink, SectionHeader, ServiceCard, ProcessStep, FeatureCard, CTASection, Section, Container, SectionEyebrow } from "@/components/ui";
import { faqContent } from "@/lib/faqs";
import { assetPath, getWhatsappUrl } from "@/lib/site-config";

export const metadata: Metadata = {
  title: "Tecnologia & Desenvolvimento | Morales Soluções",
  description: "Desenvolvemos sites, landing pages, sistemas, automações e integrações sob medida para transformar ideias em soluções digitais eficientes.",
};

export default function TecnologiaPage() {
  return (
    <>
      {/* Hero */}
      <Section className="flex min-h-[85svh] items-center overflow-hidden pt-28 pb-16 md:pb-24" data-header-theme="dark">
        <Image src={assetPath("/brand/hero-office.jpg")} alt="" fill sizes="100vw" priority className="object-cover opacity-[0.35]" />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,8,12,0.95),rgba(6,8,12,0.75)_50%,rgba(6,8,12,0.95)),linear-gradient(0deg,#06080c,rgba(6,8,12,0.15)_40%)]" />
        <div className="dark-grid absolute inset-0 opacity-[0.15]" />

        <Container>
          <Reveal className="mb-6 inline-block">
            <SectionEyebrow dark={true}>Engenharia de Software & Web</SectionEyebrow>
          </Reveal>

          <AnimatedText as="h1" className="max-w-5xl text-balance text-4xl font-black leading-[1.03] text-white md:text-6xl">
            <span className="text-gold-gradient">Tecnologia</span> que estrutura, conecta e escala o seu negócio.
          </AnimatedText>
          <AnimatedText delay={0.16} className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-xl">
            Desenvolvemos sites, landing pages, sistemas, automações e integrações sob medida para transformar ideias em soluções digitais eficientes.
          </AnimatedText>

          <Reveal delay={0.28} className="mt-8 flex flex-col gap-4 sm:flex-row">
            <ButtonLink href={getWhatsappUrl("Olá! Quero saber mais sobre soluções de tecnologia com a Morales Soluções.")}>
              Falar com especialista
            </ButtonLink>
            <ButtonLink href="#solucoes" variant="ghost">
              Conhecer soluções
            </ButtonLink>
          </Reveal>
        </Container>
      </Section>

      {/* Mais do que presença digital */}
      <Section variant="paper" data-header-theme="light">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Estratégia Tecnológica"
              title="Mais do que presença digital."
              text="Uma solução digital eficiente precisa unir estratégia, experiência do usuário, performance e integração com a operação do negócio. A tecnologia deve gerar presença, organizar processos e automatizar tarefas."
              dark={false}
            />
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {[
              { title: "Presença", text: "Sites e páginas profissionais para apresentar sua empresa com autoridade." },
              { title: "Conversão", text: "Landing pages planejadas para transformar visitantes em leads e clientes." },
              { title: "Operação", text: "Sistemas, dashboards e ferramentas para organizar processos internos." },
              { title: "Integração", text: "APIs, automações e conexões entre plataformas para reduzir trabalho manual." }
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.1} className="premium-card-light p-6">
                <h3 className="text-xl font-black text-ink">{item.title}</h3>
                <p className="mt-3 text-sm leading-6 text-ink/70">{item.text}</p>
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Nosso ecossistema de soluções */}
      <Section id="solucoes" variant="dark-radial" data-header-theme="dark">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Nossas Soluções"
              title="Ecossistema de desenvolvimento."
              text="Não entregamos apenas sites, entregamos estrutura digital."
              dark={true}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-2">
            <ServiceCard 
              title="Criação de Sites Profissionais"
              description="Presença digital marcante com design exclusivo, boa experiência de navegação e foco em conversão."
              icon={<Globe />}
              items={["Sites institucionais", "Design responsivo", "Estrutura profissional", "SEO básico", "CTA para WhatsApp ou formulário"]}
              ctaText="Saiba mais sobre criação de sites"
              href={getWhatsappUrl("Olá! Quero saber mais sobre a criação de sites profissionais na Morales Soluções.")}
            />
            <ServiceCard 
              title="Landing Pages de Alta Conversão"
              description="Páginas estratégicas desenhadas para transformar visitantes em leads, contatos e clientes reais."
              icon={<MousePointerClick />}
              items={["Página focada em campanha", "Copy orientada à conversão", "CTA claro", "Integração com tráfego pago", "Otimização para mobile"]}
              ctaText="Saiba mais sobre Landing Pages"
              href={getWhatsappUrl("Olá! Quero saber mais sobre criação de Landing Pages com a Morales Soluções.")}
            />
            <ServiceCard 
              title="Lojas Virtuais / E-commerce"
              description="Plataformas de venda online estruturadas para apresentar produtos, receber pedidos e escalar o faturamento."
              icon={<ShoppingCart />}
              items={["Catálogo de produtos", "Carrinho ou fluxo de pedido", "Integração de pagamento", "Área administrativa", "Experiência de compra fluida"]}
              ctaText="Saiba mais sobre Lojas Virtuais"
              href={getWhatsappUrl("Olá! Quero saber mais sobre Lojas Virtuais e E-commerce com a Morales Soluções.")}
            />
            <ServiceCard 
              title="Desenvolvimento de APIs"
              description="Conectividade inteligente e segura entre sistemas, centralizando dados e otimizando processos."
              icon={<Network />}
              items={["Integração entre plataformas", "Comunicação entre sistemas", "Organização de dados", "Segurança de dados", "Escalabilidade"]}
              ctaText="Saiba mais sobre APIs"
              href={getWhatsappUrl("Olá! Quero saber mais sobre desenvolvimento de APIs na Morales Soluções.")}
            />
            <ServiceCard 
              title="Sistemas Web / CRM / ERP"
              description="Soluções personalizadas para gestão do negócio, adaptadas aos processos reais da empresa."
              icon={<LayoutDashboard />}
              items={["Controle de clientes", "Controle operacional", "Dashboards personalizados", "Gestão de tarefas", "Permissões de usuários"]}
              ctaText="Saiba mais sobre Sistemas Web"
              href={getWhatsappUrl("Olá! Quero saber mais sobre o desenvolvimento de Sistemas Web na Morales Soluções.")}
            />
            <ServiceCard 
              title="Automações e Integrações"
              description="Automatize tarefas repetitivas, reduza falhas humanas e conecte ferramentas importantes para a operação."
              icon={<Bot />}
              items={["Integração WhatsApp", "Conexão com Planilhas", "CRMs e APIs", "Integração de Formulários", "Fluxos automatizados"]}
              ctaText="Saiba mais sobre Automações"
              href={getWhatsappUrl("Olá! Quero saber mais sobre automações e integrações com a Morales Soluções.")}
            />
          </div>
        </Container>
      </Section>

      {/* Tecnologia feita sob medida */}
      <Section variant="ink" data-header-theme="dark">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Visão e Propósito"
              title="Tecnologia sob medida."
              text="Cada projeto é pensado a partir da realidade da empresa. Entendemos o problema, o objetivo, o fluxo de trabalho e o resultado esperado antes de digitar qualquer linha de código."
              dark={true}
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Estrutura Digital", text: "Não entregamos apenas sites, entregamos a fundação tecnológica da sua empresa." },
              { title: "Crescimento Real", text: "Sistemas desenhados para suportar e impulsionar o seu negócio no longo prazo." },
              { title: "Sob Medida", text: "A tecnologia precisa se adaptar aos seus processos, não o contrário." },
              { title: "Integração Total", text: "Perfeita sinergia entre o seu marketing, seu time de vendas e a sua operação." }
            ].map((diff, i) => (
              <Reveal key={i} delay={i * 0.1} className="h-full">
                <FeatureCard title={diff.title} text={diff.text} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Como funciona */}
      <Section variant="dark-radial" data-header-theme="dark">
        <Container className="grid gap-12 lg:grid-cols-[0.85fr_1fr] lg:items-start">
          <Reveal className="lg:sticky lg:top-32">
            <SectionHeader
              eyebrow="Metodologia"
              title="Como desenvolvemos."
              text="Processo de engenharia seguro, desde o levantamento inicial até a publicação oficial e evolução contínua."
              dark={true}
            />
          </Reveal>

          <div className="relative">
            <div className="absolute left-5 top-3 h-[calc(100%-1.5rem)] w-px bg-gradient-to-b from-goldSoft via-white/[0.18] to-transparent md:left-6" />
            <div className="grid gap-4">
              {[
                { title: "Diagnóstico", desc: "Entendemos o negócio, os processos, as dores e o objetivo da solução." },
                { title: "Planejamento", desc: "Definimos escopo, estrutura, funcionalidades, jornada do usuário e prioridades." },
                { title: "Design e experiência", desc: "Criamos uma interface profissional, intuitiva e alinhada à identidade da empresa." },
                { title: "Desenvolvimento", desc: "Construímos a solução com foco em performance, segurança, organização e escalabilidade." },
                { title: "Testes e ajustes", desc: "Validamos responsividade, fluxos, formulários, integrações e experiência de uso." },
                { title: "Entrega e evolução", desc: "Publicamos a solução e indicamos melhorias futuras conforme o crescimento do negócio." }
              ].map((step, i) => (
                <Reveal key={i} delay={i * 0.1}>
                  <ProcessStep index={i + 1} title={step.title} description={step.desc} />
                </Reveal>
              ))}
            </div>
          </div>
        </Container>
      </Section>

      {/* Por que escolher a Morales */}
      <Section variant="ink" data-header-theme="dark">
        <Container className="grid gap-12 lg:grid-cols-[0.8fr_1fr] lg:items-start">
          <Reveal>
            <SectionHeader
              eyebrow="Diferenciais"
              title="Por que Morales Tech?"
              text="A Morales une visão comercial, marketing e tecnologia para criar soluções que não apenas aparecem bem na tela, mas ajudam empresas a vender melhor e operar com clareza."
              dark={true}
            />
          </Reveal>

          <div className="grid gap-4 sm:grid-cols-2">
            {[
              { title: "Visão de negócio", text: "Visão de negócio e processos operacionais antes de qualquer código." },
              { title: "Foco em conversão", text: "Design premium estruturado para guiar o usuário e gerar vendas." },
              { title: "Engenharia sob medida", text: "Soluções criadas especificamente para resolver suas dores reais." },
              { title: "Marketing integrado", text: "Arquitetura conectada com suas estratégias de vendas e campanhas." },
              { title: "Base escalável", text: "Código e infraestrutura que acompanham o crescimento da empresa." },
              { title: "Apoio constante", text: "Comunicação transparente e suporte ativo durante e após o projeto." }
            ].map((diff, i) => (
              <Reveal key={i} delay={i * 0.1} className="h-full">
                <FeatureCard title={diff.title} text={diff.text} />
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Quando precisa? */}
      <Section variant="light-radial" data-header-theme="light">
        <Container>
          <Reveal className="flex flex-col items-center">
            <SectionHeader
              align="center"
              eyebrow="Sintomas"
              title="Quando você precisa de uma solução digital?"
              text="Identifique se o seu negócio já está no momento de escalar a estrutura tecnológica."
              dark={false}
            />
          </Reveal>

          <div className="mt-12 grid gap-3 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3">
            {[
              "O Instagram sozinho não transmite profissionalismo suficiente",
              "Os clientes precisam de uma página clara para conhecer a empresa",
              "As campanhas de tráfego precisam de uma landing page que converte",
              "Muitas tarefas manuais estão consumindo o tempo do seu time",
              "A empresa usa dezenas de ferramentas totalmente desconectadas",
              "Falta controle sobre clientes, pedidos, tarefas ou indicadores",
              "Planilhas já não dão conta de acompanhar o crescimento da operação"
            ].map((item, i) => (
              <Reveal key={i} delay={i * 0.05} className="premium-card-light flex items-center p-5 text-sm font-bold text-ink/80">
                <span className="mr-3 h-1.5 w-1.5 rounded-full bg-gold shrink-0 shadow-[0_0_8px_rgba(201,154,60,0.4)]"></span>
                {item}
              </Reveal>
            ))}
          </div>
        </Container>
      </Section>

      {/* Integração de frentes */}
      <Section variant="dark-radial" data-header-theme="dark">
        <Container>
          <Reveal>
            <SectionHeader
              eyebrow="Ecosistema Integrado"
              title="Integração de frentes."
              text="A Tecnologia entrega a base. Nós conectamos tudo isso ao seu Social Media e ao seu Tráfego Pago."
              dark={true}
            />
          </Reveal>

          <div className="mt-12 grid gap-6 lg:grid-cols-3">
            <ServiceCard 
              title="Tráfego Pago"
              description="Landing pages, sites e eventos de conversão ajudam campanhas de Google Ads e Meta Ads a performarem muito melhor."
              icon={<Target />}
              items={["Aumento na taxa de conversão", "Rastreamento avançado", "Menor custo por lead"]}
              ctaText="Conhecer Tráfego Pago"
              href="/trafego-pago"
            />
            <ServiceCard 
              title="Social Media"
              description="Uma presença forte nas redes ganha mais resultado quando direciona o público para páginas e experiências digitais bem construídas."
              icon={<Share2 />}
              items={["Links na bio profissionais", "Catálogos interativos", "Direcionamento qualificado"]}
              ctaText="Conhecer Social Media"
              href="/social-media"
            />
            <ServiceCard 
              title="Solução Integrada"
              description="Una presença, tráfego, páginas e automações para criar uma operação digital completa que roda como um relógio."
              icon={<Zap />}
              items={["Presença digital absoluta", "Conversão otimizada", "Redução de atrito de vendas"]}
              ctaText="Falar com especialista"
              href={getWhatsappUrl("Olá! Quero criar uma solução digital e de marketing com a Morales Soluções.")}
            />
          </div>
        </Container>
      </Section>

      <FAQSection {...faqContent.tecnologia} />

      {/* CTA Final */}
      <CTASection 
        eyebrow="Próximo passo"
        title="Pronto para transformar sua ideia em uma solução digital?"
        text="Vamos entender o momento da sua empresa e indicar a melhor estrutura tecnológica para melhorar sua presença, operação ou conversão."
        ctaText="Falar com especialista"
        ctaHref={getWhatsappUrl("Olá! Quero criar uma solução digital com a Morales Soluções.")}
      />
    </>
  );
}
