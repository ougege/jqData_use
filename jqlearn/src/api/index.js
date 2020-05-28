const apiFiles = require.context('./', true, /api_.*\.js/)
let api = {}
apiFiles.keys().reduce((modules, modulePath) => {
  const moduleName = modulePath.replace(/^\.\/(.*)\.\w+$/, '$1')
  const value = apiFiles(modulePath)
  console.log(moduleName)
  api = Object.assign(api, value)
}, {})
// var api = Object.assign({}, userLogin)
// api = Object.assign(api, test)
module.exports = api
