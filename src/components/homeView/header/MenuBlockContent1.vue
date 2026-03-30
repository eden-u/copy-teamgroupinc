<script setup></script>

<template>
  <div class="conent-box">
    <div>
      <p>Lorem ipsum dolor sit amet consectetur.</p>

      <input type="text" placeholder="Lorem, ipsum dolor." />
    </div>

    <div class="hint-and-btn-box">
      <div>
        <p>Lorem, ipsum.</p>

        <div class="hint-box">
          <span><a href="">Lorem.</a></span>
          <span><a href="">Lorem.</a></span>
          <span><a href="">Lorem.</a></span>
        </div>
      </div>

      <div>
        <button type="button">Lorem.</button>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
@use '@/assets/styles/menu-box.scss' as menu-box;

$hint-text-clr: blue;
$btn-bg-clr: black;
$btn-tetx-clr: white;

input {
  border: 0;
  outline: 0;
  padding: 0.5rem 0;
  width: 100%;
  height: 1.5rem;
  font-size: 1rem;
  border-bottom: menu-box.$menu-item-divider;
}

.hint-and-btn-box {
  margin-top: 1rem;
}

.hint-box {
  transform: translateX(-0.5rem);
  padding: 0.5rem 0;

  a {
    display: inline;
    color: $hint-text-clr;
    padding: 0.5rem;
  }
}

button {
  float: right;
  height: 2rem;
  font-size: 1.25rem;
  padding: 5px 1rem;
  box-sizing: content-box;
  background-color: $btn-bg-clr;
  color: $btn-tetx-clr;
}
</style>
