import {CURRENCY_OPTIONS} from '../constants';
import {loadRates} from './actions';
import {adaptDateToServer} from '../adapter/adapter';


export const API_TODAY_ROUTE = '/latest';

const API_KEY = '?access_key=8c18ce1500bd28da8eb45eaab525ca2a';

const currencies = CURRENCY_OPTIONS.join(',');

export const fetchTodayRates = () => (dispatch, _getState, api) => (
  api
    .get(`${API_TODAY_ROUTE}${API_KEY}&symbols=${currencies}`)
    .then(({data}) => {
      dispatch(loadRates(data.rates));
    })
);

export const fetchHistoryRates = (date) => (dispatch, _getState, api) => {
  const adaptedDate = adaptDateToServer(date);
  return api
    .get(`${adaptedDate}${API_KEY}&symbols=${currencies}`)
    .then(({data}) => {
      dispatch(loadRates(data.rates));
    });
};
