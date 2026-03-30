<script setup>
import {
  getHeroBGImgUrlList,
  getHeroBGVideoUrlList,
  getHeroItemImgUrlList,
} from '@/utils/dataTools'
import HeroItem from './HeroItem.vue'
import { useHeroStore } from '@/stores/heroStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const heroBGImgUrlList = getHeroBGImgUrlList()
const heroBGVideoUrlList = getHeroBGVideoUrlList()
const heroItemImgUrlList = getHeroItemImgUrlList()

const heroStore = useHeroStore()
const { rowDirectionMediaList, changeHeroItemIndex } = heroStore
const { isRowDirectionRef, curHeroItemIndexRef } = storeToRefs(heroStore)

onMounted(() => {
  rowDirectionMediaList.addEventListener('change', (e) => {
    isRowDirectionRef.value = e.matches
  })
})
</script>

<template>
  <div class="hero-box">
    <div class="hero-bg-box">
      <img
        class="hero-bg-img"
        :src="heroBGImgUrlList[isRowDirectionRef ? curHeroItemIndexRef : 0]"
        alt="hero background"
      />

      <video
        class="hero-bg-video"
        v-if="isRowDirectionRef"
        autoplay
        loop
        muted
        playsinline
        @contextmenu.prevent=""
        :key="`video-${curHeroItemIndexRef}`"
      >
        <source :src="heroBGVideoUrlList[curHeroItemIndexRef]" type="video/mp4" />
      </video>
    </div>

    <div class="hero-items">
      <template v-if="isRowDirectionRef">
        <a
          class="hero-item"
          :class="{
            ['grow-up']: heroItemIndex === curHeroItemIndexRef,
          }"
          :style="{ backgroundImage: `url(${heroItemImgUrlList[heroItemIndex]})` }"
          href=""
          @pointerenter="changeHeroItemIndex(heroItemIndex)"
          v-for="(imgUrl, heroItemIndex) in heroItemImgUrlList"
          :key="`hero-item-${heroItemIndex}`"
        >
          <HeroItem
            v-bind="{
              imgUrl,
              heroIndex: heroItemIndex,
              isGrowUp: heroItemIndex === curHeroItemIndexRef,
            }"
          />
        </a>
      </template>

      <template v-else>
        <HeroItem
          class="hero-item"
          :style="{ backgroundImage: `url(${heroItemImgUrlList[heroItemIndex]})` }"
          v-bind="{ imgUrl, heroIndex: heroItemIndex }"
          v-for="(imgUrl, heroItemIndex) in heroItemImgUrlList"
          :key="`hero-item-${heroItemIndex}`"
        />
      </template>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/small-header.scss' as small-header;
@use '@/assets/styles/media-width.scss' as media-width;
@use '@/assets/styles/menu-header.scss' as menu-header;
@use '@/assets/styles/bg-img.scss' as bg-img;

$num-of-hero-item: 3;

// #region hero context
.hero-box,
.hero-bg-box {
  display: grid;
  grid-template-areas: 'hero-box';

  & > * {
    grid-area: hero-box;
  }
}

.hero-bg-box {
  width: 100%;
  max-height: calc(100svh - small-header.$height);
  position: sticky;
  top: 0;
}

.hero-bg-img {
  height: 100%;
}
// #endregion hero context

// #region hero item
.hero-items {
  display: flex;
  width: 100%;
  height: 100%;
  z-index: 0;
}

.hero-item {
  position: relative;
  clip-path: polygon(20% 0, 100% 0, 80% 100%, 0 100%);
  background-color: skyblue;
  width: min(20rem, 25%);
  height: 60%;
  @include bg-img.full-and-at-center();
}
// #endregion hero item

@media screen and (min-width: media-width.$width-1024) {
  .hero-box {
    overflow: hidden;
  }

  .hero-items {
    justify-content: end;
    align-items: center;
  }

  @for $i from 1 through $num-of-hero-item {
    .hero-item:nth-child(#{$i}) {
      $besa-translate: -2rem;
      $hero-item-tanslate: 6rem * ($num-of-hero-item - $i) + $besa-translate;

      transform: translateX($hero-item-tanslate) scale(1);
      transition: transform 0.5s ease;
      z-index: $i;

      &.grow-up {
        transform: translateX($hero-item-tanslate) scale(1.1);
        z-index: 4;
      }
    }
  }
}

@media screen and (max-width: media-width.$width-1023) {
  .hero-box {
    height: calc(300svh - menu-header.$height * 3);
    background-color: menu-header.$bg-clr;
  }

  .hero-bg-box {
    height: calc(100svh - menu-header.$height * 2);
  }

  .hero-items {
    flex-direction: column;
    align-items: center;
  }

  .hero-item {
    position: sticky;
    margin-top: calc(25svh - menu-header.$height);
    margin-bottom: 25svh;
    top: calc(25svh - menu-header.$height);
    width: min(20rem, max(90%, 18rem));
  }

  @for $i from 1 through $num-of-hero-item {
    .hero-item:nth-child(#{$i}) {
      $hero-item-tanslate: calc(1rem * ($num-of-hero-item - $i) * -1);

      transform: translate($hero-item-tanslate, $hero-item-tanslate);
    }
  }
}
</style>
