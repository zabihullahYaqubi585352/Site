import i18n from "i18n";
import { initReactI18next } from "react-i18next";
import en from ".././locales/en.json";
import fa from ".././locales/fa.json";



i18n.use(initReactI18next).init({
    resources: {
        en: {
            translation: en,
        },
        fa: {
            translation: fa,
        },
    },
   
    fallbackLng: "en",
    interpolation: {
        escapeValue: false,
    },
});
export default i18n;
// Compare this snippet from resources/js/components/ExpanIdea.jsx: