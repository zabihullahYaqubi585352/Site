import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';
import en from '../../js/Lang/En/Translation.json';
import fa from '../../js/Lang/Fa/Translation.json';
i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        fa: {
            translation: fa,
        },
    },

    fallbackLng: 'fa',
    interpolation: {
        escapeValue: false,
    },
});
export default i18n;
// Compare this snippet from resources/js/components/ExpanIdea.jsx:
