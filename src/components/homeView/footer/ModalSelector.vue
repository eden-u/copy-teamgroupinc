<script setup>
import AnimeClose from '@/components/anime/AnimeClose.vue'
import { useModalSelectorStore } from '@/stores/modalSelectorStore'
import ModalOptions from './ModalOptions.vue'

const { closeModalSelector } = useModalSelectorStore()
</script>

<template>
  <div class="modal-selector-layout" @click="closeModalSelector">
    <div class="modal-selector-box" @click.stop="">
      <AnimeClose class="modal-close" @click="closeModalSelector" lineClr="black" />

      <div class="selector-content">
        <p class="modal-title">Lorem, ipsum.</p>

        <ModalOptions />
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media-width.scss' as media-width;

$modal-bg-clr: rgba(0, 0, 0, 0.5);
$selector-bg-clr: rgb(255, 137, 137);

// #region modal layout
.modal-selector-layout {
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
  position: fixed;
  top: 0;
  z-index: 10;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-selector-box {
  width: min(100%, 60rem);
  background-color: $selector-bg-clr;
  margin: 0 1rem;
  box-sizing: border-box;
  padding-top: 3rem;
  text-align: center;
  position: relative;
}
// #endregion modal layout

// #region content
.selector-content {
  max-height: calc(100svh - 12rem);
  padding: 3rem 1rem;
  overflow: auto;
}

.modal-close {
  position: absolute;
  top: 1rem;
  right: 1rem;
}

.modal-title {
  margin-bottom: 3rem;
  font-size: 1.5rem;
}
// #endregion content

@media screen and (min-width: media-width.$width-576) {
  .modal-close {
    top: 2rem;
    right: 2rem;
  }

  .modal-title {
    font-size: 2rem;
  }
}
</style>
