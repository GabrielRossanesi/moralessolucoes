export type FAQItem = {
  question: string;
  answer: string;
};

export type FAQContent = {
  eyebrow: string;
  title: string;
  subtitle: string;
  items: FAQItem[];
};

export const faqContent = {
  home: {
    eyebrow: "Dúvidas frequentes",
    title: "Perguntas frequentes",
    subtitle: "Entenda como a Morales pode apoiar sua empresa com marketing, tecnologia e presença digital.",
    items: [
      {
        question: "A Morales Soluções atende quais tipos de empresas?",
        answer:
          "Atendemos empresas que desejam fortalecer sua presença digital, gerar mais oportunidades comerciais e estruturar melhor seus canais online, seja por meio de tráfego pago, social media, sites, landing pages, sistemas ou automações.",
      },
      {
        question: "A Morales trabalha apenas com marketing?",
        answer:
          "Não. A Morales une marketing, tecnologia e estratégia comercial. Além de campanhas e redes sociais, também desenvolvemos sites, landing pages, sistemas, integrações e soluções digitais sob medida.",
      },
      {
        question: "Posso contratar apenas um serviço?",
        answer:
          "Sim. É possível contratar serviços separadamente, como tráfego pago, social media ou desenvolvimento web. Também podemos montar uma estratégia integrada conforme o momento e a necessidade da sua empresa.",
      },
      {
        question: "Como funciona o primeiro contato?",
        answer:
          "No primeiro contato, entendemos o momento da empresa, seus objetivos, canais atuais e principais desafios. A partir disso, indicamos o caminho mais adequado para gerar presença, autoridade e resultado.",
      },
      {
        question: "A Morales atende empresas de qualquer segmento?",
        answer:
          "Sim. Trabalhamos com diferentes segmentos, adaptando a comunicação, a estratégia e as soluções digitais conforme o público, a jornada de compra e os objetivos de cada negócio.",
      },
    ],
  },
  trafegoPago: {
    eyebrow: "Dúvidas frequentes",
    title: "Perguntas frequentes",
    subtitle: "Respostas rápidas sobre campanhas, verba, gestão e acompanhamento de performance.",
    items: [
      {
        question: "O que está incluso na gestão de tráfego pago?",
        answer:
          "A gestão envolve diagnóstico, planejamento, configuração de campanhas, segmentação de público, instalação ou orientação sobre tags, acompanhamento dos dados, otimizações e direcionamento estratégico para melhorar os resultados.",
      },
      {
        question: "Vocês trabalham com Google Ads e Meta Ads?",
        answer:
          "Sim. Trabalhamos com Google Ads, Meta Ads e também estratégias integradas, combinando canais para alcançar pessoas em diferentes momentos da jornada de compra.",
      },
      {
        question: "A verba dos anúncios está inclusa no valor da gestão?",
        answer:
          "Não. A verba de mídia é paga diretamente pelo cliente para as plataformas, como Google ou Meta. O valor da gestão corresponde ao trabalho estratégico, técnico e operacional da Morales.",
      },
      {
        question: "Em quanto tempo aparecem os resultados?",
        answer:
          "Campanhas podem gerar movimentação nos primeiros dias, mas resultados consistentes dependem de testes, otimizações, verba, oferta, página de destino e maturação dos dados. O ideal é analisar a evolução de forma contínua.",
      },
      {
        question: "Preciso ter site ou landing page para anunciar?",
        answer:
          "Não obrigatoriamente, mas ter uma página bem estruturada melhora muito a conversão. Quando necessário, a Morales também pode desenvolver landing pages focadas em transformar visitantes em contatos.",
      },
      {
        question: "Vocês enviam relatórios?",
        answer:
          "Sim. Acompanhamos os principais indicadores das campanhas e apresentamos análises com aprendizados, ajustes realizados e próximos passos recomendados.",
      },
    ],
  },
  socialMedia: {
    eyebrow: "Dúvidas frequentes",
    title: "Perguntas frequentes",
    subtitle: "Entenda como estruturamos conteúdo, posicionamento e presença digital para marcas.",
    items: [
      {
        question: "O que está incluso no serviço de social media?",
        answer:
          "O serviço pode incluir planejamento de conteúdo, definição de linha editorial, criação de artes, textos para publicações, organização de calendário e acompanhamento da presença digital da marca.",
      },
      {
        question: "Vocês fazem apenas posts ou também estratégia?",
        answer:
          "Nosso foco não é apenas postar. Criamos uma direção estratégica para que o conteúdo fortaleça a marca, gere confiança e ajude a empresa a se comunicar melhor com o público.",
      },
      {
        question: "As postagens são feitas em quais redes sociais?",
        answer:
          "Normalmente trabalhamos com Instagram e Facebook, mas a estratégia pode ser adaptada conforme os canais mais importantes para o negócio e o comportamento do público.",
      },
      {
        question: "Eu preciso enviar fotos e informações da empresa?",
        answer:
          "Sim. Quanto mais materiais, informações e referências tivermos, mais personalizado e fiel à marca será o conteúdo. Também podemos orientar quais tipos de materiais são mais importantes.",
      },
      {
        question: "Social media gera vendas?",
        answer:
          "O social media fortalece presença, autoridade, confiança e relacionamento com o público. Ele pode apoiar diretamente as vendas, principalmente quando combinado com tráfego pago, atendimento rápido e uma boa oferta.",
      },
      {
        question: "Vocês criam identidade visual?",
        answer:
          "Podemos adaptar a comunicação visual da marca para as redes sociais e, quando necessário, propor melhorias de identidade para deixar a presença digital mais profissional e consistente.",
      },
    ],
  },
  tecnologia: {
    eyebrow: "Dúvidas frequentes",
    title: "Perguntas frequentes",
    subtitle: "Dúvidas comuns sobre sites, sistemas, automações e soluções digitais sob medida.",
    items: [
      {
        question: "Quais soluções de tecnologia a Morales desenvolve?",
        answer:
          "Desenvolvemos sites institucionais, landing pages, sistemas personalizados, automações, integrações, dashboards, ferramentas internas e soluções digitais sob medida para empresas.",
      },
      {
        question: "Vocês fazem apenas sites simples?",
        answer:
          "Não. Além de sites e landing pages, também criamos soluções mais completas, como sistemas internos, plataformas, painéis administrativos, integrações com APIs e automações de processos.",
      },
      {
        question: "O site pode ser integrado com WhatsApp, formulários ou redes sociais?",
        answer:
          "Sim. Podemos integrar o site com WhatsApp, formulários, links de contato, redes sociais, ferramentas de análise, pixels de anúncios e outras soluções conforme a necessidade do projeto.",
      },
      {
        question: "Vocês desenvolvem sistemas sob medida?",
        answer:
          "Sim. Criamos sistemas pensados para a realidade da empresa, considerando processos, fluxos de trabalho, usuários, permissões, dados e objetivos operacionais.",
      },
      {
        question: "Como funciona o desenvolvimento de um projeto?",
        answer:
          "O processo começa com diagnóstico e entendimento da necessidade. Depois, estruturamos a solução, definimos funcionalidades, criamos a interface, desenvolvemos, testamos e entregamos o projeto com orientação de uso.",
      },
      {
        question: "Depois da entrega, vocês oferecem suporte?",
        answer:
          "Sim. Podemos oferecer suporte, manutenção e melhorias contínuas para garantir que a solução continue funcionando bem e possa evoluir conforme o crescimento da empresa.",
      },
    ],
  },
} satisfies Record<string, FAQContent>;
