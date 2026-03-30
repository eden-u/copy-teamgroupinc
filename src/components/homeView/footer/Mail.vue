<script setup>
import AnimeBtnGradientBg from '@/components/anime/AnimeBtnGradientBg.vue'
import IconEmailClose from '@/components/icons/footer/IconEmailClose.vue'
import IconEmailOpen from '@/components/icons/footer/IconEmailOpen.vue'
import { getSvgSize } from '@/utils/animeBtnData'

const svgSize = getSvgSize(350, 100)

const gradientClrMap = {
  stopClr1: 'rgb(255, 137, 137)',
  stopClr2: 'rgb(200, 88, 88)',
  stopClr3: 'rgb(74, 35, 35)',
}
</script>

<template>
  <div class="mail-layout">
    <div class="mail-box">
      <div class="title-box">
        <div class="icon-box">
          <IconEmailClose class="mail-close" />
          <IconEmailOpen class="mail-open" />
        </div>

        <p>Lorem.</p>
      </div>

      <div class="form">
        <input type="email" placeholder="Email" />

        <button class="btn-box" type="button">
          <AnimeBtnGradientBg
            class="btn-bg"
            v-bind="{ svgSize, gradientClrMap, pathMargin: 0, clipWeight: 10 }"
          />

          <p>Lorem.</p>
        </button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media-width.scss' as media-width;
@use '@/assets/styles/footer.scss' as footer;

$btn-clr-1: rgb(255, 137, 137);
$btn-clr-2: rgb(200, 88, 88);
$btn-clr-3: black;
$btn-bg-clr: linear-gradient($btn-clr-1, $btn-clr-2, $btn-clr-3);
$btn-bg-clr-from: linear-gradient(135deg, $btn-clr-1, $btn-clr-2, $btn-clr-3);
$btn-bg-clr-to: linear-gradient(315deg, $btn-clr-1, $btn-clr-2, $btn-clr-3);
$btn-text-clr: white;
$btn-translateX: 1rem;

// #region mail layout
.mail-layout {
  padding: 0 footer.$small-padding;
}

.mail-box,
.title-box,
.form {
  display: flex;
}

.mail-box,
.form {
  flex-direction: column;
  width: 100%;
}

.mail-box,
.icon-box,
.form {
  align-items: center;
}

.mail-box {
  background-color: skyblue;
  padding: 1rem;
  box-sizing: border-box;
  transform: translateY(-50%);
  overflow: hidden;
}
// #endregion mail layout

// #region title
.title-box {
  font-size: 2rem;
}

.icon-box {
  display: grid;
  grid-template-areas: 'icon-box';

  & > * {
    grid-area: icon-box;
  }
}

.mail-close {
  transform: translateY(3px);
}

.mail-open {
  display: none;
}
// #endregion title

// #region from
.form {
  @include footer.fade-in-left();
}

input,
button {
  height: 2rem;
}

input {
  width: 100%;
  margin: 0.5rem 0;
  padding-left: 0.75rem;
}

button {
  display: grid;
  grid-template-areas: 'btn-box';
  color: $btn-text-clr;
  background-color: transparent;
  align-items: center;

  & > * {
    grid-area: btn-box;
  }
}

.btn-bg {
  height: 100%;
}

// #endregion from

@media screen and (min-width: media-width.$width-360) {
  .mail-layout {
    padding: 0 footer.$big-padding;
  }
}

@media screen and (min-width: media-width.$width-576) {
  .form {
    max-width: 36rem;
    flex-direction: row;
    justify-content: center;
    transform: translateX(calc($btn-translateX / 2));
  }

  input,
  button {
    font-size: 1.25rem;
    height: 3rem;
  }

  input {
    padding-left: 1.25rem;
  }

  button {
    flex-shrink: 0;
    transform: translateX(-$btn-translateX);
  }
}

@media screen and (min-width: media-width.$width-1024) {
  .mail-box {
    flex-direction: row;
    justify-content: space-between;
    padding: 2rem 1rem;

    &:hover {
      .mail-close {
        display: none;
      }

      .mail-open {
        display: block;
      }
    }
  }

  .title-box {
    font-size: 2.5rem;
  }

  input,
  button {
    font-size: 1.5rem;
    height: 3rem;
  }

  input {
    max-width: 28rem;
    padding-left: 1.5rem;
  }

  button {
    transition: all 0.5s ease;
  }

  button p {
    position: relative;
    z-index: 1;
  }

  button:hover {
    transform: translateX(-$btn-translateX - 0.5rem);
  }
}
</style>
