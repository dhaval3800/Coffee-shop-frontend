import axios from 'axios';
import history from './browserHistory';
import { getStoredAuthToken } from './authToken';


export const defaults = {
  baseURL: process.env.REACT_APP_API_BASE_URL, // Replace with your actual API base URL
  headers: () => ({
    'Content-Type': 'application/json',
    Authorization: getStoredAuthToken() ? `Bearer ${getStoredAuthToken()}` : undefined,
  }),
  error: {
    message: 'Something went wrong. Please check your internet connection or contact our support.',
  },
};

const api = (method, url, variables) => {

  return new Promise((resolve, reject) => {
    axios({
      url: `${defaults.baseURL}${url}`,
      method,
      headers: defaults.headers(),
      params: method === 'get' ? variables : undefined,
      data: method !== 'get' ? variables : undefined,
    }).then(
      response => {
        resolve(response.data);
      },
      error => {
        if (error.response) {
          console.log("🚀 ~ file: api.js:32 ~ returnnewPromise ~ error:", error)
          if (error.response.status === 401) {
            console.log("🚀 ~ file: api.js:34 ~ returnnewPromise ~ rror.response.status:", error.response.status)
            localStorage.removeItem('token');
            history.push('/login');
          }
          reject(error.response.data?.message || defaults.error.message);
        } else {
          reject(defaults.error.message);
        }
      },
    );
  });
};

export default {
  get: (...args) => api('get', ...args),
  post: (...args) => api('post', ...args),
  put: (...args) => api('put', ...args),
  patch: (...args) => api('patch', ...args),
  delete: (...args) => api('delete', ...args),
};
