import axios from 'axios';

export const fetchRouteData = (url) => {
  return axios.get(url);
};
