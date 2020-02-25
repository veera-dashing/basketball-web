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