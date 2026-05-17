import { whatsappUrl } from "@/lib/utils";

export const site = {
  name: "Morales Soluções",
  url: "https://moralessolucoes.com.br",
  whatsapp: "+55 11 99112-9696",
  whatsappHref: whatsappUrl("Olá, quero falar com a Morales Soluções."),
  socials: [
    {
      label: "Instagram",
      href: "https://www.instagram.com/moralessolucoes/",
      value: "@moralessolucoes",
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/company/morales-soluções/posts/?feedView=all",
      value: "Morales Soluções",
    },
    {
      label: "Facebook",
      href: "https://www.facebook.com/profile.php?id=61577551509295",
      value: "Morales Soluções",
    },
    {
      label: "YouTube",
      href: "https://www.youtube.com/@MoralesSolucoes",
      value: "@MoralesSolucoes",
    },
  ],
};

export const navigation = [
  { label: "Home", href: "/" },
  { label: "Tráfego Pago", href: "/trafego-pago" },
  { label: "Social Media", href: "/social-media" },
  { label: "Tecnologia", href: "/tecnologia" },
  { label: "Contato", href: "/contato" },
];

export const services = [
  {
    title: "Tráfego Pago",
    href: "/trafego-pago",
    icon: "target",
    description:
      "Google Ads, Meta Ads, campanhas estratégicas, otimização, análise de conversão e geração de leads.",
    items: ["Google Ads", "Meta Ads", "Campanhas para WhatsApp", "Conversão e leads"],
    cta: "Ver tráfego pago",
  },
  {
    title: "Social Media",
    href: "/social-media",
    icon: "sparkles",
    description:
      "Gestão de redes sociais, criação de posts, calendário editorial, posicionamento de marca e conteúdo estratégico.",
    items: ["Gestão de Instagram", "Design de posts", "Calendário editorial", "Conteúdo estratégico"],
    cta: "Ver social media",
  },
  {
    title: "Tecnologia",
    href: "/tecnologia",
    icon: "cpu",
    description:
      "Landing pages, sites institucionais, sistemas, automações, integrações, dashboards e soluções personalizadas.",
    items: ["Sites e landing pages", "Sistemas internos", "Automações", "Dashboards e integrações"],
    cta: "Ver tecnologia",
  },
];

export const processSteps = [
  "Diagnóstico do negócio",
  "Estratégia personalizada",
  "Execução profissional",
  "Acompanhamento de métricas",
  "Otimização contínua",
];

export const differentials = [
  "Estratégia antes da execução",
  "Design premium e foco em conversão",
  "Tecnologia aplicada ao crescimento",
  "Comunicação próxima com o cliente",
  "Soluções sob medida, sem pacotes genéricos",
];

export const audience = [
  "Empresas locais",
  "Prestadores de serviço",
  "Clínicas",
  "Comércios",
  "Negócios que dependem de WhatsApp, Instagram ou landing page para converter",
  "Empresas que precisam organizar processos com tecnologia",
];

export const servicePages = {
  trafego: {
    eyebrow: "Tráfego Pago",
    title: "Campanhas estruturadas para atrair pessoas certas e gerar oportunidades reais.",
    message:
      "Campanhas estruturadas para atrair pessoas certas, reduzir desperdício de verba e gerar oportunidades reais de venda.",
    cta: "Falar sobre tráfego",
    image: "/brand/hero-main.jpg",
    whatsapp: whatsappUrl("Olá, quero estruturar campanhas de tráfego pago com a Morales."),
    features: [
      "Google Ads",
      "Meta Ads",
      "Campanhas para WhatsApp",
      "Estratégia de conversão",
      "Instalação de tags e eventos",
      "Landing pages de apoio",
      "Acompanhamento de métricas",
      "Otimização contínua",
      "Relatórios",
    ],
    pillars: [
      {
        title: "Intenção",
        text: "Estrutura para alcançar quem já procura a solução ou demonstra sinais claros de interesse.",
      },
      {
        title: "Rastreamento",
        text: "Tags, eventos e leituras de conversão para saber o que realmente move o resultado.",
      },
      {
        title: "Otimização",
        text: "Acompanhamento de métricas para reduzir desperdício e melhorar a qualidade das oportunidades.",
      },
    ],
  },
  social: {
    eyebrow: "Social Media",
    title: "Conteúdo profissional para uma marca presente, confiável e reconhecível.",
    message:
      "Conteúdo profissional para fortalecer sua marca, gerar confiança e manter sua empresa presente na mente do cliente.",
    cta: "Falar sobre social media",
    image: "/brand/hero-social.png",
    whatsapp: whatsappUrl("Olá, quero fortalecer minha marca com social media da Morales."),
    features: [
      "Gestão de Instagram",
      "Planejamento de conteúdo",
      "Design de posts",
      "Legendas estratégicas",
      "Calendário editorial",
      "Reels e vídeos curtos, quando aplicável",
      "Posicionamento visual da marca",
      "Apoio em campanhas promocionais",
    ],
    pillars: [
      {
        title: "Consistência",
        text: "Ritmo de conteúdo com calendário editorial e direção visual clara para fortalecer presença.",
      },
      {
        title: "Autoridade",
        text: "Posts, legendas e narrativas que comunicam confiança e deixam a marca mais memorável.",
      },
      {
        title: "Campanhas",
        text: "Apoio visual e estratégico para ações promocionais, lançamentos e datas comerciais.",
      },
    ],
  },
  tecnologia: {
    eyebrow: "Tecnologia",
    title: "Soluções digitais sob medida para automatizar, organizar e escalar.",
    message:
      "Tecnologia sob medida para automatizar processos, profissionalizar sua operação e criar experiências digitais mais eficientes.",
    cta: "Falar sobre tecnologia",
    image: "/brand/hero-main.jpg",
    whatsapp: whatsappUrl("Olá, quero criar uma solução digital com a Morales."),
    features: [
      "Landing pages",
      "Sites institucionais",
      "Catálogos digitais",
      "Sistemas internos",
      "Dashboards",
      "Automações",
      "Integrações com WhatsApp, planilhas, CRMs, APIs e outras ferramentas",
      "Soluções personalizadas",
    ],
    pillars: [
      {
        title: "Presença",
        text: "Páginas, sites e catálogos digitais com estética profissional e estrutura de conversão.",
      },
      {
        title: "Operação",
        text: "Sistemas internos e dashboards para organizar processos e dar mais controle à gestão.",
      },
      {
        title: "Automação",
        text: "Integrações entre WhatsApp, planilhas, CRMs, APIs e ferramentas do dia a dia.",
      },
    ],
  },
};
