<script setup>
import { useHeaderNavStore } from '@/stores/headerNavStore'
import { getDetailImgUrlList, getNavData } from '@/utils/dataTools'
import { storeToRefs } from 'pinia'
import StrLinkItem from './StrLinkItem.vue'
import AnimeClose from '../../anime/AnimeClose.vue'
import { animeCloseClrRef, enterAnimeClose, leaveAnimeClose } from '@/modules/animeClose'
import HeaderNavBtns from './HeaderNavBtns.vue'

const headerNavStore = useHeaderNavStore()
const { curNavItemDetailIndexRef, curTwoDListRowRef } = storeToRefs(headerNavStore)
const { openNavItemDetail, closeNavItemDetail, changeCur2DListRow } = headerNavStore

const navItems = getNavData()
const detailImgList = getDetailImgUrlList()

function checkNavItemDetailState(navItemIndex) {
  return curNavItemDetailIndexRef.value === navItemIndex
}

function checkSelectorName(detailItemName) {
  return detailItemName === navItems[0].detailItems[0].detailItemName
}

// #region anime close
const animeCloseOriginClr = 'black'
const animeCloseHoverClr = 'white'
animeCloseClrRef.value = animeCloseOriginClr
// #endregion anime close
</script>

<template>
  <nav>
    <ul class="nav-list">
      <li
        @pointerenter="openNavItemDetail(navItemIndex)"
        v-for="({ navItemName }, navItemIndex) in navItems"
        :key="`navItem-${navItemIndex}`"
      >
        <p
          class="nav-item-text"
          :class="{
            ['nav-item-text-active']: checkNavItemDetailState(navItemIndex),
          }"
        >
          {{ navItemName }}
        </p>
      </li>
    </ul>

    <Transition name="detail-layout">
      <div class="detail-layout" v-if="curNavItemDetailIndexRef >= 0">
        <div class="detail-box">
          <div class="detail-items">
            <div
              v-for="({ detailItemName, strListOr2DStrList }, detailItemIndex) in navItems[
                curNavItemDetailIndexRef
              ].detailItems"
              :key="`${
                navItems[curNavItemDetailIndexRef].navItemName
              }-${detailItemName}-${detailItemIndex}`"
            >
              <p class="detail-item-name down-anime">{{ detailItemName }}</p>

              <ul class="detail-content-link-items">
                <StrLinkItem
                  v-bind="{
                    strListOr2DStrList:
                      typeof strListOr2DStrList[0] === 'string'
                        ? strListOr2DStrList
                        : strListOr2DStrList[curTwoDListRowRef],
                  }"
                  v-slot="{ str, strListIndex }"
                >
                  <a
                    v-if="typeof strListOr2DStrList[0] === 'string'"
                    :class="{
                      ['detail-selector-link']: checkSelectorName(detailItemName),
                      ['detail-selector-link-active']:
                        checkSelectorName(detailItemName) && strListIndex === curTwoDListRowRef,
                    }"
                    @pointerenter="changeCur2DListRow($event.currentTarget, strListIndex)"
                    href=""
                  >
                    <p>{{ str }}</p>
                  </a>

                  <a v-else>
                    <p>{{ str }}</p>
                  </a>
                </StrLinkItem>
              </ul>
            </div>
          </div>

          <div>
            <a class="detail-img-link" href="">
              <template v-if="curNavItemDetailIndexRef === 0">
                <img
                  class="detail-img down-anime"
                  :src="detailImgList[curTwoDListRowRef]"
                  alt="detail img"
                />
              </template>

              <template v-else-if="curNavItemDetailIndexRef === 1">
                <img class="detail-img down-anime" :src="detailImgList.at(-1)" alt="detail img" />

                <p class="detail-img-title down-anime">Lorem, ipsum dolor.</p>
              </template>
            </a>
          </div>
        </div>

        <div class="detail-bottom-text-link-box down-anime" v-if="curNavItemDetailIndexRef === 0">
          <HeaderNavBtns />
        </div>

        <AnimeClose
          class="down-anime detail-close"
          @click="closeNavItemDetail"
          @pointerenter="enterAnimeClose(animeCloseHoverClr)"
          @pointerleave="leaveAnimeClose(animeCloseOriginClr)"
          :line-clr="animeCloseClrRef"
          :key="`detail-close-${curNavItemDetailIndexRef}`"
        />
      </div>
    </Transition>
  </nav>
</template>

<style scoped lang="scss"></style>

<style scoped lang="scss">
@use '@/assets/styles/text-clr-hover.scss' as text-clr-hover;
@use '@/assets/styles/big-header.scss' as big-header;

$nav-item-clr: black;
$nav-item-clr-hover: white;
$detail-bg-clr: rgb(255, 137, 137);
$detail-text-clr: black;
$detail-divider-clr: black;
$detail-selector-text-clr-active: white;
$content-link-clr: white;
$content-link-clr-hover: black;
$detail-img-title-clr: white;
$detail-img-title-clr-hover: black;
$detail-close-item: 0.2s;
$detail-padding-top: 4rem;
$detail-padding-bottom: 5rem;
$border-divider: 1px solid $detail-divider-clr;
$detail-bottom-text-link-anime-delay-order: 4;

// #region nav block
.nav-list,
.nav-list li {
  display: flex;
  align-items: center;
  height: 100%;
}

.nav-list {
  font-size: 1.25rem;
  gap: 3rem;

  li {
    padding: 0 1rem;
    cursor: pointer;
  }
}

.nav-item-text {
  color: $nav-item-clr;
  font-weight: bold;
}

.nav-item-text-active {
  color: $nav-item-clr-hover;
}
// #endregion nav block

// #region detail layout
.detail-layout {
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  padding: $detail-padding-top 2rem $detail-padding-bottom;
  box-sizing: border-box;
  background-color: $detail-bg-clr;
  transform: translateY(100%);
  z-index: 1;
  cursor: initial;
}

.detail-layout-leave-active {
  transition: all $detail-close-item ease;
  overflow: hidden;

  .detail-close {
    transition: all 0.5s ease;
  }
}

.detail-layout-leave-from {
  max-height: 30rem;
  padding-block: $detail-padding-top $detail-padding-bottom;
}

.detail-layout-leave-to {
  max-height: 0;
  padding-block: 0;

  .detail-close {
    transform: translateY(-10rem);
  }
}

.detail-box {
  display: flex;
  justify-content: space-between;
  width: 100%;
  color: $detail-text-clr;
}
// #endregion detail layout

// #region detail content link
.detail-items {
  display: flex;
  gap: 3rem;
  margin-right: 1rem;
}

.detail-item-name,
.detail-selector-link {
  border-bottom: $border-divider;
}

.detail-item-name {
  font-size: 1.5rem;
  width: 10rem;
  padding-bottom: 1rem;
}

.detail-content-link-items {
  a:not(.detail-selector-link) {
    @include text-clr-hover.mixun-text-clr-hover('&', $content-link-clr, $content-link-clr-hover);
    padding: 1rem 0;
    font-size: 1rem;

    &:hover p::after {
      transform: translateX(0);
      opacity: 1;
    }
  }

  p {
    display: flex;
    justify-content: space-between;

    &::after {
      content: '➜';
      transform: translateX(-1rem);
      transition: all 0.5s ease;
      opacity: 0;
    }
  }
}

.detail-selector-link {
  font-weight: bold;
  padding: 1rem 0;
  color: $detail-text-clr;
  overflow: hidden;

  &,
  p {
    transition: all 0.5s ease;
  }
}

.detail-selector-link-active {
  background-color: $content-link-clr-hover;
  color: $detail-selector-text-clr-active;

  p {
    transform: translateX(1rem);

    &::after {
      transform: translateX(-1.5rem);
      opacity: 1;
    }
  }
}
// #endregion detail content link

// #region detail img box
.detail-img-link {
  cursor: initial;
}

.detail-img,
.detail-img + .detail-img-title {
  cursor: pointer;
}

.detail-img {
  width: 30rem;
  height: 20rem;
  box-shadow: none;
  transition: all 0.5s ease;

  &:hover {
    filter: brightness(0.5);
  }
}

.down-anime {
  @include big-header.detail-content-down();
}

.detail-img-title {
  @include text-clr-hover.mixun-text-clr-hover(
    '&',
    $detail-img-title-clr,
    $detail-img-title-clr-hover
  );
  opacity: 0;
  animation-delay: big-header.$detail-content-down-anime-delay-weight;
  font-size: 1.75rem;
  font-weight: bold;
  padding-bottom: 2.5rem;
  margin-top: 1rem;
  transition: all 0.5s ease;

  &:hover {
    text-shadow: 2px 1px white;
    transform: translate(-2px, -1px);
  }
}
// #endregion detail img box

.detail-bottom-text-link-box {
  width: 100%;
  padding-top: 3rem;
  animation-delay: calc(
    $detail-bottom-text-link-anime-delay-order * big-header.$detail-content-down-anime-delay-weight
  );

  &::before {
    content: '';
    display: block;
    width: 100%;
    border-top: $border-divider;
    padding-bottom: 2rem;
  }
}

.detail-close {
  position: absolute;
  top: 0.5rem;
  right: 2rem;
}
</style>
