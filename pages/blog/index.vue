<script setup lang="ts">
import { blogs } from '~/utils/blog'
const dtf = new Intl.DateTimeFormat(undefined, {dateStyle: "long"})

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
    <div class="blog" v-for="blog in sorted">
      <h2 class="title"><NuxtLink :to="`/blog/entry/${blog.slug}`">{{ blog.title }}</NuxtLink></h2>
      <p class="subtitle">{{ dtf.format(blog.published) }} · {{ blog.description }}</p>
    </div>
  </div>
</template>

<style scoped>
  .blog {
    padding: 1em;
    background-color: #ffd4f6;
  }

  .blog p, .blog h2 {
    margin: 0;
  }

  .blog h2 {
    font-size: 1.5em;
    margin-bottom: .5em;
  }
</style>
