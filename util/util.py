#!/usr/bin/python
# -*- coding: utf-8 -*-
from jqdatasdk import *
class Util:
    # 登录
    def login():
        auth('13396551860','yanglu0811')
        return is_auth()
    # 剩余可调用条数
    def queryCount():
        return get_query_count()  
