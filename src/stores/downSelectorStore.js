import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useDownSelectorStore = defineStore('downSelectorStore', () => {
  const downSelectorStateRef = ref(false)
  const downSelectorStringIndex = '3'
  const downSelectorActiveStyle = {
    color: '#66d9ff',
  }

  function renderCurDownSelectorTextStyle(selectorItemStr) {
    if (selectorItemStr.at(-1) === downSelectorStringIndex) return downSelectorActiveStyle
    return {}
  }

  function openDownSelector() {
    downSelectorStateRef.value = true
  }

  function closeDownSelector() {
    downSelectorStateRef.value = false
  }
  return {
    downSelectorStateRef,
    renderCurDownSelectorTextStyle,
    openDownSelector,
    closeDownSelector,
  }
})
