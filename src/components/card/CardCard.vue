<script setup>
import { computed } from 'vue'
import { CreditCard } from 'lucide-vue-next'
import { useCardStore } from '@/stores/useCard.js'
const piniaCard = useCardStore()
const props = defineProps({
  data: {
    type: Object,
    default: () => {}
  },
  add: {
    type: Boolean,
    default: false
  }
})
const data = computed(() => props.data ?? {})
const tempData = ref({})
const showEdit = ref(false)
const addMethod = () => {
  tempData.value = {
    id: new Date().getTime()
  }
  showEdit.value = true
}
const editMethod = () => {
  if (data.value.id) {
    showEdit.value = true
    tempData.value = JSON.parse(JSON.stringify(data.value))
  }
}
const submitMethod = () => {
  piniaCard.editCard(tempData.value)
  tempData.value = {}
  showEdit.value = false
}
const delMethod = () => {
  piniaCard.removeCard(tempData.value)
  tempData.value = {}
  showEdit.value = false
}
</script>


<template>
  <div
    v-if="props.add"
    class="mb-[10px] bg-[#2f6870] p-[10px] text-[#8fd4de] flex justify-center items-center"
    @click="addMethod"
  >
    <CreditCard class="mr-1" />添加信用卡
  </div>
  <div v-else class="mb-[10px] bg-[#255359] p-[10px] text-white" @click="editMethod">
    <div class="flex text-[20px] font-bold">
      <div class="flex-1">
        <div>
          {{ data.name }}
        </div>
      </div>
      <div>{{ data.rate }}%</div>
    </div>
    <div class="flex justify-between">
      <div class="text-[14px] text-[#8fd4de]">{{ data.tip ?? '' }}</div>
      <div class="text-[14px] text-[#8fd4de]">
        {{ data.limit ? `Max：${data.limit} NTD` : '-' }}
      </div>
    </div>
  </div>
  <van-action-sheet v-model:show="showEdit" :title="data.name">
    <div class="p-[10px]">
      <van-cell-group inset>
        <van-field v-model="tempData.name" label="名稱" />
        <van-field v-model="tempData.tip" label="備註" />
        <van-field v-model="tempData.rate" type="number" label="回饋" />
        <van-field v-model="tempData.limit" type="number" label="上限(NTD)" />
        <van-field v-model="tempData.exRate" type="number" label="匯率" />
      </van-cell-group>
      <div class="flex space-x-2">
        <van-button round type="danger" block @click="delMethod()">刪除</van-button>
        <van-button round type="success" block @click="submitMethod()">確認</van-button>
      </div>
    </div>
  </van-action-sheet>
</template>


<style scoped>
</style>