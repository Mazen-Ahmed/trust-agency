export const dynamic = 'force-dynamic'

import { ContactHeader } from "components";
import { useTranslations } from "next-intl";


const ContactUs = () => {
  const contactT=useTranslations("Contact")
  const footerT=useTranslations("Footer")
  return   <ContactHeader translation={{  
    name:contactT("name"),
    email:contactT("email"),
    contact:contactT("title"),
    phone:contactT("phone"),
    message:contactT("message"),
    sendMessage:contactT("sendMessage"),
    follow:footerT("follow")
  }}/>
};

export default ContactUs;

