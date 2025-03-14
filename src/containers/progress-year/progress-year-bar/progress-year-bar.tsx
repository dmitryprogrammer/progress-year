import {useTranslation} from "react-i18next";

export function ProgressYearBar({
  yearGonePercents,
}: {
  yearGonePercents?: number;
}) {
  const {t} = useTranslation();

  if (yearGonePercents) {
    return <div>hey</div>;
  }

  return <div>{t("progressYearError")}</div>;
}
