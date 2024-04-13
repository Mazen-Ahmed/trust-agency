export const dynamic = 'force-dynamic'

import { ContactHeader } from "components";
import { useTranslations } from "next-intl";


const ContactUs = () => {
  const contactT=useTranslations("Contact")
  const footerT=useTranslations("Footer")
  return <ContactHeader translation={{contact:contactT("title"),follow:footerT("follow")}}/>
};

export default ContactUs;

