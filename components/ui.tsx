"use client";

import { ArrowRight, MessageCircle } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { AnimatedText, Reveal } from "@/components/animations";
import { assetPath } from "@/lib/site-config";
import { cn } from "@/lib/utils";

type ButtonLinkProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost" | "light";
  className?: string;
};

export function ButtonLink({ href, children, variant = "primary", className }: ButtonLinkProps) {
  const isExternal = href.startsWith("http");
  const classes = cn(
    "group inline-flex min-h-12 items-center justify-center gap-2 rounded-full px-5 text-sm font-extrabold transition duration-300 focus:outline-none focus:ring-2 focus:ring-goldSoft/60 focus:ring-offset-2 focus:ring-offset-ink max-sm:w-full",
    variant === "primary" &&
      "bg-gradient-to-br from-goldSoft to-gold text-ink shadow-[0_4px_20px_rgba(201,154,60,0.15)] hover:-translate-y-0.5 hover:shadow-[0_8px_32px_rgba(201,154,60,0.25)]",
    variant === "ghost" &&
      "border border-white/[0.12] bg-white/[0.04] text-white backdrop-blur-xl hover:-translate-y-0.5 hover:border-white/[0.24] hover:bg-white/[0.08]",
    variant === "light" &&
      "border border-ink/10 bg-ink text-white shadow-[0_8px_24px_rgba(0,0,0,0.12)] hover:-translate-y-0.5 hover:shadow-[0_12px_32px_rgba(0,0,0,0.16)]",
    className,
  );

  const icon = variant === "primary" ? <MessageCircle className="h-4 w-4" /> : <ArrowRight className="h-4 w-4 transition group-hover:translate-x-0.5" />;

  if (isExternal) {
    return (
      <a href={href} className={classes}>
        {children}
        {icon}
      </a>
    );
  }

  return (
    <Link href={href} className={classes}>
      {children}
      {icon}
    </Link>
  );
}

type SectionHeaderProps = {
  eyebrow: string;
  title: string;
  text?: string;
  align?: "left" | "center";
  dark?: boolean;
};

type SectionEyebrowProps = {
  children: ReactNode;
  dark?: boolean;
  className?: string;
};

