import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { assetPath, getWhatsappUrl, siteConfig } from "@/lib/site-config";

const solutions = [
  { label: "Gestão de tráfego", href: "/trafego-pago" },
  { label: "Social media", href: "/social-media" },
  { label: "Sites e landing pages", href: "/tecnologia#sites" },
  { label: "Sistemas e automações", href: "/tecnologia#automacoes" },
  { label: "Integrações e APIs", href: "/tecnologia" },
];

const socialLinks = [
  { label: "Instagram", href: siteConfig.links.instagram },
  { label: "LinkedIn", href: siteConfig.links.linkedin },
  { label: "Facebook", href: siteConfig.links.facebook },
  { label: "YouTube", href: siteConfig.links.youtube },
];

export function Footer() {
  return (
    <footer className="relative overflow-hidden bg-[#f4efe5] text-[#18150f] shadow-[inset_0_18px_30px_rgba(24,21,15,0.025)]">
      <div className="absolute -right-24 top-14 h-56 w-56 rounded-full bg-gold/10 blur-3xl" />
      <div className="absolute -left-20 bottom-10 h-48 w-48 rounded-full bg-cyanSoft/10 blur-3xl" />

      <div className="container-shell relative pb-14 pt-16 md:pb-20 md:pt-20">
        <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-[1.35fr_0.72fr_1fr_1.15fr] lg:gap-14">
          <div className="max-w-sm">
            <Link href="/" className="inline-flex items-center gap-3" aria-label={siteConfig.name}>
              <span className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-[#d9cfbb] bg-white/60 shadow-[0_12px_34px_rgba(24,21,15,0.08)]">
                <Image src={assetPath("/brand/logo-profile.png")} alt="" fill sizes="48px" className="object-contain p-1.5" />
              </span>
              <span className="text-xl font-black tracking-[-0.01em] text-[#18150f]">{siteConfig.name}</span>
            </Link>
            <p className="mt-5 text-sm leading-6 text-[#746b5b]">
              Marketing, social media e tecnologia para transformar presença digital em oportunidades reais.
            </p>
          </div>

          <FooterColumn title="Navegação">
            {siteConfig.navItems.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Soluções">
            {solutions.map((item) => (
              <FooterLink key={item.href} href={item.href}>
                {item.label}
              </FooterLink>
            ))}
          </FooterColumn>

          <FooterColumn title="Contato">
            <a href={`mailto:${siteConfig.email}`} className="text-sm font-semibold text-[#746b5b] transition hover:text-gold focus-visible:outline-none focus-visible:text-gold">
              {siteConfig.email}
            </a>
            <a href={getWhatsappUrl("Olá, gostaria de falar com a Morales Soluções.")} className="text-sm font-semibold text-[#746b5b] transition hover:text-gold focus-visible:outline-none focus-visible:text-gold">
              {siteConfig.whatsapp}
            </a>
            <div className="mt-2 flex flex-wrap gap-2">
              {socialLinks.map((item) => (
                <a
                  key={item.href}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded-full border border-[#d9cfbb] bg-white/45 px-3 py-1.5 text-xs font-bold text-[#5d5548] transition duration-300 hover:-translate-y-0.5 hover:border-gold/40 hover:bg-white hover:text-gold hover:shadow-[0_10px_28px_rgba(24,21,15,0.08)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/30"
                >
                  {item.label}
                </a>
              ))}
            </div>
          </FooterColumn>
        </div>

        <div className="mt-12 border-t border-[#ded7c8] pt-7 text-center text-xs font-semibold leading-6 text-[#7b7262] md:mt-14">
          <p>© 2026 {siteConfig.name}. Todos os direitos reservados.</p>
          <p>
            Desenvolvido por{" "}
            <a
              href="https://moralessolucoes.com.br/tecnologia"
              className="font-black text-[#18150f] underline decoration-gold/35 underline-offset-4 transition hover:text-gold hover:decoration-gold focus-visible:outline-none focus-visible:text-gold"
            >
              Morales Soluções
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterColumn({ title, children }: { title: string; children: ReactNode }) {
  return (
    <div>
      <h3 className="mb-5 text-[11px] font-black uppercase tracking-[0.18em] text-[#9f792f]">{title}</h3>
      <div className="grid gap-3.5">{children}</div>
    </div>
  );
}

function FooterLink({ href, children }: { href: string; children: ReactNode }) {
  return (
    <Link href={href} className="w-fit text-sm font-semibold text-[#746b5b] transition hover:translate-x-0.5 hover:text-gold focus-visible:outline-none focus-visible:text-gold">
      {children}
    </Link>
  );
}
