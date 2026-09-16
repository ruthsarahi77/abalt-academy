"use client";

import { useMemo, useState } from "react";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { localizeContent, type NewsItem } from "@/data/content-types";
import { formatContentDate } from "@/lib/content";
import { useLocale } from "@/components/LocaleProvider";

type YearFilter = "all" | number;

export function NewsArchive({ news }: { news: NewsItem[] }) {
  const { t } = useLocale();
  const years = useMemo(
    () => [...new Set(news.map((item) => Number(item.date.slice(0, 4))))].sort((a, b) => b - a),
    [news],
  );
  const [selectedYear, setSelectedYear] = useState<YearFilter>(years[0] ?? "all");
  const groupedNews = useMemo(() => {
    const visible = news
      .filter((item) => selectedYear === "all" || Number(item.date.slice(0, 4)) === selectedYear)
      .sort((a, b) => b.date.localeCompare(a.date));

    return years
      .map((year) => ({ year, items: visible.filter((item) => Number(item.date.slice(0, 4)) === year) }))
      .filter((group) => group.items.length > 0);
  }, [news, selectedYear, years]);

  return (
    <>
      <section className="bg-white" aria-labelledby="news-page-title">
        <div className="section-shell pt-10 sm:pt-12 lg:pt-14">
          <h1
            id="news-page-title"
            className="mb-6 font-heading text-4xl font-bold leading-none tracking-[-.045em] sm:mb-8 sm:text-5xl lg:text-6xl"
          >
            {t.newsPageTitle}
          </h1>
          <div className="relative aspect-[3/1] w-full overflow-hidden lg:aspect-[3.5/1]">
            <Image
              src="/images/knowledge/editorial.webp"
              alt={t.newsHeroImageAlt}
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1440px) 1360px, (min-width: 1280px) calc(100vw - 80px), (min-width: 640px) calc(100vw - 64px), calc(100vw - 40px)"
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
            {groupedNews.map((group) => (
              <section key={group.year} className="mt-12 first:mt-0" aria-labelledby={`year-${group.year}`}>
                <h2
                  id={`year-${group.year}`}
                  className="border-b-2 border-ink pb-3 text-2xl font-semibold tracking-[-.035em]"
                >
                  {group.year}
                </h2>
                <div>
                  {group.items.map((item) => (
                    <NewsRow key={item.id} item={item} />
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

function NewsRow({ item }: { item: NewsItem }) {
  const { t, language } = useLocale();
  const content = localizeContent(item, language);

  return (
    <article className="group grid gap-4 border-b border-line py-7 sm:py-8 lg:grid-cols-[10rem_minmax(0,1fr)_12rem] lg:gap-8">
      <p className="flex items-center gap-3 self-start text-xs font-extrabold uppercase tracking-[.12em] text-muted-foreground">
        <span aria-hidden="true" className="size-2 shrink-0 rounded-full bg-abalt" />
        <time dateTime={item.date}>
          {formatContentDate(item.date, language).toLocaleUpperCase()}
        </time>
      </p>
      <div className="max-w-3xl">
        <h3 className="text-xl font-semibold leading-snug tracking-[-.025em] transition-colors group-hover:text-abalt sm:text-2xl">
          <a href={item.pdfUrl} target="_blank" rel="noopener noreferrer">
            {content.title}
          </a>
        </h3>
        <p className="mt-3 max-w-2xl leading-7 text-muted-foreground">
          {content.description}
        </p>
        <p className="mt-4 text-xs font-bold uppercase tracking-[.14em] text-abalt">
          {content.category ?? item.contentType}
        </p>
      </div>
      <a
        href={item.pdfUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex min-h-11 items-center gap-2 self-end justify-self-start border-b border-ink text-sm font-bold transition-colors hover:border-abalt hover:text-abalt lg:justify-self-end"
      >
        {t.readNews}
        <ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1" />
        <span className="sr-only">PDF, {t.newTab}</span>
      </a>
    </article>
  );
}
