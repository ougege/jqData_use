#!/usr/bin/python
# -*- coding: utf-8 -*-
import sys, random, json, re
sys.path.append('./util/')
from jqdatasdk import *
from util import Util
from stock import Stock
# 登录
login = Util.login()
if (login):
    print('已经登录')
    print(Util.queryCount())
    arr = ['stock', 'futures']
    # print(Stock.getAll(arr))
else:
    print('你还没有登录')

