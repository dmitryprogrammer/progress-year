import {Progress} from "antd";
import {useTranslation} from "react-i18next";

export function ProgressYearBar({
  yearGonePercents,
}: {
  yearGonePercents?: number;
}) {
  const {t} = useTranslation();

  if (yearGonePercents) {
    return (
      <Progress
        percent={yearGonePercents}
        steps={0}
        className="progress-year-bar"
        size={[null, 50]}
        showInfo={false}
      />
    );
  }

  return <div>{t("progressYearError")}</div>;
}
