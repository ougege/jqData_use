
// let isDev = process.env.NODE_ENV === 'development'
let token = '5b6a9ba2b0fd73bb20667f2c0ecd0eb85ae66eb8' // 浏览器自用token
let host = 'https://dataapi.joinquant.com/'
let resourceHost = 'https://dataapi.joinquant.com/'
let amapKey = '296cf11950a45e3fa6adb06b018e62fa' // 高德地图的key
let defaultCenter = [116.406315,39.908775]
let phone = '13396551860'
let password = 'yanglu0811'
let isDev = true
let isTest = true
let staticHost = 'https://dataapi.joinquant.com/'
if (isDev) {
  staticHost = 'https://dataapi.joinquant.com/'
}
if (isTest) {
  staticHost = 'https://dataapi.joinquant.com/'
}
let staticApi = `${staticHost}apis`
let config = {
  token: token,
  host: host,
  resourceHost: resourceHost,
  amapKey: amapKey,
  staticHost: staticHost,
  defaultCenter: defaultCenter,
  staticApi: staticApi,
  phone: phone,
  password: password
}
// export {config}
module.exports = config
