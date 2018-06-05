<template>
  <div>
    <h1>登录成功</h1>
    <h1>用户信息</h1>
    <h2>
      账号：{{user.login}}
    </h2>
    <h2>
      用户id：{{user.id}}
    </h2>
    <h2>
      <img :src="user.avatar_url"/>
    </h2>
    <button @click="logout" style="cursor:pointer">注销</button>
    <br>
    <!-- <button @click="res" style="cursor:pointer">获取资源从资源服务器</button> -->
  </div>
</template>
<script>
  export default {
    name: 'userIndex',
    data () {
    return {
      user:{
          id:"",
          login:"",
          avatar_url:"",
        }
    }
  },
    methods:{
      checkLogin:function(){
        return this.$login.checkLogin(this);
      },
      login:function(){
        return this.$login.login(this);
      },
      logout:function () {
        this.$login.logout(this,"http://localhost:9999"+"/");
      },
      res:function () {
        this.$router.push('/res')
      },
      getUserInfo:function () {
        var tokenInfo = this.$token.loadToken();
        this.$ajax({
          url:this.$config.userInfoUri+"?"+"access_token="+tokenInfo.access_token,
          headers:{"Accept":"application/json"}
        })
          .then((response) =>{
            this.user = response.data;
            console.log(this.user);
          })
          .catch((error) =>{
            this.$root.push("/logout")
          });
      }
    },
  mounted:function () {
    if(this.checkLogin()){
      this.getUserInfo();
    }else {
      this.login();
    }
  }
}
</script>

