import React from 'react';
import {DEFAULT_SELL_CURRENCY} from '../../constants';

import styles from './amount-input.module.scss';


function AmountInput(
  {
    labelTitle,
    inputValue,
    currencyValue= DEFAULT_SELL_CURRENCY,
    options=[],
    selectName,
    className='',
    onInputChange,
    onSelectChange,
    disabled,
  }) {
  return (
    <div className={`${styles.amountInput} ${className}`}>
      <div className={styles.wrapper}>
        <label className={styles.label}>{labelTitle}</label>
        <input
          className={styles.input}
          maxLength={10}
          value={inputValue || 0}
          placeholder="Введите значение"
          onChange={onInputChange}
          disabled={disabled}
        />
      </div>
      <select
        className={styles.select}
        name={selectName}
        value={currencyValue}
        onChange={onSelectChange}
        disabled={disabled}
      >
        {options.map((item) => <option key={item} value={item}>{item}</option>)}
      </select>
    </div>
  );
}


export default AmountInput;
