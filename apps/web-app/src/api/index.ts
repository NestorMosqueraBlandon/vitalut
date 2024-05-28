import axios from 'axios';

const { VITE_API_URL, VITE_API_KEY } = import.meta.env;

const getTokenFromLocalStorage = () => {
  const token = localStorage.getItem("token");
  console.log(token)
  return token;
};

const getAuthorizationHeader = () => {
  const token = getTokenFromLocalStorage();
  if (token) {
    return { Authorization: token };
  }
  return {};
};

export const vitalutApi = axios.create({
  baseURL: VITE_API_URL,
  headers: {
    "Content-Type": "application/json",
    'api-key': VITE_API_KEY,
    ...getAuthorizationHeader(),
  },
});

vitalutApi.interceptors.request.use(
  (config) => {
    const token = getTokenFromLocalStorage();
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);