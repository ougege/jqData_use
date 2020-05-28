import axios from '../common/request'
// import {config} from '../common/config'
// 登录-获取token
export const getToken = (params) => { return axios.post('/apis', params).then(res => res.data)}
// export const _ForwardGetFdDetail = (params) => { return axios.get('/api/forward/detail', {params}).then(res => res.data) }
