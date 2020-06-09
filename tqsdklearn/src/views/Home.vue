<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
</template>

<script>
// @ is an alias to /src
// https://github.com/shinnytech/tqsdk-js#module_TQSDK..Tqsdk+initMdWebsocket
// import TQSDK from 'tqsdk'
// import tqsdk from '../common/tqsdk'
import { createTqsdk } from '../common/tqsdk'
import Bus from '../common/eventBus.js'
import HelloWorld from '@/components/HelloWorld.vue'
import { util } from '../common/util'

export default {
  components: { HelloWorld },
  data () {
    return {}
  },
  created () {
    Bus.$on('rtn_brokers', this.getBrokers)
    Bus.$on('TqsdkIsReady', this.init)
    Bus.$on('rtn_data', this.getData)
  },
  destroyed () {},
  mounted () {
  },
  computed: {},
  watch: {},
  methods: {
    init (tqsdk) {
      console.log(util)
      console.log(createTqsdk)
      console.log(tqsdk.getQuotesByInput('huangjin'))
      console.log(tqsdk.getKlines('SHFE.au2012', 10))
    },
    getBrokers (tqsdk, brokers) {
      console.log(tqsdk)
      console.log(brokers)
    },
    getData (tqsdk) {
    }
  }
}
</script>
