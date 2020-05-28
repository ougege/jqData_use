<template>
  <div class="full-body">
    <el-button type="primary" @click="getToken" plain>获取token</el-button>
  </div>
</template>
<script>
import * as api from '../api'
import {config} from '../common/config'
// const axios = require('axios')
export default {
  name: 'IYanyiLogin',
  data() {
    return {
    }
  },
  computed: {},
  mounted() {
  },
  methods: {
    getToken () {
      // let that = this
      let params = {
        method: 'get_token',
        mob: config.mobile,
        pwd: config.password
      }
      api.getToken(params).then(res => {
        console.log(res.data)
      }).catch(err => {
        console.log(err)
      })
    }
  }
}
</script>
