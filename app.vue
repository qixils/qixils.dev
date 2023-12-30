<script setup lang="ts">
useHead({
  link: [
    { href: 'https://i.qixils.dev/favicon.ico', rel: 'icon' },
    { href: 'https://i.qixils.dev/favicon.svg', rel: 'icon', type: 'image/svg+xml' },
    { href: 'https://i.qixils.dev/icon-180.png', rel: 'apple-touch-icon' },
    { href: 'https://fonts.googleapis.com', rel: 'preconnect' },
    { href: 'https://fonts.gstatic.com', rel: 'preconnect', crossorigin: '' },
    { href: 'https://fonts.googleapis.com/css2?family=Lexend&display=swap', rel: 'stylesheet' },
  ],
  meta: [
    { name: 'theme-color', content: '#FFE6F7' },
    { charset: 'UTF-8' },
    { name: 'viewport', content: 'width=device-width, initial-scale=1' },
  ]
})
useSeoMeta({
  ogSiteName: 'qixils.dev',
  formatDetection: 'telephone=no',
  ogLocale: 'en_US',
  ogType: 'website',
  ogImage: 'https://i.qixils.dev/icon-512.png',
  ogImageAlt: 'A pink silhouette of a cat face.',
  twitterCard: 'summary',
})
</script>

<template>
  <!-- <NuxtLink to="/"><img src="https://i.qixils.dev/wordmark.svg" alt="qixils.dev wordmark" id="wordmark-header"></NuxtLink> -->
  <NuxtLayout>
    <NuxtPage />
  </NuxtLayout>
</template>
