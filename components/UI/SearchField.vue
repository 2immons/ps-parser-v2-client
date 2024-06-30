<script setup lang="ts">
import { ref, defineEmits } from 'vue'

// Определяем `emit`
const emit = defineEmits(['updateSearchText'])

const searchText = ref('')

const search = () => {
  emit('updateSearchText', searchText.value)
}
</script>

<template>
    <div class="search-wrapper">
      <label for="">Поиск</label>
      <input type="text" v-model="searchText" @input="search" class="input-search">
    </div>
</template>

<style scoped>
.search-wrapper{
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 10px 0 10px 0;
}

.input-search {
  border: 1px solid black;
  border-radius: 10px;
  padding: 3px 8px 3px 8px;
}
</style>