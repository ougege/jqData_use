const csvFilePath = '../../public/static/data/DCE.jd2007.csv'
const csv = require('csvtojson')
const util = require('./util')
const timeConfig = require('./timeConfig')
var fs = require('fs')

csv()
.fromFile(csvFilePath)
.then((jsonObj) => {
    let wholeArr = []
    timeConfig.tradeDay.forEach(item => {
        let startDate = item + ' 08:59'
        let endDate = item + ' 15:01'
        let startSecond = util.newTimeStamp(startDate)
        let endSecond = util.newTimeStamp(endDate)
        for (let i = 0; i < jsonObj.length; i++) {
            let tempObj = jsonObj[i]
            let tempSecond = util.newTimeStamp(tempObj.datetime)
            if (tempSecond > startSecond && tempSecond < endSecond) {
                wholeArr.push(tempObj)
            }
        }
        fs.writeFile('../../public/static/data/DCE.jd2007.' + item + '.json', JSON.stringify(wholeArr), 'utf-8', function (err) {
            if (err) {
                return console.log(err)
            }
            console.log('The file ' + item + ' was saved!')
        })
    })
})
