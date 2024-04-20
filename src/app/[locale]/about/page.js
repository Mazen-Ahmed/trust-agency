export const dynamic = 'force-dynamic'
import { AboutHeader, Mission, OurTeam, Vision } from "components";
import { useTranslations } from "next-intl";
import {getTranslations} from 'next-intl/server';


export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('about.title'),
    openGraph:{
      title: t('about.title'),
      description: t('home.description'),
      images:["./logo-white.png"]

    },
  };
}
const About = () => {
  const aboutT=useTranslations("About")

  return (
    <>
    <AboutHeader 
      translation={{
        title:aboutT("title"),
        description:aboutT("description"),
        journey:aboutT("journey"),
        goal:aboutT("goal"),
        ourTeam:aboutT("ourTeam"),
        we:aboutT("we")
      }}
      />
    <OurTeam
    translation={{
      ourTeam:aboutT("ourTeam")
    }}
    />
    <Vision 
    translation={{
      ourVision:aboutT("ourVision"),
      vision:aboutT("vision")
    }}
    />
    <Mission
      translation={{
        ourMission:aboutT("ourMission"),
        mission:aboutT("mission")
      }}
    />
    </>
  )
};

export default About;
