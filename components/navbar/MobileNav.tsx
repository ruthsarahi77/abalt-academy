"use client";
import { Menu, ChevronDown } from "lucide-react";
import { navItems } from "@/data/navigation";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { CountrySelector } from "../CountrySelector";
import { LanguageSelector } from "../LanguageSelector";
import { useLocale } from "../LocaleProvider";

export function MobileNav() {
  const { t } = useLocale();
  return (
    <div className="lg:hidden">
      <Sheet>
        <SheetTrigger
          aria-label={t.openMenu}
          className="inline-flex size-11 items-center justify-center border border-line bg-white text-ink"
        >
          <Menu aria-hidden="true" />
        </SheetTrigger>
        <SheetContent
          className="w-[min(92vw,25rem)] gap-0 bg-white"
          aria-label={t.openMenu}
        >
          <SheetHeader className="border-b border-line px-6 py-5">
            <SheetTitle>ABALT Academy</SheetTitle>
            <SheetDescription>{t.knowledgeCenter}</SheetDescription>
          </SheetHeader>
          <nav
            className="overflow-y-auto px-6 py-4"
            aria-label={t.publicationsNav}
          >
            {navItems.map((item) =>
              item.children ? (
                <details key={item.labelKey} className="border-b border-line">
                  <summary className="flex cursor-pointer list-none items-center justify-between py-4 text-base font-bold">
                    {t[item.labelKey]}
                    <ChevronDown aria-hidden="true" className="size-4" />
                  </summary>
                  <div className="pb-3 ps-4">
                    {item.children.map((child) => (
                      <a
                        key={child.labelKey}
                        href={child.href}
                        className="block py-2.5 text-sm text-muted-foreground"
                      >
                        {t[child.labelKey]}
                      </a>
                    ))}
                  </div>
                </details>
              ) : (
                <a
                  key={item.labelKey}
                  href={item.href}
                  className="block border-b border-line py-4 text-base font-bold"
                >
                  {t[item.labelKey]}
                </a>
              ),
            )}
          </nav>
          <div className="mt-auto grid gap-4 border-t border-line bg-surface p-6">
            <CountrySelector />
            <LanguageSelector />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}
