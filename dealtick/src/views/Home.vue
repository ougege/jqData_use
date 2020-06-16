<template>
  <div class="hello">
    <div>
      <img alt="Vue logo" src="../assets/logo.png">
    </div>
    <div>
      空白显示一下
    </div>
  </div>
</template>

<script>
import * as api from '../api'
export default {
  name: 'Home',
  data () {
    return {
    }
  },
  watch: {},
  mounted () {
    this.getList()
  },
  created () {
  },
  methods: {
    getList () {
      const that = this
      const params = {}
      api.getDCEJd2007Data(params).then(res => {
        console.log(res)
      }).catch(err => {
        // console.log(err)
        that.$message.error(err.data.msg)
      })
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
