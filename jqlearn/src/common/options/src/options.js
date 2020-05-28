let optionsNoAPI = function () {} // 定义没有api的一些常用枚举选项
// 地址大区写死
optionsNoAPI.Areas = [
    {
        title: '华北',
        items: [
            {ProvinceCode: "110000", CountryCode: "CHN", ProvinceEnName: "Beijing", ProvinceCnName: "北京"},
            {ProvinceCode: "120000", CountryCode: "CHN", ProvinceEnName: "Tianjin", ProvinceCnName: "天津"},
            {ProvinceCode: "130000", CountryCode: "CHN", ProvinceEnName: "Hebei", ProvinceCnName: "河北"},
            {ProvinceCode: "140000", CountryCode: "CHN", ProvinceEnName: "Shanxi", ProvinceCnName: "山西"},
            {ProvinceCode: "150000", CountryCode: "CHN", ProvinceEnName: "Inner Mongolia", ProvinceCnName: "内蒙古"}
        ]
    },
    {
        title: '华东',
        items:[
            {ProvinceCode: "310000", CountryCode: "CHN", ProvinceEnName: "Shanghai", ProvinceCnName: "上海"},
            {ProvinceCode: "320000", CountryCode: "CHN", ProvinceEnName: "Jiangsu", ProvinceCnName: "江苏"},
            {ProvinceCode: "330000", CountryCode: "CHN", ProvinceEnName: "Zhejiang", ProvinceCnName: "浙江"},
            {ProvinceCode: "340000", CountryCode: "CHN", ProvinceEnName: "Anhui", ProvinceCnName: "安徽"},
            {ProvinceCode: "350000", CountryCode: "CHN", ProvinceEnName: "Fujian", ProvinceCnName: "福建"},
            {ProvinceCode: "370000", CountryCode: "CHN", ProvinceEnName: "Shandong", ProvinceCnName: "山东"}
        ]
    },
    {
        title: '华南',
        items:[
            {ProvinceCode: "440000", CountryCode: "CHN", ProvinceEnName: "Guangdong", ProvinceCnName: "广东"},
            {ProvinceCode: "450000", CountryCode: "CHN", ProvinceEnName: "Guangxi", ProvinceCnName: "广西"},
            {ProvinceCode: "460000", CountryCode: "CHN", ProvinceEnName: "Hainan", ProvinceCnName: "海南"}
        ]
    },
    {
        title: '华中',
        items:[
            {ProvinceCode: "360000", CountryCode: "CHN", ProvinceEnName: "Jiangxi", ProvinceCnName: "江西"},
            {ProvinceCode: "410000", CountryCode: "CHN", ProvinceEnName: "Henan", ProvinceCnName: "河南"},
            {ProvinceCode: "420000", CountryCode: "CHN", ProvinceEnName: "Hubei", ProvinceCnName: "湖北"},
            {ProvinceCode: "430000", CountryCode: "CHN", ProvinceEnName: "Hunan", ProvinceCnName: "湖南"}
        ]
    },
    {
        title: '西南',
        items:[
            {ProvinceCode: "500000", CountryCode: "CHN", ProvinceEnName: "Chongqing", ProvinceCnName: "重庆"},
            {ProvinceCode: "510000", CountryCode: "CHN", ProvinceEnName: "Sichuan", ProvinceCnName: "四川"},
            {ProvinceCode: "520000", CountryCode: "CHN", ProvinceEnName: "Guizhou", ProvinceCnName: "贵州"},
            {ProvinceCode: "530000", CountryCode: "CHN", ProvinceEnName: "Yunnan", ProvinceCnName: "云南"},
            {ProvinceCode: "540000", CountryCode: "CHN", ProvinceEnName: "Tibet", ProvinceCnName: "西藏"}
        ]
    },
    {
        title: '西北',
        items:[
            {ProvinceCode: "610000", CountryCode: "CHN", ProvinceEnName: "Shaanxi", ProvinceCnName: "陕西"},
            {ProvinceCode: "620000", CountryCode: "CHN", ProvinceEnName: "Gansu", ProvinceCnName: "甘肃"},
            {ProvinceCode: "630000", CountryCode: "CHN", ProvinceEnName: "Qinghai", ProvinceCnName: "青海"},
            {ProvinceCode: "640000", CountryCode: "CHN", ProvinceEnName: "Ningxia", ProvinceCnName: "宁夏"},
            {ProvinceCode: "650000", CountryCode: "CHN", ProvinceEnName: "Xinjiang", ProvinceCnName: "新疆"}
        ]
    },
    {
        title: '东北',
        items:[
            {ProvinceCode: "210000", CountryCode: "CHN", ProvinceEnName: "Liaoning", ProvinceCnName: "辽宁"},
            {ProvinceCode: "220000", CountryCode: "CHN", ProvinceEnName: "Jilin", ProvinceCnName: "吉林"},
            {ProvinceCode: "230000", CountryCode: "CHN", ProvinceEnName: "Heilongjiang", ProvinceCnName: "黑龙江"}
        ]
    },
    {
        title: '港澳',
        items:[
            {ProvinceCode: "810000", CountryCode: "CHN", ProvinceEnName: "Hong Kong", ProvinceCnName: "香港"},
            {ProvinceCode: "820000", CountryCode: "CHN", ProvinceEnName: "Macau", ProvinceCnName: "澳门"},
            {ProvinceCode: "900000", CountryCode: "CHN", ProvinceEnName: "DiaoyuDao", ProvinceCnName: "钓鱼岛"}
        ]
    }
]

