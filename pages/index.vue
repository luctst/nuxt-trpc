<script setup lang="ts">
import { ref } from 'vue';

const counter = ref<number>(0);
const { $client } = useNuxtApp()

const { data: hello } = await $client.hello.useQuery({ text: 'client' });
console.log(await $client.getPost.query(1));
console.log(useRuntimeConfig(), useAppConfig());
</script>

<template>
  <div>
    <h1>counter {{ counter }}</h1>
    <button @click="counter++">+1</button>
  </div>
</template>
