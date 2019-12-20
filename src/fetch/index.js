import axios from 'axios'
import store from '@/store'
import {Loading, Message} from 'element-ui'

// 创建loading实例
let loadingInstance = null

// 创建一个axios实例
const server = axios.create({
  baseURL: ''
})
// 添加请求拦截器
server.interceptors.request.use(config => {
  // 在发送请求之前做些什么
  return config
}, error => {
  // 对请求错误做些什么
  return Promise.reject(error)
})

// 添加响应拦截器
server.interceptors.response.use(response => {
  // 对响应数据做点什么
  return response
}, error => {
  // 对响应错误做点什么
  return Promise.reject(error)
})

const Http = (options) => {
  let httpOpts = {
    method: options.method,
    url: options.url,
    params: options.params,
    data: options.data
  }
  // 添加loading
  let addLoading = () => {
    if (!options.showLoading) return
    store.dispatch('addLoadingNum').then(() => {
      loadingInstance || (() => {
        loadingInstance = Loading.service({text: '拼命加载中'})
      })()
    })
  }
  // 取消loading
  let cancelLoading = () => {
    if (!options.showLoading) return
    store.dispatch('delLoadingNum').then(() => {
      loadingInstance && (() => {
        if (store.state.fetchLoading.fetchLoadingNum !== 0) return
        loadingInstance.close()
        loadingInstance = null
      })()
    })
  }

  let httpPromise = new Promise((resolve, reject) => {
    addLoading()
    server(httpOpts).then((data) => {
      cancelLoading()
      if (data.result === 1) {
        resolve(data)
      } else {
        Message({
          type: 'warning',
          message: data.message
        })
        reject(data)
      }
    }).catch((error) => {
      cancelLoading()
      Message({
        type: 'error',
        message: 'error'
      })
      reject(error)
    })
  })
  return httpPromise
}

export default Http
