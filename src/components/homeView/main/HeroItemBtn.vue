<script setup>
import AnimeBtn from '@/components/anime/AnimeBtn.vue'
import { getClipLen, getPathStrokeClipLen, getSvgSize } from '@/utils/animeBtnData'
import { getMediaList } from '@/utils/mediaQuery'
import { onMounted, ref } from 'vue'
import { checkPalyState, enterAnimeBtn, leaveAnimeBtn } from '@/modules/animeBtn'

// #region get stroke dash
const { svgWidth, svgHeight } = getSvgSize(100, 35)
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
const clipWeight = 20
const bgPathStyle = {
  strokeWidth: '1px',
  strokeDasharray: pathStrokeDash,
  strokeDashoffset: 0,
  stroke: 'white',
  fill: 'none',
}

const animePathStyle = {
  strokeWidth: '1px',
  strokeDasharray: `${pathStrokeDash} ${pathStrokeDash}`,
  strokeDashoffset: pathStrokeDash,
  stroke: 'black',
  fill: 'none',
}

// #endregion set anime btn

// #region set anime
const firstAnimeStyle = { stroke: 'black' }
const animeTime = 500

const firstAnime = [
  { strokeDashoffset: pathStrokeDash },
  {
    strokeDashoffset: 0,
    ...firstAnimeStyle,
  },
]

const firstAnimeOption = {
  duration: animeTime,
  easing: 'ease',
  fill: 'forwards',
}
// #endregion set anime

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
  <a @pointerenter="enterAnimeBtn('play anime')" @pointerleave="leaveAnimeBtn" href="">
    <AnimeBtn
      v-bind="{
        svgData,
        bgPathStyle,
        animePathStyle,
        animeList: [firstAnime],
        animeOptionList: [firstAnimeOption],
        playState: animePassportRef && checkPalyState('play anime'),
        hasBgPath: true,
      }"
    />
    <p>Lorem.</p>
  </a>
</template>
<style scoped lang="scss">
@use '@/assets/styles/media-width.scss' as media-width;

$text-clr: white;
$text-clr-active: black;
$link-size: 1rem;
$tranition-item: 0.5s;

// #region link and anime btn
a {
  display: grid;
  grid-template-areas: 'anime-btn';
  align-items: center;
  font-size: $link-size;
  margin-top: 1rem;
  padding: 0.5rem 0;
  color: $text-clr;

  & > * {
    grid-area: anime-btn;
  }

  &:hover {
    color: $text-clr-active;
  }
}

// #endregion link and anime btn

@media screen and (min-width: media-width.$width-1024) {
  a {
    opacity: 0;
    transform: translateY(1rem);
  }

  .grow-up a {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 0.5s ease $tranition-item,
      transform 0.5s ease $tranition-item,
      color 0.3s ease;

    &:hover {
      transition:
        opacity 0.5s ease $tranition-item,
        transform 0.5s ease $tranition-item,
        color 0.5s ease $tranition-item;
    }
  }
}

@media screen and (max-width: media-width.$width-1023) {
  a {
    transition: color 0.3s ease;

    &:hover {
      transition: color 0.5s ease $tranition-item;
    }
  }
}
</style>
