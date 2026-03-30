<script setup>
import { useFooterNavStore } from '@/stores/footerNavStore'
import { storeToRefs } from 'pinia'
import { onMounted } from 'vue'

const footerNavStore = useFooterNavStore()
const { footerNavRowMediaStateRef } = storeToRefs(footerNavStore)
const {
  footerMedialist,
  changeFooterNavItemDetail,
  checkFooterNavIndex,
  checkFooterNavItemDetailState,
} = footerNavStore

onMounted(() => {
  footerMedialist.addEventListener('change', (e) => {
    footerNavRowMediaStateRef.value = e.matches
  })
})
</script>

<template>
  <nav>
    <div
      class="nav-item-box"
      @click="changeFooterNavItemDetail(navIndex)"
      v-for="navIndex in 5"
      :key="`nav-item-${navIndex}`"
    >
      <div class="title-box">
        <p>Lorem, ipsum.</p>

        <div class="plus-box">
          <div
            class="line-1"
            :style="{
              transform: checkFooterNavIndex(navIndex) ? 'rotate(0)' : '',
            }"
          ></div>
          <div></div>
        </div>
      </div>

      <Transition name="detail-box">
        <ul v-if="checkFooterNavItemDetailState(navIndex)">
          <li v-for="linkIndex in 3" :key="`link-${linkIndex}`">
            <a href="">Lorem.</a>
          </li>
        </ul>
      </Transition>
    </div>
  </nav>
</template>

<style scoped lang="scss">
@use '@/assets/styles/footer.scss' as footer;
@use '@/assets/styles/media-width.scss' as media-width;

$num-of-nav-item: 5;
$title-clr: #1f3a5f;
$title-divider-width: 1px;
$title-divider: $title-divider-width solid $title-clr;
$plus-line-size: 1rem;
$link-text-clr: black;
$text-clr-highlight: white;
$text-transition-hover: all 0.5s ease;

// #region nav and title
nav {
  overflow: hidden;
}

.nav-item-box {
  padding: 0.5rem 0;
  border-bottom: $title-divider;

  @include footer.fade-in-right();
}

@for $i from 1 through $num-of-nav-item {
  .nav-item-box:nth-child(#{$i}) {
    animation-delay: calc(($i - 1) * footer.$fade-in-right-anime-delay-weight);
  }
}

.title-box {
  display: flex;
  justify-content: space-between;
  align-items: center;
  font-size: 1.25rem;
  font-weight: bold;
  cursor: pointer;
  color: $title-clr;
}
// #endregion nav and title

// #region plus
.plus-box {
  display: grid;
  grid-template-areas: 'plus-box';
  width: $plus-line-size;
  height: $plus-line-size;
  align-items: center;

  * {
    grid-area: plus-box;
    width: $plus-line-size;
    height: 0.25rem;
    background-color: $title-clr;
  }
}

.line-1 {
  transform: rotate(-90deg);
  transition: all footer.$nav-active-time ease;
}
// #endregion plus

// #region detail
.detail-box-enter-active,
.detail-box-leave-active {
  overflow: hidden;
  transition: all footer.$nav-active-time ease;
}

.detail-box-enter-from,
.detail-box-leave-to {
  max-height: 0;
}

.detail-box-enter-to,
.detail-box-leave-from {
  max-height: 8rem;
}

li a {
  color: $link-text-clr;
}
// #endregion detail

@media screen and (min-width: media-width.$width-1024) {
  nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    gap: 3rem;
  }

  .nav-item-box {
    width: 100%;
    border: 0;
  }

  .title-box {
    border-bottom: $title-divider;
    margin-bottom: 1rem;

    &:hover {
      p::after {
        width: 100%;
      }
    }
  }

  .title-box,
  li a {
    transition: $text-transition-hover;

    &:hover {
      color: $text-clr-highlight;
    }
  }

  p {
    width: 100%;
    padding-bottom: 0.75rem;
    position: relative;

    &::after {
      content: '';
      width: 0%;
      height: $title-divider-width;
      position: absolute;
      bottom: -$title-divider-width;
      left: 0;
      background-color: $text-clr-highlight;
      transition: $text-transition-hover;
    }
  }

  .plus-box {
    display: none;
  }

  li + li {
    margin-top: 0.5rem;
  }

  li a:hover {
    transform: translateX(0.25rem);
  }
}
</style>
