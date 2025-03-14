import {useTranslation} from "react-i18next";

export function ProgressYearTitle({
  yearGonePercents,
}: {
  yearGonePercents: number;
}) {
  const {t} = useTranslation();

  if (yearGonePercents) {
    return <h1>{t("progressYearTitle", {percent: yearGonePercents})}</h1>;
  }

  return <h1>{t("progressYearError")}</h1>;
}
