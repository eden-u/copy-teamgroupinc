<script setup>
import Hero from './main/Hero.vue'
import SplitWnd1 from './main/SplitWnd1.vue'
import Info from './main/Info.vue'
import Carousel from './main/Carousel.vue'
</script>

<template>
  <div class="main-component">
    <Hero />

    <SplitWnd1 />

    <Info />

    <Carousel />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media-width.scss' as media-width;
@use '@/assets/styles/menu-header.scss' as menu-header;

@media screen and (max-width: media-width.$width-1023) {
  .main-component {
    transform: translateY(menu-header.$height);
  }
}
</style>
