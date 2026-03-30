import { defineStore } from 'pinia'
import { ref } from 'vue'

export const useHeaderNavStore = defineStore('headerNavStore', () => {
  // #region nav item
  const curNavItemDetailIndexRef = ref(-1)

  function openNavItemDetail(i) {
    curNavItemDetailIndexRef.value = i
  }

  function closeNavItemDetail() {
    curNavItemDetailIndexRef.value = -1
  }
  // #endregion nav item

  // #region selector list and 2D list
  const selectorList = ['select-1', 'select-2', 'select-3']
  const curTwoDListRowRef = ref(0)

  function changeCur2DListRow(outerListItemEl, i) {
    if (selectorList[i] === outerListItemEl.textContent) curTwoDListRowRef.value = i
  }
  // #endregion selector list and 2D list

  return {
    curNavItemDetailIndexRef,
    openNavItemDetail,
    closeNavItemDetail,
    curTwoDListRowRef,
    changeCur2DListRow,
  }
})
