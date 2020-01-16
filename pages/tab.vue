<template>
  <div>

      <div>
          <div class="tab">
              <span v-for="(item,index) in ['tab1','tab2','tab3']" :key="index" @click='number=index'>{{item}}</span>
          </div>
          <div v-if="number == 0">11111111111111111111111111111111111111111111111111111111111111111111</div>
          <div v-if="number == 1">22222222222222222222222222222222222222222222222222222222222222222222</div>
          <div v-if="number == 2">33333333333333333333333333333333333333333333333333333333333333333333</div>
      </div>
  </div>
</template>

<script>
export default {
    data () {
        return {
            number : 0
        }
    }
}
</script>

<style lang='less' scoped>
    .tab{
        cursor: pointer;
        span{
            margin: 20px;
        }
    }
</style>