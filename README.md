## jqData_use
本地使用 `jqData`

#### JQData说明书
[JQData-本地量化数据说明书](https://www.joinquant.com/help/api/help?name=JQData 'JQData-本地量化数据说明书')
[Tqsdk文档](https://doc.shinnytech.com/tqsdk/latest/ 'Tqsdk文档')
[真格文档](https://quant.pobo.net.cn/doc?name=api '真格文档')

#### 交易市场
交易所|示例代码|证券名称
--|:--:|--:
上海证券交易所|'600519.XSHG'|贵州茅台|
深圳证券交易所|'000001.XSHE'|平安银行|
中金所|'IC9999.CCFX'|中证500主力合约|
大商所|'A9999.XDCE'|豆一主力合约|
上期所|'AU9999.XSGE'|黄金主力合约|
郑商所|'CY8888.XZCE'|棉纱期货指数|
上海能源交易所|'SC9999.XINE'|原油主力合约|

#### 使用
```SHELL
# csv和json需前往比特球-天勤数据下载
# 获取区间交易日期
https://quant.pobo.net.cn/main#/strategy/editor/52976/0
# 获取日期对应主力合约
https://quant.pobo.net.cn/main#/strategy/editor/54126/0
# 获取全市场期货合约列表
https://quant.pobo.net.cn/main#/strategy/editor/54129/0
# tqsdkPy 下载某个合约所有数据
# dealtick/src/common/trans.js 截取并存储每个交易日的json
# dealtick vue项目请求json并计算出'买卖信息'
```

#### 常见问题
1. node处理数据内存耗完
```JS
// https://segmentfault.com/a/1190000010437948
node --max-old-space-size=8192 ./trans.js // MB
node --max-new-space-size=8192 ./trans.js // KB
```
