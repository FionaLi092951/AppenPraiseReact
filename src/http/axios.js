/*
api.js is used to wrapped to a request library
now the wrapped function includes: get, post, custom
*/
import axios from 'axios';

function axiosReq(url, type, params, timeout, token, responseType) {
  const options = {};
  options.url = url;
  options.method = type;
  if (responseType) {
    options.responseType = responseType;
  }
  options.timeout = timeout;
  if (params) {
    if (type === 'get') {
      options.params = params;
    } else {
      options.data = params;
    }
  }
  let axiosInstance = axios.create();
  if (responseType === 'blob') {
    axiosInstance = axios.create({ responseType: 'blob' });
  }
  // axiosInstance.defaults.baseURL = '/api';
  axiosInstance.defaults.retry = 2;
  axiosInstance.defaults.retryDelay = 1000;

  // 设置csbot & access_token
  axiosInstance.interceptors.request.use((config) => {
    // eslint-disable-next-line
    config.headers.Authorization = `Bearer ${localStorage.getItem('token')}`;
    config.headers['X-Appid'] = localStorage.getItem('appid');
    return config;
  }, error => Promise.reject(error));

  axiosInstance.interceptors.response.use(undefined, (err) => {
    const configs = err.config;
    if (!configs || !configs.retry) return Promise.reject(err);
    // Set the variable for keeping track of the retry count
    configs.retryCount = configs.retryCount || 0;
    // Check if we've maxed out the total number of retries
    if (configs.retryCount >= configs.retry) {
      // Reject with the error
      return Promise.reject(err);
    }
    // Increase the retry count
    configs.retryCount += 1;
    // Create new promise to handle exponential backoff
    const backoff = new Promise((resolve) => {
      setTimeout(() => {
        resolve();
      }, configs.retryDelay || 1);
    });
    configs.baseURL = '';
    // Return the promise in which recalls axios to retry the request
    return backoff.then(() => axiosInstance(configs));
  });

  return axiosInstance(options).then((response) => {
    let res = response;
    return res;
  }).catch(err => Promise.reject(err));
}

// to deal with get request
function axiosGet(url, params, token = true, timeout = 20000, responseType) {
  return axiosReq(url, 'get', params, timeout, token, responseType);
}

// to deal with post request
function axiosPost(url, params, token = true, timeout = 20000) {
  return axiosReq(url, 'post', params, timeout, token);
}

function axiosPut(url, params, token = true, timeout = 20000) {
  return axiosReq(url, 'put', params, timeout, token);
}

// to deal with post request
function axiosDelete(url, params, token = true, timeout = 20000) {
  return axiosReq(url, 'delete', params, timeout, token);
}

// to deal with the custom request
function axiosCustom(url, type = 'post', params, token = true, timeout = 20000) {
  return axiosReq(url, type, params, timeout, token);
}

// to deal with get request
function axiosExport(url, params, token = true, timeout = 20000, responseType) {
  return axiosGet(url, params, token, timeout, responseType);
}

function axiosExportNoRetry(url, params, token = true, timeout = 400 * 1000, responseType) {
  return axiosGet(url, params, token, timeout, responseType);
}

const axiosPlugin = {
  $req: axiosReq,
  $reqGet: axiosGet,
  $reqPost: axiosPost,
  $reqPut: axiosPut,
  $reqDelete: axiosDelete,
  $reqCustom: axiosCustom,
  $reqExport: axiosExport,
  $reqExportNoEntry: axiosExportNoRetry,
};

export default axiosPlugin;
