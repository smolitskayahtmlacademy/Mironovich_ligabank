import React from 'react';
import PropTypes from 'prop-types';
import HistoryItem from '../history-item/history-item';

import styles from './history-list.module.scss';


function HistoryList({operations, className=''}) {
  return (
    <ul className={`${styles.list} ${className}`}>
      {
        operations.map((item) => <HistoryItem key={item.id} className={styles.item} operation={item} />)
      }
    </ul>
  );
}

HistoryList.propTypes = {
  className: PropTypes.string,
};

export default HistoryList;
