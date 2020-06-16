
// let isDev = process.env.NODE_ENV === 'development'
let token = '82f4f812161030a7a9549c02c5171e25' // 浏览器自用token
let host = 'http://test.api.kdkdcn.com/'
let resourceHost = 'http://test.m.kdkdcn.com/'
let amapKey = '296cf11950a45e3fa6adb06b018e62fa' // 高德地图的key
let appToken = ''
let appUserId = ''
let defaultCenter = [116.406315,39.908775]
let currentXhrNum = 0 // 当前正在请求中的请求
let isInApp = false
let isIos = false
let isDev = true
let isTest = true
let staticHost = 'http://192.168.5.100:8666/'
if (isDev) {
  staticHost = 'http://192.168.5.100:8280/'
}
if (isTest) {
  staticHost = 'http://test.api.kdkdcn.com/'
}
let config = {
  token: token,
  host: host,
  resourceHost: resourceHost,
  amapKey: amapKey,
  staticHost: staticHost,
  defaultCenter: defaultCenter,
  currentXhrNum: currentXhrNum,
  isInApp: isInApp,
  isIos: isIos,
  appToken: appToken,
  appUserId: appUserId
}
export { config }
