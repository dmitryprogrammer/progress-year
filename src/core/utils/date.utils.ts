export function daysInYear(year?: number) {
  const currentYear = year ?? new Date().getFullYear();
  return (currentYear % 4 === 0 && currentYear % 100 > 0) ||
    currentYear % 400 == 0
    ? 366
    : 365;
}

export function daysIntoYear(specialDate?: Date): number {
  const date = specialDate ?? new Date();
  return (
    (Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()) -
      Date.UTC(date.getFullYear(), 0, 0)) /
    24 /
    60 /
    60 /
    1000
  );
}

export function getDaysGoneFromYearInPercents(): number {
  const daysQuantityInYear: number = daysInYear();
  const currentDayNumberInYear: number = daysIntoYear(new Date());

  return Number(
    ((currentDayNumberInYear / daysQuantityInYear) * 100).toFixed(2),
  );
}
