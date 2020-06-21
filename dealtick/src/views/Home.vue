<template>
  <div class="hello">
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div>
      空白显示一下
    </div>
  </div>
</template>

<script>
// import * as api from '../api'
import axios from '../common/request'
const timeConfig = require('../common/timeConfig')
const util = require('../common/util')
const strategy = require('../common/strategy')
export default {
  name: 'Home',
  data () {
    return {
      timeStart: 0,
      timeEnd: 0 // 统计回测时长
    }
  },
  watch: {},
  mounted () {
    this.getList()
  },
  created () {
  },
  methods: {
    getList () {
      const that = this
      that.timeStart = util.newTimeStamp()
      const promiseArr = []
      for (const codeName in timeConfig.mainCodeList) {
        const days = timeConfig.mainCodeList[codeName]
        for (var k = 0; k < days.length; k++) {
          const url = 'static/data/' + codeName + '.' + days[k] + '.json'
          const codeNameArr = codeName.split('.')
          promiseArr.push(
            new Promise(function (resolve, reject) {
              const params = {}
              axios.get(url, { params }).then(response => {
                const res = response.data
                // 可以抓取tick移动到某个价位，成交量突然放大
                // tick说明 @amount:成交额, @ask_price1:卖一价, @ask_volume1:卖一量,
                // @bid_price1:买一价, @bid_volume1: 买一量, @heigest:当日最高价, @last_price: 最新价
                // @lowest: 当日最低价, @open_interest:持仓量, @volume:成交量
                let askObj = { volume1: 0, volume2: 0, volume3: 0, volume4: 0 }
                let bidObj = { volume1: 0, volume2: 0, volume3: 0, volume4: 0 }
                let volumeObj = { volume1: 0, volume2: 0, volume3: 0, volume4: 0 }
                const currentDate = (res[0].datetime).split(' ')[0]
                const timeObj = that.joinFixedTime(currentDate)
                for (let i = 0; i < res.length; i++) {
                  const resObj = res[i]
                  const tempObjSecond = util.newTimeStamp(resObj.datetime)
                  // debugger
                  // 时间段09:00-10:00
                  if (timeObj.time1Start < tempObjSecond && timeObj.time1End > tempObjSecond) {
                    askObj.volume1 += Number(resObj[codeNameArr[0]][codeNameArr[1]].ask_volume1)
                    bidObj.volume1 += Number(resObj[codeNameArr[0]][codeNameArr[1]].bid_volume1)
                    volumeObj.volume1 += Number(resObj[codeNameArr[0]][codeNameArr[1]].volume)
                  }
                  // 时间段10:00-11:00
                  if (timeObj.time2Start < tempObjSecond && timeObj.time2End > tempObjSecond) {
                    askObj.volume2 += Number(resObj[codeNameArr[0]][codeNameArr[1]].ask_volume1)
                    bidObj.volume2 += Number(resObj[codeNameArr[0]][codeNameArr[1]].bid_volume1)
                    volumeObj.volume2 += Number(resObj[codeNameArr[0]][codeNameArr[1]].volume)
                  }
                  // 时间段11:00-14:00
                  if (timeObj.time3Start < tempObjSecond && timeObj.time3End > tempObjSecond) {
                    askObj.volume3 += Number(resObj[codeNameArr[0]][codeNameArr[1]].ask_volume1)
                    bidObj.volume3 += Number(resObj[codeNameArr[0]][codeNameArr[1]].bid_volume1)
                    volumeObj.volume3 += Number(resObj[codeNameArr[0]][codeNameArr[1]].volume)
                  }
                  // 时间段14:00-15:00
                  if (timeObj.time4Start < tempObjSecond && timeObj.time4End > tempObjSecond) {
                    askObj.volume4 += Number(resObj[codeNameArr[0]][codeNameArr[1]].ask_volume1)
                    bidObj.volume4 += Number(resObj[codeNameArr[0]][codeNameArr[1]].bid_volume1)
                    volumeObj.volume4 += Number(resObj[codeNameArr[0]][codeNameArr[1]].volume)
                  }
                }
                askObj = util.calAskBidPercent(askObj)
                bidObj = util.calAskBidPercent(bidObj)
                volumeObj = util.calAskBidPercent(volumeObj)
                const compareResult = that.compareAskBid(askObj, bidObj)
                const dateAndCode = currentDate + '.' + codeNameArr[1]
                const wrapObj = { dateAndCode, volumeObj, askObj, bidObj, compareResult }
                resolve(wrapObj)
              }).catch(err => {
                reject(err)
                that.$message.error(err.data.msg)
              })
            })
          )
        }
      }
      Promise.all(promiseArr).then(function (res) {
        console.log(res)
        that.guess(res)
      })
    },

    // 传入timeCut对象,生成符合固定时间段对象
    joinFixedTime (currentDate) {
      let idx = 1
      const obj = {}
      timeConfig.timeCut.forEach(item => {
        obj['time' + idx + 'Start'] = util.newTimeStamp(currentDate + item.hourStart)
        obj['time' + idx + 'End'] = util.newTimeStamp(currentDate + item.hourEnd)
        idx++
      })
      return obj
    },
    // 比较买卖盘比例,简单标记‘卖', '买'
    compareAskBid (askObj, bidObj) {
      const arr = []
      for (let d = 0; d < new Array(4).length; d++) {
        if (Number(askObj['volume' + (d + 1)]) > Number(bidObj['volume' + (d + 1)])) {
          arr.push('卖')
        } else {
          arr.push('买')
        }
      }
      return arr
    },
    // 哥德巴赫猜想
    guess (arr) {
      const that = this
      const newArr = strategy.fn_12(arr)
      // 每日后俩个阶段成交方向相同时，判断与平均水平的比较，假定买多还是买少，隔日反向操作
      that.timeEnd = util.newTimeStamp()
      console.log('回测所用时间:' + (that.timeEnd - that.timeStart))
      console.log(JSON.stringify(newArr))
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
