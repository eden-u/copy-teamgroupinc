<script setup>
import { useMenuCloseStore } from '@/stores/menuCloseStore'
import { storeToRefs } from 'pinia'

const menuCloseStore = useMenuCloseStore()
const { menuCloseStateRef } = storeToRefs(menuCloseStore)
const { changeMenuState } = menuCloseStore
</script>

<template>
  <div
    class="menu-close-box"
    :class="{ ['menu-close-active']: menuCloseStateRef }"
    @click="changeMenuState"
  >
    <div class="close-line-1"></div>
    <div class="close-line-2"></div>
    <div class="close-line-3"></div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/menu-header.scss' as menu-header;

$line-width: 2rem;
$line-height: 5px;
$line-gap: 3px;
$line-translateY: $line-height + $line-gap;
$line-rotate-time: 0.2s;
$line-translate-time: 0.3s;
$line-total-time: $line-rotate-time + $line-translate-time;
$line-clr: menu-header.$text-clr;
$line-clr-active: menu-header.$text-clr-hover;

.menu-close-box {
  position: relative;
  width: $line-width;
  height: $line-height * 3 + $line-gap * 2;
  cursor: pointer;
}

.menu-close-box > * {
  width: $line-width;
  height: $line-height;
  background-color: $line-clr;
  position: absolute;
  top: calc(50% - $line-height / 2);
}

.close-line-1,
.close-line-3 {
  transition:
    transform $line-translate-time ease $line-rotate-time,
    rotate $line-rotate-time ease,
    background-color $line-total-time ease;
}

.close-line-1 {
  transform: translateY(-$line-translateY);
}

.close-line-3 {
  transform: translateY($line-translateY);
}

.close-line-2 {
  opacity: 1;
  transition:
    opacity 0s ease $line-rotate-time,
    background-color $line-total-time ease;
}

.menu-close-active {
  &.menu-close-box > * {
    background-color: $line-clr-active;
  }

  .close-line-1,
  .close-line-3 {
    transform: translateY(0);
    transition:
      transform $line-translate-time ease,
      rotate $line-rotate-time ease $line-translate-time,
      background-color $line-total-time ease;
  }

  .close-line-1 {
    rotate: 45deg;
  }

  .close-line-3 {
    rotate: -45deg;
  }

  .close-line-2 {
    opacity: 0;
    transition:
      opacity 0s ease $line-translate-time,
      background-color $line-total-time ease;
  }
}
</style>
