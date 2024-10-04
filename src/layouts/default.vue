<script setup></script>

<template>
  <div class="wrap">
    <div class="gloss"></div>
  </div>
  <div class="main">
    <div class="w-full">
      <router-view />
    </div>
    <Footer />
  </div>
</template>

<style scoped lang="scss">
.main {
  min-height: 100dvh;
  width: 100%;
  display: flex;
  flex-direction: column;
  position: relative;
}
.wrap {
  background-color: #255359;
  position: fixed;
  width: 100%;
  height: 100%;
  background-image: url('@/assets/base/texture.png');
}
.gloss {
  position: fixed;
  width: 100%;
  height: 478px;
  background: url('@/assets/base/gloss.png') repeat-x;
}
</style>
