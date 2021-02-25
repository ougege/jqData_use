import TQSDK from 'tqsdk'
import Bus from './eventBus'
// import { config } from './config'
const config = require('./config')
class CreateTqsdk {
  constructor () {
    this.init()
  }

  init () {
    const account = {
      bid: config.bid,
      user_id: config.userId,
      password: config.password
    }
    const tqsdk = new TQSDK({
      symbolsServerUrl: 'https://openmd.shinnytech.com/t/md/symbols/latest.json',
      wsQuoteUrl: 'wss://openmd.shinnytech.com/t/md/front/mobile',
      autoInit: true
    })
    tqsdk.on('ready', function () {
      Bus.$emit('TqsdkIsReady', tqsdk)
    })
    tqsdk.on('rtn_brokers', function (brokers) {
      tqsdk.addAccount(account) // 仅添加期货账户信息并建立链接，不会登录账户
      tqsdk.login(account) // 发送登录期货账户的请求
      Bus.$emit('rtn_brokers', { tqsdk, brokers })
    })
    tqsdk.on('rtn_data', function () {
      Bus.$emit('rtn_data', tqsdk)
    })
  }
}
const createTqsdk = new CreateTqsdk()
export { createTqsdk }
