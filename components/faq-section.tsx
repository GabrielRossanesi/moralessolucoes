"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Plus } from "lucide-react";
import { useId, useState } from "react";

import { fadeUp, Reveal, staggerContainer } from "@/components/animations";
import { Container, Section, SectionHeader } from "@/components/ui";
import type { FAQItem } from "@/lib/faqs";
import { cn } from "@/lib/utils";

type FAQSectionProps = {
  eyebrow?: string;
  title?: string;
  subtitle: string;
  items: FAQItem[];
  theme?: "light" | "dark";
};

export function FAQSection({
  eyebrow = "Dúvidas frequentes",
  title = "Perguntas frequentes",
  subtitle,
  items,
  theme = "light",
}: FAQSectionProps) {
  const isDark = theme === "dark";
  const sectionId = useId();
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <Section
      variant={isDark ? "dark-radial" : "light-radial"}
      data-header-theme={isDark ? "dark" : "light"}
      className={cn(
        isDark
          ? "bg-[radial-gradient(circle_at_80%_12%,rgba(201,154,60,0.13),transparent_34%),linear-gradient(180deg,#0d1118,#06080c)]"
          : "bg-[#f5f1e8] bg-[radial-gradient(circle_at_12%_8%,rgba(201,154,60,0.08),transparent_32%),radial-gradient(circle_at_88%_0%,rgba(138,216,232,0.08),transparent_28%)]",
      )}
    >
      <Container className="grid gap-10 lg:grid-cols-[0.72fr_1fr] lg:items-start lg:gap-16">
        <Reveal className="lg:sticky lg:top-28">
          <SectionHeader eyebrow={eyebrow} title={title} text={subtitle} dark={isDark} />
        </Reveal>

        <motion.div
          className="grid gap-3"
          variants={staggerContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.12 }}
        >
          {items.map((item, index) => {
            const isOpen = openIndex === index;
            const answerId = `${sectionId}-answer-${index}`;
            const questionId = `${sectionId}-question-${index}`;

            return (
              <motion.article
                key={item.question}
                variants={fadeUp}
                className={cn(
                  "group overflow-hidden rounded-lg border transition duration-300",
                  isDark
                    ? "border-white/[0.08] bg-white/[0.035] shadow-[0_18px_54px_rgba(0,0,0,0.18)] hover:border-goldSoft/30 hover:bg-white/[0.055]"
                    : "border-ink/10 bg-white/70 shadow-[0_18px_50px_rgba(24,21,15,0.06)] hover:border-gold/35 hover:bg-white/90",
                  isOpen && (isDark ? "border-goldSoft/35 bg-white/[0.06]" : "border-gold/40 bg-white"),
                )}
              >
                <button
                  id={questionId}
                  type="button"
                  aria-expanded={isOpen}
                  aria-controls={answerId}
                  onClick={() => setOpenIndex(isOpen ? null : index)}
                  className="flex w-full items-center justify-between gap-5 px-5 py-5 text-left md:px-6"
                >
                  <span className={cn("text-base font-black leading-snug md:text-lg", isDark ? "text-white" : "text-ink")}>
                    {item.question}
                  </span>
                  <motion.span
                    aria-hidden="true"
                    animate={{ rotate: isOpen ? 45 : 0 }}
                    transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
                    className={cn(
                      "flex h-9 w-9 shrink-0 items-center justify-center rounded-full border transition duration-300",
                      isDark
                        ? "border-white/[0.1] bg-white/[0.04] text-goldSoft group-hover:border-goldSoft/35"
                        : "border-ink/10 bg-[#f7f1e5] text-gold group-hover:border-gold/40 group-hover:bg-white",
                    )}
                  >
                    <Plus className="h-4 w-4" />
                  </motion.span>
                </button>

                <AnimatePresence initial={false}>
                  {isOpen ? (
                    <motion.div
                      id={answerId}
                      role="region"
                      aria-labelledby={questionId}
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <p
                        className={cn(
                          "px-5 pb-5 pt-0 text-sm leading-6 md:px-6 md:pb-6",
                          isDark ? "text-white/[0.66]" : "text-ink/[0.66]",
                        )}
                      >
                        {item.answer}
                      </p>
                    </motion.div>
                  ) : null}
                </AnimatePresence>
              </motion.article>
            );
          })}
        </motion.div>
      </Container>
    </Section>
  );
}
