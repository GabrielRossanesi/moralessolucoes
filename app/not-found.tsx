import { Metadata } from "next";

import { ButtonLink, Container, Section } from "@/components/ui";

export const metadata: Metadata = {
  title: "Página Não Encontrada | Morales Soluções",
};

export default function NotFound() {
  return (
    <Section className="flex min-h-[90svh] items-center justify-center pt-20">
      <Container className="max-w-2xl text-center">
        <h1 className="text-[8rem] font-black leading-none text-white/10 md:text-[12rem]">404</h1>
        <div className="-mt-12 md:-mt-16">
          <h2 className="text-2xl font-black text-white md:text-4xl">Essa página não existe.</h2>
          <p className="mx-auto mt-4 max-w-md text-base leading-7 text-white/70">
            A URL que você tentou acessar não foi encontrada. Talvez a página tenha sido movida ou não exista mais.
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            <ButtonLink href="/">Voltar para o início</ButtonLink>
          </div>
        </div>
      </Container>
    </Section>
  );
}
