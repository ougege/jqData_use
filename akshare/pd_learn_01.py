import pandas as pd
import numpy as np
pd.set_option('compute.use_bottleneck', False)
pd.set_option('compute.use_numexpr', False)
# index = pd.date_range('1/1/2000', periods=8)
# s = pd.Series(np.random.randn(5), index=['a', 'b', 'c', 'd', 'e'])
# df = pd.DataFrame(np.random.randn(8, 3), index=index, columns=['A', 'B', 'C'])
# # head和tail
# long_series = pd.Series(np.random.randn(1000))

# print(df)
# print('从你的全世界路过')
# print(df.to_numpy())
df = pd.Series(np.random.randn(5), index=['a', 'b', 'c', 'd', 'e'])
print(df)
print('----------')
print(df.sum())
print('----------')
print(df.mean(0))
print('----------')
print(df.mean(1))