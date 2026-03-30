import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useMenuCloseStore = defineStore('menuCloseStore', () => {
  const menuCloseStateRef = ref(false)

  function openMenuState() {
    menuCloseStateRef.value = true
  }

  function closeMenuState() {
    menuCloseStateRef.value = false
  }

  function changeMenuState() {
    if (menuCloseStateRef.value) {
      closeMenuState()
      document.querySelector('body').style.overflow = ''
    } else {
      openMenuState()
      document.querySelector('body').style.overflow = 'hidden'
    }
  }

  return { menuCloseStateRef, changeMenuState }
})
