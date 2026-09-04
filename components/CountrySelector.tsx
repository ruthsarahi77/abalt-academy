"use client";

import { Globe2 } from "lucide-react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { countries, type CountryCode } from "@/i18n/config";
import { useLocale } from "./LocaleProvider";

export function CountrySelector({ compact = false }: { compact?: boolean }) {
  const { country, setCountry, t } = useLocale();
  const selectedCountry = countries.find((item) => item.code === country)!;

  return (
    <Select
      value={country}
      onValueChange={(value) => value && setCountry(value as CountryCode)}
    >
      <SelectTrigger
        aria-label={t.country}
        className={`h-10 justify-between gap-3 rounded-none border-0 border-b border-line bg-transparent px-3 text-sm font-semibold shadow-none hover:border-abalt hover:text-abalt ${compact ? "min-w-32" : "w-full"}`}
      >
        <span className="flex min-w-0 items-center gap-2.5">
          <Globe2 aria-hidden="true" className="size-4 shrink-0" />
          <span className="truncate">{selectedCountry.name}</span>
        </span>
      </SelectTrigger>
      <SelectContent align="start" className="min-w-52 rounded-none py-1 shadow-lg">
        {countries.map((item) => (
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
