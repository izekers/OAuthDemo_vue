<template>
  <div>
</div>
</template>

<script>
export default {
  name: 'ssologout',
  data () {
    return {
    }
  },
  methods:{
  },
  mounted:function () {
    this.$token.deleteToken();
    // var logouturi = this.$config.logoutUri+"?post_logout_redirect_uri="+this.$config.localuri+"/";
    // window.location.href = logouturi;
    this.$router.push('/')
  }
}
</script>

<style>
</style>

