import { DesktopApp, MobileApplications, SoftwareHeader, SoftwareQuality } from "components";
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale,getTranslations} from 'next-intl/server';


export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('services.software.title'),
    description: t('services.software.description'),
    openGraph:{
      title: t('services.software.title'),
      description: t('services.software.description'),
      images:["/web-development.png"]
    },
  };
}


const Software = ({params}) => {
  unstable_setRequestLocale(params.locale)
  const title=useTranslations("Services.software")
  const webT=useTranslations("Services.software.webDevelopment")
  const mobileT=useTranslations("Services.software.mobileApplication")
  const desktopT=useTranslations("Services.software.desktopApplication")
  const qualityT=useTranslations("Services.software.softwareQualityControl")

  return (
    <>
  <SoftwareHeader
      translation={{
        title:title("title"),
        webDevelopment:webT("webDevelopment"),
        subtitle1:webT("subtitle1"),
        subtitle2:webT("subtitle2"),
        subtitle3:webT("subtitle3"),
        smPoint1:webT("smPoint1"),
        smPoint1Description:webT("smPoint1Description"),
        smPoint2:webT("smPoint2"),
        smPoint2Description:webT("smPoint2Description"),
        smPoint3:webT("smPoint3"),
        smPoint3Description:webT("smPoint3Description"),
        smPoint4:webT("smPoint4"),
        smPoint4Description:webT("smPoint4Description"),
        letUs:webT("letUs"),
      }}
  />
  <MobileApplications
    translation={{
        mobileApplication:mobileT("mobileApplication"),
        subtitle1:mobileT("subtitle1"),
        subtitle2:mobileT("subtitle2"),
        subtitle3:mobileT("subtitle3"),
        smPoint1:mobileT("smPoint1"),
        smPoint1Description:mobileT("smPoint1Description"),
        smPoint2:mobileT("smPoint2"),
        smPoint2Description:mobileT("smPoint2Description"),
        smPoint3:mobileT("smPoint3"),
        smPoint3Description:mobileT("smPoint3Description"),
        smPoint4:mobileT("smPoint4"),
        smPoint4Description:mobileT("smPoint4Description"),
        dont:mobileT("dont"),
       }}
  />
  <DesktopApp
    translation={{
      mobileApplication:desktopT("mobileApplication"),
      subtitle1:desktopT("subtitle1"),
      subtitle2:desktopT("subtitle2"),
      subtitle3:desktopT("subtitle3"),
      smPoint1:desktopT("smPoint1"),
      smPoint1Description:desktopT("smPoint1Description"),
      smPoint2:desktopT("smPoint2"),
      smPoint2Description:desktopT("smPoint2Description"),
      smPoint3:desktopT("smPoint3"),
      smPoint3Description:desktopT("smPoint3Description"),
      smPoint4:desktopT("smPoint4"),
      smPoint4Description:desktopT("smPoint4Description"),
      moveBeyond:desktopT("moveBeyond"),
      letUs:desktopT("letUs"),
    }}
  />
  <SoftwareQuality
    translation={{
      softwareQualityControl:qualityT("softwareQualityControl"),
      subtitle1:qualityT("subtitle1"),
      subtitle2:qualityT("subtitle2"),
      subtitle3:qualityT("subtitle3"),
      smPoint1:qualityT("smPoint1"),
      smPoint1Description:qualityT("smPoint1Description"),
      smPoint2:qualityT("smPoint2"),
      smPoint2Description:qualityT("smPoint2Description"),
      smPoint3:qualityT("smPoint3"),
      smPoint3Description:qualityT("smPoint3Description"),
      smPoint4:qualityT("smPoint4"),
      smPoint4Description:qualityT("smPoint4Description"),
      smPoint5:qualityT("smPoint5"),
      smPoint5Description:qualityT("smPoint5Description"),
      weProvide:qualityT("weProvide"),
    }}
  />

    </>
  )
};

export default Software;
