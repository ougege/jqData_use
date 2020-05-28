
// let isDev = process.env.NODE_ENV === 'development'
let token = '' // 浏览器自用token
let host = 'http://test.api.kdkdcn.com/'
let resourceHost = 'http://test.m.kdkdcn.com/'
let amapKey = '296cf11950a45e3fa6adb06b018e62fa' // 高德地图的key
let defaultCenter = [116.406315,39.908775]
let isDev = true
let isTest = true
let staticHost = 'http://192.168.5.100:8666/'
if (isDev) {
  staticHost = 'http://localhost:8666/'
}
if (isTest) {
  staticHost = 'http://test.backservice.kdkdcn.com/'
}
let staticApi = `${staticHost}api/`
let config = {
  token: token,
  host: host,
  resourceHost: resourceHost,
  amapKey: amapKey,
  staticHost: staticHost,
  defaultCenter: defaultCenter,
  staticApi: staticApi
}
export {config}
