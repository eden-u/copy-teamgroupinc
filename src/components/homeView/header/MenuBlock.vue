<script setup>
import IconClose from '@/components/icons/header/IconClose.vue'

defineProps(['closeThisBlock'])
</script>

<template>
  <div class="menu-block-layout">
    <div class="menu-block-box">
      <div class="menu-block-title-box" @click="closeThisBlock">
        <p><slot name="block-title"></slot></p>

        <IconClose class="menu-block-close-icon" />
      </div>

      <slot name="block-content"></slot>
    </div>
  </div>
</template>

<style scoped lang="scss">
.menu-block-layout {
  position: absolute;
  top: 0;
  right: 0;
  width: calc(100% - 1rem);
  height: 100%;
  background-color: white;
  border-left: 1px solid black;
}

.menu-block-box {
  height: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.menu-block-title-box {
  font-size: 1.5rem;
  border-bottom: 3px solid black;
  padding-bottom: 0.5rem;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.menu-block-close-icon {
  cursor: pointer;
}
</style>
