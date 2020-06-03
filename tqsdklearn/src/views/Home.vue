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
import tqsdk from '../common/tqsdk'
import HelloWorld from '@/components/HelloWorld.vue'
import { util } from '../common/util'

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
      console.log(util)
      // console.log(tqsdk.getQuote('SHFE.AU99'))
      console.log(tqsdk.getQuotesByInput('jidan'))
    }
  }
}
</script>
