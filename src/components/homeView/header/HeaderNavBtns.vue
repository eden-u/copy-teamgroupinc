<script setup>
import { getCalculatedSvgData } from '@/utils/animeBtnData'

// #region set anime btn
const svgData = {
  svgWidth: 150,
  svgHeight: 40,
  pathMargin: 1,
  clipWeight: 5,
}

const { svgViewBox, pathStrokeDash, pathDirection } = getCalculatedSvgData(svgData)
</script>

<template>
  <div class="anime-btns">
    <a class="anime-btn-box" href="" v-for="animeBtnIndex in 2" :key="`anime-btn-${animeBtnIndex}`">
      <svg :viewBox="svgViewBox">
        <path
          class="btn__line--anime"
          v-bind="{ d: pathDirection }"
          :style="{ ['--line-len']: pathStrokeDash }"
        />
      </svg>
      <p class="btn-text">Lorem, ipsum.</p>
    </a>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/text-clr-hover.scss' as text-clr-hover;

$btn-line-clr: black;
$btn-line-clr-hover: white;
$btn-text-clr: black;
$btn-text-clr-hover: white;
$btn-anime-time: 0.5s;
$btn-text-time: 0.5s;

.anime-btns {
  display: flex;
  gap: 1.5rem;
}

.anime-btn-box {
  display: grid;
  grid-template-areas: 'anime-btn';
  align-items: center;
  text-align: center;
  width: min(16rem, 100%);

  & > * {
    grid-area: anime-btn;
  }
}

.btn__line--anime {
  stroke-width: 1px;
  stroke-dasharray: var(--line-len);
  stroke-dashoffset: 0;
  stroke: $btn-line-clr;
  fill: none;
}

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
    100% {
      stroke-dashoffset: calc(var(--line-len) * -2px);
      stroke: $btn-line-clr-hover;
    }
  }
}

.btn-text {
  color: $btn-text-clr;
}

.anime-btn-box:hover .btn-text {
  color: $btn-text-clr-hover;
  transition: all $btn-text-time ease;
}
</style>
