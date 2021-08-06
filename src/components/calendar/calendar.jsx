import React from 'react';
import PropTypes from 'prop-types';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import {TODAY} from '../../constants';

import styles from './calendar.module.scss';


function Calendar({ selectedDate=TODAY, onDateSelect }) {
  const DATE_FORMAT = 'dd.MM.yyyy';
  const DAYS_PER_WEEK = 7;
  const minDate = new Date(TODAY);
  minDate.setDate(minDate.getDate() - DAYS_PER_WEEK);

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


Calendar.propTypes = {
  selectedDate: PropTypes.oneOfType([PropTypes.string, PropTypes.instanceOf(Date)]),
  onDateSelect: PropTypes.func.isRequired,
};

export default Calendar;
