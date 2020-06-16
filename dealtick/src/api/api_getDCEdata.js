import axios from '../common/request'
// import Const from '../../core/js/const'
// 管理员-列表
// export const sysAdminList = (params) => { return axios.post( Const.NET.END_POINT + 'sys/user/list', params).then(res => res.data) }
// 菜单管理-列表选择
// export const sysMenuListSelect = (params) => { return axios.get(Const.NET.END_POINT + 'sys/menu/authSelect', {params}).then(res => res.data) }
// 获取-DCE2007
export const getDCEJd2007Data = (params) => { return axios.get('static/data/DCE.jd2007.json', { params }).then(res => res.data) }
