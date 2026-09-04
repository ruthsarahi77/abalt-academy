"use client";
import { useMemo, useState } from "react";
import type { Publication } from "@/data/publications";
import { PublicationList } from "./PublicationList";
import { YearFilter } from "./YearFilter";
import { useLocale } from "./LocaleProvider";
export function PublicationExplorer({
  publications,
}: {
  publications: Publication[];
}) {
  const { t } = useLocale();
  const years = useMemo(
    () => [...new Set(publications.map((i) => i.year))].sort((a, b) => b - a),
    [publications],
  );
  const [selectedYear, setSelectedYear] = useState(years[0]);
  const filtered = publications.filter((i) => i.year === selectedYear);
  return (
    <section
      id="publicaciones"
      aria-labelledby="publications-title"
      className="scroll-mt-28 bg-surface"
    >
      <div className="mx-auto max-w-7xl px-5 py-20 sm:px-8 lg:px-12 lg:py-28">
        <div className="flex flex-col justify-between gap-8 border-b border-ink pb-8 md:flex-row md:items-end">
          <div>
            <p className="text-xs font-bold uppercase tracking-[.2em] text-abalt">
              {t.ideas}
            </p>
            <h2
              id="publications-title"
              className="mt-3 text-4xl font-semibold tracking-[-.04em] sm:text-5xl"
            >
              {t.publications}
            </h2>
            <p className="mt-4 text-muted">{t.explore}</p>
          </div>
          <div>
            <p className="mb-3 text-xs font-bold uppercase tracking-wider">
              {t.selectYear}
            </p>
            <YearFilter
              years={years}
              selectedYear={selectedYear}
              onChange={setSelectedYear}
              label={t.selectYear}
            />
          </div>
        </div>
        <div className="mt-6 text-sm font-semibold text-muted">
          {filtered.length}{" "}
          {filtered.length === 1 ? t.publication : t.publicationsPlural} ·{" "}
          {t.year} {selectedYear}
        </div>
        <PublicationList publications={filtered} />
      </div>
    </section>
  );
}