export function SectionEyebrow({ children, dark = true, className }: SectionEyebrowProps) {
  return (
    <motion.div 
      className={cn(
        "inline-flex items-center gap-2.5 rounded-full px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.15em] border backdrop-blur-md", 
        dark 
          ? "border-goldSoft/30 bg-goldSoft/10 text-goldSoft" 
          : "border-gold/40 bg-gold/15 text-gold", 
        className
      )}
      animate={dark ? { 
        boxShadow: ["0px 0px 8px rgba(239,211,139,0.1)", "0px 0px 24px rgba(239,211,139,0.25)", "0px 0px 8px rgba(239,211,139,0.1)"]
      } : {
        boxShadow: ["0px 0px 8px rgba(201,154,60,0.15)", "0px 0px 24px rgba(201,154,60,0.3)", "0px 0px 8px rgba(201,154,60,0.15)"]
      }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
    >
      <motion.span 
        className={cn("h-1.5 w-1.5 rounded-full shrink-0", dark ? "bg-goldSoft shadow-[0_0_8px_rgba(239,211,139,0.8)]" : "bg-gold shadow-[0_0_8px_rgba(201,154,60,0.8)]")}
        animate={{ opacity: [1, 0.4, 1] }}
        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
      />
      {children}
    </motion.div>
  );
}

export function SectionHeader({ eyebrow, title, text, align = "left", dark = true }: SectionHeaderProps) {
  return (
    <div className={cn("max-w-3xl", align === "center" && "mx-auto text-center flex flex-col items-center")}>
      <SectionEyebrow dark={dark} className="mb-6 md:mb-8">{eyebrow}</SectionEyebrow>
      <h2 className={cn("text-balance text-3xl font-black leading-[1.04] md:text-5xl", dark ? "text-white" : "text-ink")}>
        {title}
      </h2>
      {text ? <p className={cn("mt-6 text-base leading-7 md:text-lg", dark ? "text-white/[0.64]" : "text-ink/[0.62]")}>{text}</p> : null}
    </div>
  );
}

type SectionProps = {
  children: ReactNode;
  className?: string;
  id?: string;
  variant?: "ink" | "paper" | "dark-radial" | "light-radial";
  "data-header-theme"?: "light" | "dark";
};

export function Section({ children, className, id, variant = "ink", "data-header-theme": dataHeaderTheme }: SectionProps) {
  return (
    <section
      id={id}
      data-header-theme={dataHeaderTheme}
      className={cn(
        "section-shell relative",
        variant === "ink" && "bg-ink text-white",
        variant === "paper" && "bg-paper text-ink",
        variant === "dark-radial" &&
          "bg-[radial-gradient(circle_at_12%_0%,rgba(138,216,232,0.08),transparent_32%),linear-gradient(135deg,#0d1118,#06080c)] text-white",
        variant === "light-radial" &&
          "bg-[#f5f4ef] bg-[radial-gradient(circle_at_86%_16%,rgba(201,154,60,0.06),transparent_30%)] text-ink",
        className,
      )}
    >
      {children}
    </section>
  );
}

type ContainerProps = {
  children: ReactNode;
  className?: string;
};

export function Container({ children, className }: ContainerProps) {
  return <div className={cn("container-shell relative z-10", className)}>{children}</div>;
}

type PageHeroProps = {
  title: string;
  subtitle: string;
  eyebrow?: string;
  image?: string;
  ctaText?: string;
  ctaHref?: string;
};



export function PageHero({ title, subtitle, eyebrow, image, ctaText, ctaHref }: PageHeroProps) {
  return (
    <Section className="flex min-h-[78svh] items-end overflow-hidden pt-28 pb-16 md:pb-24">
      {image && (
        <>
          <Image src={assetPath(image)} alt="" fill sizes="100vw" priority className="object-cover opacity-[0.4]" />
          <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(6,8,12,0.92),rgba(6,8,12,0.66)_52%,rgba(6,8,12,0.92)),linear-gradient(0deg,#06080c,rgba(6,8,12,0.08)_44%)]" />
          <div className="dark-grid absolute inset-0 opacity-[0.15]" />
        </>
      )}

      <Container>
        {eyebrow && (
          <Reveal className="mb-6 inline-block">
            <SectionEyebrow dark={true}>{eyebrow}</SectionEyebrow>
          </Reveal>
        )}

        <AnimatedText as="h1" className="max-w-5xl text-balance text-4xl font-black leading-[1.03] text-white md:text-6xl">
          {title}
        </AnimatedText>
        <AnimatedText delay={0.16} className="mt-6 max-w-2xl text-base leading-7 text-white/70 md:text-xl">
          {subtitle}
        </AnimatedText>

        {ctaText && ctaHref && (
          <Reveal delay={0.28} className="mt-8">
            <ButtonLink href={ctaHref}>{ctaText}</ButtonLink>
          </Reveal>
        )}
      </Container>
    </Section>
  );
}

type CTASectionProps = {
  title: string;
  text: string;
  ctaText: string;
  ctaHref: string;
  eyebrow?: string;
  image?: string;
};

export function CTASection({ title, text, ctaText, ctaHref, eyebrow = "Conversa inicial", image = "/brand/hero-main.jpg" }: CTASectionProps) {
  return (
    <Section className="relative overflow-hidden bg-ink pb-24 pt-20 md:pb-32 md:pt-32">
      <Image src={assetPath(image)} alt="" fill sizes="100vw" className="object-cover opacity-[0.25]" />
      <div className="absolute inset-0 bg-[linear-gradient(90deg,#06080c,rgba(6,8,12,0.85)),linear-gradient(0deg,#06080c,rgba(6,8,12,0.15))]" />
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-16 bg-[linear-gradient(180deg,rgba(244,239,229,0)_0%,rgba(244,239,229,0)_72%,rgba(244,239,229,0.18)_90%,#f4efe5_100%)] md:h-20" />
      <Container>
        <Reveal className="max-w-4xl">
          <SectionEyebrow dark={true} className="mb-5">{eyebrow}</SectionEyebrow>
          <h2 className="text-balance text-3xl font-black leading-[1.04] text-white md:text-6xl">
            {title}
          </h2>
          <p className="mt-6 max-w-2xl text-base leading-7 text-white/[0.68] md:text-lg">
            {text}
          </p>
          <div className="mt-8">
            <ButtonLink href={ctaHref}>{ctaText}</ButtonLink>
          </div>
        </Reveal>
      </Container>
    </Section>
  );
}

import { motion } from "framer-motion";
import { fadeUp } from "@/components/animations";

type ServiceCardProps = {
  title: string;
  description: string;
  icon: React.ReactNode;
  items: string[];
  ctaText: string;
  href: string;
};

export function ServiceCard({ title, description, icon, items, ctaText, href }: ServiceCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="premium-card-dark premium-card-hover group relative min-h-[430px] overflow-hidden p-6 md:p-8"
    >
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-goldSoft/50 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="absolute -right-24 top-8 h-32 w-64 rotate-[-18deg] bg-gradient-to-r from-transparent via-gold/[0.18] to-transparent blur-2xl opacity-0 transition duration-300 group-hover:opacity-100" />

      <div className="relative flex h-full flex-col">
        <div className="mb-10 inline-flex h-12 w-12 items-center justify-center rounded-2xl border border-white/[0.08] bg-white/[0.04] text-goldSoft shadow-[inset_0_1px_0_rgba(255,255,255,0.06)] *:h-5 *:w-5">
          {icon}
        </div>

        <h3 className="text-2xl font-black text-white">{title}</h3>
        <p className="mt-4 text-sm leading-6 text-white/[0.64]">{description}</p>

        <ul className="mt-7 grid gap-3">
          {items.map((item) => (
            <li key={item} className="flex items-center gap-3 text-sm font-semibold text-white/[0.78]">
              <span className="h-1.5 w-1.5 rounded-full bg-goldSoft shadow-[0_0_12px_rgba(239,211,139,0.4)]" />
              {item}
            </li>
          ))}
        </ul>

        <Link href={href} className="mt-auto inline-flex w-fit items-center gap-3 pt-10 text-sm font-black text-goldSoft transition group-hover:gap-4">
          {ctaText}
          <span className="h-px w-8 bg-current" />
        </Link>
      </div>
    </motion.article>
  );
}

type FeatureCardProps = {
  title: string;
  text: string;
};

export function FeatureCard({ title, text }: FeatureCardProps) {
  return (
    <motion.article
      variants={fadeUp}
      className="premium-card-dark premium-card-hover group min-h-[260px] p-6 md:p-8 flex flex-col"
    >
      <span className="accent-line mb-8 md:mb-12" />
      <h2 className="text-xl md:text-2xl font-black text-white">{title}</h2>
      <p className="mt-4 text-sm leading-6 text-white/[0.64]">{text}</p>
    </motion.article>
  );
}

type ProcessStepProps = {
  index: number;
  title: string;
  description: string;
};

export function ProcessStep({ index, title, description }: ProcessStepProps) {
  return (
    <div className="premium-card-dark premium-card-hover relative grid grid-cols-[44px_1fr] gap-5 p-6 md:grid-cols-[56px_1fr] md:gap-7 md:p-8">
      <div className="relative z-10 flex h-11 w-11 items-center justify-center rounded-full border border-goldSoft/20 bg-ink text-xs font-black text-goldSoft md:h-12 md:w-12 shadow-[0_4px_24px_rgba(0,0,0,0.4)]">
        {String(index).padStart(2, "0")}
      </div>
      <div>
        <h3 className="text-xl font-black text-white md:text-2xl">{title}</h3>
        <p className="mt-2 text-sm leading-6 text-white/[0.58]">
          {description}
        </p>
      </div>
    </div>
  );
}

type ContactChannelCardProps = {
  label: string;
  value: string;
  href: string;
  external?: boolean;
};

export function ContactChannelCard({ label, value, href, external = false }: ContactChannelCardProps) {
  return (
    <motion.a
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      aria-label={`Acessar ${label}`}
      variants={fadeUp}
      className="premium-card-light premium-card-hover group p-6 md:p-7"
    >
      <span className="text-xs font-semibold uppercase tracking-[0.18em] text-gold">{label}</span>
      <strong className="mt-2 block text-xl font-black text-ink transition group-hover:text-gold">{value}</strong>
    </motion.a>
  );
}
