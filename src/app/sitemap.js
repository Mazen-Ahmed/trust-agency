import {MetadataRoute} from 'next';
 
// Can be imported from shared config
const defaultLocale = 'en' ;
const locales = ['en', 'ar','ru'] ;
 
// Adapt this as necessary
const pathnames = [
  '/',
  "/contact",
  '/about',
  "/services/digital-marketing",
  "/services/investment",
  "/services/legal",
  "/services/software",
  "/services/Ecommerce",
];

const host = "https://trust-agency.netlify.app"
 
export default function sitemap() {
  function getUrl(pathname, locale) {
    return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
  }
 
  return pathnames.map((pathname) => ({
    url: getUrl(pathname, defaultLocale),
    lastModified: new Date(),
    alternates: {
      languages: Object.fromEntries(
        locales.map((locale) => [locale, getUrl(pathname, locale)])
      )
    }
  }));
}