import { defineStore } from 'pinia'

export const useBaseStore = defineStore('base', {
  state: () => ({
    holdYenRate: 0.222,
    holdYenNum: 0,
    timelyYenRate:0.222
  }),
  getters: {},
  actions: {
    editRate({timelyYenRate,holdYenRate}){
      if (holdYenRate) this.holdYenRate = holdYenRate
      if (timelyYenRate) this.timelyYenRate = timelyYenRate
    },
  }
})
