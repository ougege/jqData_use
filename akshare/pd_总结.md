# pandas使用总结

#### Head与Tail
`head()` 与 `tail()` 用于快速预览 `Series` 与 `DataFrame` ，默认显示 5 条数据，也可以指定显示数据的数量

#### 属性与底层数据
Pandas 可以通过多个属性访问元数据:
* shape:
    * 输出对象的轴维度,与 ndarray　一致
* 轴标签
    * Series: Index (仅有此轴)
    * DataFrame: Index (行) 与列

.array 属性用于提取 Index 或 Series　里的数据
提取Numpy 数组, 用 to_numpy()　或 numpy.asarray()

#### 加速操作
借助 numexpr 与 bottleneck 支持库，Pandas 可以加速特定类型的二进制数值与布尔操作
```python
pd.set_option('compute.use_bottleneck', False)
pd.set_option('compute.use_numexpr', False)
```

#### 匹配/广播机制
1. df.iloc[1] (取每行下标为1的数据)
1. df['two'] (取每列下标为two的数据)
1. df.sub(row, axis='columns') (查找数据帧row和其他逐元素的减法,axis即轴)
1. df.copy() (拷贝)
1. divmod() (接收两个数字类型（非复数）参数，返回一个包含商和余数的元组)
1. df + df1 = df.add(df2, fill_value=0) (加法)

#### 比较操作
序号|缩写|英文|中文
--|:--:|:--:|--:
1|eq|equal to|等于
2|ne|not equal to|不等于
3|lt|less than|小于
4|gt|greater than|大于
5|le|less than or equal to|小于等于
6|ge|greater than or equal to|大于等于

#### 布尔简化
1. df.empty (验证Pandas对象是否为空)
1. df.bool() (验证单元素pandas对象的布尔值)

#### 合并重叠数据集
1. df1.combine_first(df2) (df2并入df1)

#### DataFrame通用合并方法
```python
def combiner(x, y):
  return np.where(pd.isna(x), y, x)
```

#### 描述性统计
1. df.sum() (求和)
1. df.mean() (求平均值,0是列)