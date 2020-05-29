// 给聚宽用的合约信息列表
// 徽商暂无粳米,聚乙烯
const forWardInfoList = [
  {"name":"普麦","unit":50,"deposit":9,"code":"PM9999.XZCE","minChange":1,"pointPrice":50,"time":"","timeType":1},
  {"name":"早籼稻","unit":20,"deposit":9,"code":"RI9999.XZCE","minChange":1,"pointPrice":20,"time":"","timeType":1},
  {"name":"晚籼稻","unit":20,"deposit":9,"code":"LR9999.XZCE","minChange":1,"pointPrice":20,"time":"","timeType":1},
  {"name":"甲醇","unit":10,"deposit":13,"code":"MA9999.XZCE","minChange":1,"pointPrice":10,"time":"23:00","timeType":2},
  {"name":"尿素","unit":20,"deposit":9,"code":"UR9999.XZCE","minChange":1,"pointPrice":20,"time":"","timeType":1},
  {"name":"纯碱","unit":20,"deposit":9,"code":"SA9999.XZCE","minChange":1,"pointPrice":20,"time":"23:00","timeType":2},
  {"name":"苯乙烯","unit":5,"deposit":16,"code":"EB9999.XDCE","minChange":1,"pointPrice":5,"time":"23:00","timeType":2},
  {"name":"液化石油气","unit":20,"deposit":17,"code":"PG9999.XDCE","minChange":1,"pointPrice":20,"time":"23:00","timeType":2},
  {"name":"黄金","unit":1000,"deposit":13,"code":"AU9999.XSGE","minChange":0.02,"pointPrice":20,"time":"02:30","timeType":5},
  {"name":"白银","unit":15,"deposit":15,"code":"AG9999.XSGE","minChange":1,"pointPrice":15,"time":"02:30","timeType":5},
  {"name":"不锈钢","unit":5,"deposit":13,"code":"SS9999.XSGE","minChange":5,"pointPrice":25,"time":"01:00","timeType":4},
  {"name":"20号胶","unit":10,"deposit":16,"code":"NR9999.XINE","minChange":5,"pointPrice":50,"time":"23:00","timeType":2},
  {"name":"强麦","unit":20,"deposit":10,"code":"WH9999.XZCE","minChange":1,"pointPrice":20,"time":"","timeType":1},
  {"name":"棉花","unit":5,"deposit":11,"code":"CF9999.XZCE","minChange":5,"pointPrice":25,"time":"23:30","timeType":3},
  {"name":"白糖","unit":10,"deposit":9,"code":"SR9999.XZCE","minChange":1,"pointPrice":10,"time":"23:30","timeType":3},
  {"name":"菜油","unit":10,"deposit":10,"code":"OI9999.XZCE","minChange":1,"pointPrice":10,"time":"23:30","timeType":3},
  {"name":"菜籽","unit":10,"deposit":24,"code":"RS9999.XZCE","minChange":1,"pointPrice":10,"time":"","timeType":1},
  {"name":"菜粕","unit":10,"deposit":10,"code":"RM9999.XZCE","minChange":1,"pointPrice":10,"time":"23:30","timeType":3},
  {"name":"粳稻","unit":20,"deposit":9,"code":"JR9999.XZCE","minChange":1,"pointPrice":20,"time":"","timeType":1},
  {"name":"棉纱","unit":5,"deposit":11,"code":"CY9999.XZCE","minChange":5,"pointPrice":25,"time":"23:30","timeType":3},
  {"name":"苹果","unit":10,"deposit":12,"code":"AP9999.XZCE","minChange":1,"pointPrice":10,"time":"","timeType":1},
  {"name":"红枣","unit":5,"deposit":11,"code":"CJ9999.XZCE","minChange":5,"pointPrice":25,"time":"","timeType":1},
  {"name":"PTA","unit":5,"deposit":14,"code":"TA9999.XZCE","minChange":2,"pointPrice":10,"time":"23:30","timeType":3},
  {"name":"玻璃","unit":20,"deposit":9,"code":"FG9999.XZCE","minChange":1,"pointPrice":20,"time":"23:30","timeType":3},
  {"name":"动力煤","unit":100,"deposit":10,"code":"TC9999.XZCE","minChange":0.2,"pointPrice":20,"time":"23:30","timeType":3},
  {"name":"硅铁","unit":5,"deposit":11,"code":"SF9999.XZCE","minChange":2,"pointPrice":10,"time":"","timeType":1},
  {"name":"锰硅","unit":5,"deposit":11,"code":"SM9999.XZCE","minChange":2,"pointPrice":10,"time":"","timeType":1},
  {"name":"玉米","unit":10,"deposit":9,"code":"C9999.XDCE","minChange":1,"pointPrice":10,"time":"23:30","timeType":3},
  {"name":"淀粉","unit":10,"deposit":10,"code":"CS9999.XDCE","minChange":1,"pointPrice":10,"time":"23:00","timeType":2},
  {"name":"豆一","unit":10,"deposit":11,"code":"A9999.XDCE","minChange":1,"pointPrice":10,"time":"23:30","timeType":3},
  {"name":"豆二","unit":10,"deposit":12,"code":"B9999.XDCE","minChange":1,"pointPrice":10,"time":"23:00","timeType":2},
  {"name":"豆粕","unit":10,"deposit":12,"code":"M9999.XDCE","minChange":1,"pointPrice":10,"time":"23:30","timeType":3},
  {"name":"豆油","unit":10,"deposit":12,"code":"Y9999.XDCE","minChange":2,"pointPrice":20,"time":"23:30","timeType":3},
  {"name":"棕榈油","unit":10,"deposit":12,"code":"P9999.XDCE","minChange":2,"pointPrice":20,"time":"23:30","timeType":3},
  {"name":"纤维板","unit":500,"deposit":15,"code":"FB9999.XDCE","minChange":0.05,"pointPrice":25,"time":"","timeType":1},
  {"name":"胶合板","unit":500,"deposit":60,"code":"BB9999.XDCE","minChange":0.05,"pointPrice":25,"time":"","timeType":1},
  {"name":"鸡蛋","unit":10,"deposit":10,"code":"JD9999.XDCE","minChange":1,"pointPrice":10,"time":"","timeType":1},
  {"name":"聚氯乙烯","unit":5,"deposit":15,"code":"V9999.XDCE","minChange":5,"pointPrice":25,"time":"23:30","timeType":3},
  {"name":"聚丙烯","unit":5,"deposit":17,"code":"PP9999.XDCE","minChange":1,"pointPrice":5,"time":"23:00","timeType":2},
  {"name":"焦炭","unit":100,"deposit":14,"code":"J9999.XDCE","minChange":0.5,"pointPrice":50,"time":"23:30","timeType":3},
  {"name":"焦煤","unit":60,"deposit":13,"code":"JM9999.XDCE","minChange":0.5,"pointPrice":30,"time":"23:30","timeType":3},
  {"name":"铁矿石","unit":100,"deposit":13,"code":"I9999.XDCE","minChange":0.5,"pointPrice":50,"time":"23:30","timeType":3},
  {"name":"乙二醇","unit":10,"deposit":15,"code":"EG9999.XDCE","minChange":1,"pointPrice":10,"time":"23:00","timeType":2},
  {"name":"沪铜","unit":5,"deposit":15,"code":"CU9999.XSGE","minChange":10,"pointPrice":50,"time":"01:00","timeType":4},
  {"name":"沪铝","unit":5,"deposit":14,"code":"AL9999.XSGE","minChange":5,"pointPrice":25,"time":"01:00","timeType":4},
  {"name":"沪锌","unit":5,"deposit":14,"code":"ZN9999.XSGE","minChange":5,"pointPrice":25,"time":"01:00","timeType":4},
  {"name":"沪铅","unit":5,"deposit":14,"code":"PB9999.XSGE","minChange":5,"pointPrice":25,"time":"01:00","timeType":4},
  {"name":"沪镍","unit":1,"deposit":14,"code":"NI9999.XSGE","minChange":10,"pointPrice":10,"time":"01:00","timeType":4},
  {"name":"沪锡","unit":1,"deposit":14,"code":"SN9999.XSGE","minChange":10,"pointPrice":10,"time":"01:00","timeType":4},
  {"name":"螺纹钢","unit":10,"deposit":13,"code":"RB9999.XSGE","minChange":1,"pointPrice":10,"time":"23:00","timeType":2},
  {"name":"线材","unit":10,"deposit":13,"code":"WR9999.XSGE","minChange":1,"pointPrice":10,"time":"","timeType":1},
  {"name":"热卷","unit":10,"deposit":13,"code":"HC9999.XSGE","minChange":1,"pointPrice":10,"time":"23:00","timeType":2},
  {"name":"原油","unit":1000,"deposit":23,"code":"SC9999.XINE","minChange":0.1,"pointPrice":100,"time":"02:30","timeType":5},
  {"name":"燃油","unit":10,"deposit":23,"code":"FU9999.XSGE","minChange":1,"pointPrice":10,"time":"23:00","timeType":2},
  {"name":"沥青","unit":10,"deposit":22,"code":"BU9999.XSGE","minChange":2,"pointPrice":20,"time":"23:00","timeType":2},
  {"name":"橡胶","unit":10,"deposit":16,"code":"RU9999.XSGE","minChange":5,"pointPrice":50,"time":"23:00","timeType":2},
  {"name":"纸浆","unit":10,"deposit":12,"code":"SP9999.XSGE","minChange":2,"pointPrice":20,"time":"23:00","timeType":2}
]
module.exports = forWardInfoList