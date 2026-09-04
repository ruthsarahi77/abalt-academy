"use client";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { knowledgeCategories } from "@/data/home";
import { useLocale } from "../LocaleProvider";
import { SectionHeading } from "./SectionHeading";

export function KnowledgeCategories() {
  const { t } = useLocale();
  return (
    <section className="bg-surface" aria-labelledby="knowledge-title">
      <div className="section-shell section-space">
        <SectionHeading title={t.exploreKnowledge} id="knowledge-title" />
        <div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">
          {knowledgeCategories.map((item) => (
            <a
              key={item.id}
              href={item.href}
              className="knowledge-card group border border-line bg-white"
            >
              <div className="relative aspect-[16/7] overflow-hidden">
                <Image
                  src={item.image}
                  alt=""
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
              </div>
              <div className="p-5 sm:p-6">
                <h3 className="text-xl font-semibold tracking-[-.025em]">
                  {t[item.titleKey]}
                </h3>
                <p className="mt-2 leading-6 text-muted-foreground">
                  {t[item.descriptionKey]}
                </p>
                <span className="mt-5 inline-flex items-center gap-2 text-sm font-bold text-abalt">
                  {t.explore}
                  <ArrowRight className="size-4 transition-transform group-hover:translate-x-1" />
                </span>
              </div>
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
