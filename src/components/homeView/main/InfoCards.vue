<script setup>
import { useCardStore } from '@/stores/cardStore'
import { storeToRefs } from 'pinia'
import { onMounted, ref, watch, watchEffect } from 'vue'

const cardStore = useCardStore()
const {
  fakeCardMediaList,
  fixedMarginMediaList,
  cardMargin,
  changeCurCard,
  autoCarousel,
  stopTimers,
} = cardStore
const {
  fakeCardStateRef,
  curCardIndexRef,
  cardListRef,
  fixedMarginRef,
  cardsElStyleRef,
  cardTranitionTimeRef,
} = storeToRefs(cardStore)

cardTranitionTimeRef.value = 500
// scss set $card-change-time: 0.5s;

// #region watch cards height
const cardBox = ref(null)
const cardsElHeight = ref('')
const cardsElHeightObserver = new ResizeObserver(() => {
  updateHeight()
})

onMounted(() => {
  // #region media change
  fakeCardMediaList.addEventListener('change', (e) => {
    fakeCardStateRef.value = e.matches
  })

  fixedMarginMediaList.addEventListener('change', (e) => {
    fixedMarginRef.value = e.matches ? cardMargin : 0
  })

  watch(
    fakeCardStateRef,
    () => {
      if (fakeCardStateRef.value) {
        autoCarousel()
        cardsElHeightObserver.observe(cardBox.value[0])
      } else {
        stopTimers()
        cardsElHeightObserver.disconnect()
      }
    },
    {
      immediate: true,
    },
  )
  // #endregion media change

  cardsElHeightObserver.observe(cardBox.value[0])

  watchEffect(updateHeight)
})

function updateHeight() {
  const height = cardBox.value?.[curCardIndexRef.value]?.offsetHeight

  cardsElHeight.value = fakeCardStateRef.value ? `${height}px` : ''
}
// #endregion watch cards height

function checkCardSelectorState(cardIndex) {
  return cardIndex === curCardIndexRef.value % (cardListRef.value.length - 1)
}
</script>

<template>
  <div class="cards-layout">
    <div class="cards-box" :style="{ ...cardsElStyleRef, height: cardsElHeight }">
      <div
        class="card-box"
        ref="cardBox"
        @pointerenter="stopTimers()"
        @pointerleave="autoCarousel()"
        v-for="({ title, content }, cardIndex) in cardListRef"
        :key="`card-${cardIndex}`"
      >
        <a href="">
          <div class="card-title-and-hint-box">
            <p class="card-title">{{ title }}</p>
            <p class="card-hint">Lorem.</p>
          </div>

          <p class="card-content">{{ content }}</p>
        </a>
      </div>
    </div>

    <div class="cards-selector" v-if="fakeCardStateRef">
      <span
        :class="{ ['card-selector-active']: checkCardSelectorState(cardIndex) }"
        @click="changeCurCard(cardIndex)"
        @pointerenter="stopTimers()"
        @pointerleave="autoCarousel()"
        v-for="(_, cardIndex) in cardListRef.slice(0, -1)"
        :key="`card-selector-${cardIndex}`"
      ></span>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media-width.scss' as media-width;

$card-bg-clr: white;
$card-text-clr: black;
$card-shadow: 0 0 10px rgba(0, 0, 0, 0.3);
$card-shadow-hover: 0 0 10px 5px rgba(0, 0, 0, 0.2);
$card-content-clr: gray;
$card-hint-clr: rgba(0, 0, 0, 0.2);
$card-highlight-clr: red;
$card-selector-clr: rgba(128, 128, 128, 0.5);
$card-selector-clr-active: black;
$card-fixed-margin: 50px;
$card-change-time: 0.5s; // cardTranitionTimeRef.value = 500

// #region card self
.cards-box {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.card-box {
  background-color: $card-bg-clr;
  box-shadow: $card-shadow;
  padding-block: 1rem;
  padding-inline: 2rem 1rem;
  border-radius: 5px;
}
// #endregion card self

// #region card text
a {
  color: $card-text-clr;
}

.card-title-and-hint-box {
  display: flex;
  justify-content: space-between;
}

.card-title {
  font-size: 1.25rem;
  position: relative;

  &::before {
    content: '';
    display: block;
    width: 5px;
    height: 5px;
    border-radius: 50%;
    background-color: $card-highlight-clr;
    position: absolute;
    top: 50%;
    transform: translateX(-1rem);
  }
}

.card-hint {
  font-size: 0.75rem;
  color: $card-hint-clr;
  display: flex;
  align-items: center;
  gap: 0.5rem;

  &::before {
    content: '';
    display: inline-block;
    width: 1em;
    border-top: 1px solid $card-hint-clr;
    transform: translateY(1px);
  }
}

.card-content {
  color: $card-content-clr;
}
// #endregion card text

@media screen and (min-width: media-width.$width-1024) {
  .card-box,
  .card-title {
    transition: all 0.3s ease;
  }

  .card-box:hover {
    transform: translateY(-5px);
    box-shadow: $card-shadow-hover;

    .card-title {
      color: $card-highlight-clr;
    }
  }
}

@media screen and (max-width: media-width.$width-1023) {
  .cards-box {
    flex-direction: row;
    align-items: center;
    overflow: hidden;
    gap: 0;
    padding: 1rem 0;
    transition:
      transform $card-change-time ease,
      height $card-change-time ease;
  }

  .card-box {
    width: 100%;
    margin: 0 10svw;
  }

  .cards-selector {
    display: flex;
    justify-content: center;
    gap: 0.5rem;

    span {
      display: inline-block;
      background-color: $card-selector-clr;
      width: 10px;
      height: 10px;
      border-radius: 50%;
      cursor: pointer;
    }

    .card-selector-active {
      background-color: $card-selector-clr-active;
    }
  }
}

@media screen and (max-width: media-width.$width-575) {
  .card-box {
    margin: 0 $card-fixed-margin;
    position: relative;
    padding-block: 1rem 2rem;
  }

  .card-hint {
    position: absolute;
    right: 1rem;
    bottom: 1rem;
  }
}
</style>
