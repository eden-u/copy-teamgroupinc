<script setup>
import { getCalculatedSvgData } from '@/utils/animeBtnData'

const svgData = {
  svgWidth: 150,
  svgHeight: 40,
  pathMargin: 1,
  clipWeight: 10,
}

const { svgViewBox, pathStrokeDash, pathDirection } = getCalculatedSvgData(svgData)
</script>

<template>
  <div class="options">
    <a
      class="anime-btn-box"
      href=""
      v-for="animeBtnIndex in 10"
      :key="`anime-btn-${animeBtnIndex}`"
    >
      <svg :viewBox="svgViewBox">
        <path
          class="btn__line--anime"
          v-bind="{ d: pathDirection }"
          :style="{ ['--line-len']: pathStrokeDash }"
        />
      </svg>

      <p class="btn-text">option{{ animeBtnIndex }}</p>
    </a>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media-width.scss' as media-width;

$btn-text-clr: #9d4edd;
$btn-text-clr-hover: black;
$btn-anime-time: 0.5s;
$btn-delay-time: 0.75s; // const animeTime = 500 * 2

$btn-line-clr: black;
$btn-line-clr-hover: white;
$btn-line-bg: rgba(255, 255, 255, 0);
$btn-line-bg-hover: white;

.options {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 1rem;
  overflow: auto;
}

// #region anime btn
.anime-btn-box {
  width: min(16rem, 100%);
  display: grid;
  grid-template-areas: 'anime-btn';
  align-items: center;

  & > * {
    grid-area: anime-btn;
  }
}

.btn__line--anime {
  stroke-width: 1px;
  stroke-dasharray: var(--line-len);
  stroke-dashoffset: 0;
  stroke: $btn-line-clr;
  fill: $btn-line-bg;
}

.btn-text {
  color: $btn-text-clr;
}
// #endregion anime btn

@media screen and (min-width: media-width.$width-1024) {
  .anime-btn-box:hover .btn__line--anime {
    animation:
      run-1 $btn-anime-time ease forwards,
      run-2 $btn-anime-time ease forwards $btn-anime-time;

    @keyframes run-1 {
      100% {
        stroke-dashoffset: calc(var(--line-len) * -1px);
        stroke: $btn-line-clr-hover;
      }
    }

    @keyframes run-2 {
      0% {
        stroke-dashoffset: calc(var(--line-len) * -1px);
        stroke: $btn-line-clr-hover;
      }

      50% {
        stroke-dashoffset: calc(var(--line-len) * -2px);
        stroke: $btn-line-clr-hover;
        fill: $btn-line-bg;
      }

      100% {
        stroke-dashoffset: calc(var(--line-len) * -2px);
        stroke: $btn-line-clr-hover;
        fill: $btn-line-bg-hover;
      }
    }
  }

  .anime-btn-box:hover .btn-text {
    color: $btn-text-clr-hover;
    transition: all $btn-anime-time ease $btn-delay-time;
  }
}
</style>
