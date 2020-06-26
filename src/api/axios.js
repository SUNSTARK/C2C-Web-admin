import axios from "axios"
import Cookies from "js-cookie"
import { Message } from "element-ui"

// axios默认配置
axios.defaults.timeout = 10000 // 超时时间
axios.defaults.baseURL = '/api'
axios.defaults.headers.post['Content-Type'] = 'application/json;charset=UTF-8';

// http 请求 拦截器
axios.interceptors.request.use(config => {
    if (Cookies.get("token")) {  // 存在cookie则在请求头加上token
      config.headers.token = Cookies.get("token")
    }
    return config
  },
  error => {
    return Promise.reject(error.response)
  })

// http 响应 拦截器
axios.interceptors.response.use(
  response => {
    if (response.data.code === 2001) { // 约定报错信息
      Message({
        message: '错误201，服务器处理失败，请联系后端！',
        type: "warning"
      })
      return Promise.reject(response)
    } else {
      return Promise.resolve(response)
    }
  },
  error => {
    if (error.response.status === 404) {
      Message({
        message: "请求地址出错",
        type: "warning"
      })
    } else if (error.response.status === 401) {
      Message({
        message: "你没有权限",
        type: "warning"
      })
      Cookies.remove("token")
      setTimeout(() => {
        location.reload()
      }, 3000)
    }
    return Promise.reject(error.response) // 返回接口返回的错误信息
  })

// 返回一个Promise(发送post请求)
export function fetchPost(url, params) {
  return new Promise((resolve, reject) => {
    axios.post(url, params)
      .then(response => {
        resolve(response.data);
      }, err => {
        reject(err);
      })
      .catch((error) => {
        reject(error)
      })
  })
}

// 返回一个Promise(发送get请求)
export function fetchGet(url, param) {
  return new Promise((resolve, reject) => {
    axios.get(url, {params: param})
      .then(response => {
        resolve(response.data)
      }, err => {
        reject(err)
      })
      .catch((error) => {
        reject(error)
      })
  })
}

export default axios