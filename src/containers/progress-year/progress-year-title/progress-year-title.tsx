import {useTranslation} from "react-i18next";

export function ProgressYearTitle() {
  const {t} = useTranslation();
  return <h1>{t("progressYearTitle", {percent: 30})}</h1>;
}
