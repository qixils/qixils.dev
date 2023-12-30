<script setup lang="ts">
import { blogs } from '~/utils/blog'
const route = useRoute()
const hdtf = new Intl.DateTimeFormat(undefined, {dateStyle: "long"})

const slug = computed(() => route.path.match(/blog\/entry\/(.+)/)!![1])
const entry = computed(() => blogs.find(blog => blog.slug === slug.value)!!)
const published = computed(() => hdtf.format(entry.value.published))

useSeoMeta({ // TODO: is there a better way to write this?
  title: entry.value.title,
  ogTitle: entry.value.title,
  description: entry.value.description,
  ogDescription: entry.value.description,
  ogType: 'article',
  articlePublishedTime: new Date(entry.value.published).toISOString()
})
</script>

<template>
  <div class="container">
    <h1 class="title" id="title">{{ entry.title }}</h1>
    <h4 class="subtitle" id="subtitle">{{ published }} · {{ entry.description }}</h4>
    <NuxtPage />
  </div>
</template>

<style scoped>
  .title {
    margin-bottom: 0;
  }
  .subtitle {
    margin-top: 0.25em;
    font-weight: normal;
    color: #666;
  }
</style>