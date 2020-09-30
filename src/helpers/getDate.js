import { DAY_NAMES, MONTH_NAMES } from 'constants/date';

const getDate = date => {
  const DATE = new window.Date(date);
  const dayName = DAY_NAMES[DATE.getDay()];
  const monthName = MONTH_NAMES[DATE.getMonth()];
  const dayNum = DATE.getDate();
  const completeDate = `${dayName}, ${dayNum} ${monthName}`;

  return completeDate;
};

export default getDate;
