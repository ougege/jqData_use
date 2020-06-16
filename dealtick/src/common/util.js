// import { type } from './type'
const type = require('./type')

const util = {
  // 浅拷贝
  shallowCopy (obj) {
    if (type['isNull'](obj)) {
      return null
    } else {
      return Object.create(
        Object.getPrototypeOf(obj), Object.getOwnPropertyDescriptors(obj)
      )
    }
  },
  // 深拷贝
  deepCopy (obj) {
    let target = {}
    if (type['isNull'](obj) || typeof obj !== 'object') {
      return obj
    }
    // 不要使用Object.keys遍历:不遍历可枚举的原型链属性
    for (let key in obj) {
      if (Object.prototype.hasOwnProperty.call(obj, key)) {
        if (typeof obj[key] === 'object') {
          target[key] = this.deepCopy(obj[key])
        } else {
          target[key] = obj[key]
        }
      }
    }
    return target
  },
  // 数组去重:不带id普通数组去重;带id，数组对象去重
  arrDuplicateRemove (arr, id) {
    let temp = []
    let idArr = []
    if (!id) {
      arr.forEach(item => {
        if (!temp.includes(item)) {
          temp.push(item)
        }
      })
    } else {
      arr.forEach(item => {
        if (!idArr.includes(item[id])) {
          idArr.push(item[id])
          temp.push(item)
        }
      })
    }
    return temp
  },
  // 数组删除某项值
  arrRemoveByValue (arr, value, attr) {
    if (!type['isArray'](arr)) {
      throw new Error('必须是数组')
    } else {
      // 不带attr，删除值;
      if (!attr) {
        arr.includes(value) && arr.splice(arr.indexOf(value), 1)
      } else { // 带attr，删除属性
        arr.filter(item => {
          if (item[attr] === value) return item
        })
      }
    }
    return arr
  },
  // 美式价格，隔三加逗号
  numToThousands (num) {
    num = (num || 0).toString()
    let decimal = '00'
    let result = ''
    if (num.includes('.')) {
      decimal = num.split('.')[1]
      num = num.split('.')[0]
    }
    if (num.length > 3) {
      let k = 0
      for (let i = num.length; i > 0; i--) {
        result += num.charAt(i - 1)
        k += 1
        if (k === 3 && i !== 1) {
          result += ','
          k = 0
        }
      }
      result = result.split('').reverse().join('')
    } else {
      result = num
    }
    return `${result}.${decimal}`
  },
  // 小于10加0处理
  addZero (e) {
    return Number(e) < 10 ? `0${e}` : e
  },
  // 时间格式化:同时将时间统一处理成斜杠
  // yyyy/MM/dd hh:mm:ss
  dateFormat (dateIn, fmt) {
    if (!fmt) return false
    let newDate = type['isDate'](dateIn) ? dateIn : new Date(dateIn)
    let o = {
      'y+': newDate.getFullYear(), // 年份
      'M+': this.addZero(newDate.getMonth() + 1), // 月份
      'd+': this.addZero(newDate.getDate()), // 某一天
      'h+': this.addZero(newDate.getHours()), // 小时
      'm+': this.addZero(newDate.getMinutes()), // 分钟
      's+': this.addZero(newDate.getSeconds()) // 秒
    }
    for (let i in o) {
      if (new RegExp('(' + i + ')').test(fmt)) {
        fmt = fmt.replace(RegExp.$1, o[i])
      }
    }
    return fmt
  },
  // new 一个时间戳:无参返回当前时间戳,有参返回传入时间的时间戳
  newTimeStamp (dateIn) {
    if (!dateIn) {
      return new Date().getTime()
    } else {
      let newDate = type['isDate'](dateIn) ? dateIn : new Date(dateIn)
      return newDate.getTime()
    }
  },
  // 生成独一无二的字符串:字符串转32进制
  createUniqueString () {
    let timestamp = this.newTimeStamp()
    let randomNum = parseInt((1 + Math.random()) * 65536) + ''
    return (+(timestamp + randomNum)).toString(32)
  },
  // 生成UUID
  generateUUID () {
    let d = this.newTimeStamp()
    let uuid = 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
      let r = (d + Math.random() * 16) % 16 | 0
      d = Math.floor(d / 16)
      return (c === 'x' ? r : (r & 0x3 | 0x8)).toString(16)
    })
    return uuid
  },
  // debounce:去抖就是连续多次delay内操作取最后一次操作真正执行
  // https://segmentfault.com/a/1190000014292298
  debounce (cb, delay, that) {
    if (!that.timeId) {
      that.timeId = setTimeout(() => {
        cb()
        that.timeId = null
      }, delay)
    }
  },
  // 匹配url的某个query值:无window对象则不可用
  getQueryStringByName (name) {
    let reg = new RegExp('(^|&)' + name + '=(\\w+|$)', 'i')
    let r = window.location.search.substr(1).match(reg)
    let context = ''
    if (r !== null) {
      context = r[2]
    }
    return context
  },
  // 参数去空
  paramsRemoveNull (obj) {
    if (type['isObject'](obj)) {
      for (let item in obj) {
        if (type['isUndefined'](obj[item]) || type['isNull'](obj[item])) {
          delete obj[item]
        }
      }
    } else {
      throw new Error('args should be a object')
    }
    return obj
  },
  // api请求时，给params动态赋值
  objectAddAttr (obj, value, attr) {
    if (type['isObject'](obj) && type['isString'](attr) && value !== null) {
      let test = {}
      test[attr] = value
      Object.assign(obj, test)
    } else {
      throw new Error('参数有误')
    }
  },
}

module.exports = util
