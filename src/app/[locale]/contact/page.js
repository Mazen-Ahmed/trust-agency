
import { ContactHeader } from "components";
import { useTranslations } from "next-intl";


const ContactUs = () => {
  const contactT=useTranslations("Contact")
  return <ContactHeader translation={{contact:contactT("title")}}/>
};

export default ContactUs;

