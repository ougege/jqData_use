import pandas as pd
import numpy as np
pd.set_option('compute.use_bottleneck', False)
pd.set_option('compute.use_numexpr', False)

df = pd.DataFrame({'col1': np.random.randn(3),
'col2': np.random.randn(3)}, index=['a', 'b', 'c'])
print(df)
for row_index, row in df.iterrows():
    print(row_index, row, sep='\n')