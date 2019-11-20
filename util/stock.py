#!/usr/bin/python
# -*- coding: utf-8 -*-
from jqdatasdk import *
class Stock:
    # 获取所有标的信息
    # types: list: 可选: 'stock', 'fund', 'index', 'futures', 'options', 'etf', 'lof', 'fja', 'fjb', 'open_fund', 'bond_fund', 'stock_fund', 'QDII_fund', 'money_market_fund', 'mixture_fund'。types为空时返回所有股票, 不包括基金,指数和期货
    # date: 日期, 一个字符串或者 [datetime.datetime]/[datetime.date] 对象
    def getAll(arr):
        return get_all_securities(types=arr, date=None)