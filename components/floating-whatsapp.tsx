"use client";

import { motion } from "framer-motion";

import { getWhatsappUrl } from "@/lib/site-config";

export function FloatingWhatsApp() {
  return (
    <motion.a
      href={getWhatsappUrl("Olá, gostaria de saber mais sobre a Morales Soluções.")}
      target="_blank"
      rel="noreferrer"
      className="group fixed bottom-6 right-6 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_8px_32px_rgba(37,211,102,0.35)] transition-transform duration-300 hover:-translate-y-1 hover:scale-105 hover:shadow-[0_12px_40px_rgba(37,211,102,0.45)] focus:outline-none focus:ring-4 focus:ring-[#25D366]/40 md:bottom-8 md:right-8"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.5 }}
      aria-label="Falar pelo WhatsApp"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        fill="currentColor"
        className="h-8 w-8"
      >
        <path
          fillRule="evenodd"
          d="M12 2C6.48 2 2 6.48 2 12c0 2.17.69 4.18 1.85 5.82L3 22l4.31-.84A9.957 9.957 0 0012 22c5.52 0 10-4.48 10-10S17.52 2 12 2zm5.02 14.15c-.24.68-1.42 1.3-1.95 1.36-.53.06-1.12.16-3.32-.75-2.65-1.09-4.32-3.8-4.45-3.98-.13-.18-1.06-1.41-1.06-2.69s.67-1.91.91-2.18c.24-.27.53-.34.7-.34.18 0 .35 0 .5.01.16.01.38-.06.59.45.23.54.76 1.86.83 2.01.06.15.11.33.02.51-.1.18-.15.29-.3.46-.15.16-.32.36-.45.49-.15.15-.3.32-.13.62.17.3.76 1.26 1.63 2.04 1.12 1 2.06 1.3 2.36 1.45.3.15.47.13.65-.07.18-.21.75-.87.95-1.17.2-.3.4-.25.68-.15.28.1 1.76.83 2.06.98.3.15.5.22.58.35.07.13.07.76-.17 1.44z"
          clipRule="evenodd"
        />
      </svg>
      <span className="absolute inset-0 rounded-full border border-white/20"></span>
    </motion.a>
  );
}
