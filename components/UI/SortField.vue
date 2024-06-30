<script setup lang="ts">
import { ref, defineEmits } from 'vue'

const isSortListVisible = ref(false)

// Определяем `emit`
const emit = defineEmits(['updateSearchText'])

const searchText = ref('')

const search = () => {
  emit('updateSearchText', searchText.value)
}
</script>

<template>
  <div class="sort-wrapper">
    <button class="sort-list-btn">По статусу</button>
    <div v-show="isSortListVisible">
      <div>1</div>
      <div>2</div>
      <div>3</div>
    </div>
  </div>
</template>

<style scoped>
.sort-wrapper{
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 10px 0 10px 0;
}
.sort-list-btn {
  width: 100% ;
}

</style>