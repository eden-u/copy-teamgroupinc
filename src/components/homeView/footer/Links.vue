<script setup>
import IconLink1 from '@/components/icons/footer/IconLink1.vue'
import IconLink2 from '@/components/icons/footer/IconLink2.vue'
import IconLink3 from '@/components/icons/footer/IconLink3.vue'
import MenuHeaderLogo from '@/components/logo/MenuHeaderLogo.vue'
</script>

<template>
  <div class="links">
    <a class="logo-link" href="">
      <MenuHeaderLogo />
    </a>

    <div class="icons">
      <a href=""><IconLink1 /></a>
      <a href=""><IconLink2 /></a>
      <a href=""><IconLink3 /></a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media-width.scss' as media-width;
@use '@/assets/styles/footer.scss' as footer;

$icon-bg-clr: rgba(255, 255, 255, 0.2);
$icon-clr: rgb(255, 255, 255);
$icon-bg-clr-hover: rgba(255, 255, 255, 0.7);
$icon-clr-hover: rgb(60, 60, 60);

.links {
  padding: 1rem 0;
}

.logo-link {
  display: none;
}

// #region icons
.icons {
  display: flex;
  align-items: center;
}

.icons a {
  width: 2.5rem;
  height: 2.5rem;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: $icon-bg-clr;
  border-radius: 50%;
  transition: all 0.5s ease;

  &:hover {
    background-color: $icon-bg-clr-hover;
    color: $icon-clr-hover;
  }
}

.icons a + a {
  margin-left: 0.75rem;
}

a {
  color: $icon-clr;
  font-size: 0;

  svg {
    font-size: 1.75rem;
  }
}
// #endregion icons

@media screen and (min-width: media-width.$width-768) {
  .links {
    display: flex;
    justify-content: space-between;
  }

  .logo-link {
    display: block;
    animation: logo-up footer.$nav-active-time ease;
    transition: all 0.5s ease;

    &:hover {
      transform: translateX(0.5rem);
    }
  }

  @keyframes logo-up {
    from {
      transform: translateY(1rem);
      opacity: 0;
    }

    to {
      transform: translateY(0);
      opacity: 1;
    }
  }
}
</style>
