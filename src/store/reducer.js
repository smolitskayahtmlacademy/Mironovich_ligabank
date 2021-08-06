import {createReducer} from '@reduxjs/toolkit';
import {addOperation, loadRates, removeOperations} from './actions';
import {updateOperations} from '../utils';

const initialState = {
  operations: [],
  exchangeRates: {
    RUB: 1,
    USD: 1,
    EUR: 1,
    GBP: 1,
    CNY: 1,
  },
};

const reducer = createReducer(initialState, (builder) => {
  builder
    .addCase(loadRates, (state, action) => {
      state.exchangeRates = action.payload;
    })
    .addCase(addOperation, (state, action) => {
      state.operations = updateOperations(state.operations, action.payload);
    })
    .addCase(removeOperations, (state, action) => {
      state.operations = [];
    });
});


export {reducer};
