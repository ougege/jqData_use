## jqData_use
本地使用 `jqData`

#### 文档说明
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
# tqsdk 下载某个合约所有月份数据, 已保存csv需前往比特球-天勤数据下载
# python获取区间交易日期
https://quant.pobo.net.cn/main#/strategy/editor/52976/0
# python获取日期对应主力合约
https://quant.pobo.net.cn/main#/strategy/editor/54126/0
# python获取全市场期货合约列表
https://quant.pobo.net.cn/main#/strategy/editor/54129/0
# dealtick/src/common/trans.js node截取并存储每个交易日对应主力合约的json
# 已保存json需前往比特球-天勤数据下载
# dealtick node处理所有json并根据策略计算出'买卖标记'
# 将标记导入tqsdk，进行回测
https://www.joinquant.com/algorithm/index/edit?algorithmId=ea6c465ca56c082fddfe5373438fe32b
```

#### 策略统计
统计区间 2016-09-01 至 2020-06-01
fn_15波幅最大,从浮盈2倍到负值,感兴趣可以深入研究

策略|盈利次数|亏损次数|次数|交易日|最大回撤|收益|
--|:--:|:--:|:--:|:--:|:--:|--:|
fn_3|49|45|94|918|37.38%|18.17%|
fn_7|25|27|52|918|15.32%|48.87%|
fn_8|27|17|44|918|10.34%|14.38%|
fn_9|22|28|52|918|43.03%|39.72%|
fn_11|22|17|39|918|29.99%|13.57%|
fn_14|43|41|84|918|18.06%|51.21%|
fn总|188|175|363|918|24.71%|185.92%|
fn杠|188|175|363|918|72.37%|523.53%|


#### 常见问题
1. node处理数据内存耗完
```JS
// https://segmentfault.com/a/1190000010437948
node --max-old-space-size=8192 ./trans.js // MB
node --max-new-space-size=8192 ./trans.js // KB
```
