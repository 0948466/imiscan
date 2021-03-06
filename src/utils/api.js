import 'whatwg-fetch';

export default (urlFrom, method = 'POST', params = {}, credentials = 'include') => {
  const baseUrl = (process.env.NODE_ENV !== 'development') ? 'https://imigize.ru' : 'http://localhost:3004';
  let body = null;
  let url = `${baseUrl}${urlFrom}`;
  if (method === 'POST') {
    const formData = new FormData();
    Object.keys(params).forEach((key) => {
      formData.append(key, params[key]);
    });
    body = formData;
  }
  if (method === 'GET') {
    url = new URL(url);
    Object.keys(params).forEach(key => url.searchParams.append(key, params[key]));
  }

  return fetch(url, {
    method,
    credentials,
    mode: 'cors',
    body,
  })
    .then((response) => {
      if (response.status !== 200 && response.status !== 500) {
        throw new Error('Problems on the server, try again later');
      }
      return response.json();
    })
    .then(data => data)
    .catch((e) => {
      console.error(e);
      return {
        e,
      };
    });
};
