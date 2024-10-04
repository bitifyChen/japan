import { set } from '@vueuse/core'
import { defineStore } from 'pinia'

export const useCardStore = defineStore('card', {
  persist: true,
  state: () => ({
    cardList: [],
    defaultCard: [
      {
        id:'1',
        name: '玉山熊本雄',
        tip: '加碼通路8.5%',
        rate: 8.5,
        exRate: 0.2222,
        limit: 10000
      },
      {
        id:'2',
        name: '玉山熊本雄',
        tip: 'SUICA/Paypay',
        rate: 6.5,
        exRate: 0.2222
      },
      {
        id:'3',
        name: '玉山熊本雄',
        tip: '一般通路3.5%',
        rate: 3.5,
        exRate: 0.2222
      },
      {
        id:'4',
        name: '吉鶴卡',
        tip: 'QuicPay 4%',
        rate: 4
      },
      {
        id:'5',
        name: '全支付',
        tip: '4285(每筆857內)，前1875綁國泰多8%',
        rate: 10
      }
    ]
  }),
  getters: {},
  actions: {
    addCard(card){
      this.cardList.append(card)
    },
    editCard(card){
      const index = this.cardList.findIndex((item) => item.id === card.id)
      if (index !== -1) {
        this.cardList[index] = card
      } else { 
        this.cardList.push(card)
      }
    },
    removeCard(card){
      const index = this.cardList.findIndex((item) => item.id === card.id)
      if (index !== -1) {
        this.cardList.splice(index, 1)
      }
    },
    removeAllCard(){
      this.cardList=[]
    },
    setDefaultCard (){
      this.cardList = this.defaultCard
    }
  }
})
