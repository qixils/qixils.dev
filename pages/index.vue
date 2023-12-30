<script setup lang="ts">
import { blogs } from '~/utils/blog'

const sorted = computed(() => [...blogs].sort((a, b) => b.published - a.published))

useSeoMeta({
  title: 'Home',
  ogTitle: 'Home',
  description: "I'm Lexi, a full-stack developer with a passion for creating unique experiences.",
  ogDescription: "I'm Lexi, a full-stack developer with a passion for creating unique experiences.",
})
</script>

<template>
  <div class="container">
    <h1>Hi, I'm Lexi!</h1>
    <p>
      I'm a professional software engineer with a passion for creating unique experiences.
    </p>
    <p>
      I'm currently working with
      <a href="https://crowdcontrol.live/">Crowd Control</a>
      to bring unparalleled interactivity to Minecraft streams.
    </p>
    <p>
      On the side, I do VTuber
      <a href="https://twitch.tv/lexikiq">streams</a>
      and <a href="https://youtube.com/@lexikiq">videos</a>.
    </p>
    <p>
      You can view my full project portfolio
      <NuxtLink to="/portfolio">here</NuxtLink>.
    </p>
    <p>
      You can view my blog posts for solving stupid problems
      <NuxtLink to="/blog">here</NuxtLink>.
      Here's a preview of the latest post:
    </p>
    <BlogPreview :blog="sorted[0]" />
  </div>
</template>
