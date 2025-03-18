import i18n from "i18next";
import I18NextHttpBackend from "i18next-http-backend";
import {initReactI18next} from "react-i18next";

export enum LANGUAGES {
  RU = "ru",
  EN = "en",
}

export const SUPPORTED_LANGUAGES = [LANGUAGES.RU, LANGUAGES.EN];

export function detectDefaultLanguage(): LANGUAGES {
  const systemLocale = Intl.DateTimeFormat().resolvedOptions().locale;

  return systemLocale.indexOf("ru") >= 0 ? LANGUAGES.RU : LANGUAGES.EN;
}

i18n
  .use(I18NextHttpBackend)
  .use(initReactI18next)
  .init({
    lng: LANGUAGES.RU,
    backend: {
      loadPath: "../assets/i18n/{{lng}}/translation.json",
    },
    supportedLngs: SUPPORTED_LANGUAGES,
    interpolation: {escapeValue: false},
  });
