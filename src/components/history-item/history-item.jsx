import React from 'react';

import styles from './history-item.module.scss';


function HistoryItem({className, operation}) {

  const {date, sellAmount, sellCurrency, buyAmount, buyCurrency} = operation;
  return (
    <li className={`${styles.item} ${className}`}>
      <p className={styles.item_date}>{date}</p>
      <p className={styles.item_sell}>{sellAmount} {sellCurrency}</p>
      <p className={styles.item_buy}>{buyAmount} {buyCurrency}</p>
    </li>
  );
}


export default HistoryItem;
