<script setup>
import MenuHeaderLogo from '@/components/logo/MenuHeaderLogo.vue'
import { useMenuCloseStore } from '@/stores/menuCloseStore'
import { storeToRefs } from 'pinia'
import MenuClose from './MenuClose.vue'
import MenuBox from './MenuBox.vue'

const menuCloseStore = useMenuCloseStore()
const { menuCloseStateRef } = storeToRefs(menuCloseStore)
const { changeMenuState } = menuCloseStore
</script>

<template>
  <div class="menu-header-layout">
    <Transition name="menu-bg-active">
      <div class="menu-bg-active" v-if="menuCloseStateRef" @click="changeMenuState()"></div>
    </Transition>

    <div class="menu-header-box">
      <div class="menu-header-logo-link-box">
        <a href="">
          <MenuHeaderLogo class="logo-svg" />
        </a>
      </div>

      <MenuClose />
    </div>

    <Transition name="menu-box">
      <MenuBox v-if="menuCloseStateRef"></MenuBox>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/menu-header.scss' as menu-header;
@use '@/assets/styles/media-width.scss' as media-width;

$menu-bg-clr-active: rgba(0, 0, 0, 0.5);
$logo-size: 2rem;
$logo-clr: white;
$logo-clr-hover: black;

// #region menu-header
.menu-header-layout {
  display: none;
  width: 100%;
}

.menu-header-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: menu-header.$bg-clr;
  padding: 0.5rem 1rem;
  position: fixed;
  width: 100%;
  height: menu-header.$height;
  box-sizing: border-box;
  top: 0;
  z-index: 1;
}

.menu-header-logo-link-box {
  font-size: 0;
}

.logo-svg {
  :deep(text) {
    font-size: $logo-size;
    fill: $logo-clr;

    &:hover {
      fill: $logo-clr-hover;
    }
  }

  max-width: 12rem;
}
// #endregion menu-header

// #region menu-acrive-bg and transition vue component
.menu-bg-active {
  position: fixed;
  top: 0;
  width: 100%;
  height: 100svh;
  background-color: $menu-bg-clr-active;
  z-index: 1;
}

.menu-bg-active-enter-active,
.menu-bg-active-leave-active {
  transition: all 0.5s ease;
}

.menu-bg-active-enter-from,
.menu-bg-active-leave-to {
  opacity: 0;
}

.menu-bg-active-enter-to,
.menu-bg-active-leave-from {
  opacity: 1;
}
// #endregion menu-acrive-bg and transition vue component

// #region menu-box transition
.menu-box-enter-active,
.menu-box-leave-active {
  transition: all 0.5s ease;
}

.menu-box-enter-from,
.menu-box-leave-to {
  opacity: 0;
  transform: translate(100%, 0);
}

.menu-box-enter-to,
.menu-box-leave-from {
  opacity: 1;
  transform: translate(0, 0);
}
// #endregion menu-box transition

@media screen and (max-width: media-width.$width-1023) {
  .menu-header-layout {
    display: block;
  }
}
</style>
