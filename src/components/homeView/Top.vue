<script setup>
import { useBigHeaderStore } from '@/stores/bigHeaderStore'
import { toPageTop } from '@/utils/scroll'
import { storeToRefs } from 'pinia'

const { topBtnStyleRef } = storeToRefs(useBigHeaderStore())
</script>

<template>
  <Teleport to="body">
    <div class="top-box" :style="topBtnStyleRef">
      <button @click="toPageTop" type="button">Top</button>
    </div>
  </Teleport>
</template>

<style scoped lang="scss">
@use '@/assets/styles/big-header.scss' as big-header;
@use '@/assets/styles/media-width.scss' as media-width;
@use '@/assets/styles/menu-header.scss' as menu-header;

$btn-size: 5rem;
$btn-bg-clr: rgba(0, 0, 0, 0.5);
$btn-bg-clr-hover: black;
$btn-text-clr: white;

.top-box {
  position: fixed;
  bottom: 10rem;
  right: 0;
  transform: translateX($btn-size);
  transition: transform 0.5s ease;
  z-index: 1;
}

button {
  width: $btn-size;
  height: $btn-size;
  background-color: $btn-bg-clr;
  color: $btn-text-clr;
  transition: background-color 0.5s ease;

  &:hover {
    background-color: $btn-bg-clr-hover;
  }
}

@media screen and (max-width: media-width.$width-1023) {
  .top-box {
    bottom: 0;
    transform: translateX(0);
    z-index: 0;
  }

  button {
    height: menu-header.$height;
  }
}
</style>
