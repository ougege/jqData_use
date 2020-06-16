const axios = require('axios')
const config = require('./config')
let url = 'http://api.tushare.pro'
let queryData = {
    api_name: 'trade_cal',
    token: config.tushareToken,
    params: {
        // 交易所 SSE上交所,SZSE深交所,CFFEX 中金所,SHFE 上期所,CZCE 郑商所,DCE 大商所,INE 上能源,IB 银行间,XHKG 港交所
        exchange: 'SHFE',
        start_date: '2020-06-01',
        end_date: '2020-06-14'
    },
    fields: ''
}
axios.post(url, queryData)
  .then(res => {
    console.log(res)
  })
  .catch(err => {
    console.log(err)
  })