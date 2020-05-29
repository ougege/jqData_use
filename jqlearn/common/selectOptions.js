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

// 缘分球状态
const luckyBallStatus = [
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
    label: '已隐藏'
  },
]

// 推送范围
const pushRangeStatus = [
  {
    value: 0,
    label: '全部'
  },
  {
    value: 1,
    label: '新注册用户'
  },
  {
    value: 2,
    label: '所有留存用户'
  },
  {
    value: 3,
    label: '留存30天用户'
  },
  {
    value: 4,
    label: '留存6个月用户'
  },
  {
    value: 5,
    label: '特定用户'
  },
]

// 推送状态
const pushStatus = [
  {
    value: 0,
    label: '全部'
  },
  {
    value: 1,
    label: '待推送'
  },
  {
    value: 2,
    label: '已推送'
  },
]

// 推送dialog条件筛选
const pushConditionSelect = [
  {
    value: 0,
    label: '全部'
  },
  {
    value: 1,
    label: '安卓'
  },
  {
    value: 2,
    label: 'ios用户'
  },
]

// 消息推送表格自定义显示
const pushMsgTableModifyShow = [
  {
    value: 'title',
    label: '消息标题',
    type: 'string'
  },
  {
    value: 'image',
    label: '消息图片',
    type: 'image'
  },
  {
    value: 'content',
    label: '消息内容',
    type: 'string'
  },
  {
    value: 'link',
    label: '链接',
    type: 'href'
  },
  {
    value: 'pushTime',
    label: '推送时间',
    type: 'string'
  },
  {
    value: 'delFlag',
    label: '推送范围',
    type: 'string'
  },
  {
    value: 'status',
    label: '推送状态',
    type: 'string'
  },
]

// 消息推送内容类型
const pushContentType = [
  {
    value: 1,
    label: '动态'
  },
  {
    value: 2,
    label: '话题'
  },
  {
    value: 3,
    label: 'h5'
  },
]

// 消息推送类型
const pushType = [
  {
    value: 1,
    label: 'PUSH'
  },
  {
    value: 2,
    label: '系统通知'
  }
]

// 广场管理搜索类型
const squareSearchType = [
  {
    value: 1,
    label: '图片'
  },
  {
    value: 2,
    label: '视频'
  },
  {
    value: 0,
    label: '文字'
  }
]

// 广场管理搜索状态
const squareSearchStatus = [
  {
    value: 1,
    label: '已审核'
  },
  {
    value: 0,
    label: '未审核'
  }
]

// 广场管理-动态审核状态
const squareTrendsVerifyStatus = [
  {
    value: 1,
    label: '通过'
  },
  {
    value: 2,
    label: '拒绝'
  }
]

// 用户管理-状态
const userManageStatus = [
  {
    value: 2,
    label: '禁言'
  },
  {
    value: 0,
    label: '正常'
  },
  {
    value: 1,
    label: '冻结'
  }
]

// 用户管理-状态
const userManageIdentity = [
  {
    value: 0,
    label: '真实'
  },
  {
    value: 2,
    label: '马甲'
  }
]

// 用户管理-新增性别
const userMale = [
  {
    value: 1,
    label: '男'
  },
  {
    value: 2,
    label: '女'
  }
]

// 用户管理-婚姻状况
const userMarryStatus = [
  {
    value: 1,
    label: '未婚'
  },
  {
    value: 2,
    label: '离异'
  },
  {
    value: 3,
    label: '丧偶'
  },
]

// 学历筛选
const educationSelect = [
  {
    value: 1,
    label: '中专'
  },
  {
    value: 2,
    label: '高中'
  },
  {
    value: 3,
    label: '大专'
  },
  {
    value: 4,
    label: '本科'
  },
  {
    value: 5,
    label: '硕士'
  },
  {
    value: 6,
    label: '博士'
  },
]

let selectOptions = {
  clockInPointStatus: clockInPointStatus,
  luckyBallStatus: luckyBallStatus,
  pushRangeStatus: pushRangeStatus,
  pushStatus: pushStatus,
  pushConditionSelect: pushConditionSelect,
  pushMsgTableModifyShow: pushMsgTableModifyShow,
  pushContentType: pushContentType,
  pushType: pushType,
  squareSearchType: squareSearchType,
  squareSearchStatus: squareSearchStatus,
  squareTrendsVerifyStatus: squareTrendsVerifyStatus,
  userManageStatus: userManageStatus,
  userManageIdentity: userManageIdentity,
  userMale: userMale,
  userMarryStatus: userMarryStatus,
  educationSelect: educationSelect
}

export default selectOptions