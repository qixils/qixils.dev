<script setup lang="ts">
import { blogs } from '~/utils/blog'

const sorted = computed(() => [...blogs].sort((a, b) => b.published - a.published))

useSeoMeta({
  title: "Blogs",
  ogTitle: "Blogs",
  description: "Blog posts for solving stupid problems.",
  ogDescription: "Blog posts for solving stupid problems.",
})
</script>

<template>
  <div class="container">
    <h1>Blog</h1>
    <p>
      Sometimes I have stupid problems. Rarely I find solutions.
      Here is where I document my solutions.
    </p>
    <div class="blog-container" v-for="blog in sorted">
      <BlogPreview :blog="blog" />
    </div>
  </div>
</template>

<style scoped>
  .blog-container {
    margin-bottom: .5em;
  }
</style>
