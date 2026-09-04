"use client";
import { ChevronDown } from "lucide-react";
import { navItems } from "@/data/navigation";
import { useLocale } from "../LocaleProvider";

export function DesktopNav(){
  const{t}=useLocale();
  return <nav aria-label={t.publicationsNav} className="hidden items-stretch self-stretch lg:flex">
    {navItems.map((item)=>item.children?<details key={item.labelKey} className="nav-dropdown group relative">
      <summary className="nav-link cursor-pointer list-none">{t[item.labelKey]}<ChevronDown aria-hidden="true" className="size-3.5 transition-transform group-open:rotate-180"/></summary>
      <div className="absolute left-0 top-full z-50 min-w-64 border border-line bg-white p-2 shadow-lg">
        {item.children.map((child)=><a key={child.labelKey} href={child.href} className="block border-b border-line/70 px-4 py-3 text-sm font-semibold text-ink transition-colors last:border-0 hover:bg-surface hover:text-abalt">{t[child.labelKey]}</a>)}
      </div>
    </details>:<a key={item.labelKey} href={item.href} className="nav-link">{t[item.labelKey]}</a>)}
  </nav>;
}
