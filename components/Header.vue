<script setup lang="ts">
import { computed, type Component } from 'vue'

const props = defineProps<{
  tag?: string | Component
  text?: string
  slug?: string
}>()

const tag = computed(() => props.tag ?? "h1")
const text = computed(() => props.text ?? "Header")
const slug = computed(() => props.slug ?? text.value.toLowerCase().replace(" ", "-"))
</script>

<template>
  <component :is="tag" :id="slug" class="header">
    <a :href="`#${slug}`" class="link">#</a>{{ text }}
  </component>
</template>

<style scoped>
.header {
  position: relative;
}

.link {
  display: inline-block;
  position: absolute;
  left: -2.75rem;
  color: #555;
  opacity: 0;
  padding: 0 0.75rem;
}

.header:hover .link {
  opacity: 1;
}

@media (prefers-reduced-motion: no-preference) {
  .link {
    transition: opacity 0.1s;
  }
}
</style>