optionsNoAPI.DongBei = {
}
optionsNoAPI.GangAo = {
}

optionsNoAPI.Education = [
    { value: '小学',
      label: '小学'
    }, {
      value: '初中',
      label: '初中'
    }, {
      value: '中专',
      label: '中专'
    }, {
      value: '高中',
      label: '高中'
    }, {
      value: '大专',
      label: '大专'
    }, {
      value: '本科',
      label: '本科'
    }, {
      value: '硕士',
      label: '硕士'
    }, {
      value: '博士',
      label: '博士'
    }
  ]
  

// 文件类型
optionsNoAPI.FileType = {
  // 头像或Logo，一般是小图片
  Logo: 0,
  // 图片
  Picture: 1,
  // 音乐或声音文件
  Music: 2,
  // 视频
  Video: 3,
  // 文档类文件，如doc、excel、ppt、txt等
  Document: 4,
  // 其他
  Other: 999,
}

// 按文件类别设定的业务功能代码
optionsNoAPI.BusiCodeOfFile = {
  // 用户头像或Logo，一般是小图片
  UserLogo: 0,
  // 用户图片
  UserPics: 1,
  // 用户音乐或声音文件
  UserMusics: 2,
  // 用户视频
  UserVideos: 3,
  // 用户文档类文件，如doc、excel、ppt、txt等
  UserDocs: 4,
  // 用户其他
  UserOthers: 999,

  // 组织Logo
  OrgLogo: 1000,
  // 组织图片库"
  OrgPics: 1001,
  // 组织声音音乐库"
  OrgMusics: 1002,
  // 组织视频库"
  OrgVideos: 1003,
  // 组织文档库"
  OrgDocs: 1004,
  // 添加新业务功能文件代码时，注意预留50类通用类别文件定义，从基础值+50开始。通用类别的能与FileType类别代码对应上
  // 组织营业执照"
  OrgYingye: 1050,
  // 组织机构代码"
  OrgJigou: 1051,
  // 组织其他文件库"
  OrgOthers: 1999,
  

  // 经营体Logo"
  EntityLogo: 2000,
  // 经营体图片库"
  EntityPics: 2001,
  // 经营体声音音乐库"
  EntityMusics: 2002,
  // 经营体视频库"
  EntityVideos: 2003,
  // 经营体文档库"
  EntityDocs: 2004,
  // 添加新业务功能文件代码时，注意预留50类通用类别文件定义，从基础值+50开始。通用类别的能与FileType类别代码对应上
  // 经营体其他文件库"
  EntityOthers: 2999,

  // 其他"
  Other: 99999
}

export {optionsNoAPI}