import i18next from 'i18next';
import enNs1 from './locales/en/ns1.json';
import enNs2 from './locales/en/ns2.json';
import deNs1 from './locales/de/ns1.json';
import deNs2 from './locales/de/ns2.json';

export const defaultNS = 'ns1';

i18next.init({
  debug: true,
  fallbackLng: 'en',
  defaultNS,
  resources: {
    en: {
      ns1: enNs1,
      ns2: enNs2,
    },
    de: {
      ns1: deNs1,
      ns2: deNs2,
    },
  },
});

export default i18next;
