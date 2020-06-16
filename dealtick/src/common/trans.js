const csvFilePath = '../../static/data/DCE.jd2007.csv'
const csv = require('csvtojson')
const util = require('./util')
var fs = require('fs')

let startDate = '2020-06-11 08:59'
let endDate = '2020-06-12 15:01'
let startSecond = util.newTimeStamp(startDate)
let endSecond = util.newTimeStamp(endDate)
// let test = '2019-07-26 18:34:07.000000000'
// let testSecond = util.newTimeStamp(test)

csv()
.fromFile(csvFilePath)
.then((jsonObj) => {
    let wholeArr = []
    for (let i = 0; i < jsonObj.length; i++) {
        let tempObj = jsonObj[i]
        let tempSecond = util.newTimeStamp(tempObj.datetime)
        if (tempSecond > startSecond && tempSecond < endSecond) {
            wholeArr.push(tempObj)
        }
    }
    // let newStr = 'const DCE2007 = ' + JSON.stringify(wholeArr) + ';' + 'export { DCE2007 }'
    // console.log(str)
    fs.writeFile('../../static/data/DCE.jd2007.json', JSON.stringify(wholeArr), 'utf-8', function (err) {
        if (err) {
            return console.log(err)
        }
        console.log("The file was saved!")
    })
})
