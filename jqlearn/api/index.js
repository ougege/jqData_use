// api文档：https://dataapi.joinquant.com/docs
const api_login = require('./api_login')
const api_query = require('./api_query')
const api = {}
// 追加属性
Object.assign(api, api_login)
Object.assign(api, api_query)
module.exports = api