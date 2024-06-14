
import { createI18n } from 'vue-i18n';

// /**
//  * messages are generated using vite-plugin-i18n
//  * Each .json file located in the ./locales directory is registered in messages.
//  * @see https://github.com/intlify/bundle-tools/tree/main/packages/vite-plugin-vue-i18n
//  */
import en from '@/locales/en.json';
import tr from '@/locales/tr.json';


  const i18n = createI18n({
    locale: 'tr', // Default locale (Turkish)
    fallbackLocale: 'en', // Fallback locale if translations are missing
    messages: {
      en,
      tr,
    },
    legacy: false,
  });

  export default i18n;

