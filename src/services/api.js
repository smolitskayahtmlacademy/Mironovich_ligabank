import axios from 'axios';

const BASE_URL = 'http://api.exchangeratesapi.io/v1';
const REQUEST_TIMEOUT = 5000;


export const createApi = () => {
  const api = axios.create({
    baseURL: BASE_URL,
    timeout: REQUEST_TIMEOUT,
  });

  const onSuccess = (response) => response;

  const onFail = (err) => {
    throw err;
  };

  api.interceptors.response.use(onSuccess, onFail);

  return api;
};
