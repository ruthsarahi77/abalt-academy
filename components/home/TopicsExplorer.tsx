"use client";
import { ArrowUpRight } from "lucide-react";
import { topics } from "@/data/home";
import { useLocale } from "../LocaleProvider";
import { SectionHeading } from "./SectionHeading";

export function TopicsExplorer(){const{t}=useLocale();return <section className="bg-surface" aria-labelledby="topics-title"><div className="section-shell section-space"><SectionHeading title={t.exploreTopics} id="topics-title"/><div className="mt-10 grid border-t border-line md:grid-cols-2">{topics.map((topic,index)=><a key={topic.slug} href={topic.href} className={`group flex items-center justify-between gap-4 border-b border-line py-5 text-lg font-semibold transition-colors hover:text-abalt md:px-5 ${index%2===0?"md:border-e md:ps-0":"md:pe-0"}`}><span><span className="me-4 text-xs font-bold text-abalt">{String(index+1).padStart(2,"0")}</span>{t[topic.labelKey]}</span><ArrowUpRight aria-hidden="true" className="size-5 shrink-0 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5"/></a>)}</div></div></section>}
