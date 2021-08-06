import {MAX_OPERATIONS_COUNT} from './constants';

export const updateOperations = (operations, newOperation) => {
  if (operations.length < MAX_OPERATIONS_COUNT) {
    return [newOperation, ...operations];
  }

  return [newOperation, ...operations.slice(0, operations.length - 1)];
};
