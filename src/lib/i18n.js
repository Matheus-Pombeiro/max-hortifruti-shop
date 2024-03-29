import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import EN from "../locale/en.json";
import PT from "../locale/pt.json";

i18n.use(initReactI18next).init({
    resources: {
        en: {
            ...EN
        },
        pt: {
            ...PT
        }
    },
    lng: "en",
    interpolation: {
        escapeValue: false
    },
});

export default i18n;