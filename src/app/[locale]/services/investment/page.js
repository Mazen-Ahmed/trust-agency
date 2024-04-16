import {Companies, InvestmentHeader,  StockMarket} from "components"
import { useTranslations } from "next-intl";
import {unstable_setRequestLocale} from 'next-intl/server';

const Investment = ({params}) => {
  unstable_setRequestLocale(params.locale)

  const title=useTranslations("Services.investment")
  const financialConsultingT=useTranslations("Services.investment.financialConsulting")
  const stockMarketT=useTranslations("Services.investment.stockMarket")
  const companiesT=useTranslations("Services.investment.companies")
  return (
        <>
        <InvestmentHeader 
          translation={{
            title:title("title"),
            financialConsulting:financialConsultingT("financialConsulting"),
            subtitle1:financialConsultingT("subtitle1"),
            smPoint1:financialConsultingT("smPoint1"),
            smPoint1Description:financialConsultingT("smPoint1Description"),
            smPoint2:financialConsultingT("smPoint2"),
            smPoint2Description:financialConsultingT("smPoint2Description"),
          }}
        />  
        <StockMarket
          translation={{
            stockMarket:stockMarketT("stockMarket"),
            subtitle1:stockMarketT("subtitle1"),
            subtitle2:stockMarketT("subtitle2"),
            smPoint1:stockMarketT("smPoint1"),
            smPoint2:stockMarketT("smPoint2"),
            smPoint3:stockMarketT("smPoint3"),
            smPoint4:stockMarketT("smPoint4"),
            smPoint5:stockMarketT("smPoint5"),
            navigate:stockMarketT("navigate"),
          }}
        />  
        <Companies 
          translation={{
            companies:companiesT("companies"),
            subtitle1:companiesT("subtitle1"),
            smPoint1:companiesT("smPoint1"),
            smPoint2:companiesT("smPoint2"),
            smPoint3:companiesT("smPoint3"),
            smPoint4:companiesT("smPoint4"),
            smPoint5:companiesT("smPoint5"),
            turn:companiesT("turn"),
          }}
        />
        </>
)};

export default Investment;
