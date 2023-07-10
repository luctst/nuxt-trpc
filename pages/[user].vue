<script setup lang="ts">
const userId = useRoute().params.user;
</script>

<template>
  <div>
    <h1>Welcome user {{ userId }}</h1>
  </div>
</template>
