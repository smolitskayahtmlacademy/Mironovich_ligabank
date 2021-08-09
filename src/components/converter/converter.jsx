import {nanoid} from 'nanoid';
import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from 'react-redux';
import {adaptDateToClient} from '../../adapter/adapter';
import {addOperation} from '../../store/actions';
import {fetchHistoryRates, fetchTodayRates} from '../../store/api-actions';
import {getExchangeRates} from '../../store/selectors';
import AmountInput from '../amount-input/amount-input';
import {
  AMOUNT_PRECISION,
  CURRENCY_OPTIONS,
  DEFAULT_BUY_CURRENCY,
  DEFAULT_SELL_CURRENCY,
  TODAY
} from '../../constants';
import Calendar from '../calendar/calendar';
import Toast from '../toast/toast';

import styles from './converter.module.scss';


function Converter() {

  const MAX_INPUT_LENGTH = 8;

  const [sellAmount, setSellAmount] = React.useState('0');
  const [buyAmount, setBuyAmount] = React.useState('0');

  const [selectedDate, setSelectedDate] = useState(TODAY);

  const [sellCurrency, setSellCurrency] = React.useState(DEFAULT_SELL_CURRENCY);
  const [buyCurrency, setBuyCurrency] = React.useState(DEFAULT_BUY_CURRENCY);

  const [isDisabled, setIsDisabled] = React.useState(false);
  const [isError, setIsError] = React.useState(false);

  const exchangeRates = useSelector(getExchangeRates);

  const dispatch = useDispatch();

  const convertAmount = (amount, sellCurr, buyCurr) => ((amount / exchangeRates[sellCurr] * exchangeRates[buyCurr])
    .toFixed(AMOUNT_PRECISION));

  const setAmounts = (sum, fromFunc, toFunc, fromCurrency, toCurrency) => {
    const value = Math.abs(parseFloat(sum.toString().substring(0, MAX_INPUT_LENGTH)));
    if (isNaN(value)) {
      return;
    }
    fromFunc(value.toString());
    toFunc(convertAmount(value, fromCurrency, toCurrency));
  };

  const onSellInputChange = (evt) => {
    const value = evt.target.value;
    setAmounts(value, setSellAmount, setBuyAmount, sellCurrency, buyCurrency);
  };

  const onBuyAmountChange = (evt) => {
    const value = evt.target.value;
    setAmounts(value, setBuyAmount, setSellAmount, buyCurrency, sellCurrency);
  };

  const onDateSelect = (date) => {
    setSelectedDate(date);
  };

  const onSellCurrencyChange = (evt) => {
    const currency = evt.target.value;
    setSellCurrency(currency);
    const newBuyAmount = convertAmount(parseFloat(sellAmount), currency, buyCurrency);
    setBuyAmount(newBuyAmount);
  };

  const onBuyCurrencyChange = (evt) => {
    const currency = evt.target.value;
    setBuyCurrency(currency);
    const newSellAmount = convertAmount(parseFloat(buyAmount), sellCurrency, currency);
    setSellAmount(newSellAmount);
  };

  const onFormSubmit = (evt) => {
    evt.preventDefault();
    const date = adaptDateToClient(selectedDate);

    const operation = {
      id: nanoid(),
      date: date,
      sellAmount: sellAmount,
      sellCurrency: sellCurrency,
      buyAmount: buyAmount,
      buyCurrency: buyCurrency,
    };

    dispatch(addOperation(operation));
  };

  useEffect(() => {
    setIsError(false);
    setIsDisabled(true);
    if (selectedDate === TODAY) {
      dispatch(fetchTodayRates(sellCurrency))
        .then(() => {
          setBuyAmount(convertAmount(parseFloat(sellAmount), sellCurrency, buyCurrency));
        })
        .catch(() => setIsError(true))
        .finally(() => setIsDisabled(false));
    } else {
      dispatch(fetchHistoryRates(selectedDate))
        .then(() => {
          setBuyAmount(convertAmount(parseFloat(sellAmount), sellCurrency, buyCurrency));
        })
        .catch(() => setIsError(true))
        .finally(() => setIsDisabled(false));
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [dispatch, selectedDate]);


  return (
    <section className={styles.converter}>
      {isError && <Toast />}
      <div className={styles.wrapper}>
        <h2 className={styles.title}>Конвертер валют</h2>
        <form className={styles.form} action="#" method="get" onSubmit={onFormSubmit}>
          <AmountInput
            className={styles.amount}
            currencyValue={sellCurrency}
            inputValue={sellAmount}
            labelTitle={'У меня есть'}
            options={CURRENCY_OPTIONS}
            selectName={'currency-select'}
            onInputChange={onSellInputChange}
            onSelectChange={onSellCurrencyChange}
            disabled={isDisabled}
            required
          />
          <AmountInput
            className={styles.amount}
            currencyValue={buyCurrency}
            inputValue={buyAmount}
            labelTitle={'Хочу приобрести'}
            options={CURRENCY_OPTIONS}
            selectName={'currency-select'}
            onInputChange={onBuyAmountChange}
            onSelectChange={onBuyCurrencyChange}
            disabled={isDisabled}
            required
          />
          <Calendar
            selectedDate={selectedDate}
            onDateSelect={onDateSelect}
          />
          <button
            className={styles.submit}
            type="submit"
            disabled={isDisabled}
          >
            Сохранить результат
          </button>
        </form>
      </div>
    </section>
  );
}


export default Converter;
