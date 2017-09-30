/**
 * Created by 熊超超 on 2017/4/19.
 */
import axios from 'axios'
import { showLoading, hideLoading } from 'react-redux-loading-bar'
import { Toast } from 'antd-mobile'

// 创建一个axios实例
const axiosInstance = axios.create({
  baseURL: 'https://www.easy-mock.com/mock/597973d3a1d30433d83f11e7/base',
  headers: {'Content-Type': 'application/json'},
  // withCredentials: true,
  timeout: 45000// 请求超时时间
})
// 注册请求拦截器
axiosInstance.interceptors.request.use(config => {
  window.$store.dispatch(showLoading())
  config.data = config.data || {}
  return config
}, err => {
  return Promise.reject(err)
})
// 注册响应拦截器
axiosInstance.interceptors.response.use(response => {
  window.$store.dispatch(hideLoading())
  if (response.data.success) {
    return response.data
  } else {
    if (response.data.message.code === 401) {
      Toast.fail(response.data.message.text, 3)
    }
    return Promise.reject(response.data.message)
  }
}, err => {
  window.$store.dispatch(hideLoading())
  return Promise.reject(err)
})

export default axiosInstance
