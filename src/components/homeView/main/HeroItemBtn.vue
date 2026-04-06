<script setup>
import { getCalculatedSvgData } from '@/utils/animeBtnData'

const svgData = {
  svgWidth: 100,
  svgHeight: 35,
  pathMargin: 1,
  clipWeight: 20,
}

const { svgViewBox, pathStrokeDash, pathDirection } = getCalculatedSvgData(svgData)
</script>

<template>
  <a class="anime-btn-box" href="">
    <svg :viewBox="svgViewBox" :style="{ ['--line-len']: pathStrokeDash }">
      <path class="btn__line-1" v-bind="{ d: pathDirection }" />

      <path class="btn__line-2--anime" v-bind="{ d: pathDirection }" />
    </svg>

    <p>Lorem.</p>
  </a>
</template>
<style scoped lang="scss">
@use '@/assets/styles/media-width.scss' as media-width;

$btn-line-1-clr: white;
$btn-line-2-clr: black;
$text-clr: white;
$text-clr-active: black;
$link-size: 1rem;
$btn-anime-item: 0.5s;

.anime-btn-box {
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

// #region svg path
.btn__line-1,
.btn__line-2--anime {
  stroke-width: 1px;
  fill: none;
}

.btn__line-1 {
  stroke-dasharray: var(--line-len);
  stroke-dashoffset: 0;
  stroke: $btn-line-1-clr;
}

.btn__line-2--anime {
  display: none;
  stroke-dasharray: var(--line-len) var(--line-len);
  stroke-dashoffset: var(--line-len);
  stroke: $btn-line-2-clr;
}
// #endregion svg path

@media screen and (min-width: media-width.$width-1024) {
  .anime-btn-box {
    opacity: 0;
    transform: translateY(1rem);
  }

  .grow-up .anime-btn-box {
    opacity: 1;
    transform: translateY(0);
    transition:
      opacity 0.5s ease $btn-anime-item,
      transform 0.5s ease $btn-anime-item,
      color 0.3s ease;

    &:hover {
      transition:
        opacity 0.5s ease $btn-anime-item,
        transform 0.5s ease $btn-anime-item,
        color 0.5s ease $btn-anime-item;
    }
  }

  .anime-btn-box:hover .btn__line-2--anime {
    stroke-dashoffset: 0;
  }

  .btn__line-2--anime {
    display: inline;
    stroke-dashoffset: calc(var(--line-len));
    transition: all $btn-anime-item ease;
  }
}
</style>
