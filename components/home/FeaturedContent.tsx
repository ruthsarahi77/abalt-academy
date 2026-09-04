"use client";
import { ArrowRight } from "lucide-react";
import type { Publication } from "@/data/publications";
import { getContentUrl,localizeContent } from "@/data/content-types";
import { formatContentDate } from "@/lib/content";
import { ContentVisual } from "../content/ContentVisual";
import { useLocale } from "../LocaleProvider";
import { SectionHeading } from "./SectionHeading";

export function FeaturedContent({publications}:{publications:Publication[]}){const{t,language}=useLocale();const featured=publications.filter((item)=>item.featured).sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt)).slice(0,2);return <section className="bg-white" aria-labelledby="featured-title"><div className="section-shell section-space"><SectionHeading title={t.featured} id="featured-title"/><div className="mt-10 grid gap-px bg-line lg:grid-cols-2">{featured.map((item)=>{const content=localizeContent(item,language);return <article key={item.id} className="group bg-white"><a href={getContentUrl(item)} target={item.pdfUrl?"_blank":undefined} rel={item.pdfUrl?"noopener noreferrer":undefined} className="block"><ContentVisual image={item.image} alt={item.imageAlt??content.title} type={item.contentType} className="aspect-[16/9]"/><div className="p-7 sm:p-9"><p className="content-meta">{content.category} <span aria-hidden="true">·</span> {formatContentDate(item.publishedAt,language,"month")}</p><h3 className="mt-4 text-2xl font-semibold leading-tight tracking-[-.035em] sm:text-3xl">{content.title}</h3><p className="mt-4 leading-7 text-muted-foreground">{content.description}</p><span className="mt-6 inline-flex items-center gap-2 font-bold text-abalt">{t.readPublication}<ArrowRight aria-hidden="true" className="size-4 transition-transform group-hover:translate-x-1"/></span></div></a></article>})}</div></div></section>}
