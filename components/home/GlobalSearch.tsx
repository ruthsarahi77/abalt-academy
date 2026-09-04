"use client";

import { useMemo, useState } from "react";
import { ArrowUpRight, Search } from "lucide-react";
import type { AcademyContent } from "@/data/content-types";
import { getContentUrl, localizeContent } from "@/data/content-types";
import { normalizeSearch } from "@/lib/content";
import { useLocale } from "../LocaleProvider";

export function GlobalSearch({ content }: { content: AcademyContent[] }) {
  const { t, language } = useLocale();
  const [query, setQuery] = useState("");
  const results = useMemo(() => {
    const term = normalizeSearch(query);
    if (term.length < 2) return [];
    return content
      .filter((item) => {
        const localized = localizeContent(item, language);
        return normalizeSearch(
          [
            localized.title,
            localized.description,
            localized.category,
            item.contentType,
            ...item.topics,
          ].join(" ")
        ).includes(term);
      })
      .slice(0, 8);
  }, [content, language, query]);

  return (
    <section className="border-b border-line bg-white" aria-labelledby="global-search-title">
      <div className="section-shell py-14 sm:py-18">
        <h2
          id="global-search-title"
          className="text-2xl font-semibold tracking-[-.03em] sm:text-3xl"
        >
          {t.searchTitle}
        </h2>
        <div className="group relative mt-5 sm:mt-6">
          <Search
            aria-hidden="true"
            className="absolute inset-y-0 start-4 my-auto size-5 text-abalt sm:start-5 sm:size-[1.375rem]"
          />
          <input
            type="search"
            value={query}
            onChange={(event) => setQuery(event.target.value)}
            aria-label={t.searchLabel}
            placeholder={t.searchPlaceholder}
            className="h-14 w-full rounded-[10px] border border-[#d9d9d9] bg-white pe-4 ps-12 text-[0.95rem] shadow-[0_2px_10px_rgba(0,0,0,0.035)] outline-none transition-[border-color,box-shadow] duration-200 placeholder:text-[#777b7d] hover:border-[#bfc2c4] focus:border-abalt/70 focus:shadow-[0_0_0_3px_rgba(200,16,46,0.08),0_2px_10px_rgba(0,0,0,0.035)] sm:h-16 sm:pe-6 sm:ps-[3.75rem] sm:text-[1.0625rem]"
          />
        </div>
        {query.trim().length >= 2 && (
          <div className="mt-4 border border-line bg-white" aria-live="polite">
            <p className="border-b border-line px-5 py-3 text-xs font-bold uppercase tracking-[.16em] text-muted-foreground">
              {t.searchResults} ({results.length})
            </p>
            {results.length ? (
              results.map((item) => {
                const localized = localizeContent(item, language);
                return (
                  <a
                    key={item.id}
                    href={getContentUrl(item)}
                    className="group flex items-center justify-between gap-4 border-b border-line px-5 py-4 last:border-0 hover:bg-surface"
                  >
                    <span>
                      <span className="block text-xs font-bold uppercase tracking-wider text-abalt">
                        {localized.category ?? item.contentType}
                      </span>
                      <span className="mt-1 block font-semibold">{localized.title}</span>
                    </span>
                    <ArrowUpRight
                      aria-hidden="true"
                      className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"
                    />
                  </a>
                );
              })
            ) : (
              <p className="px-5 py-6 text-muted-foreground">{t.searchEmpty}</p>
            )}
          </div>
        )}
      </div>
    </section>
  );
}
