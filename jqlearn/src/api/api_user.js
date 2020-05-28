import axios from '../common/request'
import Const from '../../core/js/const'
// 用户管理-获取列表
export const getUserList = (params) => { return axios.post( Const.NET.END_POINT + 'user/list', params).then(res => res.data) }
// 用户管理-获取马甲用户列表
export const getUserVestList = (params) => { return axios.get(Const.NET.END_POINT + 'user/vestList', {params}).then(res => res.data) }
// 用户管理-获取马甲消息列表
export const getVestListNews = (params) => { return axios.post( Const.NET.END_POINT + 'dynamicComment/vestList', params).then(res => res.data) }
// 用户管理-禁言
export const userMute = (params) => { return axios.post( Const.NET.END_POINT + 'user/mute', params).then(res => res.data) }
// 用户管理-获取兴趣爱好信息
export const getUserHobby = (params) => { return axios.get(Const.NET.END_POINT + 'user/hobby', {params}).then(res => res.data) }
// 用户管理-新建或更新用户马甲
export const userSaveVest = (params) => { return axios.post( Const.NET.END_POINT + 'user/saveVest', params).then(res => res.data) }
// 用户管理-进行评论接口
export const userCommentExplain = (params) => { return axios.post( Const.NET.END_POINT + 'dynamicComment/explain', params).then(res => res.data) }
// 用户管理-获取用户信息
export const getUserInfo = (params) => { return axios.get(Const.NET.END_POINT + 'user/details' + '/' + params.userId).then(res => res.data) }
// 用户管理-获取用户动态信息
export const getUserTrendsInfo = (params) => { return axios.get(Const.NET.END_POINT + 'dynamic/personal', {params}).then(res => res.data) }
// 用户管理-马甲用户发布动态
export const userDynamicVestRelease = (params) => { return axios.post( Const.NET.END_POINT + 'dynamic/vestRelease', params).then(res => res.data) }
// export const _ForwardGetFdDetail = (params) => { return axios.get('/api/forward/detail', {params}).then(res => res.data) }
