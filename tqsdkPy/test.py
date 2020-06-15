#!/usr/bin/env python
#  -*- coding: utf-8 -*-

from datetime import date
from tqsdk import TqApi, TqReplay
# 在创建 api 实例时传入 TqReplay 就会进入复盘模式
api = TqApi(backtest=TqReplay(date(2019, 9, 10)))
quote = api.get_quote("SHFE.cu1912")

while True:
    api.wait_update()
    if api.is_changing(quote):
        print("最新价", quote.datetime, quote.last_price)