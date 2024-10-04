<script setup>
import { computed, onMounted } from 'vue'
import { CreditCard } from 'lucide-vue-next'
import { useCardStore } from '@/stores/useCard.js'
const piniaCard = useCardStore()
const cardList = computed(() =>
  piniaCard.cardList ? piniaCard.cardList.sort((a, b) => b?.rate - a?.rate) : []
)
</script>

<template>
  <div class="p-[10px] h-full flex flex-col">
    <div class="h-full flex justify-center items-center" v-if="!cardList.length">
      <van-button type="default" round @click="piniaCard.setDefaultCard()"
        ><div class="flex items-center"><CreditCard class="mr-1" />加入預設卡片</div>
      </van-button>
    </div>
    <div class="h-full" v-else>
      <CardCard v-for="card in cardList" :key="card.id" :data="card" />
      <CardCard add />
    </div>
  </div>
</template>

<style scoped lang="scss"></style>

<route>
{
  name: "CardPage",
  meta: {
    requiresAuth: true
  }
}
</route>
