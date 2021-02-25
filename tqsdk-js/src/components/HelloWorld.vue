<template>
  <view>
    tqsdk
  </view>
</template>

<script>
import { forwardArr, createTqsdk, config } from '../common/index'
export default {
  data () {
    return {
    }
  },
  components: {},
  onLoad () {},
  created () {},
  mounted () {
    console.log(forwardArr)
    console.log(createTqsdk)
    console.log(config)
  },
  onShow () {},
  onReady () {},
  methods: {
  }
}
</script>

<style scoped>
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
