"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Menu, MessageCircle, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

import { siteConfig } from "@/lib/site-config";
import { cn } from "@/lib/utils";

export function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const sync = () => setScrolled(window.scrollY > 80);
    sync();
    window.addEventListener("scroll", sync, { passive: true });
    return () => window.removeEventListener("scroll", sync);
  }, []);

  return (
    <header className="fixed inset-x-0 top-0 z-50 pointer-events-none px-3 pt-3 md:px-6 md:pt-4">
      <div className="mx-auto flex max-w-7xl items-center justify-between">
        
        {/* Logo (Completamente flutuante, sem fundo, com drop-shadow sutil e fade no scroll) */}
        <div className={cn(
          "pointer-events-auto flex items-center justify-center h-[54px] transition-all duration-300 transform",
          scrolled ? "opacity-0 -translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"
        )}>
          <Link href="/" className="flex min-w-0 items-center focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goldSoft rounded-lg" aria-label="Morales Soluções">
            <Image 
              src="/brand/logo-principal.png" 
              alt="Morales Soluções" 
              width={300} 
              height={60} 
              className="h-[36px] w-auto md:h-[46px] object-contain transition-all duration-300 hover:opacity-90 drop-shadow-[0_2px_8px_rgba(0,0,0,0.35)]"
              priority 
            />
          </Link>
        </div>

        {/* Menu Pill Central */}
        <nav className="pointer-events-auto hidden md:flex h-[54px] items-center gap-1 rounded-full border border-white/[0.08] bg-[#06080c]/85 px-2 shadow-[0_8px_20px_rgba(0,0,0,0.14)] backdrop-blur-xl transition-all duration-300" aria-label="Navegação principal">
          {siteConfig.navItems.map((item) => {
            const active = pathname === item.href;
            return (
              <Link
                key={item.href}
                href={item.href}
                aria-current={active ? "page" : undefined}
                className={cn(
                  "rounded-full px-5 py-2 text-sm font-semibold transition-colors duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goldSoft",
                  "text-white/70 hover:text-white hover:bg-white/5",
                  active && "bg-white/10 text-white shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] hover:bg-white/10",
                )}
              >
                {item.label}
              </Link>
            );
          })}
        </nav>

        {/* CTA Floating (Com fade no scroll) */}
        <div className={cn(
          "pointer-events-auto hidden md:flex transition-all duration-300 transform",
          scrolled ? "opacity-0 -translate-y-2 pointer-events-none" : "opacity-100 translate-y-0"
        )}>
          <a
            href={siteConfig.links.whatsapp}
            target="_blank"
            rel="noreferrer"
            className="inline-flex h-[54px] items-center gap-2 rounded-full bg-gradient-to-br from-goldSoft to-gold px-6 text-sm font-extrabold text-ink shadow-[0_4px_16px_rgba(201,154,60,0.15)] transition duration-300 hover:scale-[1.02] hover:shadow-[0_8px_24px_rgba(201,154,60,0.25)] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-goldSoft focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            <MessageCircle className="h-4 w-4" />
            Falar agora
          </a>
        </div>

        {/* Mobile Hamburger Pill */}
        <button
          type="button"
          className="pointer-events-auto inline-flex h-[54px] w-[54px] items-center justify-center rounded-full border border-white/[0.12] bg-[#06080c]/85 text-white shadow-[0_8px_20px_rgba(0,0,0,0.14)] backdrop-blur-xl transition-colors duration-300 md:hidden"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          aria-expanded={open}
          onClick={() => setOpen((value) => !value)}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      <MobileMenu open={open} setOpen={setOpen} pathname={pathname} />
    </header>
  );
}

type MobileMenuProps = {
  open: boolean;
  setOpen: (open: boolean) => void;
  pathname: string;
};

export function MobileMenu({ open, setOpen, pathname }: MobileMenuProps) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className="pointer-events-auto mx-auto mt-2 max-w-7xl overflow-hidden rounded-lg border border-white/[0.12] bg-ink/95 p-3 shadow-premium backdrop-blur-2xl transition-colors duration-300 md:hidden"
          initial={{ opacity: 0, y: -12, filter: "blur(10px)" }}
          animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
          exit={{ opacity: 0, y: -12, filter: "blur(10px)" }}
          transition={{ duration: 0.24 }}
        >
          <nav className="grid gap-1" aria-label="Menu mobile">
            {siteConfig.navItems.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  aria-current={active ? "page" : undefined}
                  onClick={() => setOpen(false)}
                  className={cn(
                    "rounded-lg px-4 py-3 text-base font-bold transition-colors duration-300",
                    active ? "bg-white/10 text-white" : "text-white/[0.72] hover:bg-white/[0.08] hover:text-white"
                  )}
                >
                  {item.label}
                </Link>
              );
            })}
            <a
              href={siteConfig.links.whatsapp}
              target="_blank"
              rel="noreferrer"
              onClick={() => setOpen(false)}
              className="mt-2 inline-flex items-center justify-center gap-2 rounded-lg bg-gradient-to-br from-goldSoft to-gold px-4 py-3 text-sm font-extrabold text-ink"
            >
              <MessageCircle className="h-4 w-4" />
              Chamar no WhatsApp
            </a>
          </nav>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
