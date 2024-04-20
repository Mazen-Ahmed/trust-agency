 
const defaultLocale = 'en' ;
const locales = ['en', 'ar','ru'] ;
 
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

const host = "https://trust-agency.netlify.app";

export default function sitemap() {
  return pathnames.map((pathname) => {
    return locales.map((locale) => ({
      url: getUrl(pathname, locale),
      lastModified: new Date(),
      alternates: {
        languages: locales.map((otherLocale) => ({
          'xhtml:link': {
            '@rel': 'alternate',
            '@hreflang': otherLocale,
            '@href': getUrl(pathname, otherLocale),
          },
        })),
      },
    }));
  }).flat();
}

function getUrl(pathname, locale) {
  return `${host}/${locale}${pathname === '/' ? '' : pathname}`;
}