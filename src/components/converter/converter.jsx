import React, {useState} from 'react';
import AmountInput from '../amount-input/amount-input';
import {
  CURRENCY_OPTIONS,
  DEFAULT_BUY_CURRENCY,
  DEFAULT_SELL_CURRENCY,
  TODAY} from '../../constants';
import Calendar from '../calendar/calendar';

import styles from './converter.module.scss';


function Converter() {

  const [sellAmount, setSellAmount] = React.useState('0');
  const [buyAmount, setBuyAmount] = React.useState('0');

  const [selectedDate, setSelectedDate] = useState(TODAY);

  const [sellCurrency, setSellCurrency] = React.useState(DEFAULT_SELL_CURRENCY);
  const [buyCurrency, setBuyCurrency] = React.useState(DEFAULT_BUY_CURRENCY);

  const [isDisabled, setIsDisabled] = React.useState(false);


  return (
    <section className={styles.converter}>
      <h2 className={styles.title}>Конвертер валют</h2>
      <form className={styles.form} action="#" method="get">
        <AmountInput
          className={styles.amount}
          currencyValue={sellCurrency}
          inputValue={sellAmount}
          labelTitle={'У меня есть'}
          options={CURRENCY_OPTIONS}
          selectName={'currency-select'}
          onInputChange={() => {}}
          onSelectChange={() => {}}
          disabled={isDisabled}
        />
        <AmountInput
          className={styles.amount}
          currencyValue={buyCurrency}
          inputValue={buyAmount}
          labelTitle={'Хочу приобрести'}
          options={CURRENCY_OPTIONS}
          selectName={'currency-select'}
          onInputChange={() => {}}
          onSelectChange={() => {}}
          disabled={isDisabled}
        />
        <Calendar
          selectedDate={selectedDate}
          onDateSelect={() => {}}
        />
        <button
          className={styles.submit}
          type="submit"
          disabled={isDisabled}
        >
          Сохранить результат
        </button>
      </form>
    </section>
  );
}


export default Converter;
