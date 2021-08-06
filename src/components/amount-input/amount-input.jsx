import React from 'react';
import PropTypes from 'prop-types';
import {nanoid} from 'nanoid';
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
    required,
  }) {

  const id = nanoid();

  return (
    <div className={`${styles.amountInput} ${className}`}>
      <div className={styles.wrapper}>
        <label className={styles.label} htmlFor={id}>{labelTitle}</label>
        <input
          id={id}
          type="number"
          className={styles.input}
          value={inputValue || 0}
          placeholder="Введите значение"
          onChange={onInputChange}
          disabled={disabled}
          required={required}
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

AmountInput.propTypes = {
  labelTitle: PropTypes.string.isRequired,
  inputValue: PropTypes.oneOfType([PropTypes.string, PropTypes.number]),
  currencyValue: PropTypes.string,
  options: PropTypes.arrayOf(PropTypes.string),
  selectName: PropTypes.string.isRequired,
  className: PropTypes.string,
  onInputChange: PropTypes.func.isRequired,
  onSelectChange: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
  required: PropTypes.bool,
};


export default AmountInput;
