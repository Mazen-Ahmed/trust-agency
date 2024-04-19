import {MetadataRoute} from 'next';
 
// Can be imported from shared config
const defaultLocale = 'en' ;
const locales = ['en', 'ar'] ;
 
// Adapt this as necessary
const pathnames = ['/',"/contact", '/about',"/services"];
const host = 'https://trust-agency.netlify.app';
 
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