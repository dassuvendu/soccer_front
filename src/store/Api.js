import axios from 'axios';
const api = axios.create({ baseURL: import.meta.env.VITE_API_BASE_URL });

const formDataURL = [
  '/product-offer-request',
  '/product-concepts',
  '/update-por',
  '/prc/images',
  '/por/update-request-file',
  '/product-offer',
  '/update-pro-file',
  '/update-sample-image'
];
api.interceptors.request.use((req) => {
  let userTokenData;
  let storageToken;
  let decodeToken;
  try {
    // storageToken = JSON.parse(sessionStorage.getItem('adminToken'));
    storageToken = JSON.parse(localStorage.getItem('adminToken'));

    if (storageToken != null) {
      decodeToken = atob(storageToken?.token);
      let arrayToken = decodeToken.split('%+@%&c@l%s');
      let finalToken = arrayToken[arrayToken.length - 1];
      userTokenData = finalToken;
    } else {
      userTokenData = null;
    }
  } catch (error) {
    userTokenData = null;
  }
  let token = userTokenData;
  // let token = userTokenData && userTokenData.token ? userTokenData.token : null;
  req.headers['Content-Type'] = 'application/json';
  // // Find the last index of "/"
  // const lastSlashIndex = req.url.lastIndexOf('/');

  // // Remove the dynamic part after the last slash
  // const urlWithoutDynamicPart =
  //   lastSlashIndex !== -1 ? req.url.slice(0, lastSlashIndex + 1) : req.url;
  // if (formDataURL.includes(urlWithoutDynamicPart)) {
  //   req.headers['Content-Type'] = 'multipart/form-data';
  // }

  if (formDataURL.includes(req.url)) {
    req.headers['Content-Type'] = 'multipart/form-data';
  }
  if (token) {
    req.headers.Authorization = `Bearer ${token}`;
  }
  return req;
});

api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response && [401, 403].includes(error.response.status)) {
      // sessionStorage.removeItem('adminToken');
      localStorage.removeItem('adminToken');
    }
    return Promise.reject(error);
  }
);

export default api;
