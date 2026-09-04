"use client";
import { useMemo,useState } from "react";
import { ArrowRight } from "lucide-react";
import type { TopicSlug } from "@/data/content-types";
import type { Publication } from "@/data/publications";
import { publicationFilters } from "@/data/home";
import { PublicationCard } from "../content/PublicationCard";
import { useLocale } from "../LocaleProvider";
import { SectionHeading } from "./SectionHeading";

export function LatestPublications({publications}:{publications:Publication[]}){const{t}=useLocale();const[filter,setFilter]=useState<"all"|TopicSlug>("all");const filtered=useMemo(()=>publications.filter((item)=>filter==="all"||item.topics.includes(filter)).sort((a,b)=>b.publishedAt.localeCompare(a.publishedAt)).slice(0,6),[filter,publications]);return <section id="ultimas-publicaciones" className="scroll-mt-24 bg-white" aria-labelledby="latest-title"><div className="section-shell section-space"><SectionHeading title={t.latestPublications} id="latest-title"/><div className="mt-8 flex flex-wrap gap-2" role="group" aria-label={t.latestPublications}>{publicationFilters.map((item)=><button key={item.id} type="button" aria-pressed={filter===item.id} onClick={()=>setFilter(item.id)} className={`filter-chip ${filter===item.id?"filter-chip-active":""}`}>{t[item.labelKey]}</button>)}</div>{filtered.length?<div className="mt-8 grid gap-5 sm:grid-cols-2 sm:gap-6 lg:grid-cols-3 lg:gap-7">{filtered.map((item)=><PublicationCard key={item.id} publication={item}/>)}</div>:<p className="mt-8 border-y border-line py-10 text-muted-foreground">{t.noPublications}</p>}<a href="/publicaciones" className="mt-10 inline-flex items-center gap-2 border-b border-ink pb-1 font-bold transition-colors hover:border-abalt hover:text-abalt">{t.viewAllPublications}<ArrowRight aria-hidden="true" className="size-4"/></a></div></section>}
