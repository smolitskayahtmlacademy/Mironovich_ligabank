import {createAction} from '@reduxjs/toolkit';


export const ActionType = {
  LOAD_RATES: 'rates/loadRates',
  ADD_OPERATION: 'operations/addOperation',
  REMOVE_OPERATIONS: 'operations/removeOperations',
};


export const loadRates = createAction(ActionType.LOAD_RATES, (exchangeRates) => ({
  payload: exchangeRates,
}));

export const addOperation = createAction(ActionType.ADD_OPERATION, (operation) => ({
  payload: operation,
}));

export const removeOperations = createAction(ActionType.REMOVE_OPERATIONS);
