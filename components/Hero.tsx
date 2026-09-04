"use client";

import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useLocale } from "./LocaleProvider";

export function Hero() {
  const { t } = useLocale();

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate min-h-[35rem] overflow-hidden bg-ink sm:min-h-[38rem] lg:min-h-[42rem]"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/portada-hero.svg')] bg-cover bg-[58%_center] sm:bg-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,20,21,0.92)_0%,rgba(22,24,25,0.82)_38%,rgba(22,24,25,0.52)_65%,rgba(22,24,25,0.20)_100%)] sm:bg-[linear-gradient(90deg,rgba(18,20,21,0.88)_0%,rgba(22,24,25,0.78)_34%,rgba(22,24,25,0.50)_62%,rgba(22,24,25,0.18)_100%)]"
      />

      <div className="mx-auto flex min-h-[35rem] max-w-[90rem] items-end px-5 py-14 sm:min-h-[38rem] sm:px-8 sm:py-18 lg:min-h-[42rem] lg:items-center xl:px-10">
        <div className="w-full min-w-0 max-w-[43rem] text-white">
          <p className="text-xs font-extrabold uppercase tracking-[.22em] text-[#ff5873]">
            {t.knowledgeCenter}
          </p>
          <h1
            id="hero-title"
            className="mt-5 text-[clamp(2.75rem,7vw,5.5rem)] font-semibold leading-[.98] tracking-[-.055em] text-white"
          >
            ABALT Academy
          </h1>
          <p className="mt-6 text-xl font-semibold leading-snug text-white sm:text-2xl">
            {t.valueKnowledge}
          </p>
          <p className="mt-5 max-w-[39rem] text-base leading-7 text-white/75 sm:text-lg sm:leading-8">
            {t.heroDescription}
          </p>
          <a
            href="#ultimas-publicaciones"
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-8 h-12 rounded-none bg-abalt px-6 font-bold text-white transition-colors duration-200 hover:bg-abalt-dark"
            )}
          >
            {t.publicationsNav}
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
