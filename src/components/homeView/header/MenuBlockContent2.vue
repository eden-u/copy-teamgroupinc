<script setup>
import { useNextMenuBlock } from '@/modules/nextMenuBlock'
import MenuBlock from './MenuBlock.vue'

defineProps(['BlockList', 'selectorIndex'])

const { nextMenuBlockDataRef, nextMenuBlockStateRef, openNextMenuBlock, closeNextMenuBlock } =
  useNextMenuBlock()
</script>

<template>
  <ul v-if="typeof BlockList[0] === 'string'">
    <li v-for="(str, BlockListIndex) in BlockList" :key="`BlockListIndex-${BlockListIndex}`">
      <a href="">{{ str }}</a>
    </li>
  </ul>

  <template v-else-if="BlockList[0].strListOr2DStrList[0] instanceof Array">
    <div
      v-for="({ detailItemName, strListOr2DStrList }, BlockListIndex) in BlockList"
      :key="`BlockListIndex-${BlockListIndex}`"
    >
      <p class="block-title">{{ detailItemName }}</p>

      <ul class="not-bottom-line">
        <li
          v-for="(str, strIndex) in strListOr2DStrList[selectorIndex]"
          :key="`strIndex-${strIndex}`"
        >
          <a href="">{{ str }}</a>
        </li>
      </ul>
    </div>
  </template>

  <ul v-else-if="BlockList[0].detailItemName === 'selector name'">
    <li
      v-for="(selectorItemName, BlockListIndex) in BlockList[0].strListOr2DStrList"
      :key="`BlockListIndex-${BlockListIndex}`"
    >
      <p
        @click="openNextMenuBlock({ BlockList: BlockList.slice(1), selectorIndex: BlockListIndex })"
      >
        {{ selectorItemName }}
      </p>

      <Transition name="menu-block">
        <MenuBlock v-if="nextMenuBlockStateRef" :closeThisBlock="closeNextMenuBlock">
          <template #block-title>{{ selectorItemName }}</template>

          <template #block-content>
            <MenuBlockContent2 v-bind="nextMenuBlockDataRef" />
          </template>
        </MenuBlock>
      </Transition>
    </li>
  </ul>

  <ul v-else>
    <li
      v-for="({ detailItemName, strListOr2DStrList }, BlockListIndex) in BlockList"
      :key="`BlockListIndex-${BlockListIndex}`"
    >
      <p @click="openNextMenuBlock({ BlockList: strListOr2DStrList })">{{ detailItemName }}</p>

      <Transition name="menu-block">
        <MenuBlock v-if="nextMenuBlockStateRef" :closeThisBlock="closeNextMenuBlock">
          <template #block-title>{{ detailItemName }}</template>

          <template #block-content>
            <MenuBlockContent2 v-bind="nextMenuBlockDataRef" />
          </template>
        </MenuBlock>
      </Transition>
    </li>
  </ul>
</template>

<style scoped lang="scss">
@use '@/assets/styles/menu-box.scss' as menu-box;

div + div {
  margin-top: 1.25rem;
}

ul:not(.not-bottom-line) p {
  border-bottom: menu-box.$menu-item-divider;
  padding: 0.5rem 0;
  cursor: pointer;

  &.block-title {
    cursor: default;
  }
}

a {
  color: blue;
  padding: 0.5rem 0;
}

// #region menu block
.menu-block-enter-active,
.menu-block-leave-active {
  transition: all 0.5s ease;
}

.menu-block-enter-from,
.menu-block-leave-to {
  opacity: 0;
  transform: translateX(100%);
}

.menu-block-enter-to,
.menu-block-leave-from {
  opacity: 1;
  transform: translateX(0);
}
// #endregion menu block
</style>
