import axios from 'axios';

const api = axios.create({
  baseURL: 'http://104.197.15.102',
});

export default api;
