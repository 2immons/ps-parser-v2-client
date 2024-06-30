<script setup lang="ts">
import { ref } from 'vue'

const message = ref('Привет, мир!')
</script>

<template>
  <div class="hello">
    <h1>{{ message }}</h1>
  </div>
</template>

<style scoped>
.hello {
  font-family: Arial, sans-serif;
  text-align: center;
  margin-top: 50px;
}
</style>
