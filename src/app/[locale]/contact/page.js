
import { ContactHeader } from "components";


const ContactUs = () => {
  return <ContactHeader/>
};

export default ContactUs;

export async function getStaticPaths() {
  // Define an array of possible locale values (e.g., ["en", "es"])
  const locales = ["en", "ar"];

  return {
    paths: locales.map((locale) => ({ params: { locale } })),
    fallback: "blocking",  // Optional: handle missing paths (explained later)
  };
}