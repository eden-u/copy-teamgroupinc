<script setup>
import { useBigHeaderStore } from '@/stores/bigHeaderStore'
import { useHeaderNavStore } from '@/stores/headerNavStore'
import { storeToRefs } from 'pinia'
import BigHeaderLogo from '../logo/BigHeaderLogo.vue'
import MenuHeader from './header/MenuHeader.vue'
import HeaderNav from './header/HeaderNav.vue'
import SmallHeader from './header/SmallHeader.vue'

const bigHeaderStore = useBigHeaderStore()
const { bigHeaderBoxStyleRef, glassBGStyleRef } = storeToRefs(bigHeaderStore)
const { changeBigHeaderStyle } = bigHeaderStore
const { closeNavItemDetail } = useHeaderNavStore()

window.addEventListener('scroll', changeBigHeaderStyle)
</script>

<template>
  <div class="header-component">
    <SmallHeader class="small-header" />

    <div class="big-header-box" @pointerleave="closeNavItemDetail" :style="bigHeaderBoxStyleRef">
      <div class="big-header-glass-bg" :style="glassBGStyleRef"></div>

      <div class="big-header-logo-link-box">
        <a href="">
          <BigHeaderLogo class="big-header-logo-svg" />
        </a>
      </div>

      <HeaderNav />
    </div>

    <MenuHeader />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media-width.scss' as media-width;
@use '@/assets/styles/small-header.scss' as small-header;
@use '@/assets/styles/big-header.scss' as big-header;
@use '@/assets/styles/svg-logo.scss' as svg-logo;

$big-header-logo-svg-size: 2rem;
$big-header-logo-clr: black;
$big-header-logo-clr-hover: white;

.header-component {
  position: relative;
  z-index: 2;
}

// #region big header
.big-header-box {
  position: fixed;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  transform: translateY(small-header.$height);
  transition: all 0.5s ease;
  z-index: 1;
  display: flex;
  justify-content: space-between;
  padding: 0 1rem;
}

.big-header-glass-bg {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: big-header.$bg-clr;
  box-shadow:
    inset 0 4px 5px -3px big-header.$bg-shadow-clr,
    inset 0 -4px 5px -3px big-header.$bg-shadow-clr;
  backdrop-filter: blur(2px);
  z-index: -1;
  transition: big-header.$transition;
}

.big-header-logo-link-box {
  font-size: 0;
  padding: 0.5rem 0;

  a {
    display: block;
  }
}

.big-header-logo-svg {
  @include svg-logo.font-size($big-header-logo-svg-size);

  & > *:not(rect) {
    fill: $big-header-logo-clr;
  }
}
// #endregion big header

@media screen and (max-width: media-width.$width-1023) {
  .small-header,
  .big-header-box {
    display: none;
  }
}
</style>
