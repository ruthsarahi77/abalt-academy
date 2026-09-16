"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navItems } from "@/data/navigation";
import { useLocale } from "../LocaleProvider";

export function DesktopNav() {
  const { t } = useLocale();
  const pathname = usePathname();
  return (
    <nav aria-label={t.mainNavigation} className="hidden items-stretch self-stretch lg:flex">
      {navItems.map((item) => (
        <Link key={item.href} href={item.href} className="nav-link" aria-current={pathname === item.href || pathname.startsWith(`${item.href}/`) ? "page" : undefined}>
          {t[item.labelKey]}
        </Link>
      ))}
    </nav>
  );
}
