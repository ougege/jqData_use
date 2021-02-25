var isDev = process.env.NODE_ENV === 'development'
var token = '' // 浏览器自用token
var host = 'http://test.api.kdkdcn.com/'
var staticHost = 'http://localhost:8080/'
var amapKey = '7acb6cbb0082e9a87c14b64762fc31d5' // 高德地图的key
var bid = '快期模拟'
var userId = 'test123'
var password = '123456'
var account = { bid, user_id: userId, password }
var isTest = false // 测试
if (isDev) {
  host = 'http://192.168.5.100:8280/'
  staticHost = 'http://localhost:8080/'
}
if (isTest) {
  host = 'http://test.api.kdkdcn.com/'
  staticHost = 'http://test.m.kdkdcn.com/'
}
const config = {
  token,
  host,
  staticHost,
  amapKey,
  account
}
module.exports = config
