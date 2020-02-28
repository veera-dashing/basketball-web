import _ from 'lodash';
import { PER_PAGE } from 'constants/apiConstants';

/**
 * @param  {[type]}
 * @param  {[type]}
 * @param  {Number}
 * @return {[type]}
 */
export const computePaginationMeta = (total, url, params) => {
  let meta = {};

  params = _.omit(params, 'offset');
  params = _.omit(params, 'limit');

  meta['total'] = total;
  meta['perPage'] = PER_PAGE;

  return meta;
};

/**
 * creates url for pagination
 *
 * @param  {[type]}
 * @param  {Number}
 * @param  {Number}
 * @return {[type]}
 */
export const computePaginationURL = (url, params = {}) => {
  const page = _.get(params, 'page', 1);

  params['limit'] = PER_PAGE;
  params['offset'] = (page - 1) * PER_PAGE;

  params = _.omit(params, 'page');

  return `${url}?${serializeURL(params)}`;
};

/**
 * serialize js object to query string
 *
 * @param  {[type]}
 * @return {[type]}
 */
export const serializeURL = params => {
  const str = [];
  for (let p in params)
    if (params.hasOwnProperty(p)) {
      str.push(encodeURIComponent(p) + '=' + encodeURIComponent(params[p]));
    }

  return str.join('&');
};

/**
 * @param  {[type]}
 * @return {[type]}
 */
export const getQueryParams = url => {
  let params = {};
  const parser = document.createElement('a');
  parser.href = url;
  const query = parser.search.substring(1);

  if (query) {
    const vars = query.split('&');

    for (let i = 0; i < vars.length; i++) {
      const pair = vars[i].split('=');
      if (pair && pair.length > 1) {
        params[pair[0]] = decodeURIComponent(pair[1]);
      }
    }
  }
  return params;
};