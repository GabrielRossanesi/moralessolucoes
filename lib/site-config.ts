export const siteConfig = {
  name: "Morales Soluções",
  url: "https://moralessolucoes.com.br",
  whatsapp: "+55 11 99112-9696",
  instagram: "@moralessolucoes",
  email: "contato@moralessolucoes.com.br",
  links: {
    whatsapp: "https://wa.me/5511991129696",
    instagram: "https://www.instagram.com/moralessolucoes/",
    linkedin: "https://www.linkedin.com/company/morales-soluções/posts/?feedView=all",
    facebook: "https://www.facebook.com/profile.php?id=61577551509295",
    youtube: "https://www.youtube.com/@MoralesSolucoes",
  },
  navItems: [
    { label: "Home", href: "/" },
    { label: "Tráfego Pago", href: "/trafego-pago" },
    { label: "Social Media", href: "/social-media" },
    { label: "Tecnologia", href: "/tecnologia" },
    { label: "Contato", href: "/contato" },
  ],
  footer: {
    title: "Marketing, tecnologia e estratégia para empresas que querem crescer.",
    subtitle: "A Morales Soluções une presença digital, performance e desenvolvimento sob medida para transformar ideias em resultados.",
    company: {
      title: "Morales Soluções",
      links: [
        { label: "Sobre", href: "/#sobre" },
        { label: "Home", href: "/" },
        { label: "Contato", href: "/contato" },
      ],
    },
    solutions: {
      title: "Soluções",
      links: [
        { label: "Tráfego Pago", href: "/trafego-pago" },
        { label: "Social Media", href: "/social-media" },
        { label: "Tecnologia", href: "/tecnologia" },
        { label: "Sites e Landing Pages", href: "/tecnologia#sites" },
        { label: "Automações", href: "/tecnologia#automacoes" },
      ],
    },
    channels: {
      title: "Canais",
      links: [
        { label: "Instagram", href: "https://www.instagram.com/moralessolucoes/" },
        { label: "LinkedIn", href: "https://www.linkedin.com/company/morales-soluções/posts/?feedView=all" },
        { label: "Facebook", href: "https://www.facebook.com/profile.php?id=61577551509295" },
        { label: "YouTube", href: "https://www.youtube.com/@MoralesSolucoes" },
      ],
    },
  },
};

export const publicBasePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export function assetPath(path: string) {
  if (!path || path.startsWith("http") || path.startsWith("data:")) {
    return path;
  }

  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  const normalizedBasePath = publicBasePath.startsWith("/") ? publicBasePath : `/${publicBasePath}`;

  if (!publicBasePath || normalizedPath.startsWith(`${normalizedBasePath}/`)) {
    return normalizedPath;
  }

  return `${normalizedBasePath}${normalizedPath}`;
}

export function getWhatsappUrl(message: string) {
  const encodedMessage = encodeURIComponent(message);
  return `${siteConfig.links.whatsapp}?text=${encodedMessage}`;
}
