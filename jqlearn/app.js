const Koa = require('koa')
const app = new Koa()
const views = require('koa-views')
const json = require('koa-json')
const onerror = require('koa-onerror')
const bodyparser = require('koa-bodyparser')
const logger = require('koa-logger')

const index = require('./routes/index')
const users = require('./routes/users')

// 引入utilFn
const utilFn = require('./common/util')
// 引入config
const config = require('./common/config')
// 引入api
const api = require('./api')
// 引入合约列表
const forwardList = require('./common/forwardList')
// console.log(forwardList)
let dateArr = ['2020-03-15', '2020-04-30']
// 获取交易日期
// api.getTradeDays(dateArr[0], dateArr[1]).then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })
// 获取剩余次数
// api.getLastCount().then(res => {
//   console.log(res)
// }).catch(err => {
//   console.log(err)
// })

// error handler
onerror(app)

// middlewares
app.use(bodyparser({
  enableTypes:['json', 'form', 'text']
}))
app.use(json())
app.use(logger())
app.use(require('koa-static')(__dirname + '/public'))

app.use(views(__dirname + '/views', {
  extension: 'pug'
}))

// logger
app.use(async (ctx, next) => {
  const start = new Date()
  await next()
  const ms = new Date() - start
  console.log(`${ctx.method} ${ctx.url} - ${ms}ms`)
})

// routes
app.use(index.routes(), index.allowedMethods())
app.use(users.routes(), users.allowedMethods())

// error-handling
app.on('error', (err, ctx) => {
  console.error('server error', err, ctx)
});

module.exports = app
