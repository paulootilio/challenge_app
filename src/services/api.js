import axios from 'axios';
import baseURL from '../config/baseURL';

const api = axios.create({
  baseURL,
});

export default api;
