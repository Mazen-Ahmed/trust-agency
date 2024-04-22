import { Footer, Navbar } from "components";
import { Poppins,Tajawal } from "next/font/google";
import ClientProviders from "providers/use-client-providers";
import { useTranslations } from 'next-intl';
import {unstable_setRequestLocale} from 'next-intl/server';

import "styles/globals.css";

const poppins = Poppins({weight:"400", subsets: ["latin"] });
const tajawal = Tajawal({weight:"400", subsets: ["arabic"] });


export const metadata = {
  title: {
    default:"Trust Agency",
    template:"%s | Trust Agency",
    twitter:{
      card:"summary_large_image"
    },
    keywords:[
    "Marketing Strategy",
    " Branding Solutions",
    "Digital Marketing",
    "Social Media Management",
    "Content Creation",
    "Search Engine Optimization (SEO)",
    "Pay-Per-Click (PPC)", 
    "Advertising",
    "Email Marketing",
    "Website Development",
    "Graphic Design",
    "Video Production",
    "Influencer Marketing",
    "Brand Awareness",
    "Lead Generation",
    "Conversion Optimization",
    "Analytics and Reporting",
    "Customer Engagement",
    "Reputation Management",
    "Target Audience Analysis",
    "Marketing Automation",
    "Software Engineering",
    "Legal Services",
    "Application Development",
    "IT Consulting",
    "Software Maintenance",
    "Compliance Services",
    "Contract Drafting",
    "Intellectual Property Protection",
    "Regulatory Compliance",
    "Legal Consultation",
    ]
  },
};

export default function RootLayout({ children,params }) {
  
  unstable_setRequestLocale(params.locale);

  const translationT=useTranslations("Navbar")

  const globalsT=useTranslations("Globals")

  const footerT=useTranslations("Footer")
  
  return (
    <html dir={params.locale==="ar"?"rtl":"ltr"} lang={params.locale} >
      <body className={params.locale==="ar"?tajawal.className:poppins.className}>

        <Navbar 
          locale={params.locale}
          translation={{
            home:translationT("home"),
            services:translationT("services"),
            about:translationT("about"),
            contact:translationT("contact"),
            languages:globalsT("languages"),
            close:globalsT("close")
            }}
        />
        <ClientProviders>
          {children}
        </ClientProviders>
        <Footer
         translation={{
          follow:footerT("follow"),
          links:footerT("links"),
          copyrights:footerT("copyrights"),
          together:footerT("together"),
          home:translationT("home"),
          services:translationT("services"),
          about:translationT("about"),
          contact:translationT("contact"),
        }}/>
      </body>
    </html>
  );
}

const locales = ['en', 'ar',"ru"];
 
export function generateStaticParams() {
  return locales.map((locale) => ({locale}));
}