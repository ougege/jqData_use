let config = require('../common/config')
let axios = require('axios')
const jqLogin = {
  /**
   * 登录获取token
   */
  getToken: () => {
    let params = {
      method: 'get_token',
      mob: config.phone,
      pwd: config.password
    }
    return axios.post(config.staticApi, params).then(res => res.data)
  },
  /**
   * 获取用户当前可用凭证
   */
  getCurrentToken: () => {
    let params = {
      method: 'get_current_token',
      mob: config.phone,
      pwd: config.password
    }
    return axios.post(config.staticApi, params).then(res => res.data)
  },
  // export const _ForwardGetFdDetail = (params) => { return axios.get('/api/forward/detail', {params}).then(res => res.data) }
}
module.exports = jqLogin