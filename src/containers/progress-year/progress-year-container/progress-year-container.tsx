import {useEffect, useState} from "react";
import {ProgressYearTitle} from "../progress-year-title/progress-year-title";
import {getDaysGoneFromYearInPercents} from "@core/utils";
import {ProgressYearBar} from "../progress-year-bar/progress-year-bar";

export function ProgressYearContainer() {
  const [yearGonePercents, setYearGonePercents] = useState<number>(0);
  useEffect(() => {
    setYearGonePercents(getDaysGoneFromYearInPercents());
  }, [yearGonePercents]);
  return (
    <div className="progress-year-container">
      <ProgressYearTitle yearGonePercents={yearGonePercents} />
      <ProgressYearBar yearGonePercents={yearGonePercents} />
    </div>
  );
}
