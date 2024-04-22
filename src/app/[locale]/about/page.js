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
      ourTeam:aboutT("ourTeam"),
      name1:aboutT("ourTeamMembers.name1"),
      role1:aboutT("ourTeamMembers.role1"),
      description1:aboutT("ourTeamMembers.description1"),
      name2:aboutT("ourTeamMembers.name2"),
      role2:aboutT("ourTeamMembers.role2"),
      description2:aboutT("ourTeamMembers.description2"),
      name3:aboutT("ourTeamMembers.name3"),
      role3:aboutT("ourTeamMembers.role3"),
      description3:aboutT("ourTeamMembers.description3"),
      name4:aboutT("ourTeamMembers.name4"),
      role4:aboutT("ourTeamMembers.role4"),
      description4:aboutT("ourTeamMembers.description4"),
      name5:aboutT("ourTeamMembers.name5"),
      role5:aboutT("ourTeamMembers.role5"),
      description5:aboutT("ourTeamMembers.description5"),
      name6:aboutT("ourTeamMembers.name6"),
      role6:aboutT("ourTeamMembers.role6"),
      description6:aboutT("ourTeamMembers.description6"),
      name7:aboutT("ourTeamMembers.name7"),
      role7:aboutT("ourTeamMembers.role7"),
      description7:aboutT("ourTeamMembers.description7"),
      name8:aboutT("ourTeamMembers.name8"),
      role8:aboutT("ourTeamMembers.role8"),
      description8:aboutT("ourTeamMembers.description8"),
      name9:aboutT("ourTeamMembers.name9"),
      role9:aboutT("ourTeamMembers.role9"),
      description9:aboutT("ourTeamMembers.description9"),
      name10:aboutT("ourTeamMembers.name10"),
      role10:aboutT("ourTeamMembers.role10"),
      description10:aboutT("ourTeamMembers.description10"),
      name11:aboutT("ourTeamMembers.name11"),
      role11:aboutT("ourTeamMembers.role11"),
      description11:aboutT("ourTeamMembers.description11"),
      name12:aboutT("ourTeamMembers.name12"),
      role12:aboutT("ourTeamMembers.role12"),
      description12:aboutT("ourTeamMembers.description12"),
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
