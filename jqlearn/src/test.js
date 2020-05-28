let request = require('request')
let axios = require('axios')
let config = require('../src/common/config')
let params = {     
  'method': 'get_dominant_future',
  'token': config.token,
  'code': 'AU',
  'date': "2020-05-26"
}
axios.post(config.staticApi, params).then(res => {
  console.log(res.data)
})
// let requestData = {
//   method: 'get_token',
//   mob: config.mobile,
//   pwd: config.password
// }
// axios.post(config.staticApi, requestData)
// .then(res => {
//   console.log(res.data)
//   let params = {     
//     'method': 'get_dominant_future',
//     'token': res.data,
//     'code': 'AU',
//     'date': "2020-05-26"
//   }
//   axios.post(config.staticApi, params).then(res => {
//     console.log(res.data)
//   })
// })
// .catch(function (error) {
//   console.log(error)
// })
// request({
//   url: config.staticApi,
//   method: 'POST',
//   body:JSON.stringify(requestData)
// }, function(error, response, token) {
//   let requestData = {     
//     'method': 'get_dominant_future',
//     'token': token,
//     'code': 'AU',
//     'date': "2020-05-26"
//   }
//   request({
//     url: config.staticApi,
//     method: 'POST',
//     body:JSON.stringify(requestData)
//   }, function(error, response, body) {
//     console.log(body)       
//   })           
// })