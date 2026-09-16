"use client";

import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { getLatestNewsItem } from "@/data/selectors";
import { useLocale } from "./LocaleProvider";

export function Hero() {
  const { t, language } = useLocale();
  const news = getLatestNewsItem();

  if (!news) return null;

  const content = { ...news, ...news.translations?.[language] };
  const words = content.description?.trim().split(/\s+/).filter(Boolean) ?? [];
  const description = words.slice(0, 15).join(" ") + (words.length > 15 ? "…" : "");
  const external = /^(https?:)?\/\//i.test(news.pdfUrl);

  return (
    <section
      id="inicio"
      aria-labelledby="hero-title"
      className="relative isolate overflow-hidden bg-ink"
    >
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-20 bg-[url('/portada-hero.svg')] bg-cover bg-[58%_center] sm:bg-center"
      />
      <div
        aria-hidden="true"
        className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(18,20,21,0.94)_0%,rgba(22,24,25,0.86)_55%,rgba(22,24,25,0.65)_100%)]"
      />

      <div className="section-shell py-12 sm:py-14 lg:py-16">
        <div className="w-full min-w-0 max-w-4xl text-left text-white">
          <h1
            id="hero-title"
            className="font-heading text-3xl font-bold leading-[1.1] tracking-[var(--type-heading-tracking)] wrap-break-word sm:text-4xl lg:text-5xl xl:text-6xl"
          >
            {content.title}
          </h1>
          {description && (
            <p className="mt-5 max-w-2xl font-sans text-base leading-relaxed text-white/90 sm:text-lg">
              {description}
            </p>
          )}
          <a
            href={news.pdfUrl}
            target={external ? "_blank" : undefined}
            rel={external ? "noopener noreferrer" : undefined}
            className={cn(
              buttonVariants({ size: "lg" }),
              "mt-7 h-12 rounded-none bg-abalt px-6 font-sans font-bold text-white transition-colors duration-200 hover:bg-abalt-dark focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white"
            )}
          >
            {t.viewNews}
            {external && <span className="sr-only"> ({t.newTab})</span>}
            <ArrowRight aria-hidden="true" />
          </a>
        </div>
      </div>
    </section>
  );
}
