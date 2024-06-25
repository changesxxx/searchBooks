import axios from 'axios'

import { BASE_URL, TIMEOUT } from './config'
class Request {
  constructor(baseURL, timeout) {
    this.instance = axios.create({ baseURL, timeout })
    this.baseURL = baseURL
    this.timeout = timeout

    this.instance.interceptors.request.use((config) => {
      //所有请求添加谷歌key
      config.params.key = 'AIzaSyD7A5nMylDz5kd41KGFI4aQQisR13Mhj3I'
      return config
    })
  }

  request(config) {
    return this.instance.request(config)
  }

  get(config) {
    return this.request({ ...config, method: 'get' })
  }

  post(config) {
    return this.request({ ...config, method: 'post' })
  }
}

export default new Request(BASE_URL, TIMEOUT)
