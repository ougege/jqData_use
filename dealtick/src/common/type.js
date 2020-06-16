class Type {
  constructor (value) {
    this.typeList = ['Null', 'Undefined', 'Object', 'Array', 'String', 'Number', 'Boolean', 'Function', 'RegExp', 'Date']
    this.init()
  }

  type (value) {
    const s = Object.prototype.toString.call(value)
    return s.match(/\[object (.*?)\]/)[1].toLowerCase()
  }

  // 增加判断类型数据方法
  init () {
    this.typeList.forEach((t) => {
      this['is' + t] = (o) => {
        return this.type(o) === t.toLowerCase()
      }
    })
  }
}

const type = new Type()
// 使用 type["isNull"](null)等
module.exports = type
