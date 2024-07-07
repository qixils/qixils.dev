<script setup lang="ts">
import Header from '~/components/Header.vue'
import { ref, computed } from 'vue';

const alphaNumPattern = /(?:\p{Letter}|\p{Number})/u
const hasAlphaNum = (word: string): boolean => {
  return alphaNumPattern.test(word)
}

const input = ref<string>('');
const count = computed<number>(() => {
 return input.value
  .split(' ')
  .filter(hasAlphaNum)
  .length
})

const plural = (word: string, count: number): string => {
  // todo: better alg (js lib?)
  return word + (count === 1 ? '' : 's')
}
</script>

<template>
  <NuxtLayout name="blog">
    <Header tag="h2" text="Word Counter" />
    <p>
      JavaScript port of the
      <a href="https://github.com/carykh/ewow_public_tools/blob/main/get_word_count.py">official EWOW word counter</a>.
      Requires a browser with support for
      <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Regular_expressions/Unicode_character_class_escape">Unicode-aware mode</a>.
      Last updated July 7th, 2024.
    </p>
    <input type="text" maxlength="5000" v-model="input" />
    <p>Your response has {{ count }} {{ plural('word', count) }}.</p>
  </NuxtLayout>
</template>

<style scoped>
input {
  width: 100%;
  padding: 0.5rem;
  background-color: hsl(319, 100%, 98%);
  border: 1px solid hsl(319, 30%, 80%);
  border-radius: .3rem;
}
</style>
