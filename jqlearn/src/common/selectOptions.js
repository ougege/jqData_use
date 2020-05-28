/* 
    用于筛选框的条件
*/

// 打卡点状态
const clockInPointStatus = [
  {
    value: 2,
    label: '全部'
  },
  {
    value: 0,
    label: '正常'
  },
  {
    value: 1,
    label: '已关闭'
  },
]

let selectOptions = {
  clockInPointStatus: clockInPointStatus
}

export default selectOptions