<template>
  <div>
    <h1>来自资源服务器的数据</h1>
    <h2>
      资源服务器对应的用户姓名：{{res.username}}
    </h2>
    <h2>
      提示信息：{{res.msg}}
    </h2>
    <button @click="logout"  style="cursor:pointer">注销</button>
  </div>
</template>

<script>
  export default {
    name: 'baseCasesItem',
    data () {
    return {
      resUri:this.$config.resUri+"/res",
      res:{
        msg:"",
        username:""
      }
    }
  },
    methods:{
      checkLogin:function(){
        return this.$login.checkLogin(this);
      },
      login:function(){
        this.$login.login(this)
      },
      logout:function () {
        this.$login.logout(this)
      },
      getResourceInfo:function () {
        var uri = this.resUri + "?access_token="+this.$token.loadToken().access_token;
        this.$ajax({
          url:uri,
          dataType: 'jsonp'
        })
          .then((response) =>{
            this.res = response.data;;
          })
          .catch((error)=> {
            alert(error);
          });
      }
    },
  mounted:function () {
    if(this.checkLogin()){
      this.getResourceInfo();
    }else {
      this.login();
    }
  }
}
</script>

<style>
</style>

