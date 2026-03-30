<script setup>
import SmallHeaderLogo1 from '@/components/logo/SmallHeaderLogo1.vue'
import SmallHeaderLogo2 from '@/components/logo/SmallHeaderLogo2.vue'
import BigHeaderLogo from '@/components/logo/BigHeaderLogo.vue'
import HeroItemBtn from '@/components/homeView/main/HeroItemBtn.vue'

defineProps(['imgUrl', 'heroIndex', 'isGrowUp'])

const logoList = [SmallHeaderLogo1, SmallHeaderLogo2, BigHeaderLogo]
</script>

<template>
  <div :class="{ ['grow-up']: isGrowUp }">
    <div class="content-box">
      <component class="svg-logo" :is="logoList[heroIndex]"></component>

      <div class="title-box">
        <p class="title-outline">Lorem.</p>
        <p class="title-full">Lorem.</p>
      </div>

      <HeroItemBtn />
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media-width.scss' as media-width;

$text-clr: white;
$text-clr-active: black;
$text-size: 2rem;
$text-size-active: 2.5rem;
$text-outline: 2px $text-clr;
$text-outline-active: 2px $text-clr-active;
$link-size: 1rem;
$tranition-item-1: 0.5s;
$tranition-item-2: 0.3s;

// #region content box
.content-box {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  font-weight: bold;
}

.content-box {
  color: $text-clr;
}
// #endregion content box

// #region svg logo
.svg-logo:not(rect),
.title-outline {
  font-size: $text-size;
}

.svg-logo:not(rect) {
  fill: $text-clr;
}
// #endregion svg logo

// #region title box
.title-box {
  display: grid;
  grid-template-areas: 'title-box';

  p {
    grid-area: title-box;
  }
}

.title-outline {
  color: transparent;
  -webkit-text-stroke: $text-outline;
  transition: all $tranition-item-1 ease;
}

.title-full {
  font-size: $text-size-active;
}

// #endregion title box

@media screen and (min-width: media-width.$width-1024) {
  .svg-logo,
  .title-full {
    opacity: 0;
  }

  .svg-logo {
    transform: translateY(1rem);
  }

  .grow-up {
    .svg-logo,
    .title-full {
      opacity: 1;
    }

    .svg-logo {
      transform: translateY(0);
    }

    .title-outline {
      font-size: $text-size-active;
      -webkit-text-stroke: $text-outline-active;
    }

    .title-full {
      transform: translate(5px, 5px);
      transition: all 0.5s ease $tranition-item-1;
    }

    .svg-logo {
      transition: all 0.5s ease $tranition-item-2;
    }
  }
}

@media screen and (max-width: media-width.$width-1023) {
  .content-box {
    cursor: default;
  }

  .title-outline {
    font-size: $text-size-active;
    -webkit-text-stroke: $text-outline-active;
  }

  .title-full {
    transform: translate(5px, 5px);
  }
}
</style>
