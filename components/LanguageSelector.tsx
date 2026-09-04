"use client";

import { Languages } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { languages, type LanguageCode } from "@/i18n/config";
import { useLocale } from "./LocaleProvider";

export function LanguageSelector({ compact = false }: { compact?: boolean }) {
  const { language, setLanguage, t } = useLocale();
  const selectedLanguage = languages.find((item) => item.code === language)!;

  return (
    <Select
      value={language}
      onValueChange={(value) => value && setLanguage(value as LanguageCode)}
    >
      <SelectTrigger
        aria-label={t.language}
        className={`h-10 justify-between gap-3 rounded-none border-0 border-b border-line bg-transparent px-3 text-sm font-semibold shadow-none hover:border-abalt hover:text-abalt ${compact ? "min-w-32" : "w-full"}`}
      >
        <span className="flex min-w-0 items-center gap-2.5">
          <Languages aria-hidden="true" className="size-4 shrink-0" />
          <span className="truncate">{selectedLanguage.name}</span>
        </span>
      </SelectTrigger>
      <SelectContent align="start" className="min-w-44 rounded-none py-1 shadow-lg">
        {languages.map((item) => (
          <SelectItem
            key={item.code}
            value={item.code}
            className="rounded-none py-2.5 pr-10 pl-4 text-sm text-ink transition-colors focus:bg-[#f2f2f2] focus:text-ink"
          >
            {item.name}
          </SelectItem>
        ))}
      </SelectContent>
    </Select>
  );
}
