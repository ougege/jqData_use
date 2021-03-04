<template>
  <view>
    tqsdk
  </view>
</template>

<script>
import TQSDK from 'tqsdk'
// import { forwardArr, config } from '../common/index'
export default {
  data () {
    return {
    }
  },
  components: {},
  onLoad () {},
  created () {},
  mounted () {
    // console.log(forwardArr)
    // console.log(createTqsdk)
    // console.log(config)
    const tqsdk = new TQSDK({autoInit: true}) // 等价于 const tqsdk = new TQSDK()
    tqsdk.on('ready', function () {
      // eslint-disable-next-line
      console.log(tqsdk.getQuote('DCE.jd2105'))
    })
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
