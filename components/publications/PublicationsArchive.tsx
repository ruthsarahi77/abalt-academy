"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import type { Publication } from "@/data/publications";
import { getContentUrl, localizeContent } from "@/data/content-types";
import { formatContentDate } from "@/lib/content";
import { useLocale } from "@/components/LocaleProvider";

type YearFilter = "all" | number;

export function PublicationsArchive({ publications }: { publications: Publication[] }) {
  const { t } = useLocale();
  const years = useMemo(
    () => [...new Set(publications.map((item) => item.year))].sort((a, b) => b - a),
    [publications],
  );
  const [selectedYear, setSelectedYear] = useState<YearFilter>(years[0] ?? "all");
  const groupedPublications = useMemo(() => {
    const visible = publications
      .filter((item) => selectedYear === "all" || item.year === selectedYear)
      .sort((a, b) => b.publishedAt.localeCompare(a.publishedAt));

    return years
      .map((year) => ({ year, items: visible.filter((item) => item.year === year) }))
      .filter((group) => group.items.length > 0);
  }, [publications, selectedYear, years]);

  return (
    <>
      <section className="border-b border-line bg-surface" aria-labelledby="publications-page-title">
        <div className="section-shell grid gap-8 py-10 sm:py-12 lg:grid-cols-[1.15fr_.85fr] lg:items-center lg:py-14">
          <div className="max-w-3xl">
            <p className="section-eyebrow">ABALT Academy</p>
            <h1
              id="publications-page-title"
              className="mt-3 text-4xl font-semibold leading-none tracking-[-.045em] sm:text-5xl lg:text-6xl"
            >
              {t.publicationsPageTitle}
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-7 text-muted-foreground sm:text-lg sm:leading-8">
              {t.publicationsPageDescription}
            </p>
          </div>
          <div className="relative aspect-[16/7] overflow-hidden lg:aspect-[16/8]">
            <Image
              src="/images/knowledge/editorial.webp"
              alt={t.publicationsHeroImageAlt}
              fill
              priority
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 42vw"
            />
          </div>
        </div>
      </section>

      <section className="bg-white" aria-labelledby="year-filter-title">
        <div className="section-shell py-12 sm:py-14 lg:py-16">
          <div className="border-b border-line pb-7">
            <h2
              id="year-filter-title"
              className="text-xs font-extrabold uppercase tracking-[.16em] text-muted-foreground"
            >
              {t.exploreByYear}
            </h2>
            <div
              className="mt-4 flex max-w-full gap-2 overflow-x-auto pb-1"
              role="group"
              aria-label={t.exploreByYear}
            >
              <YearChip
                active={selectedYear === "all"}
                onClick={() => setSelectedYear("all")}
              >
                {t.allYears}
              </YearChip>
              {years.map((year) => (
                <YearChip
                  key={year}
                  active={selectedYear === year}
                  onClick={() => setSelectedYear(year)}
                >
                  {year}
                </YearChip>
              ))}
            </div>
          </div>

          <div className="mt-8">
            {groupedPublications.map((group) => (
              <section key={group.year} className="mt-12 first:mt-0" aria-labelledby={`year-${group.year}`}>
                <h2
                  id={`year-${group.year}`}
                  className="border-b-2 border-ink pb-3 text-2xl font-semibold tracking-[-.035em]"
                >
                  {group.year}
                </h2>
                <div>
                  {group.items.map((publication) => (
                    <PublicationRow key={publication.id} publication={publication} />
                  ))}
                </div>
              </section>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

function YearChip({
  active,
  children,
  onClick,
}: {
  active: boolean;
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <button
      type="button"
      aria-pressed={active}
      onClick={onClick}
      className={`min-h-11 shrink-0 border px-5 text-sm font-bold transition-colors ${
        active
          ? "border-abalt bg-abalt text-white"
          : "border-line bg-white text-ink hover:border-abalt hover:text-abalt"
      }`}
    >
      {children}
    </button>
  );
}

function PublicationRow({ publication }: { publication: Publication }) {
  const { t, language } = useLocale();
  const content = localizeContent(publication, language);

  return (
    <article className="group grid gap-4 border-b border-line py-7 sm:py-8 lg:grid-cols-[10rem_minmax(0,1fr)_12rem] lg:gap-8">
      <p className="flex items-center gap-3 self-start text-xs font-extrabold uppercase tracking-[.12em] text-muted-foreground">
        <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-abalt" />
        <time dateTime={publication.publishedAt}>
          {formatContentDate(publication.publishedAt, language).toLocaleUpperCase()}
        </time>
      </p>
      <div className="max-w-3xl">
        <h3 className="text-xl font-semibold leading-snug tracking-[-.025em] transition-colors group-hover:text-abalt sm:text-2xl">
          <a href={getContentUrl(publication)} target="_blank" rel="noopener noreferrer">
            {content.title}
          </a>
        </h3>
        <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
          {content.description}
        </p>
        <p className="mt-4 text-xs font-bold uppercase tracking-[.14em] text-abalt">
          {content.category ?? publication.contentType}
        </p>
      </div>
      <a
        href={getContentUrl(publication)}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 self-end justify-self-start border-b border-ink text-sm font-bold transition-colors hover:border-abalt hover:text-abalt lg:justify-self-end"
      >
        {t.readPublication}
        <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
        <span className="sr-only">PDF, {t.newTab}</span>
      </a>
    </article>
  );
}
