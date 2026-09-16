"use client";

import { useId } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { NewsItem, Course, Product } from "@/data/content-types";
import type { TranslationKey } from "@/data/navigation";
import { formatContentDate } from "@/lib/content";
import { useLocale } from "../LocaleProvider";
import { SectionHeading } from "./SectionHeading";

type ContentSectionProps = {
  /** Translation keys keep headings and CTAs in sync with the language selector. */
  title: TranslationKey;
  cta?: { href: string; label: TranslationKey };
} & (
  | { type: "news"; items: readonly NewsItem[] }
  | { type: "courses"; items: readonly Course[] }
  | { type: "products"; items: readonly Product[] }
);

export function ContentSection({ title, items, type, cta }: ContentSectionProps) {
  const { t, language } = useLocale();
  const headingId = useId();

  return (
    <section aria-labelledby={headingId} data-content-section={type} className="border-b border-line bg-white">
      <div className="section-shell py-10 sm:py-12">
        <SectionHeading id={headingId} title={t[title]} />
        {items.length ? (
          <ul className="mt-7 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item) => {
              const content = { ...item, ...item.translations?.[language] };
              const href = "pdfUrl" in item ? item.pdfUrl : item.url;
              const external = /^(https?:)?\/\//i.test(href);
              const detail = "status" in item
                ? t[`courseStatus${item.status}`]
                : "type" in item ? item.type : content.category;

              return (
                <li key={item.id} className="min-w-0">
                  <article className="flex h-full flex-col border border-line bg-white">
                    <div className="relative aspect-video overflow-hidden bg-surface">
                      {content.image && (
                        <Image src={content.image} alt={content.imageAlt ?? ""} fill
                          sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                          className="object-cover" />
                      )}
                    </div>
                    <div className="flex flex-1 flex-col p-5 sm:p-6">
                      <p className="flex flex-wrap gap-x-2 gap-y-1 text-xs leading-relaxed text-muted-foreground">
                        <time dateTime={item.date}>{formatContentDate(item.date, language)}</time>
                        {detail && <span className="font-semibold text-abalt">{detail}</span>}
                      </p>
                      <h3 className="mt-3 font-heading text-xl font-semibold leading-snug wrap-break-word">
                        {content.title}
                      </h3>
                      {content.description && (
                        <p className="mt-3 line-clamp-3 text-sm leading-relaxed text-muted-foreground">{content.description}</p>
                      )}
                      <Link href={href} target={external ? "_blank" : undefined}
                        rel={external ? "noopener noreferrer" : undefined}
                        className="mt-auto inline-flex min-h-11 items-center gap-2 self-start pt-5 text-sm font-bold text-abalt hover:underline">
                        {t.viewContent}<span className="sr-only">: {content.title}{external ? ` (${t.newTab})` : ""}</span>
                        <ArrowRight aria-hidden="true" className="size-4" />
                      </Link>
                    </div>
                  </article>
                </li>
              );
            })}
          </ul>
        ) : (
          <p className="mt-7 text-sm leading-relaxed text-muted-foreground">{t.contentComingSoon}</p>
        )}
        {cta && (
          <Link href={cta.href} className="mt-6 inline-flex min-h-11 items-center gap-2 border-b border-ink text-sm font-bold hover:border-abalt hover:text-abalt">
            {t[cta.label]}<ArrowRight aria-hidden="true" className="size-4" />
          </Link>
        )}
      </div>
    </section>
  );
}
