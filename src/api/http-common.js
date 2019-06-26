export default (urlFrom, method = 'POST', params = []) => {
  const headers = new Headers();
  headers.append('Content-Type', 'application/json');

  const body = (method !== 'GET') ? JSON.stringify(params) : null;

  return fetch(urlFrom, {
    method,
    headers,
    body,
  })
    .then(response => response.json())
    .then(data => data)
    .catch((error) => {
      console.error(error);
    });
};
