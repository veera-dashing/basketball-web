import axios from 'axios';
import handleError from './handleError';

const env = process.env.NODE_ENV;

const configureAxios = baseURL => {
  const axiosConfig = {
    baseURL,
    timeout: 900000,
    cache: false
  };

  const axiosInstance = axios.create(axiosConfig);

  /**
   * log outs the request object
   */
  axiosInstance.interceptors.request.use(request => {
    return request;
  });

  /**
   * intercepts the response for axios
   * and handle error
   */
  axiosInstance.interceptors.response.use(
    response => {
      return response;
    },
    async e => {
      const error = await handleError(e);

      return Promise.reject(error);
    }
  );

  return axiosInstance;
};

export const coreApi = configureAxios(process.env.REACT_APP_CORE_API_URL);
export const gitApi = configureAxios(process.env.REACT_APP_GIT_URL);
