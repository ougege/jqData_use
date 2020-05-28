<template>
  <div class="full-body">
    <div class="login-logo">
      <a :href="appConfigUrl.home">
        <img src="/static/img/LOGO_reg.png" alt="剧汇王朝">
      </a>
    </div>
    <!-- <el-form :model="loginForm" :rules="rulesForm" ref="loginForm" label-position="left" label-width="0px" class="login-container">
      <h3 class="title">欢迎登录运营系统</h3>
      <el-button type="primary" style="width:100%;" @click.native.prevent="routerGo('/index')" :loading="logining">进入系统</el-button>
    </el-form>
    <el-form :model="loginForm" :rules="rulesForm" ref="loginForm" label-position="left" label-width="0px" class="login-container" v-if="false">
      <h3 class="title">系统登录</h3>
      <el-form-item  prop="phone" class="phone">
        <el-input type="text" v-model="loginForm.phone" auto-complete="off" :placeholder="'用户名/邮箱/手机号'"></el-input>
      </el-form-item>
      <el-form-item prop="pass" class="pass">
        <el-input type="password" v-model="loginForm.pass" auto-complete="off" placeholder="请输入6-16位字符密码"></el-input>
      </el-form-item>
      <el-form-item style="width:100%;">
        <el-button type="primary" style="width:100%;" @click.native.prevent="handleSubmitForm" :loading="logining">登录</el-button>
      </el-form-item>
    </el-form> -->
  </div>
</template>
<script>
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
  }
}
</script>
