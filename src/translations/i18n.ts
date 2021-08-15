import i18n from "i18next";
import { initReactI18next } from "react-i18next";
import LanguageDetector from "i18next-browser-languagedetector";

import { TRANSLATIONS_EN } from "./en/translations";
import { TRANSLATIONS_ZH } from "./zh/translations";
import { TRANSLATIONS_FR } from "./fr/translations";

i18n
  .use(LanguageDetector)
  .use(initReactI18next)
  .init({
    resources: {
      enUS: {
        translation: TRANSLATIONS_EN,
      },
      zhCN: {
        translation: TRANSLATIONS_ZH,
      },
      frFR: {
        translation: TRANSLATIONS_FR,
      },
    },
  });

export default i18n;
