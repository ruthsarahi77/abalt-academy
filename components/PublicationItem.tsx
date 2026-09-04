"use client";
import { ArrowUpRight } from "lucide-react";
import type { Publication } from "@/data/publications";
import { useLocale } from "./LocaleProvider";
export function PublicationItem({ publication }: { publication: Publication }) {
  const { t, language } = useLocale();
  const c = publication.translations?.[language] ?? publication;
  return (
    <li>
      <article className="group relative flex h-full flex-col overflow-hidden bg-white p-7 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:p-9">
        <div className="absolute inset-x-0 top-0 h-1 origin-left scale-x-0 bg-abalt transition-transform group-hover:scale-x-100" />
        <div className="flex items-start justify-between gap-4">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.14em] text-abalt">
              {c.category ?? t.publication}
            </p>
            <p className="mt-2 text-sm text-muted-foreground">
              {publication.code} · {publication.year}
            </p>
          </div>
          <ArrowUpRight className="size-6 text-muted-foreground transition-all group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-abalt" />
        </div>
        <h3 className="mt-8 text-2xl font-semibold leading-tight tracking-[-.025em]">
          <a
            href={publication.pdfUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="after:absolute after:inset-0"
          >
            {c.title}
            <span className="sr-only">, PDF, {t.newTab}</span>
          </a>
        </h3>
        <p className="mt-4 grow leading-7 text-muted-foreground">
          {c.description}
        </p>
        <span className="mt-8 text-sm font-bold text-abalt">
          {t.openDocument} PDF →
        </span>
      </article>
    </li>
  );
}
