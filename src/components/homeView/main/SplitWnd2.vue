<template>
  <div class="split-box">
    <div class="left-wnd">
      <a href="">
        <p class="title">Lorem.</p>

        <div class="divider-box">
          <span v-for="dividerIndex in 10" :key="`divider-${dividerIndex}`"></span>
        </div>

        <p class="subtitle">Lorem, ipsum.</p>
      </a>
    </div>

    <div class="right-wnd">
      <a href="">
        <p class="title">Lorem.</p>

        <div class="divider-box">
          <span v-for="dividerIndex in 10" :key="`divider-${dividerIndex}`"></span>
        </div>

        <p class="subtitle">Lorem, ipsum.</p>
      </a>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/media-width.scss' as media-width;
@use '@/assets/styles/bg-img.scss' as bg-img;

$text-clr: black;
$text-clr-hover: white;

// #region split box
.split-box {
  display: flex;
}

.split-box > * {
  width: 100%;
  padding: 2.5rem 1rem;
  box-sizing: border-box;
}

.left-wnd {
  background-image: url('/src/assets/images/main/SplitWnd2-1.jpg');
  @include bg-img.full-and-at-center();
}

.right-wnd {
  background-image: url('/src/assets/images/main/SplitWnd2-2.jpg');
  @include bg-img.full-and-at-center();
}
// #endregion split box

// #region link
a {
  display: flex;
  flex-direction: column;
  align-items: center;
  color: $text-clr;
}

a > * + * {
  margin-top: 10px;
}

.title {
  font-size: 3rem;
}

.divider-box span {
  display: inline-block;
  height: 0.5rem;
  border-left: 1rem solid $text-clr;
  margin-left: 10px;
  clip-path: polygon(60% 0, 100% 0, 40% 100%, 0 100%);
}
// #endregion link

@media screen and (min-width: media-width.$width-1024) {
  a:hover .title {
    color: $text-clr-hover;
  }
}

@media screen and (max-width: media-width.$width-999) {
  .split-box {
    flex-direction: column;
  }

  .title {
    font-size: 2.5rem;
  }
}

@media screen and (max-width: media-width.$width-575) {
  .split-box > * {
    padding: 1.5rem 2rem;
  }

  .divider-box,
  .subtitle {
    display: none;
  }
}
</style>
