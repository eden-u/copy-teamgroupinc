<script setup>
import 'swiper/css'
import 'swiper/css/navigation'
import { Swiper, SwiperSlide } from 'swiper/vue'
import { Pagination, Navigation } from 'swiper/modules'
import { getCarouselList } from '@/utils/dataTools'
import IconLeftArrow from '@/components/icons/main/IconLeftArrow.vue'
import IconRightArrow from '@/components/icons/main/IconRightArrow.vue'

const carouselList = getCarouselList()

const swiperSetting = {
  modules: [Pagination, Navigation],
  slidesPerView: 'auto',
  slideToClickedSlide: true,
  centeredSlides: true,
  navigation: {
    nextEl: '.nav-btn.prev',
    prevEl: '.nav-btn.next',
  },
  loop: true,
  // spaceBetween: 80,
}
</script>

<template>
  <div class="carousel-box">
    <p class="carousel-title">Lorem.</p>

    <swiper class="cards" v-bind="swiperSetting">
      <SwiperSlide
        class="test-slide"
        v-for="(cardItem, cardIndex) in carouselList"
        :key="`card-${cardIndex}`"
      >
        <div class="card-layout">
          <div class="card-box">
            <div class="card-text-box">
              <p>{{ cardItem.title }}</p>

              <a href="" class="">
                {{ cardItem.content }}
              </a>
            </div>

            <a href="">
              <img :src="cardItem.imgUrl" alt="" />
            </a>
          </div>

          <div class="no-touch"></div>
        </div>
      </SwiperSlide>

      <div class="nav-btn prev">
        <IconLeftArrow class="arrow-icon left" />
      </div>

      <div class="nav-btn next">
        <IconRightArrow class="arrow-icon right" />
      </div>
    </swiper>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media-width.scss' as media-width;
@use '@/assets/styles/small-header.scss' as small-header;

// #region carousel
.carousel-box {
  --slide-width: 50svw;
}

.carousel-box {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 3rem 0 10rem;
}

.carousel-title {
  font-size: 3rem;
}
// #endregion carousel

// #region swiper item
.swiper-slide {
  width: var(--slide-width);
}

.swiper-slide-prev,
.swiper-slide-next {
  cursor: pointer;
}

.swiper-slide-prev,
.swiper-slide-next {
  .card-layout {
    position: relative;
  }

  .no-touch {
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
  }
}

.nav-btn {
  display: none;
}

// #endregion swiper item

// #region card
$card-gap: 1rem;
$card-link-clr: black;
$card-link-clr-hover: red;

.cards {
  width: 100%;
  padding: 2rem 0;
}

.card-layout {
  padding: 0 $card-gap;
}

.card-box {
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.2);
  transition: all 0.5s ease;
}

.card-text-box {
  padding: 2rem;
  cursor: default;
}

.card-text-box a {
  color: $card-link-clr;
  font-size: 1.25rem;
  font-weight: bold;

  &:hover {
    color: $card-link-clr-hover;
  }
}

// #endregion card

@media screen and (max-width: media-width.$width-1459) {
  .carousel-box {
    --slide-width: 70svw;
  }
}

@media screen and (min-width: media-width.$width-1024) {
  .swiper-slide-active .card-box:hover {
    box-shadow: 0 0 1rem rgba(0, 0, 0, 0.4);
    transform: translateY(-0.5rem);
  }

  // #region nav btn
  $nav-size: 4rem;
  $nav-bg-clr: small-header.$bg-clr;
  $nav-bg-clr-hover: rgba(255, 137, 137, 0.7);
  $nav-clr: white;
  $nav-clr-hover: black;
  $card-gap: calc($nav-size / 2) + 1.5rem;
  $slide-width-half: (var(--slide-width) / 2);

  .nav-btn {
    position: absolute;
    top: 50%;
    left: 50%;
    z-index: 1;
    width: $nav-size;
    height: $nav-size;
    background-color: $nav-bg-clr;
    display: flex;
    color: $nav-clr;
    border-radius: 50%;
    overflow: hidden;
    cursor: pointer;
    transition: background-color 0.5s ease;

    &:hover {
      background-color: $nav-bg-clr-hover;
      color: $nav-clr-hover;

      .arrow-icon.left {
        animation: left-arrow-move 0.3s ease infinite alternate;
      }

      .arrow-icon.right {
        animation: right-arrow-move 0.3s ease infinite alternate;
      }
    }
  }

  .nav-btn.prev {
    transform: translate(calc(-50% - $slide-width-half), -50%);
  }

  .nav-btn.next {
    transform: translate(calc(-50% + $slide-width-half), -50%);
  }

  .arrow-icon {
    width: 100%;
    height: 100%;
    transition: all 0.5s ease;
  }

  @keyframes left-arrow-move {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(-0.5rem);
    }
  }

  @keyframes right-arrow-move {
    from {
      transform: translateX(0);
    }

    to {
      transform: translateX(0.5rem);
    }
  }
  // #endregion nav btn

  .card-layout {
    padding: 0 $card-gap;
  }
}

@media screen and (max-width: media-width.$width-999) {
  .carousel-title {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: media-width.$width-767) {
  .card-text-box a {
    overflow: hidden;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 2;
  }
}

@media screen and (max-width: media-width.$width-575) {
  .card-layout {
    padding: 0 1rem;
  }

  .card-text-box {
    padding: 1rem;
  }

  .card-text-box a {
    -webkit-line-clamp: 3;
  }
}
</style>
