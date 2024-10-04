span<script setup>
import { ref, computed } from 'vue'
import { useBaseStore } from '@/stores/useBase.js'
import { JapaneseYen, DollarSign, CreditCard } from 'lucide-vue-next'
import { multiply } from '@/composables/useMath.js'

const piniaBase = useBaseStore()

const show = ref(false)
const yen = ref('10000')
const yenShow = computed(() => (yen.value === '' ? 0 : Number(yen.value).toLocaleString()))

//NTD
const ntdCashRate = computed(() => piniaBase.holdYenRate ?? 0.22)
const ntdCashShow = computed(() => {
  if (yen.value === '') return 0
  else {
    const ntd = multiply(yen.value, ntdCashRate.value)
    return Number(ntd).toLocaleString()
  }
})
</script>

<template>
  <div class="p-[10px] h-full flex flex-col space-y-4">
    <div class="row text-[12px]">
      <div class="text-[white]">JPY</div>
      <van-field
        v-model="yenShow"
        readonly
        clickable
        @touchstart.stop="show = true"
        left-icon="smile-o"
        input-align="right"
      >
        <template #left-icon> <JapaneseYen class="text-[white]" /> </template
      ></van-field>
    </div>
    <div class="row text-[12px]">
      <div class="text-[white] flex justify-between">
        <span>TWD</span><span>庫存匯率：{{ ntdCashRate }}</span>
      </div>
      <van-field v-model="ntdCashShow" readonly left-icon="smile-o" input-align="right">
        <template #left-icon> <DollarSign class="text-[white]" /> </template
      ></van-field>
    </div>
    <div class="row text-[12px]">
      <IndexCard :yen="yen" />
    </div>
    <van-number-keyboard v-model="yen" :show="show" @blur="show = false" />
  </div>
</template>

<style scoped lang="scss">
:deep() {
  .van-number-keyboard {
    background-color: rgba(255, 255, 255, 0);
    backdrop-filter: blur(5px);
    padding-bottom: 0px;
  }
  .van-key__wrapper {
    .van-key {
      background-color: rgba(255, 255, 255, 0.2);
      color: white;
    }
  }

  .van-cell {
    background-color: transparent;
    border-bottom: 1px solid white;
    padding-left: 0px;
    padding-right: 0px;
    font-size: 24px;
    --van-field-input-text-color: white !important;
  }
}
</style>

<route>
{
  name: "IndexPage",
  meta: {
    requiresAuth: true
  }
}
</route>
