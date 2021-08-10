import React from 'react';
import PropTypes from 'prop-types';
import operationPropTypes from '../../utils/operation.prop';

import styles from './history-item.module.scss';


function HistoryItem({className, operation}) {

  const {date, sellAmount, sellCurrency, buyAmount, buyCurrency} = operation;
  return (
    <li className={`${styles.item} ${className}`}>
      <p className={styles.item_date}>{date}</p>
      <p className={styles.item_sell}><span className={styles.amount}>{sellAmount}</span> {sellCurrency}</p>
      <p className={styles.item_buy}><span className={styles.amount}>{buyAmount}</span> {buyCurrency}</p>
    </li>
  );
}

HistoryItem.propTypes = {
  className: PropTypes.string,
  operation: operationPropTypes.isRequired,
};


export default HistoryItem;
