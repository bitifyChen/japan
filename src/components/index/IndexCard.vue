<script setup>
import { ref, computed } from 'vue'
import { CreditCard } from 'lucide-vue-next'
import { multiply } from '@/composables/useMath.js'
import { useBaseStore } from '@/stores/useBase.js'
import { useCardStore } from '@/stores/useCard.js'
const props = defineProps({
  yen: {
    type: String,
    default: ''
  }
})

const piniaBase = useBaseStore()
const piniaCard = useCardStore()

const yen = computed(() => props.yen)
const ntdCardRate = computed(() => piniaBase.timelyYenRate ?? 0.22)

const cardList = computed(() => piniaCard.cardList ?? [])

const cardListShow = computed(() =>
  cardList.value.map((item) => ({
    ...item,
    value: yen.value
      ? multiply(
          multiply(yen.value, item.exRate ? item.exRate : ntdCardRate.value),
          (100 - item.rate) / 100
        )
      : ''
  }))
)
</script>


<template>
  <div class="">
    <div class="space-y-4">
      <div class="" v-for="card in cardListShow" :key="card.name">
        <div class="text-[white] flex justify-between">
          <span>{{ card.tip }}</span
          ><span>{{ card.exRate ? `庫存匯率：${card.exRate}` : `及時匯率：${ntdCardRate}` }}</span>
        </div>
        <van-field
          v-model="card.value"
          readonly
          input-align="right"
          :class="{ limit: card.limit && card.value >= card.limit }"
        >
          <template #left-icon>
            <div class="text-[white] font-bold">{{ card.name }}</div>
          </template>
        </van-field>
      </div>
    </div>
  </div>
</template>


<style scoped lang="scss">
.limit :deep() {
  .van-field__control {
    color: red;
  }
}
</style>