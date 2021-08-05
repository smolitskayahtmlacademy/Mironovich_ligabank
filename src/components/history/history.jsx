import PropTypes from 'prop-types';
import React from 'react';
import HistoryList from '../history-list/history-list';

import styles from './history.module.scss';


const OPERATIONS = [
  {
    id: 0,
    date: '11.10.2020',
    sellAmount: '8746',
    sellCurrency: 'RUB',
    buyAmount: '4776',
    buyCurrency: 'USD',
  },
  {
    id: 1,
    date: '11.10.2020',
    sellAmount: '874',
    sellCurrency: 'RUB',
    buyAmount: '4776',
    buyCurrency: 'USD',
  },
  {
    id: 2,
    date: '11.10.2020',
    sellAmount: '874',
    sellCurrency: 'RUB',
    buyAmount: '4776',
    buyCurrency: 'USD',
  },
  {
    id: 3,
    date: '11.10.2020',
    sellAmount: '87',
    sellCurrency: 'RUB',
    buyAmount: '4776',
    buyCurrency: 'USD',
  },
  {
    id: 4,
    date: '11.10.2020',
    sellAmount: '87443',
    sellCurrency: 'RUB',
    buyAmount: '476',
    buyCurrency: 'USD',
  },
  {
    id: 5,
    date: '11.10.2020',
    sellAmount: '87',
    sellCurrency: 'RUB',
    buyAmount: '6',
    buyCurrency: 'USD',
  },
  {
    id: 6,
    date: '11.10.2020',
    sellAmount: '874',
    sellCurrency: 'RUB',
    buyAmount: '4776',
    buyCurrency: 'USD',
  },
  {
    id: 7,
    date: '11.10.2020',
    sellAmount: '87443',
    sellCurrency: 'RUB',
    buyAmount: '477',
    buyCurrency: 'USD',
  },
  {
    id: 8,
    date: '11.10.2020',
    sellAmount: '87',
    sellCurrency: 'RUB',
    buyAmount: '477',
    buyCurrency: 'USD',
  },
];

function History({className=''}) {

  return (
    <section className={`${styles.history} ${className}`}>
      <div className={styles.historyContainer}>
        <h3 className={styles.title}>История конвертаций</h3>
        <HistoryList operations={OPERATIONS} className={styles.historyList} />
        <button className={styles.clearButton} type="button" onClick={() => {}}>
          Очистить историю
        </button>
      </div>
    </section>
  );
}


History.propTypes = {
  className: PropTypes.string,
};

export default History;
