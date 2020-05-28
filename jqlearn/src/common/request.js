import axios from 'axios'
import { Message } from 'element-ui'
// import store from '../store'
import router from '../router'
// import * as types from '../store/mutation-type'

// 来源：axios拦截器接口配置与使用
// https://www.jianshu.com/p/646ed4edf51f
axios.create({
  baseURL: process.env.BASE_API, // api 的 base_url
  timeout: 5000, // request timeout  设置请求超时时间
  responseType: 'json',
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    'Content-Type': 'application/json;charset=utf-8'
  }
})

// 请求拦截器
axios.interceptors.request.use(
  config => {
    const token = localStorage.getItem('jqToken') || ''
    if (token) { // 判断是否存在token，如果存在的话，则每个http header都加上token
      config.headers.token = token // 请求头加上token
    }
    return config
  },
  error => {
    console.log(error)
    return Promise.reject(error)
  }
)

// 响应拦截器
axios.interceptors.response.use(
  response => {
    // 如果状态码是200，说明请求成功
    if (response.data.code === 0) {
      return Promise.resolve(response)
    } else {
      return Promise.reject(response)
    }
  },
  // 状态码非200的情况
  // 和后端人员协商后统一的错误状态码:提示登录过期、错误提示等
  error => {
    if (error.response.status) {
      // 对已经请求的axios请求401错误处理
      switch (error.response.status) {
        // 500:服务错误
        case 500:
          localStorage.clear()
          router.replace({
            path: '/login',
          })
          break
        // 401:未登录
        // 未登录则跳转登录页面,并携带当前路径
        case 401:
          localStorage.clear()
          router.replace({
            path: '/login',
          })
          break
        // 其他错误，直接抛出错误提示
        default:
          Message({
            message: error.response.data.message,
            duration: 1500,
            forbidClick: true
          })
      }
      return Promise.reject(error.response)
    }
  }
)
export default axios
