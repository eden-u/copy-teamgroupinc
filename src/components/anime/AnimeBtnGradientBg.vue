<script setup>
import { getClipLen, getPathDirection, getViewBox } from '@/utils/animeBtnData'

const { svgSize, gradientClrMap, pathMargin, clipWeight } = defineProps([
  'svgSize',
  'gradientClrMap',
  'pathMargin',
  'clipWeight',
])

const { svgWidth, svgHeight } = svgSize
const svgViewBox = getViewBox(svgWidth, svgHeight)
const clipLen = getClipLen(svgWidth, clipWeight)

const pathDirection = getPathDirection({
  svgWidth,
  svgHeight,
  pathMargin,
  clipLen,
})

const { stopClr1, stopClr2, stopClr3 } = gradientClrMap
</script>

<template>
  <svg :viewBox="svgViewBox">
    <defs>
      <linearGradient id="btn-bg" x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%">
          <animate
            attributeName="stop-color"
            :values="`${stopClr1}; ${stopClr3}; ${stopClr1}`"
            repeatCount="indefinite"
            dur="5s"
          />
        </stop>

        <stop offset="50%" :stop-color="stopClr2" />

        <stop offset="100%">
          <animate
            attributeName="stop-color"
            :values="`${stopClr3}; ${stopClr1}; ${stopClr3}`"
            repeatCount="indefinite"
            dur="5s"
          />
        </stop>
      </linearGradient>
    </defs>

    <path :d="pathDirection" />
  </svg>
</template>

<style scoped lang="scss">
$transition-time: 0.5s;

path {
  fill: url('#btn-bg');
  animation: bg-change $transition-time ease infinite;
}
</style>
