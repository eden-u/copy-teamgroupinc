<script setup>
import { getClipLen, getPathStrokeClipLen, getSvgSize } from '@/utils/animeBtnData'
import { checkPalyState, enterAnimeBtn, leaveAnimeBtn } from '@/modules/animeBtn'
import AnimeBtn from '@/components/anime/AnimeBtn.vue'

// #region get stroke dash
const { svgWidth, svgHeight } = getSvgSize(150, 40)
const clipLen = getClipLen(svgWidth, clipWeight)
const svgData = {
  svgWidth,
  svgHeight,
  pathMargin,
  clipLen,
}

const pathStrokeDash = getPathStrokeClipLen(svgData)
// #endregion get stroke dash

// #region set anime btn
const pathMargin = 1
const clipWeight = 5
const animePathStyle = {
  strokeWidth: '1px',
  strokeDasharray: pathStrokeDash,
  strokeDashoffset: 0,
  stroke: 'black',
  fill: 'none',
}
// #endregion set anime btn

// #region set path anime
const firstAnimeStyle = { stroke: 'white' }

const animeTime = 500

const firstAnime = [
  { strokeDashoffset: 0 },
  {
    strokeDashoffset: -pathStrokeDash,
    ...firstAnimeStyle,
  },
]

const firstAnimeOption = {
  duration: animeTime,
  easing: 'ease',
  fill: 'forwards',
}

const secondAnime = [
  { strokeDashoffset: -pathStrokeDash },
  { strokeDashoffset: -pathStrokeDash * 2 },
]

const secondAnimeOption = {
  duration: animeTime,
  easing: 'ease',
  fill: 'forwards',
  delay: animeTime,
}
// #endregion set path anime
</script>

<template>
  <div class="anime-btns">
    <a
      class="anime-btn"
      @pointerenter="enterAnimeBtn(animeBtnIndex)"
      @pointerleave="leaveAnimeBtn"
      href=""
      v-for="animeBtnIndex in 2"
      :key="`anime-btn-${animeBtnIndex}`"
    >
      <AnimeBtn
        v-bind="{
          svgData,
          animePathStyle,
          animeList: [firstAnime, secondAnime],
          animeOptionList: [firstAnimeOption, secondAnimeOption],
          playState: checkPalyState(animeBtnIndex),
        }"
      />

      <p class="btn-text">Lorem, ipsum.</p>
    </a>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/text-clr-hover.scss' as text-clr-hover;

$btn-text-clr: black;
$btn-text-clr-hover: white;
$btn-text-time: 1s; // const animeTime = 500

.anime-btns {
  display: flex;
  gap: 1.5rem;
}

.anime-btn {
  display: grid;
  grid-template-areas: 'anime-btn';
  align-items: center;
  text-align: center;
  width: min(16rem, 100%);

  & > * {
    grid-area: anime-btn;
  }
}

.btn-text {
  color: $btn-text-clr;
}

.anime-btn:hover .btn-text {
  color: $btn-text-clr-hover;
  transition: all $btn-text-time ease;
}
</style>
