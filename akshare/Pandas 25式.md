## Pandas 25式

#### 资料下载
[data资料](https://github.com/jaystone776/pandas_answered/blob/master/data/25_Pandas_Tips_by_PyCon_Master_data.zip 'data资料')

#### 载入数据
```python
drinks = pd.read_csv('data/drinks.csv')
movies = pd.read_csv('data/imdb_1000.csv')
orders = pd.read_csv('data/chipotle.tsv', sep='\t')
orders['item_price'] = orders.item_price.str.replace('$', '').astype('float')
stocks = pd.read_csv('data/stocks.csv', parse_dates=['Date'])
titanic = pd.read_csv('data/titanic_train.csv')
ufo = pd.read_csv('data/ufo.csv', parse_dates=['Time'])
```

#### 创建DataFrame
```python
df = pd.DataFrame({'列1': [100, 200], '列２': [300, 400]})
print(df)
# 创建多数据
df1 = pd.DataFrame(np.random.rand(5, 8))
print(df1)
## 强制命名列
df2 = pd.DataFrame(np.random.rand(5, 8), columns=list('一二三四五六七八'))
print(df2)
```

#### 重命名列
```python
df = pd.DataFrame({'列 1': [100, 200], '列 2': [300, 400]})
print(df)
# 重命名
df1 = df.rename({'列 1': '列1', '列 2': '列2'}, axis= 'columns')
print(df1)
# 直接为列赋值
df.columns = ['列1', '列2']
print(df)
# 直接替换列里空格
df.columns = df.columns.str.replace('', '_')
print(df)
# add_prefix和add_suffix函数可以为所有列名添加前缀或后缀
df.add_prefix('X_')
df.add_suffix('_Y')
```

#### 反转列序