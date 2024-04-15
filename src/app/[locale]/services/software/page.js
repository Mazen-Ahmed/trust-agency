import { DesktopApp, MobileApplications, SoftwareHeader, SoftwareQuality } from "components";
import {unstable_setRequestLocale} from 'next-intl/server';

const Software = ({params}) => {
  unstable_setRequestLocale(params.locale)

  return (
    <>
  <SoftwareHeader/>
  <MobileApplications/>
  <DesktopApp/>
  <SoftwareQuality/>

    </>
  )
};

export default Software;
