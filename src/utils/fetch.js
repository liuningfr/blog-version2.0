import fetchRequest from 'isomorphic-fetch';
import qs from 'qs';
import { message } from 'antd';
import cloneDeep from 'lodash/cloneDeep';
import isNil from './isNil';
import storage from './storage';

// Before Request
const defaultOptions = {
  credentials: 'include',
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8',
  },
};

const deleteDeep = target => Object.keys(target).forEach(key => {
  if (typeof target[key] === 'object' && target[key] !== null) {
    deleteDeep(target[key]);
  } else if (isNil(target[key])) {
    delete target[key];
  }
});

const parseParams = params => {
  const paramsCopy = cloneDeep(params);
  deleteDeep(paramsCopy);
  return paramsCopy;
};

const getRequestMessage = (requestURL, type, params, requestOptions) => {
  let url = requestURL;
  const options = { ...defaultOptions, ...requestOptions, method: type };
  if (params) {
    if (type === 'GET') {
      url = `${requestURL}?${qs.stringify(parseParams(params))}`;
    } else if (type === 'POST') {
      options.body = qs.stringify(params);
    }
  }
  return { url, options };
};

// After Response
const checkResponse = (errMsg = '接口错误') => response => {
  // 接口正常，返回 { errno, errmsg, data }
  if (response.status >= 200 && response.status < 300) return response.json();
  // 接口错误，404、500 等，返回错误
  return Promise.reject(new Error(`${errMsg} | 接口 ${response.status}: ${response.statusText}`));
};

const redirect = url => {
  const redirectUrl = url.replace('%2FPLACEHOLDER%2F',
    encodeURIComponent(`${window.location.origin}/manage`));
  return window.location.replace(redirectUrl);
};
const handleRedirect = {
  110003: data => {
    redirect(data.url);
    storage.clear();
  },
  110006: data => {
    message.error('您的账号被禁用，请重新登录！', () => redirect(data.url));
    storage.clear();
  },
  110008: () => {
    window.location.replace(`${window.location.origin}/manage`);
  },
};

const checkJSON = (errMsg = '请求错误') => ({ errno, errmsg, data }) => {
  // 1. 成功取到数据，直接返回 data
  if (errno === 0) return data;
  // errno 不为 0，账号未登录、被禁用等，跳转到登录页面
  if (handleRedirect[errno]) return handleRedirect[errno](data);
  // errno 不为 0 的其它情况，返回错误
  return Promise.reject(new Error(`${errMsg} | ${errno}: ${errmsg}`));
};

const handleError = error => {
  // 2. 请求失败，( ① 接口 500 等，② 接口 200，但 errno 不为 0 )，此时 promise 不返回任何数据，默认为 undefined
  message.error(error.message);
};

/**
 * Requests a URL, returning a promise.
 *
 * @param  {string} requestURL       The URL we want to request
 * @param  {string} [type]           The HTTP method for our request
 * @param  {object} [params]         The HTTP message body for our request
 * @param  {object} [requestOptions] Other options except "method" & "body" for our request
 * @param  {string} [errMsg]         The message we want to show when request got error
 */
const fetch = (requestURL, { type = 'GET', params, ...requestOptions, errMsg } = {}) => {
  const { url, options } = getRequestMessage(requestURL, type, params, requestOptions);
  return fetchRequest(url, options)
    .then(checkResponse(errMsg))
    .then(checkJSON(errMsg))
    .catch(handleError);
};

export default fetch;
