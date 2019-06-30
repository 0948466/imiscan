export default (urlFrom, method = 'POST', params = {}) => {
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
    credentials: 'include',
    mode: 'cors',
    body,
  })
    .then(response => response.json())
    .then(data => data)
    .catch((error) => {
      console.error(error);
    });
};
