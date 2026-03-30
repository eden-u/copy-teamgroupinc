import { getMediaList } from '@/utils/mediaQuery'
import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useFooterNavStore = defineStore('footerNavStore', () => {
  const footerMedialist = getMediaList('screen and (min-width: 1024px)')
  const footerNavRowMediaStateRef = ref(footerMedialist.matches)

  const curFooterNavItemDetailIndexRef = ref(-1)

  function openFooterNavItemDetail(i) {
    curFooterNavItemDetailIndexRef.value = i
  }

  function closeFooterNavItemDetail() {
    curFooterNavItemDetailIndexRef.value = -1
  }

  function changeFooterNavItemDetail(i) {
    if (footerNavRowMediaStateRef.value) return

    if (i === curFooterNavItemDetailIndexRef.value) return closeFooterNavItemDetail()

    openFooterNavItemDetail(i)
  }

  function checkFooterNavIndex(navIndex) {
    return curFooterNavItemDetailIndexRef.value === navIndex
  }

  function checkFooterNavItemDetailState(navIndex) {
    if (footerNavRowMediaStateRef.value) return true
    else return checkFooterNavIndex(navIndex)
  }

  return {
    footerMedialist,
    footerNavRowMediaStateRef,
    curFooterNavItemDetailIndexRef,
    changeFooterNavItemDetail,
    checkFooterNavIndex,
    checkFooterNavItemDetailState,
  }
})
