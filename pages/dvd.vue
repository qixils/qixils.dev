<script setup lang="ts">
import { whenever } from '@vueuse/core'

const dvd = ref<HTMLElement>()

whenever(dvd, el => {
  let x = 0;
  let y = 0;
  let dirX = 1;
  let dirY = 1;
  const speed = 2;
  const dvdWidth = el.clientWidth;
  const dvdHeight = el.clientHeight;


  function animate() {
    const screenHeight = document.body.clientHeight;
    const screenWidth = document.body.clientWidth;

    if (y + dvdHeight >= screenHeight || y < 0) {
      dirY *= -1;
    }
    if (x + dvdWidth >= screenWidth || x < 0) {
      dirX *= -1;
    }
    x += dirX * speed;
    y += dirY * speed;
    el.style.left = x + "px";
    el.style.top = y + "px";
    window.requestAnimationFrame(animate);
  }

  window.requestAnimationFrame(animate);
}, { once: true, immediate: true })
</script>

<template>
  <div id="full">
    <img ref="dvd" id="dvd" src="https://i.qixils.dev/colonthree@1.png" />
  </div>
</template>

<style>
html, body, #full {
  width: 100vw;
  height: 100vh;
  margin: 0;
  padding: 0;
}
#dvd {
  position: absolute;
  left: 0px;
  top: 0px;
  height: 28px;
  width: 28px;
}
</style>
