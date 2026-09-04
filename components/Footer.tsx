"use client";
import Image from "next/image";
import { useLocale } from "./LocaleProvider";

export function Footer() {
  const { t } = useLocale();
  const groups = [
    {
      title: t.footerKnowledge,
      links: [t.publicationsNav, t.articles, t.guides, t.podcast],
    },
    {
      title: t.footerAcademy,
      links: [t.courses, t.webinars, t.programs, t.events],
    },
    {
      title: t.footerCompany,
      links: [t.about, t.internationalEyebrow, t.footerContact],
    },
  ];
  return (
    <footer className="bg-[#17191a] text-white">
      <div className="section-shell py-14 sm:py-18">
        <div className="border-b border-white/15 pb-10 sm:pb-12">
          <div className="grid gap-12 lg:grid-cols-[1.2fr_2fr]">
            <div>
              <Image
                src="/abalt-logo.svg"
                alt="ABALT Ecuador"
                width={150}
                height={47}
                className="brightness-0 invert"
              />
              <p className="mt-6 max-w-sm text-sm leading-7 text-white/60">
                {t.services}
              </p>
              <p className="mt-5 max-w-md text-[0.72rem] leading-5 text-white/45 sm:text-xs sm:leading-6">
                {t.networkDisclaimer}
              </p>
            </div>
            <div className="grid gap-8 sm:grid-cols-3">
              {groups.map((group) => (
                <div key={group.title}>
                  <h2 className="text-xs font-bold uppercase tracking-[.16em] text-white/50">
                    {group.title}
                  </h2>
                  <ul className="mt-5 space-y-3">
                    {group.links.map((link) => (
                      <li key={link}>
                        <a
                          href="#"
                          className="text-sm text-white/80 hover:text-white"
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-4 pt-7 text-xs text-white/50 sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} ABALT Ecuador. {t.rights}
          </p>
          <div className="flex gap-5">
            <a href="/privacidad" className="hover:text-white">
              {t.privacy}
            </a>
            <a href="/accesibilidad" className="hover:text-white">
              {t.accessibility}
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
