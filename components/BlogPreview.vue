<script setup lang="ts">
import type { Blog } from '~/utils/blog'
const dtf = new Intl.DateTimeFormat(undefined, {dateStyle: "long"})

const props = defineProps(['blog'])
const blog: Blog = props.blog
</script>

<template>
  <div class="blog">
    <h2 class="title"><NuxtLink :to="`/blog/entry/${blog.slug}`">{{ blog.title }}</NuxtLink></h2>
    <p class="subtitle">{{ dtf.format(blog.published) }} · {{ blog.description }}</p>
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
