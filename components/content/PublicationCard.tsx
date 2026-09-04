"use client";
import { ArrowRight } from "lucide-react";
import type { Publication } from "@/data/publications";
import { getContentUrl, localizeContent } from "@/data/content-types";
import { formatContentDate } from "@/lib/content";
import { useLocale } from "../LocaleProvider";
import { ContentVisual } from "./ContentVisual";

export function PublicationCard({ publication }: { publication: Publication }) {
  const { t, language } = useLocale();
  const content = localizeContent(publication, language);
  return (
    <article className="group flex h-full flex-col border-t-2 border-ink bg-white">
      <ContentVisual
        image={publication.image}
        alt={publication.imageAlt ?? content.title}
        type={publication.contentType}
        className="aspect-[3/2]"
      />
      <div className="flex grow flex-col px-1 py-6">
        <p className="content-meta">{content.category}</p>
        <h3 className="mt-3 text-xl font-semibold leading-snug tracking-[-.025em]">
          <a
            href={getContentUrl(publication)}
            target="_blank"
            rel="noopener noreferrer"
            className="transition-colors hover:text-abalt"
          >
            {content.title}
          </a>
        </h3>
        <p className="mt-4 text-sm text-muted-foreground">
          {formatContentDate(publication.publishedAt, language)}
        </p>
        <a
          href={getContentUrl(publication)}
          target="_blank"
          rel="noopener noreferrer"
          className="mt-5 inline-flex items-center gap-2 self-start text-sm font-bold text-abalt"
        >
          {t.read}
          <ArrowRight
            aria-hidden="true"
            className="size-4 transition-transform group-hover:translate-x-1"
          />
          <span className="sr-only"> PDF, {t.newTab}</span>
        </a>
      </div>
    </article>
  );
}
