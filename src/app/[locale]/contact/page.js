export const dynamic = 'force-dynamic'
import {getTranslations} from 'next-intl/server';
import { ContactHeader } from "components";
import { useTranslations } from "next-intl";

export async function generateMetadata({params: {locale}}) {
  const t = await getTranslations({locale, namespace: 'Metadata'});
 
  return {
    title: t('contact.title'),
    openGraph:{
      title: t('contact.title'),
      description: t('home.description'),
    },
  };
}
const ContactUs = () => {
  const contactT=useTranslations("Contact")
  const footerT=useTranslations("Footer")
  const validationT=useTranslations("validation")
  return   <ContactHeader translation={{  
    name:contactT("name"),
    email:contactT("email"),
    contact:contactT("title"),
    phone:contactT("phone"),
    message:contactT("message"),
    sendMessage:contactT("sendMessage"),
    follow:footerT("follow"),
    invalid:validationT("invalid"),
    thanks:validationT("thanks"),
    messageNotSent:validationT("messageNotSent"),
  }}/>
};

export default ContactUs;

