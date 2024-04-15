import {Establish,  EcommerceHeader} from "components"
import {unstable_setRequestLocale} from 'next-intl/server';

const ECommerce = ({params}) => {
  unstable_setRequestLocale(params.locale)

  return(
  <>
  <EcommerceHeader/>
  <Establish/>
  </>  
  )
};

export default ECommerce;
