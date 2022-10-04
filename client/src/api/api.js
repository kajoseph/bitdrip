import { tryParseJSON } from '../lib/utils';

const getHostName = () => window.location.host.indexOf(':') === -1 ? window.location.host : window.location.host.split(':')[0] + ':3003';
const baseUrl = `${window.location.protocol}//${getHostName()}`;
const getUrl = (part) => baseUrl + part;

const wrapFetch = (url, opts) => new Promise((resolve, reject) => {
  const token = window.sessionStorage.getItem('auth_token');
  opts.headers = {
    'Content-Type': 'application/json',
    ...opts.headers,
  }
  if (token) {
    opts.headers.authorization = token;
  }

  if (opts.body && typeof opts.body !== 'string') {
    opts.body = JSON.stringify(opts.body);
  }

  opts.mode = opts.mode || 'cors';

  url = getUrl(url);
  fetch(url, opts)
    .then(async (response) => {
      let body = await response.text();
      if (response.status >= 200 && response.status < 300) {
        body = tryParseJSON(body);
        return resolve(body);
      } else if (response.status === 401) {
        window.location.hash = 'login?redirect=' + window.location.hash.replace('#', '');
        return;
      }
      return reject({ status: response.status, data: body });
    })
    .catch((err) => {
      reject(err)
    });
});

const GET = (url, opts = {}) => wrapFetch(url, { ...opts, method: 'GET' });
const POST = (url, { body, ...opts} = {}) => wrapFetch(url, { ...opts, method: 'POST', body });
const PUT = (url, { body, ...opts} = {}) => wrapFetch(url, { ...opts, method: 'PUT', body });
const DELETE = (url, { body, ...opts} = {}) => wrapFetch(url, { ...opts, method: 'DELETE', body });

export default {
  GET,
  POST,
  PUT,
  DELETE
};