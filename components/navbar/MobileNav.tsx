"use client";
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu } from "lucide-react";
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
  const pathname = usePathname();
  const [open, setOpen] = useState(false);
  return (
    <div className="lg:hidden">
      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger
          aria-label={t.openMenu}
          className="inline-flex size-11 items-center justify-center border border-line bg-white text-ink"
        >
          <Menu aria-hidden="true" />
        </SheetTrigger>
        <SheetContent
          className="w-[min(92vw,25rem)] gap-0 overflow-y-auto bg-white"
          aria-label={t.openMenu}
        >
          <SheetHeader className="border-b border-line px-6 py-5">
            <SheetTitle>ABALT Academy</SheetTitle>
            <SheetDescription>{t.knowledgeCenter}</SheetDescription>
          </SheetHeader>
          <nav
            className="overflow-y-auto px-6 py-4"
            aria-label={t.mainNavigation}
          >
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "page" : undefined}
                className="group block border-b border-line py-4 text-base font-bold"
              >
                <span className="decoration-abalt decoration-2 underline-offset-4 group-hover:underline group-aria-[current=page]:underline">{t[item.labelKey]}</span>
              </Link>
            ))}
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
