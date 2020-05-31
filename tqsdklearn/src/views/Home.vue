<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// https://github.com/shinnytech/tqsdk-js#module_TQSDK..Tqsdk+initMdWebsocket
import TQSDK from 'tqsdk'
import HelloWorld from '@/components/HelloWorld.vue'

export default {
  components: { HelloWorld },
  data () {
    return {}
  },
  created () {},
  destroyed () {},
  mounted () {
    this.init()
  },
  computed: {},
  watch: {},
  methods: {
    init () {
      const tqsdk = new TQSDK() // 等价于 const tqsdk = new TQSDK()
      tqsdk.on('ready', function () {
      })
      const quote = tqsdk.getQuote('SHFE.au2006')
      const dt = quote.expire_datetime
      console.log(quote)
      console.log(dt)
    }
  }
}
</script>
