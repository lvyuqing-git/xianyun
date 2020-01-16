<template>
  <div>
    <Header></Header>
    <el-carousel height="700px">
      <el-carousel-item v-for="(item,index) in ['http://157.122.54.189:9095/assets/images/th01.jfif','http://157.122.54.189:9095/assets/images/th02.jfif']"
                        :key="index">
        <div class="carousel"
             :style="`background: url(${item})`">

        </div>
      </el-carousel-item>
    </el-carousel>
    <Footer></Footer>
  </div>
</template>

<script>
import Header from '@/components/header'
import Footer from '@/components/footer'
export default {
  components: {
    Header,
    Footer
  }
}
</script>

<style lang='less' scoped>
.carousel {
  height: 700px;
}
</style>