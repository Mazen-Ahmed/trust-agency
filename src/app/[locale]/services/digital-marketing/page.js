import {
   ContentCreation,
    DigitalMarketingHeader,
    GraphicDesign,
    MotionGraphics,
    PaidAds,
    Photography,
    Seo,
    SocialMediaManagement,
    Videography
  } from "components";
  import {unstable_setRequestLocale} from 'next-intl/server';
import { useTranslations } from "next-intl";
const DigitalMarketing = ({params}) => {
  unstable_setRequestLocale(params.locale)

  const title=useTranslations("Services.digitalMarketingData")
  const brandingT=useTranslations("Services.digitalMarketingData.branding")
  const socialMediaManagementT=useTranslations("Services.digitalMarketingData.socialMediaManagement")
  const contentCreationT=useTranslations("Services.digitalMarketingData.contentCreation")
  const graphicDesignT=useTranslations("Services.digitalMarketingData.graphicDesign")
  const paidAdsT=useTranslations("Services.digitalMarketingData.paidAds")
  const seoT=useTranslations("Services.digitalMarketingData.seo")
  const photographyT=useTranslations("Services.digitalMarketingData.photography")
  const videographyT=useTranslations("Services.digitalMarketingData.videography")
  const videoMotionT=useTranslations("Services.digitalMarketingData.videoMotion")
  return (
  <>
  <DigitalMarketingHeader 
    translation={{
        title:title("title"),
        branding:brandingT("branding"),
        unleash:brandingT("unleash"),
        brandingDescription:brandingT("brandingDescription"),
        brandingPoint1:brandingT("brandingPoint1"),
        brandingPoint2:brandingT("brandingPoint2"),
        brandingPoint3:brandingT("brandingPoint3"),
        brandingPoint4:brandingT("brandingPoint4"),
        crafting:brandingT("crafting"),
        ready:brandingT("ready"),
    }}
  />
  <SocialMediaManagement 
    translation={{
        socialMediaManagement:socialMediaManagementT("socialMediaManagement"),
        subtitle1:socialMediaManagementT("subtitle1"),
        subtitle2:socialMediaManagementT("subtitle2"),
        subtitle3:socialMediaManagementT("subtitle3"),
        smPoint1:socialMediaManagementT("smPoint1"),
        smPoint1Description:socialMediaManagementT("smPoint1Description"),
        smPoint2:socialMediaManagementT("smPoint2"),
        smPoint2Description:socialMediaManagementT("smPoint2Description"),
        smPoint3:socialMediaManagementT("smPoint3"),
        smPoint3Description:socialMediaManagementT("smPoint3Description"),
        smPoint4:socialMediaManagementT("smPoint4"),
        smPoint4Description:socialMediaManagementT("smPoint4Description"),
        freeUp:socialMediaManagementT("freeUp"),
        handleSm:socialMediaManagementT("handleSm"),
    }}
  />
  <ContentCreation
    translation={{
        contentCreation:contentCreationT("contentCreation"),
        subtitle1:contentCreationT("subtitle1"),
        subtitle2:contentCreationT("subtitle2"),
        subtitle3:contentCreationT("subtitle3"),
        smPoint1:contentCreationT("smPoint1"),
        smPoint1Description:contentCreationT("smPoint1Description"),
        smPoint2:contentCreationT("smPoint2"),
        smPoint2Description:contentCreationT("smPoint2Description"),
        smPoint3:contentCreationT("smPoint3"),
        smPoint3Description:contentCreationT("smPoint3Description"),
        smPoint4:contentCreationT("smPoint4"),
        smPoint4Description:contentCreationT("smPoint4Description"),
        stopStruggle:contentCreationT("stopStruggle"),
    }}
  />
  <GraphicDesign
    translation={{
      graphicDesign:graphicDesignT("graphicDesign"),
      subtitle1:graphicDesignT("subtitle1"),
      subtitle2:graphicDesignT("subtitle2"),
      smPoint1:graphicDesignT("smPoint1"),
      smPoint1Description:graphicDesignT("smPoint1Description"),
      smPoint2:graphicDesignT("smPoint2"),
      smPoint2Description:graphicDesignT("smPoint2Description"),
      smPoint3:graphicDesignT("smPoint3"),
      smPoint3Description:graphicDesignT("smPoint3Description"),
      stopStruggle:graphicDesignT("stopStruggle"),
    }}
  />
  <PaidAds 
    translation={{
      paidAds:paidAdsT("paidAds"),
      subtitle1:paidAdsT("subtitle1"),
      subtitle2:paidAdsT("subtitle2"),
      smPoint1:paidAdsT("smPoint1"),
      smPoint1Description:paidAdsT("smPoint1Description"),
      smPoint2:paidAdsT("smPoint2"),
      smPoint2Description:paidAdsT("smPoint2Description"),
      smPoint3:paidAdsT("smPoint3"),
      smPoint3Description:paidAdsT("smPoint3Description"),
      smPoint4:paidAdsT("smPoint4"),
      smPoint4Description:paidAdsT("smPoint4Description"),
      stopWasting:paidAdsT("stopWasting"),
    }}
  />
  <Seo 
    translation={{
      seo:seoT("seo"),
      subtitle1:seoT("subtitle1"),
      subtitle2:seoT("subtitle2"),
      subtitle3:seoT("subtitle3"),
      smPoint1:seoT("smPoint1"),
      smPoint1Description:seoT("smPoint1Description"),
      smPoint2:seoT("smPoint2"),
      smPoint2Description:seoT("smPoint2Description"),
      smPoint3:seoT("smPoint3"),
      smPoint3Description:seoT("smPoint3Description"),
      smPoint4:seoT("smPoint4"),
      smPoint4Description:seoT("smPoint4Description"),
      stopWaiting:seoT("stopWaiting"),
    }}
  />
  <Photography 
    translation={{
      photography:photographyT("photography"),
      subtitle1:photographyT("subtitle1"),
      subtitle2:photographyT("subtitle2"),
      subtitle3:photographyT("subtitle3"),
      smPoint1:photographyT("smPoint1"),
      smPoint1Description:photographyT("smPoint1Description"),
      smPoint2:photographyT("smPoint2"),
      smPoint2Description:photographyT("smPoint2Description"),
      smPoint3:photographyT("smPoint3"),
      smPoint3Description:photographyT("smPoint3Description"),
      smPoint4:photographyT("smPoint4"),
      smPoint4Description:photographyT("smPoint4Description"),
      ready:photographyT("ready"),
    }}
  />
  <Videography 
      translation={{
        videography:videographyT("videography"),
        subtitle1:videographyT("subtitle1"),
        subtitle2:videographyT("subtitle2"),
        smPoint1:videographyT("smPoint1"),
        smPoint1Description:videographyT("smPoint1Description"),
        smPoint2:videographyT("smPoint2"),
        smPoint2Description:videographyT("smPoint2Description"),
        smPoint3:videographyT("smPoint3"),
        smPoint3Description:videographyT("smPoint3Description"),
        goBeyond:videographyT("goBeyond"),
        letUs:videographyT("letUs"),
      }}
  />
  <MotionGraphics
     translation={{
        videoMotion:videoMotionT("videoMotion"),
        subtitle1:videoMotionT("subtitle1"),
        subtitle2:videoMotionT("subtitle2"),
        smPoint1:videoMotionT("smPoint1"),
        smPoint1Description:videoMotionT("smPoint1Description"),
        smPoint2:videoMotionT("smPoint2"),
        smPoint2Description:videoMotionT("smPoint2Description"),
        smPoint3:videoMotionT("smPoint3"),
        smPoint3Description:videoMotionT("smPoint3Description"),
        letUs:videoMotionT("letUs")
      }}
    />
  </>
);
};

export default DigitalMarketing;

