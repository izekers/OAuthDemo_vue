<template>
  <div>
  </div>
</template>

<script>
export default {
  name: 'ssologin',
  data () {
    return {
      state:"",
      code:"",
    }
  },
  methods:{
    getToken:function(){
      this.$token.getTokenFromService(this,this.code,(response)=>{
        this.$token.savetoken(response.data);
        this.$router.push('/user');
      },function (error) {
        alert(error);
      });
    }
  },
  mounted:function () {
    this.code = this.$route.query.code;
    this.state = this.$route.query.state;
    this.getToken();
  }
}
</script>

<style>
</style>

