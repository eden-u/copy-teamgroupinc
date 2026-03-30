<script setup>
import Mail from '@/components/homeView/footer/Mail.vue'
import FooterNav from '@/components/homeView/footer/FooterNav.vue'
import Links from '@/components/homeView/footer/Links.vue'
import Legal from '@/components/homeView/footer/Legal.vue'
import { storeToRefs } from 'pinia'
import ModalSelector from './footer/ModalSelector.vue'
import { useModalSelectorStore } from '@/stores/modalSelectorStore'

const modalSelectorStore = useModalSelectorStore()
const { modalSelectorStateRef } = storeToRefs(modalSelectorStore)
</script>

<template>
  <div class="footer-layout">
    <div class="footer-box">
      <Mail />

      <div class="nav-and-links-layout">
        <FooterNav />

        <Links />
      </div>
    </div>

    <Legal />

    <Teleport to="body">
      <ModalSelector v-if="modalSelectorStateRef" />
    </Teleport>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/menu-header.scss' as menu-header;
@use '@/assets/styles/media-width.scss' as media-width;
@use '@/assets/styles/footer.scss' as footer;

$footer-layout-bg-clr: white;
$footer-box-bg-clr: rgb(183, 108, 105);

.footer-layout {
  padding-bottom: menu-header.$height;
  background-color: $footer-layout-bg-clr;
}

.footer-box {
  width: 100%;
  background-color: $footer-box-bg-clr;
  box-sizing: border-box;
}

.nav-and-links-layout {
  padding: 0 footer.$big-padding;
}

@media screen and (min-width: media-width.$width-1024) {
  .footer-layout {
    padding: 0;
  }
}
</style>
