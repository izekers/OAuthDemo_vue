<template>
  <div>
    <h1 v-show="!islogin">尚未登录</h1>
    <button @click="login" v-show="!islogin"  style="cursor:pointer">登录</button>
    <h1 v-show="islogin">已登录</h1>
    <button @click="logout" v-show="islogin"  style="cursor:pointer">注销</button>
  </div>
</template>

<script>
export default {
  name: 'ssoIndex',
  data () {
    return {
      islogin: false,
    }
  },
  methods:{
    checkLogin:function(){
      return this.$login.checkLogin(this);
    },
    login:function(){
      this.$login.login(this);
    },
    logout:function () {
      this.$login.logout(this,"http://localhost:9999"+"/");
    }
  },
  mounted:function () {
      this.islogin = this.checkLogin();
  }
}
</script>

<style>
</style>

