import { AboutHeader, Mission, OurTeam, Vision } from "components";
import { useTranslations } from "next-intl";

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
