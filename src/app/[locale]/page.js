import { useTranslations } from "next-intl";
import { Clients, Header, Quote,Services } from "components";

export default function Home() {
  const globalT=useTranslations("Globals")
  const headerT=useTranslations("Home.header")
  const quoteT=useTranslations("Home.quote")
  const servicesT=useTranslations("Home.services")
  const clientsT=useTranslations("Home.clients")

  return (
    <main className="flex flex-col justify-between min-h-screen">
      <Header 
        translation={{
          together:headerT("together")
        }}
      />
      <Quote
         translation={{
          weBelieve:quoteT("weBelieve"),
          author:quoteT("author"),
          description:quoteT("description"),
          learnMore:globalT("learnMore")
        }}
      />
      <Services
        translation={{
            title:servicesT("title"),
            description:servicesT("description"),
            description2:servicesT("description2"),
            digitalMarketing:servicesT("digitalMarketing"),
            digitalMarketingDescription:servicesT("digitalMarketingDescription"),
            legal:servicesT("legal"),
            legalDescription:servicesT("legalDescription"),
            softwareDevelopment:servicesT("softwareDevelopment"),
            softwareDevelopmentDescription:servicesT("softwareDevelopmentDescription"),
            investment:servicesT("investment"),
            investmentDescription:servicesT("investmentDescription"),
            ecommerce:servicesT("ecommerce"),
            ecommerceDescription:servicesT("ecommerceDescription"),
        }}
      />
      <Clients
        translation={{
          title:clientsT("title"),
          description:clientsT("description"),
        }}
      />
    </main>
  );
}
