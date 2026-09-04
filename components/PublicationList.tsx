"use client";
import type { Publication } from "@/data/publications";
import { PublicationItem } from "./PublicationItem";
import { useLocale } from "./LocaleProvider";
export function PublicationList({
  publications,
}: {
  publications: Publication[];
}) {
  const { t } = useLocale();
  if (!publications.length)
    return <p className="py-10 text-muted">{t.noPublications}</p>;
  return (
    <ul
      aria-live="polite"
      className="mt-10 grid gap-6 md:grid-cols-2 xl:grid-cols-3"
    >
      {publications.map((item) => (
        <PublicationItem key={item.id} publication={item} />
      ))}
    </ul>
  );
}
