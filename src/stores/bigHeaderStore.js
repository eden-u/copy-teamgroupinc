import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useBigHeaderStore = defineStore('bigHeaderStore', () => {
  const smallHeaderBoxHeight = 40
  const glassAtTopClr = 'rgba(255, 137, 137, 0.5)'
  const glassBGClrStyle = { backgroundColor: glassAtTopClr, boxShadow: 'none' }

  const curWindowScrollYRef = ref(window.scrollY)

  const bigHeaderBoxStyleRef = computed(() => {
    return curWindowScrollYRef.value >= smallHeaderBoxHeight
      ? { transform: 'translateY(0)' }
      : { transform: '' }
  })

  const glassBGStyleRef = computed(() => {
    return curWindowScrollYRef.value >= smallHeaderBoxHeight
      ? glassBGClrStyle
      : {
          backgroundColor: '',
          boxShadow: '',
        }
  })

  const topBtnStyleRef = computed(() => {
    return curWindowScrollYRef.value >= smallHeaderBoxHeight
      ? { transform: 'translateX(0)' }
      : { transform: '' }
  })

  function changeBigHeaderStyle() {
    curWindowScrollYRef.value = window.scrollY
  }

  return { bigHeaderBoxStyleRef, glassBGStyleRef, topBtnStyleRef, changeBigHeaderStyle }
})
