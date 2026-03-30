<script setup>
import { getClipLen, getPathDirection, getViewBox } from '@/utils/animeBtnData'

const { svgSize, margin } = defineProps(['svgSize', 'pathStyle', 'margin'])

const { svgWidth, svgHeight } = svgSize
const svgViewBox = getViewBox(svgWidth, svgHeight)
const clipLen = getClipLen(svgWidth)

const pathDirection = getPathDirection({
  svgWidth,
  svgHeight,
  margin,
  clipLen,
})
</script>

<template>
  <svg :viewBox="svgViewBox">
    <path v-bind="{ d: pathDirection, ...pathStyle }" />
  </svg>
</template>

<style scoped lang="scss">
@use '@/assets/styles/anime-btn.scss' as anime-btn;
$transition-time: 0.5s;
$stroke-len: 570;

path {
  @include anime-btn.base-anime-path($stroke-len);
}

svg:hover path {
  animation:
    border-anime-1 $transition-time ease forwards,
    border-anime-2 $transition-time ease $transition-time forwards;
}

@keyframes border-anime-1 {
  from {
    stroke-dashoffset: 0;
  }

  to {
    stroke-dashoffset: -$stroke-len;
    stroke: skyblue;
  }
}

@keyframes border-anime-2 {
  from {
    stroke-dashoffset: -$stroke-len;
  }

  to {
    stroke-dashoffset: -$stroke-len * 2;
    fill: skyblue;
  }
}
</style>
