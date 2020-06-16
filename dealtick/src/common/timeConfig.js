const timeCut = [
  { hourStart: ' 08:58:59', hourEnd: ' 09:59:59' },
  { hourStart: ' 10:00:00', hourEnd: ' 10:59:59' },
  { hourStart: ' 11:00:00', hourEnd: ' 13:59:59' },
  { hourStart: ' 14:00:00', hourEnd: ' 15:00:01' }
]
const tradeDay = [
  '2020-06-01', '2020-06-02', '2020-06-03', '2020-06-04', '2020-06-05',
  '2020-06-08', '2020-06-09', '2020-06-10', '2020-06-11', '2020-06-12',
  '2020-06-15'
]
const timeConfig = {
  timeCut,
  tradeDay
}
// export { timeConfig }
module.exports = timeConfig
