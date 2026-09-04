import { Footer } from "@/components/Footer";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { FeaturedContent } from "@/components/home/FeaturedContent";
import { GlobalSearch } from "@/components/home/GlobalSearch";
import { InternationalSection } from "@/components/home/InternationalSection";
import { KnowledgeCategories } from "@/components/home/KnowledgeCategories";
import { LatestPublications } from "@/components/home/LatestPublications";
import { PodcastFeature } from "@/components/home/PodcastFeature";
import { TopicsExplorer } from "@/components/home/TopicsExplorer";
import { academyContent,podcastEpisodes } from "@/data/academy-content";
import { publications } from "@/data/publications";

export default function Home(){const structuredData={"@context":"https://schema.org","@type":"CollectionPage",name:"ABALT Academy",description:"Centro de conocimiento de ABALT Ecuador",publisher:{"@type":"Organization",name:"ABALT Ecuador",url:"https://abaltecuador.com/"},mainEntity:{"@type":"ItemList",itemListElement:academyContent.map((item,index)=>({"@type":"ListItem",position:index+1,name:item.title,url:item.url??item.pdfUrl??`https://academy.abaltecuador.com/contenido/${item.slug}`}))}};return <><script type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(structuredData)}}/><Header/><main><Hero/><GlobalSearch content={academyContent}/><FeaturedContent publications={publications}/><KnowledgeCategories/><LatestPublications publications={publications}/><PodcastFeature episode={podcastEpisodes[0]}/><TopicsExplorer/><InternationalSection/></main><Footer/></>}
