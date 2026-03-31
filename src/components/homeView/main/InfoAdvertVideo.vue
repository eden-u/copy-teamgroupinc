<script setup>
import videoUrl from '@/assets/videos/advert.mp4'
</script>

<template>
  <div class="advert-box">
    <video autoplay loop muted playsinline @contextmenu.prevent="">
      <source :src="videoUrl" type="video/mp4" />
    </video>

    <p>Lorem.</p>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media-width.scss' as media-width;
@use '@/assets/styles/bg-img.scss' as bg-img;

$text-clr: black;
$text-shadow: red;

.advert-box {
  display: grid;
  grid-template-areas: 'advert-box';
  align-items: center;
  background-image: url('/src/assets/images/main/advert-bg.jpg');
  @include bg-img.full-and-at-center();

  & > * {
    grid-area: advert-box;
  }
}

video {
  width: 100%;
  max-height: 40svw;
  object-fit: cover;
  object-position: center;
}

p {
  font-size: 3rem;
  text-align: center;
  color: $text-clr;
  text-shadow: 0 0 1rem $text-shadow;
}

@media screen and (max-width: media-width.$width-1023) {
  .advert-box {
    justify-content: center;
  }

  video {
    max-width: none;
    max-height: none;
    height: 20rem;
  }
}

@media screen and (max-width: media-width.$width-999) {
  .split-box {
    flex-direction: column;
  }

  p {
    font-size: 2.5rem;
  }
}
</style>
