<script setup>
import imgUrl_1 from '@/assets/images/main/SplitWnd1-1.jpg?url'
import imgUrl_2 from '@/assets/images/main/SplitWnd1-2.jpg?url'
</script>

<template>
  <div class="split-box">
    <div class="left-wnd">
      <a class="img-link" href="">
        <img :src="imgUrl_1" alt="img1" />
      </a>

      <div class="text-link-box">
        <a class="text-link" href="">
          <p>Lorem, ipsum dolor.</p>
        </a>
      </div>
    </div>

    <div class="right-wnd">
      <a class="img-link" href="">
        <img :src="imgUrl_2" alt="img2" />
      </a>

      <div class="text-link-box">
        <a class="text-link" href="">
          <p>Lorem, ipsum dolor.</p>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/text-clr-hover.scss' as text-clr-hover;
@use '@/assets/styles/media-width.scss' as media-width;

$split-box-height: 42rem;
$img-mask-clr: rgba(0, 0, 0, 0.3);
$text-clr: black;
$text-clr-hover: white;
$text-shadow-clr: white;
$text-bg-clr: rgba(255, 137, 137, 0.7);
$text-left-speace: 2rem;

.split-box {
  overflow: hidden;
}

@media screen and (min-width: media-width.$width-1024) {
  // #region split-box

  .split-box,
  img {
    height: $split-box-height;
  }

  .split-box {
    display: flex;
    justify-content: center;
  }

  .left-wnd,
  .right-wnd {
    position: relative;
    flex: 1;
    transition: all 0.5s ease;

    &:hover {
      flex: 1.5;

      .img-link::before {
        background-color: transparent;
      }

      .text-link-box {
        opacity: 1;
        transform: translateY(0);
      }

      .text-link {
        width: 100%;
        opacity: 1;
        transform: translateY(0);
        transition: all 0.5s ease 0.5s;
      }
    }
  }
  // #endregion split-box

  // #region img and text
  .img-link::before {
    content: '';
    position: absolute;
    width: 100%;
    height: 100%;
    background-color: $img-mask-clr;
    transition: all 0.5s ease;
  }

  .text-link-box {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 8rem;
    font-size: 2.5rem;
    background-color: $text-bg-clr;
    opacity: 0;
    transform: translateY(50%);
    transition: all 0.5s ease;
    display: flex;
    align-items: center;
  }

  .text-link {
    opacity: 0;
    transform: translateY(1rem);
    padding-left: $text-left-speace;

    p {
      @include text-clr-hover.mixun-text-clr-hover('&', $text-clr, $text-clr-hover);
      text-shadow: 0 0 1rem $text-shadow-clr;
    }
  }
  // #endregion img and text
}

@media screen and (max-width: media-width.$width-1023) {
  .left-wnd,
  .right-wnd {
    position: relative;
  }

  .text-link-box {
    position: absolute;
    bottom: 0;
    width: 100%;
    height: 6rem;
    font-size: 1.75rem;
    background-color: $text-bg-clr;
    display: flex;
    align-items: center;
  }

  .text-link {
    width: 100%;
    padding-left: $text-left-speace;

    p {
      color: white;
      text-shadow: 0 0 1rem $text-shadow-clr;
    }
  }
}

@media screen and (max-width: media-width.$width-575) {
  $text-bg-clr: rgb(255, 137, 137);

  .text-link-box {
    background-color: $text-bg-clr;
    height: 3.5rem;
  }

  .text-link {
    padding-left: 1rem;
    font-size: 1.5rem;
  }
}
</style>
