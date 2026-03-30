<script setup>
import { useModalSelectorStore } from '@/stores/modalSelectorStore'

const { openModalSelector } = useModalSelectorStore()
</script>

<template>
  <div class="legal-box">
    <div class="copyright">Lorem ipsum dolor sit amet, consectetur adipisicing.</div>

    <div class="policy-and-selector">
      <div class="policy-box">
        <span><a href="">Lorem.</a></span>
        <span><a href="">Lorem.</a></span>
      </div>

      <div class="selector-box">
        <span class="selector" @click="openModalSelector">Lorem.</span>
        <span class="cur-option">Lorem.</span>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/small-header.scss' as small-header;
@use '@/assets/styles/footer.scss' as footer;
@use '@/assets/styles/media-width.scss' as media-width;

$legal-text-clr: #ff7f50;
$legal-divider: 1px solid $legal-text-clr;
$selector-text-clr: #f5e6d3;
$text-clr-hover: #66d9ff;
$option-bg-clr: rgb(183, 108, 105);

// #region legal and copyright
.legal-box {
  background-color: small-header.$bg-clr;
}

.legal-box,
a {
  color: $legal-text-clr;
}

.copyright {
  font-size: 0.9rem;
  padding: 1rem 0;
  border-bottom: $legal-divider;
}

.copyright,
.policy-and-selector {
  padding: 0.5rem footer.$big-padding;
}

// #endregion legal and copyright

// #region policy
.policy-and-selector > div,
.selector {
  width: 100%;
}

.policy-box span + span::before {
  content: '/';
  margin: 0 0.75rem;
}

a {
  display: inline;
}
// #endregion policy

// #region selector
.selector-box {
  display: flex;
  align-items: center;
  color: $selector-text-clr;
}

.selector {
  font-size: 1.5rem;
  text-align: end;
  cursor: pointer;
}

.cur-option {
  background-color: $option-bg-clr;
  padding: 1rem 2rem;
  margin-left: 0.5rem;
}
// #endregion selector

@media screen and (min-width: media-width.$width-480) {
  .policy-and-selector {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-block: 0;
    padding-right: 0;
  }

  .selector {
    position: relative;

    &::before {
      content: '';
      height: 0.75rem;
      border-left: $legal-divider;
      position: absolute;
      top: 50%;
      left: 0;
      transform: translateY(-50%);
    }
  }
}

@media screen and (min-width: media-width.$width-1024) {
  .legal-box {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-right: footer.$big-padding;
  }

  .copyright {
    border: 0;
  }

  .policy-and-selector {
    width: min(50svw, 30rem);
  }

  .policy-box {
    text-align: center;
  }

  .policy-box a,
  .selector {
    transition: all 0.5s ease;

    &:hover {
      color: $text-clr-hover;
    }
  }
}
</style>
