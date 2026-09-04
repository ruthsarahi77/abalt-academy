"use client";
import Image from "next/image";
import Link from "next/link";
import { CountrySelector } from "./CountrySelector";
import { LanguageSelector } from "./LanguageSelector";
import { DesktopNav } from "./navbar/DesktopNav";
import { MobileNav } from "./navbar/MobileNav";


export function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-line bg-white/95 backdrop-blur-md">
      <div className="mx-auto flex h-[4.75rem] max-w-[90rem] items-center gap-4 px-5 sm:px-8 xl:gap-6 xl:px-10">
        <Link href="/" aria-label="ABALT Academy" className="shrink-0">
          <Image
            src="/abalt-logo.svg"
            alt="ABALT Academy"
            width={136}
            height={43}
            priority
          />
        </Link>
        <div className="hidden h-full min-w-0 flex-1 justify-center lg:flex">
          <DesktopNav />
        </div>
        <div className="ms-auto hidden shrink-0 items-center gap-3 lg:flex">
          <CountrySelector compact />
          <LanguageSelector compact />
        </div>
        <div className="ms-auto lg:hidden">
          <MobileNav />
        </div>
      </div>
    </header>
  );
}
