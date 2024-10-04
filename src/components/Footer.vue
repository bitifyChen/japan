<script setup>
import { ref } from 'vue'
import { Calculator, CreditCard, Settings } from 'lucide-vue-next'
const active = ref(0)
</script>


<template>
  <div class="">
    <van-tabbar v-model="active" route>
      <van-tabbar-item to="/">
        <Calculator />
      </van-tabbar-item>
      <van-tabbar-item to="/card">
        <CreditCard />
      </van-tabbar-item>
      <van-tabbar-item to="/setting">
        <Settings />
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>


<style lang="scss" scoped>
:deep() {
  .van-tabbar-item {
    color: rgba(255, 255, 255, 0.4) !important;
  }
  .van-tabbar-item--active {
    background-color: transparent;
    color: rgba(255, 255, 255, 0.9) !important;
  }

  .van-tabbar {
    background-color: rgba(255, 255, 255, 0.04);
    backdrop-filter: blur(5px);
  }
  .van-hairline--top-bottom::after {
    border: 0px !important;
  }
}
</style>