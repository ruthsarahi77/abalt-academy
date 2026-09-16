import type{Metadata}from"next";import{Open_Sans}from"next/font/google";import"./globals.css";import{LocaleProvider}from"@/components/LocaleProvider";
import localFont from "next/font/local";
import { CookieConsent } from "@/components/CookieConsent";

const openSans=Open_Sans({variable:"--font-open-sans",subsets:["latin"],display:"swap"});
const guardianSans = localFont({
  variable: "--font-guardian-sans",
  display: "swap",
  // Load only the faces used on the page, instead of preloading all six.
  preload: false,
  src: [
    { path: "../public/fonts/GuardianSansLight.woff", weight: "300", style: "normal" },
    { path: "../public/fonts/GuardianSansRegular.woff", weight: "400", style: "normal" },
    { path: "../public/fonts/GuardianSansMediumIt.woff", weight: "500", style: "italic" },
    { path: "../public/fonts/GuardianSansSemibold.woff", weight: "600", style: "normal" },
    { path: "../public/fonts/GuardianSansBold.woff", weight: "700", style: "normal" },
    { path: "../public/fonts/GuardianSansBlack.woff", weight: "900", style: "normal" },
  ],
});
export const metadata:Metadata={metadataBase:new URL("https://academy.abaltecuador.com"),title:{default:"ABALT Academy | Conocimiento que genera valor",template:"%s | ABALT Academy"},description:"Publicaciones, boletines, análisis y documentos técnicos de auditoría, impuestos, NIIF y consultoría desarrollados por ABALT Ecuador.",keywords:["ABALT Academy","auditoría Ecuador","impuestos Ecuador","NIIF","consultoría empresarial"],alternates:{canonical:"/"},openGraph:{title:"ABALT Academy",description:"Conocimiento que genera valor para decisiones empresariales informadas.",url:"/",siteName:"ABALT Academy",locale:"es_EC",type:"website"},robots:{index:true,follow:true}};
export default function RootLayout({children}:LayoutProps<"/">){return <html lang="es" className={`${openSans.variable} ${guardianSans.variable} scroll-smooth`}><body><LocaleProvider>{children}</LocaleProvider><CookieConsent /></body></html>}
