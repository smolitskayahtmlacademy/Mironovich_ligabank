const MonthsNumbers = {
  Jan: '01',
  Feb: '02',
  Mar: '03',
  Apr: '04',
  May: '05',
  Jun: '06',
  Jul: '07',
  Aug: '08',
  Sep: '09',
  Oct: '10',
  Nov: '11',
  Dec: '12',
};

const getMonth = (date) => MonthsNumbers[date.substring(4, 7)];

const getDay = (date) => date.substring(8, 10);

const getYear = (date) => date.substring(11, 15);

export const adaptDateToServer = (date) => {
  const newDate = date.toString();
  return `${getYear(newDate)}-${getMonth(newDate)}-${getDay(newDate)}`;
};

export const adaptDateToClient = (date) => {
  const newDate = date.toString();
  return `${getDay(newDate)}.${getMonth(newDate)}.${getYear(newDate)}`;
};
