import PropTypes from 'prop-types';
import React from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {removeOperations} from '../../store/actions';
import {getOperations} from '../../store/selectors';
import HistoryList from '../history-list/history-list';

import styles from './history.module.scss';


function History({className=''}) {

  const operations = useSelector(getOperations);
  const dispatch = useDispatch();

  const onClick = () => {
    dispatch(removeOperations());
  };

  return (
    <section className={`${styles.history} ${className}`}>
      <div className={styles.wrapper}>
        <h3 className={styles.title}>История конвертаций</h3>
        <HistoryList operations={operations} className={styles.list} />
        <button className={styles.button} type="button" onClick={onClick}>
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
