import createMiddleware from 'next-intl/middleware';

import {locales, localePrefix} from 'navigation';

 
export default createMiddleware({
  localePrefix,
  locales,

  defaultLocale: 'en',
  });
 
export const config = {
    matcher: ['/', '/(ru|ar|en)/:path*']
};