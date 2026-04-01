<script setup>
import SmallHeaderLogo1 from '@/components/logo/SmallHeaderLogo1.vue'
import SmallHeaderLogo2 from '@/components/logo/SmallHeaderLogo2.vue'
import { useDownSelectorStore } from '@/stores/downSelectorStore'
import { getStringList } from '@/utils/dataTools'
import { storeToRefs } from 'pinia'

const downSelectorState = useDownSelectorStore()
const { downSelectorStateRef } = storeToRefs(downSelectorState)
const { renderCurDownSelectorTextStyle, openDownSelector, closeDownSelector } = downSelectorState
</script>

<template>
  <div class="small-header-box">
    <div class="small-header-left-box">
      <div class="small-header-logo-link-box">
        <a href="">
          <SmallHeaderLogo1 class="small-header-logo-svg" />
        </a>
      </div>

      <div class="small-header-logo-link-box">
        <a href="">
          <SmallHeaderLogo2 class="small-header-logo-svg" />
        </a>
      </div>
    </div>

    <div class="small-header-right-box">
      <div class="small-header-item-clr-hover">
        <a class="small-header-item-text" href="">item-1</a>
      </div>

      <div
        class="small-header-item-clr-hover down-selector-box"
        @pointerenter="openDownSelector"
        @pointerleave="closeDownSelector"
      >
        <div>
          <p class="small-header-item-text">item-2</p>
        </div>

        <Transition name="down-selector-box-hover">
          <div class="select-down-selector-box" v-show="downSelectorStateRef">
            <div
              v-for="downSelectorItem in getStringList('item-2-', 6)"
              :key="`down-selector-text-${downSelectorItem}`"
              class="small-header-item-clr-hover"
            >
              <a :style="renderCurDownSelectorTextStyle(downSelectorItem)" href="">{{
                downSelectorItem
              }}</a>
            </div>
          </div>
        </Transition>
      </div>

      <div class="small-header-item-clr-hover">
        <a class="small-header-item-text" href="">item-3</a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/text-clr-hover.scss' as text-clr-hover;
@use '@/assets/styles/small-header.scss' as small-header;

$small-header-logo-svg-size: 2rem;

// #region small header layout
.small-header-box,
.small-header-left-box,
.small-header-right-box,
.small-header-left-box div + div {
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.small-header-box {
  background-color: small-header.$bg-clr;
  color: small-header.$item-text-clr;
  padding: 0.25rem 0.5rem;
  height: small-header.$height;
  box-sizing: border-box;
}

.small-header-left-box,
.small-header-right-box {
  height: 100%;

  & > div {
    padding: 0 1.25rem;

    & + div {
      position: relative;

      &::before {
        content: '';
        border-left: 1px solid small-header.$divider-clr;
        height: 1rem;
        position: absolute;
        left: 0;
      }
    }
  }
}
// #endregion small header layout

// #region left header
.small-header-logo-link-box {
  height: 100%;

  a {
    height: 100%;
  }
}

.small-header-logo-svg {
  :deep(text) {
    font-size: $small-header-logo-svg-size;
    fill: small-header.$item-text-clr;
  }
}
// #endregion left header

// #region right header
.small-header-right-box > div::before {
  top: 50%;
  transform: translateY(-50%);
}

.small-header-item-clr-hover {
  @include text-clr-hover.mixun-text-clr-hover(
    '&',
    small-header.$item-text-clr,
    small-header.$item-text-clr-hover
  );

  transition: all 0.5s ease;
}

.small-header-item-text {
  padding: 0 0.5rem;
  font-weight: bold;
}
// #endregion right header

// #region selector
.down-selector-box {
  position: relative;
  display: flex;
  flex-direction: column;
}

.select-down-selector-box {
  position: absolute;
  background-color: small-header.$bg-clr;
  z-index: 2;
  text-align: center;
  width: 100%;
  top: 100%;
  left: 0;
  overflow: hidden;

  & > * {
    a {
      display: block;
      width: 100%;
      padding-bottom: 0.25rem;
    }
  }

  & > * + *::before {
    content: '';
    display: block;
    background-color: small-header.$divider-clr;
    width: 100%;
    height: 0.5px;
  }
}

.down-selector-box-hover-enter-active,
.down-selector-box-hover-leave-active {
  transition: all 0.3s ease-in-out;
  overflow: hidden;
}

.down-selector-box-hover-enter-from,
.down-selector-box-hover-leave-to {
  max-height: 0;
  transform: translateY(-0.25rem);
}

.down-selector-box-hover-enter-to,
.down-selector-box-hover-leave-from {
  max-height: 10rem;
  transform: translateY(0);
}
// #endregion selector
</style>
