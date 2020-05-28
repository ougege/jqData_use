<template>
  <el-table
    :data="dataList"
    style="width: 100%"
    ref="dataTable"
    tooltip-effect="dark"
    :visible.sync="tableShow">
    <!-- <el-table-column type="selection" min-width="30"></el-table-column> -->
    <el-table-column v-for="(item, index) in dataLabels" :label="item.label" align="center" :prop="item.value" :key="index">
      <template slot-scope="scope">
        <div v-if="item.type == 'image'" class="table-push-img">
          <a :href="scope.row[item.value]" target="_blank">
            <el-image :src="scope.row[item.value]" fit="fill" class="table-push-img"></el-image>
          </a>
        </div>
        <a v-if="item.type == 'href'" :href="scope.row[item.value]" target="_blank">
          {{scope.row[item.value]}}
        </a>
        <div v-if="item.type == 'string'">
          {{scope.row[item.value]}}
        </div>
      </template>
    </el-table-column>
    <!-- 操作功能部分采用slot -->
    <slot></slot>
</el-table>
</template>

<script>
export default {
  props: ['dataLabels', 'dataList'],
  data () {
    return {
      formLabelWidth: '120px',
      tableShow: false
    }
  },
  created () {},
  destroyed () {},
  mounted () {
  },
  computed: {},
  watch: {},
  methods: {
    show () {
			this.tableShow = true
		},
		hide () {
			this.tableShow = false
		},
  }
}
</script>

<style scope lang="scss">
</style>


