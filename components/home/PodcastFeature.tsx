"use client";
import { ArrowRight, Headphones, Play } from "lucide-react";
import type { AcademyContent } from "@/data/content-types";
import { localizeContent } from "@/data/content-types";
import { useLocale } from "../LocaleProvider";

const platforms = [
  { name: "Spotify", href: "https://spotify.com" },
  { name: "YouTube", href: "https://youtube.com" },
  { name: "Apple Podcasts", href: "https://podcasts.apple.com" },
];
export function PodcastFeature({ episode }: { episode: AcademyContent }) {
  const { t, language } = useLocale();
  const content = localizeContent(episode, language);
  return (
    <section
      id="podcast"
      className="scroll-mt-24 bg-ink text-white"
      aria-labelledby="podcast-title"
    >
      <div className="section-shell section-space">
        <div className="grid overflow-hidden border border-white/20 lg:grid-cols-[.8fr_1.2fr]">
          <div className="podcast-cover relative flex min-h-80 items-center justify-center border-b border-white/20 lg:min-h-[30rem] lg:border-b-0 lg:border-e">
            <div className="relative flex size-40 items-center justify-center rounded-full border border-white/40">
              <Headphones aria-hidden="true" className="size-16" />
              <span className="absolute -bottom-4 -end-4 flex size-14 items-center justify-center rounded-full bg-abalt">
                <Play aria-hidden="true" className="size-5 fill-current" />
              </span>
            </div>
          </div>
          <div className="flex flex-col justify-center p-8 sm:p-12 lg:p-16">
            <p className="section-eyebrow text-white/70">ABALT Podcast</p>
            <p className="mt-5 text-xs font-bold uppercase tracking-[.18em] text-[#ff8095]">
              {t.newEpisode}
            </p>
            <h2
              id="podcast-title"
              className="mt-4 max-w-3xl text-3xl font-semibold leading-tight tracking-[-.04em] sm:text-5xl"
            >
              {content.title}
            </h2>
            <p className="mt-6 max-w-2xl text-lg leading-8 text-white/70">
              {content.description}
            </p>
            <a
              href={episode.url ?? "#"}
              className="mt-8 inline-flex items-center gap-2 self-start border-b border-white pb-1 font-bold"
            >
              {t.listenEpisode}
              <ArrowRight aria-hidden="true" className="size-4" />
            </a>
            <div className="mt-10 border-t border-white/20 pt-6">
              <p className="text-xs font-bold uppercase tracking-[.15em] text-white/50">
                {t.availableOn}
              </p>
              <div className="mt-4 flex flex-wrap gap-x-6 gap-y-3">
                {platforms.map((platform) => (
                  <a
                    key={platform.name}
                    href={platform.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white/80 hover:text-white"
                  >
                    {platform.name}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
