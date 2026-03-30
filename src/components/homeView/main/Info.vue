<script setup>
import infoUrl from '@/assets/images/main/Info.jpg?url'
import InfoCards from './InfoCards.vue'
import SplitWnd2 from './SplitWnd2.vue'
import Advert from './Advert.vue'
</script>

<template>
  <div class="info-box">
    <div class="img-and-cards">
      <div class="img-box">
        <p class="img-title">Lorem, ipsum dolor.</p>

        <a href="">
          <img :src="infoUrl" alt="" />

          <div class="watermark-box">
            <p class="big-text">Lorem, ipsum.</p>
            <p class="small-text">Lorem, ipsum dolor.</p>
          </div>
        </a>
      </div>

      <InfoCards />
    </div>

    <SplitWnd2 />

    <Advert />
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media-width.scss' as media-width;
@use '@/assets/styles/menu-header.scss' as menu-header;

$img-mask-clr: rgba(0, 0, 0, 0.8);
$watermark-clr: black;
$watermark-clr-hover: white;

.info-box {
  overflow: hidden;
}

.img-and-cards {
  display: flex;
  padding: 1rem;
  gap: 1rem;
}

.img-and-cards > div {
  width: 100%;
}

// #region img
.img-box {
  font-size: 3rem;
}

.img-title {
  font-weight: bold;
  padding-bottom: 2rem;
}

a {
  position: relative;

  &::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: transparent;
  }
}

.watermark-box {
  position: absolute;
  bottom: 0;
  left: 0;
  padding: 1rem;
  color: $watermark-clr;
  font-weight: bold;
}

.small-text {
  font-size: 1.75rem;
}
// #endregion img

@media screen and (min-width: media-width.$width-1024) {
  a::before,
  .watermark-box {
    transition: all 0.5s ease;
  }

  a:hover {
    &::before {
      background-color: $img-mask-clr;
    }

    .watermark-box {
      color: $watermark-clr-hover;
      text-shadow: 0 0 1rem red;
    }
  }
}

@media screen and (max-width: media-width.$width-1023) {
  .img-and-cards {
    display: flex;
    flex-direction: column;
  }
}

@media screen and (max-width: media-width.$width-575) {
  .img-and-cards {
    padding: 1rem 5px;
  }

  .img-box {
    font-size: 2rem;
  }

  .img-title {
    text-align: center;
  }

  .small-text {
    font-size: 1.25rem;
  }
}

@media screen and (max-width: media-width.$width-359) {
  $watermak-bg-clr: menu-header.$bg-clr;
  $watermark-clr: white;

  .watermark-box {
    position: initial;
    background-color: $watermak-bg-clr;
    color: $watermark-clr;
  }
}
</style>
