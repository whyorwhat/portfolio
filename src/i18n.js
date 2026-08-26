import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import en from './locales/en/replyia.json';
import it from './locales/it/replyia.json';
import tiseguoEn from './locales/en/tiseguo.json';
import tiseguoIt from './locales/it/tiseguo.json';

i18n
    .use(initReactI18next)
    .init({
        resources: {
            en: { whatsapp: en, tiseguo: tiseguoEn },
            it: { whatsapp: it, tiseguo: tiseguoIt },
        },
        lng: 'en',              // lingua iniziale
        fallbackLng: 'en',
        ns: ['whatsapp', 'tiseguo'],
        defaultNS: 'whatsapp',
        interpolation: {
            escapeValue: false,
        },
    });

export default i18n;
