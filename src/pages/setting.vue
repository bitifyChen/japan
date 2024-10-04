<script setup>
import { computed, onMounted } from 'vue'
import { useBaseStore } from '@/stores/useBase.js'
const piniaBase = useBaseStore()
//取得資料
const showEdit = ref(false)
const tempData = ref({})
const editMethod = () => {
  showEdit.value = true
  tempData.value = {
    timelyYenRate: piniaBase.timelyYenRate,
    holdYenRate: piniaBase.holdYenRate
  }
}
const submitMethod = () => {
  showEdit.value = false
  piniaBase.editRate(tempData.value)
  tempData.value = {}
}
</script>

<template>
  <div class="p-[10px] h-full flex flex-col">
    <div
      class="mb-[10px] bg-[#255359] p-[10px] text-white text-[20px] font-bold"
      @click="editMethod"
    >
      <div class="flex justify-between">
        <div>即時匯率</div>
        <div>
          {{ piniaBase.timelyYenRate }}
        </div>
      </div>
    </div>
    <div
      class="mb-[10px] bg-[#255359] p-[10px] text-white text-[20px] font-bold"
      @click="editMethod"
    >
      <div class="flex justify-between">
        <div>庫存匯率</div>
        <div>
          {{ piniaBase.holdYenRate }}
        </div>
      </div>
    </div>
    <div class="text-center text-[#8fd4de]">以上匯率請手動修改</div>
  </div>
  <van-action-sheet v-model:show="showEdit" title="匯率修改">
    <div class="p-[10px]">
      <van-cell-group inset>
        <van-field v-model="tempData.timelyYenRate" type="number" label="即時匯率" />
        <van-field v-model="tempData.holdYenRate" type="number" label="庫存匯率" />
      </van-cell-group>
      <van-button round type="success" block @click="submitMethod()">確認</van-button>
    </div>
  </van-action-sheet>
</template>

<style scoped lang="scss"></style>

<route>
{
  name: "SettingPage",
  meta: {
    requiresAuth: true
  }
}
</route>
