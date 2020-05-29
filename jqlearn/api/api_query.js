let config = require('../common/config')
let axios = require('axios')
const jqQuery = {
  /**
   * 查询剩余条数
   */
  getLastCount: () => {
    let params = {
      method: 'get_query_count',
      token: config.token
    }
    return axios.post(config.staticApi, params).then(res => res.data)
  },
  /**
   * 获取单个标的的信息
   * @param code: 代码
   */
  getSecurityInfo: (code) => {
    let params = {
      method: 'get_security_info',
      token: config.token,
      code: code
    }
    return axios.post(config.staticApi, params).then(res => res.data)
  },
  /**
   * 获取指数成分股
   * @param code: 代码; date: 日期
   */
  getIndexStocks: (code, date) => {
    let params = {
      method: 'get_index_stocks',
      token: config.token,
      code: code,
      date: date
    }
    return axios.post(config.staticApi, params).then(res => res.data)
  },
  /**
   * 获取行业列表
   * @param code: 行业代码 
   * sw_l1: 申万一级行业
   * sw_l2: 申万二级行业
   * sw_l3: 申万三级行业
   * jq_l1: 聚宽一级行业
   * jq_l2: 聚宽二级行业
   * zjw: 证监会行业
   */
  getIndustries: (code) => {
    let params = {
      method: 'get_industries',
      token: config.token,
      code: code
    }
    return axios.post(config.staticApi, params).then(res => res.data)
  },
  /**
   * 获取指定范围内交易日
   * @param date: 开始日期,  endDate: 结束日期
   * 'yyyy-mm-dd'
   */
  getTradeDays: (date, endDate) => {
    let params = {
      method: 'get_trade_days',
      token: config.token,
      date: date,
      end_date: endDate
    }
    return axios.post(config.staticApi, params).then(res => res.data)
  },
  /**
   * 获取期货可交易合约列表
   * @param code: 期货合约品种,  date: 指定日期
   */
  getFutureContracts: (code, date) => {
    let params = {
      method: 'get_future_contracts',
      token: config.token,
      code: code,
      date: date
    }
    return axios.post(config.staticApi, params).then(res => res.data)
  },
  /**
   * 获取主力合约对应的标的
   * @param code: 期货合约品种,  date: 指定日期
   */
  getDominantFuture: (code, date) => {
    let params = {
      method: 'get_dominant_future',
      token: config.token,
      code: code,
      date: date
    }
    return axios.post(config.staticApi, params).then(res => res.data)
  },
  /**
   * 获取最新的tick数据
   * @param code: 标的代码
   */
  getCurrentTick: (code) => {
    let params = {
      method: 'get_current_tick',
      token: config.token,
      code: code
    }
    return axios.post(config.staticApi, params).then(res => res.data)
  },
  /**
   * 获取多标的的最新的tick数据
   * @param code: 标的代码
   */
  getCurrentTicks: (code) => {
    let params = {
      method: 'get_current_ticks',
      token: config.token,
      code: code
    }
    return axios.post(config.staticApi, params).then(res => res.data)
  },
  /**
   * 获取指定时间周期的行情数据
   * @param
   * code: 证券代码
   * count: 大于0的整数，表示获取bar的条数，不能超过5000
   * unit: bar的时间单位, 支持如下周期：1m, 5m, 15m, 30m, 60m, 120m, 1d, 1w, 1M。其中m表示分钟，d表示天，w表示周，M表示月
   * end_date：查询的截止时间，默认是今天
   * fq_ref_date：复权基准日期，该参数为空时返回不复权数据
   */
  getPrice: (code, count, unit, end_date, fq_ref_date) => {
    let params = {
      method: 'get_price',
      token: config.token,
      code: code,
      count: count,
      unit: unit,
      end_date: end_date,
      fq_ref_date: fq_ref_date
    }
    return axios.post(config.staticApi, params).then(res => res.data)
  },
  /**
   * 获取指定时间段的行情数据
   * @param
   * code: 证券代码
   * unit: bar的时间单位, 支持如下周期：1m, 5m, 15m, 30m, 60m, 120m, 1d, 1w, 1M。其中m表示分钟，d表示天，w表示周，M表示月
   * date : 开始时间，不能为空，格式2018-07-03或2018-07-03 10:40:00，如果是2018-07-03则默认为2018-07-03 00:00:00
   * end_date：结束时间，不能为空，格式2018-07-03或2018-07-03 10:40:00，如果是2018-07-03则默认为2018-07-03 23:59:00
   * fq_ref_date：复权基准日期，该参数为空时返回不复权数据
   */
  getPricePeriod: (code, unit, date, end_date, fq_ref_date) => {
    let params = {
      method: 'get_price_period',
      token: config.token,
      code: code,
      unit: unit,
      date: date,
      end_date: end_date,
      fq_ref_date: fq_ref_date
    }
    return axios.post(config.staticApi, params).then(res => res.data)
  },
  /**
   * 获取tick数据
   * 支持 2010-01-01 至今的tick数据，提供买一卖一数据。 如果要获取主力合约的tick数据，可以先使用get_dominant_future获取主力合约对应的标的
   * @param
   * code: 证券代码
   * count: 取出指定时间区间内前多少条的tick数据，如不填count，则返回end_date一天内的全部tick
   * end_date: 结束日期，格式2018-07-03或2018-07-03 10:40:00
   */
  getTicks: (code, count, end_date) => {
    let params = {
      method: 'get_ticks',
      token: config.token,
      code: code,
      count: count,
      end_date: end_date
    }
    return axios.post(config.staticApi, params).then(res => res.data)
  },
  /**
   * 按时间段获取tick数据
   * @param
   * code: 证券代码
   * date: 开始时间，格式2018-07-03或2018-07-03 10:40:00
   * end_date: 结束时间，格式2018-07-03或2018-07-03 10:40:00
   */
  getTicksPeriod: (code, date, end_date) => {
    let params = {
      method: 'get_ticks_period',
      token: config.token,
      code: code,
      date: date,
      end_date: end_date
    }
    return axios.post(config.staticApi, params).then(res => res.data)
  }
  // export const _ForwardGetFdDetail = (params) => { return axios.get('/api/forward/detail', {params}).then(res => res.data) }
}
module.exports = jqQuery