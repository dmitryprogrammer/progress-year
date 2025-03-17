import {useTranslation} from "react-i18next";

export function ProgressYearTitle({
  yearGonePercents,
}: {
  yearGonePercents: number;
}) {
  const {t} = useTranslation();

  if (yearGonePercents) {
    return (
      <h1 className="progress-year-title">
        {t("progressYearTitle", {percent: yearGonePercents})}
      </h1>
    );
  }

  return <h1 className="progress-year-title">{t("progressYearError")}</h1>;
}
