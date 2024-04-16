import {ProvideLegal, LegalHeader,} from "components"
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

const Legal = ({params}) => {
  unstable_setRequestLocale(params.locale)
  const title=useTranslations("Services.legal")
  const establishT=useTranslations("Services.legal.establishingCompanies")
  const provideT=useTranslations("Services.legal.providingLegalAdvice")

  return (
    <>
    <LegalHeader 
        translation={{
          title:title("title"),
          establishingCompanies:establishT("establishingCompanies"),
          subtitle1:establishT("subtitle1"),
          subtitle2:establishT("subtitle2"),
          subtitle3:establishT("subtitle3"),
          smPoint1:establishT("smPoint1"),
          smPoint1Description:establishT("smPoint1Description"),
          smPoint2:establishT("smPoint2"),
          smPoint2Description:establishT("smPoint2Description"),
          smPoint3:establishT("smPoint3"),
          smPoint3Description:establishT("smPoint3Description"),
          start:establishT("start"),
          contact:establishT("contact"),
        }}
    />  
    <ProvideLegal
      translation={{
        providingLegalAdvice:provideT("providingLegalAdvice"),
        subtitle1:provideT("subtitle1"),
        subtitle2:provideT("subtitle2"),
        smPoint1:provideT("smPoint1"),
        smPoint1Description:provideT("smPoint1Description"),
        smPoint2:provideT("smPoint2"),
        smPoint2Description:provideT("smPoint2Description"),
        smPoint3:provideT("smPoint3"),
        smPoint3Description:provideT("smPoint3Description"),
        dont:provideT("dont"),
      }}
    />
    </>

)
};

export default Legal;
