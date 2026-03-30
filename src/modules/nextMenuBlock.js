import { ref } from 'vue'

export function useNextMenuBlock() {
  const nextMenuBlockDataRef = ref(null)
  const nextMenuBlockStateRef = ref(false)

  function openNextMenuBlock(data) {
    nextMenuBlockDataRef.value = data
    nextMenuBlockStateRef.value = true
  }

  function closeNextMenuBlock() {
    nextMenuBlockDataRef.value = null
    nextMenuBlockStateRef.value = false
  }

  return { nextMenuBlockDataRef, nextMenuBlockStateRef, openNextMenuBlock, closeNextMenuBlock }
}
