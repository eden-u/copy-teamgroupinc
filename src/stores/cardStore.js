import { getRealCardList } from '@/utils/dataTools'
import { getMediaList } from '@/utils/mediaQuery'
import { defineStore } from 'pinia'
import { computed, ref } from 'vue'

export const useCardStore = defineStore('cardStore', () => {
  // #region card order
  const curCardList = getRealCardList()
  const numberOfRealCard = curCardList.length
  const fakeCardMediaList = getMediaList('screen and (max-width: 1023px)')

  const fakeCardStateRef = ref(fakeCardMediaList.matches)
  const curCardIndexRef = ref(0)

  const cardListRef = computed(() => {
    const isNumberOfRealCard = curCardList.length === numberOfRealCard

    if (fakeCardStateRef.value && isNumberOfRealCard) curCardList.push(curCardList[0])
    else if (!fakeCardStateRef.value && !isNumberOfRealCard) curCardList.pop()

    return curCardList
  })

  function changeCurCard(cardIndex) {
    stopTimers()

    const isLastFakeCard = curCardIndexRef.value === numberOfRealCard
    const isFristCardIndex = cardIndex === 0

    if (isLastFakeCard && isFristCardIndex) return

    curCardIndexRef.value = cardIndex
  }
  // #endregion card order

  // #region card margin fixed
  const cardMargin = 50
  const fixedMarginMediaList = getMediaList('screen and (max-width: 575px)')
  const fixedMarginRef = ref(fixedMarginMediaList.matches ? cardMargin : 0)

  const cardsElStyleRef = computed({
    get() {
      return cardsElStyleComputed()
    },
    set: cardsElStyleComputed,
  })

  function cardsElStyleComputed(transition = null) {
    const totalCardMargin = fixedMarginRef.value * cardListRef.value.length * 2
    const translateX = (curCardIndexRef.value * 100) / cardListRef.value.length
    const minWidth = cardListRef.value.length * 100

    return fakeCardStateRef.value
      ? {
          transform: `translateX(calc(-${translateX}% - ${fixedMarginRef.value}px))`,
          minWidth: `calc(${minWidth}% + ${totalCardMargin}px)`,
          transition,
        }
      : {}
  }
  // #endregion card margin fixed

  // #region carousel card auto
  const cardTranitionTimeRef = ref(0)
  const carouselIntervalTime = 2000
  let carouselIntervalId = null
  let replaceCardTimeoutId = null

  function autoCarousel() {
    stopTimers()

    if (curCardIndexRef.value === cardListRef.value.length - 1) setCardReal()

    if (fakeCardStateRef.value)
      carouselIntervalId = setInterval(() => {
        curCardIndexRef.value = (curCardIndexRef.value + 1) % cardListRef.value.length

        if (curCardIndexRef.value === cardListRef.value.length - 1) {
          replaceCardTimeoutId = setTimeout(() => {
            setCardReal()
          }, cardTranitionTimeRef.value)
        }
      }, carouselIntervalTime)
  }

  function stopTimers() {
    clearInterval(carouselIntervalId)
    clearTimeout(replaceCardTimeoutId)
    carouselIntervalId = null
    replaceCardTimeoutId = null
  }

  function setCardReal() {
    curCardIndexRef.value = 0
    cardsElStyleRef.value.transition = 'all 0s'

    setTimeout(() => {
      cardsElStyleRef.value.transition = ''
    }, 0)
  }
  // #endregion carousel card auto

  return {
    fakeCardMediaList,
    fakeCardStateRef,
    curCardIndexRef,
    cardListRef,
    fixedMarginMediaList,
    cardMargin,
    fixedMarginRef,
    cardsElStyleRef,
    changeCurCard,
    cardTranitionTimeRef,
    autoCarousel,
    stopTimers,
  }
})
