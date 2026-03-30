<script setup>
defineProps(['lineClr'])
</script>

<template>
  <div class="anime-close-box">
    <div class="close-line-1" :style="{ backgroundColor: lineClr }"></div>
    <div class="close-line-2" :style="{ backgroundColor: lineClr }"></div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media-width.scss' as media-width;

$line-width: 2.5rem;
$line-height: 3px;
$line-clr: black;
$line-clr-hover: white;
$close-rotate-hover: 30deg;

.anime-close-box {
  width: $line-width;
  height: $line-width;

  cursor: pointer;
}

.anime-close-box > * {
  width: $line-width;
  height: $line-height;
  transition: all 0.5s ease;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
}

.close-line-1 {
  transform: rotate(45deg);
}

.close-line-2 {
  transform: rotate(-45deg);
}

@media screen and (min-width: media-width.$width-1024) {
  .anime-close-box:hover {
    .close-line-1 {
      transform: rotate($close-rotate-hover);
    }

    .close-line-2 {
      transform: rotate(-$close-rotate-hover);
    }
  }
}
</style>
