<script setup>
import { getClipLen, getPathStrokeClipLen, getSvgSize } from '@/utils/animeBtnData'
import { checkPalyState, enterAnimeBtn, leaveAnimeBtn } from '@/modules/animeBtn'
import { getMediaList } from '@/utils/mediaQuery'
import { onMounted, ref } from 'vue'
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
const clipWeight = 10
const animePathStyle = {
  strokeWidth: '1px',
  strokeDasharray: pathStrokeDash,
  strokeDashoffset: 0,
  stroke: 'black',
  fill: 'rgb(255, 137, 137)',
}
// #endregion set anime btn

// #region set path anime
const firstAnimeStyle = { stroke: 'white' }
const secondAnimeStyle = { fill: 'white' }
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
  { strokeDashoffset: -pathStrokeDash * 2, ...secondAnimeStyle },
]

const secondAnimeOption = {
  duration: animeTime * 2,
  easing: 'ease',
  fill: 'forwards',
  delay: animeTime,
}
// #endregion set path anime

// #region anime passport
const animeBtnMediaList = getMediaList('screen and (min-width: 1024px)')
const animePassportRef = ref(animeBtnMediaList.matches)

onMounted(() => {
  animeBtnMediaList.addEventListener('change', (e) => {
    animePassportRef.value = e.matches
  })
})
// #endregion anime passport
</script>

<template>
  <div class="options">
    <a
      class="anime-btn"
      @pointerenter="enterAnimeBtn(animeBtnIndex)"
      @pointerleave="leaveAnimeBtn"
      href=""
      v-for="animeBtnIndex in 10"
      :key="`anime-btn-${animeBtnIndex}`"
    >
      <AnimeBtn
        v-bind="{
          svgData,
          animePathStyle,
          animeList: [firstAnime, secondAnime],
          animeOptionList: [firstAnimeOption, secondAnimeOption],
          playState: animePassportRef && checkPalyState(animeBtnIndex),
        }"
      />
      <p class="btn-text">option{{ animeBtnIndex }}</p>
    </a>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media-width.scss' as media-width;

$btn-text-clr: #9d4edd;
$btn-text-clr-hover: black;
$btn-text-time: 0.5s;
$btn-delay-time: 0.75s; // const animeTime = 500 * 2

.options {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow: auto;
}

.anime-btn {
  display: grid;
  grid-template-areas: 'anime-btn';
  align-items: center;
  width: min(16rem, 100%);

  & > * {
    grid-area: anime-btn;
  }
}

.btn-text {
  color: $btn-text-clr;
}

@media screen and (min-width: media-width.$width-1024) {
  .anime-btn:hover .btn-text {
    color: $btn-text-clr-hover;
    transition: all $btn-text-time ease $btn-delay-time;
  }
}
</style>
