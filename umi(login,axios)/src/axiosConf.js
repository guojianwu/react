import axios from 'axios'
 
axios.defaults.baseURL = "/api"//api前缀
 
 
const instance = axios.create({
  xsrfCookieName: 'xsrf-token'
});
 
axios.interceptors.request.use(function (config) {
  console.log("config",config)
  return config;
}, function (error) {
  return Promise.reject(error);
});
 
axios.interceptors.response.use(function (response) {
  console.log("response",response)
  return response
}, function (error) {
  return Promise.reject(error);
});
export default axios;