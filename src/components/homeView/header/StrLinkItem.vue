<script setup>
defineProps(['strListOr2DStrList'])
</script>

<template>
  <li
    class="down-anime"
    v-for="(str, strListIndex) in strListOr2DStrList"
    :key="`str-${strListIndex}`"
  >
    <slot
      v-bind="{
        str,
        strListIndex,
      }"
    ></slot>
  </li>
</template>

<style scoped lang="scss">
@use '@/assets/styles/big-header.scss' as big-header;

$num-of-item: 10;

.down-anime {
  @include big-header.detail-content-down();
}

@for $i from 1 through $num-of-item {
  .down-anime:nth-child(#{$i}) {
    animation-delay: calc(($i) * big-header.$detail-content-down-anime-delay-weight);
  }
}
</style>
