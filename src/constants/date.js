export const DATE = new window.Date();

export const MONTH_NAMES = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun',
  'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

export const DAY_NAMES = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

export const MONTH_NAME = MONTH_NAMES[DATE.getMonth()];

export const DAY_NUM = DATE.getDate();

export const DAY_NAME = DAY_NAMES[DATE.getDay()];
