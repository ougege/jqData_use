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
