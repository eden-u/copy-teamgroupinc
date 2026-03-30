<script setup>
import SmallHeaderLogo1 from '@/components/logo/SmallHeaderLogo1.vue'
import SmallHeaderLogo2 from '@/components/logo/SmallHeaderLogo2.vue'
import { getNavData, getStringList } from '@/utils/dataTools'
import MenuBlock from './MenuBlock.vue'
import MenuBlockContent2 from './MenuBlockContent2.vue'
import MenuBlockContent1 from './MenuBlockContent1.vue'
import { useNextMenuBlock } from '@/modules/nextMenuBlock'

const navItems = getNavData()
const { nextMenuBlockDataRef, nextMenuBlockStateRef, openNextMenuBlock, closeNextMenuBlock } =
  useNextMenuBlock()
</script>

<template>
  <div class="menu-layout">
    <div class="menu-box">
      <div class="menu-content">
        <div>
          <p @click="openNextMenuBlock('block 1')">Lorem.</p>
        </div>

        <div>
          <a href="">Lorem.</a>
        </div>
      </div>

      <nav>
        <ul class="menu-list">
          <li v-for="({ navItemName }, navItemIndex) in navItems" :key="`navItem-${navItemIndex}`">
            <p @click="openNextMenuBlock(navItems[navItemIndex])">{{ navItemName }}</p>
          </li>
        </ul>
      </nav>

      <div class="logo-box">
        <div>
          <a href=""><SmallHeaderLogo1 /></a>
        </div>

        <div>
          <a href=""><SmallHeaderLogo2 /></a>
        </div>
      </div>

      <div>
        <div>
          <a href="">Lorem.</a>
        </div>

        <div>
          <a href="">Lorem.</a>
        </div>
      </div>

      <div class="menu-box-last-child">
        <p @click="openNextMenuBlock({ title: 'last block', list: getStringList('item-', 6) })">
          Lorem.
        </p>
      </div>
    </div>

    <Transition name="menu-block">
      <MenuBlock
        class="menu-block-component"
        v-if="nextMenuBlockStateRef"
        :closeThisBlock="closeNextMenuBlock"
      >
        <template #block-title>{{
          nextMenuBlockDataRef.navItemName || nextMenuBlockDataRef.title || nextMenuBlockDataRef
        }}</template>

        <template #block-content>
          <MenuBlockContent2
            v-if="nextMenuBlockDataRef.detailItems || nextMenuBlockDataRef.title"
            v-bind="{
              BlockList: nextMenuBlockDataRef.detailItems || nextMenuBlockDataRef.list,
            }"
          />
          <MenuBlockContent1 v-else />
        </template>
      </MenuBlock>
    </Transition>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/menu-header.scss' as menu-header;
@use '@/assets/styles/menu-box.scss' as menu-box;

.menu-layout {
  width: min(30rem, 100%);
  height: 100%;
  background-color: white;
  position: fixed;
  top: menu-header.$height;
  right: 0;
  z-index: 1;
}

.menu-box {
  & > * + * {
    border-top: menu-box.$menu-item-divider;
  }

  a,
  p {
    color: menu-box.$text-clr;
  }

  p {
    cursor: pointer;
  }
}

// #region menu content
.menu-content {
  display: flex;
  align-items: center;
  background-color: menu-box.$header-bg-clr;

  div {
    width: 100%;
  }

  div + div {
    text-align: center;
    position: relative;

    &::before {
      content: '';
      height: 1rem;
      border-left: menu-box.$header-divider;
      position: absolute;
      left: 0;
      top: 50%;
      transform: translateY(-50%);
      cursor: default;
    }
  }

  a,
  p {
    padding: 0.5rem 1rem;
    color: menu-box.$header-text-clr;
  }
}
// #endregion menu content

nav {
  padding: 0.25rem 0;
}

// #region menu list
.menu-list p {
  padding: 0.5rem 1rem;
}

.menu-list p,
.menu-box-last-child p {
  display: flex;
  justify-content: space-between;

  &::after {
    content: '➜';
  }
}
// #endregion menu list

// #region logo-box and next bro el box
.logo-box,
.logo-box + div {
  display: flex;
  justify-content: space-between;
}

.logo-box div {
  &,
  a {
    width: 100%;
  }

  a {
    display: flex;
    padding: 1rem;
    box-sizing: border-box;
  }

  & + div {
    position: relative;

    &::before {
      content: '';
      height: 1rem;
      border-left: menu-box.$menu-item-divider;
      border-left-width: menu-box.$vertical-divider-width;
      position: absolute;
      top: 50%;
      transform: translateY(-50%);
    }
  }
}

.logo-box + div {
  padding: 1rem 0;
  text-align: center;

  div {
    width: 100%;
  }

  a {
    display: inline-block;
    font-size: 1.5rem;
  }
}
// #endregion logo-box and next bro el box

.menu-box-last-child p {
  padding: 1rem;
}

// #region menu block
$menu-block-translateY: calc(menu-header.$height * -1);

.menu-block-component {
  transform: translate(0, $menu-block-translateY);
}

.menu-block-enter-active,
.menu-block-leave-active {
  transition: all 0.5s ease;
}

.menu-block-enter-from,
.menu-block-leave-to {
  opacity: 0;
  transform: translate(100%, $menu-block-translateY);
}

.menu-block-enter-to,
.menu-block-leave-from {
  opacity: 1;
  transform: translate(0, $menu-block-translateY);
}
// #endregion menu block
</style>
