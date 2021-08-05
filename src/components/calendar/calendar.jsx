import React from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {TODAY} from '../../constants';

import styles from './calendar.module.scss';


function Calendar({ selectedDate, onDateSelect }) {
  const DATE_FORMAT = 'dd.MM.yyyy';
  const minDate = new Date(TODAY);
  minDate.setDate(minDate.getDate() - 7);

  return (
    <DatePicker
      wrapperClassName={styles.calendar}
      selected={selectedDate}
      onChange={onDateSelect}
      dateFormat={DATE_FORMAT}
      minDate={minDate}
      maxDate={TODAY}
    />
  );
}


export default Calendar;
