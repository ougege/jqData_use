<template>
  <div id="app">
    <LoginWelcome></LoginWelcome>
  </div>
</template>

<script>
import LoginWelcome from './views/LoginWelcome'

export default {
  name: 'App',
  components: {
    LoginWelcome
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
