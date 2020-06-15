#!/usr/bin/python
from tqsdk import TqApi
api = TqApi()
# 获得 cu2003 tick序列的引用
# 上期所 SHFE.au2012
# 大商所 DCE.jd2006
# 郑商所 CZCE.AP010
ticks = api.get_tick_serial("DCE.jd2007", 8964)
print(ticks)
# 获得 cu2003 10秒K线的引用
# klines = api.get_kline_serial("SHFE.cu2003", 10)
# klines = api.get_kline_serial("DCE.jd2007", 60, 8964)
# print(klines)
api.close()