import { getMediaList } from '@/utils/mediaQuery'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHeroStore = defineStore('heroStore', () => {
  const rowDirectionMediaList = getMediaList('screen and (min-width: 1024px)')
  const isRowDirectionRef = ref(rowDirectionMediaList.matches)
  const curHeroItemIndexRef = ref(0)

  function changeHeroItemIndex(heroItemIndex) {
    curHeroItemIndexRef.value = heroItemIndex
  }

  return {
    rowDirectionMediaList,
    isRowDirectionRef,
    curHeroItemIndexRef,
    changeHeroItemIndex,
  }
})
