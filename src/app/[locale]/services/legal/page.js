import {ProvideLegal, LegalHeader,} from "components"
import {unstable_setRequestLocale} from 'next-intl/server';

const Legal = ({params}) => {
  unstable_setRequestLocale(params.locale)

  return (
    <>
    <LegalHeader/>  
    <ProvideLegal/>
    </>

)
};

export default Legal;
