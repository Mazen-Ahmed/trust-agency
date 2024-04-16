import {Establish,  EcommerceHeader} from "components"
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

const ECommerce = ({params}) => {
  unstable_setRequestLocale(params.locale)
  const title=useTranslations("Services.e-commerce")
  const expansionT=useTranslations("Services.e-commerce.expansion")
  const establishT=useTranslations("Services.e-commerce.establishing")

  return(
  <>
  <EcommerceHeader 
    translation={{
      title:title("title"),
      expansion:expansionT("expansion"),
      subtitle1:expansionT("subtitle1"),
      subtitle2:expansionT("subtitle2"),
      subtitle3:expansionT("subtitle3"),
      smPoint1:expansionT("smPoint1"),
      smPoint1Description:expansionT("smPoint1Description"),
      smPoint2:expansionT("smPoint2"),
      smPoint2Description:expansionT("smPoint2Description"),
      smPoint3:expansionT("smPoint3"),
      smPoint3Description:expansionT("smPoint3Description"),
      ready:expansionT("ready"),
    }}
  />
  <Establish
    translation={{
      establishing:establishT("establishing"),
      subtitle1:establishT("subtitle1"),
      subtitle2:establishT("subtitle2"),
      subtitle3:establishT("subtitle3"),
      smPoint1:establishT("smPoint1"),
      smPoint1Description:establishT("smPoint1Description"),
      smPoint2:establishT("smPoint2"),
      smPoint2Description:establishT("smPoint2Description"),
      smPoint3:establishT("smPoint3"),
      smPoint3Description:establishT("smPoint3Description"),
      smPoint4:establishT("smPoint4"),
      smPoint4Description:establishT("smPoint4Description"),
      smPoint5:establishT("smPoint5"),
      smPoint5Description:establishT("smPoint5Description"),
      dont:establishT("dont"),
    }}
  />
  </>  
  )
};

export default ECommerce;
