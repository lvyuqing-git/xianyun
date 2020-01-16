<template>
  <div class="header">
    <el-row type="flex">
      <div>
        <img src="/logo.jpg"
             alt="">
      </div>
      <el-row type="flex">
        <nuxt-link to="/">首页</nuxt-link>
        <nuxt-link to="/air">旅游攻略</nuxt-link>
        <nuxt-link to="/hotel">酒店</nuxt-link>
        <nuxt-link to="/post">国内机票</nuxt-link>
      </el-row>
      <div class="login">
        <nuxt-link to='/user/login'>
          登录/注册</nuxt-link>
      </div>
    </el-row>
  </div>
</template>

<script>
export default {
    
}
</script>

<style lang='less' scoped>
</style>