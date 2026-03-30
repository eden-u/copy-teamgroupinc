import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useModalSelectorStore = defineStore('modalSelectorStore', () => {
  const modalSelectorStateRef = ref(JSON.parse(localStorage.getItem('modalSelector')))

  if (modalSelectorStateRef.value !== false) {
    modalSelectorStateRef.value = true
    document.querySelector('body').style.overflow = 'hidden'

    localStorage.setItem('modalSelector', 'false')
  }

  function openModalSelector() {
    modalSelectorStateRef.value = true
    document.querySelector('body').style.overflow = 'hidden'
  }

  function closeModalSelector() {
    modalSelectorStateRef.value = false
    document.querySelector('body').style.overflow = ''
  }

  return { modalSelectorStateRef, openModalSelector, closeModalSelector }
})
