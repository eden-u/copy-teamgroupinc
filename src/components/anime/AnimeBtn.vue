<script setup>
import { palyAnime, stopAllAnime } from '@/utils/anime'
import { getPathDirection, getViewBox } from '@/utils/animeBtnData'
import { ref, watch } from 'vue'

const { svgData, animePathStyle, animeList, animeOptionList, playState } = defineProps([
  'svgData',
  'animePathStyle',
  'bgPathStyle',
  'animeList',
  'animeOptionList',
  'playState',
  'hasBgPath',
])

// #region count path data
const { svgWidth, svgHeight } = svgData

const svgViewBox = getViewBox(svgWidth, svgHeight)
const pathDirection = getPathDirection(svgData)
// #endregion count path data

// #region use anime
const animePathElRef = ref(null)

watch(
  () => playState,
  () => {
    if (playState) {
      stopAllAnime(animePathElRef.value, animePathStyle)

      animeList.forEach((anime, animeIndex) => {
        palyAnime(animePathElRef.value, anime, animeOptionList[animeIndex])
      })
    } else {
      stopAllAnime(animePathElRef.value, animePathStyle)
    }
  },
)
// #endregion use anime
</script>

<template>
  <svg :viewBox="svgViewBox">
    <path v-if="hasBgPath" v-bind="{ d: pathDirection }" :style="bgPathStyle" />
    <path ref="animePathElRef" v-bind="{ d: pathDirection }" :style="animePathStyle" />
  </svg>
</template>

<style scoped lang="scss">
@use '@/assets/styles/anime-btn.scss' as anime-btn;

svg {
  width: 100%;
}

path {
  @include anime-btn.base-anime-path();
}
</style>
