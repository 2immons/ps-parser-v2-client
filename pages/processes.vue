<script setup lang="ts">
import { computed, ref } from 'vue';

import PageHeader from "~/components/PageHeader.vue";
import CreateProcess from "~/components/CreateProcess.vue";
import ProcessItem from "~/components/ProcessItem.vue";
import PageFooter from "~/components/PageFooter.vue";

import { processesStore } from "~/store/processes";

const store = processesStore()
const processItems = computed(() => {
  return store.processItems
})

const searchText = ref('')

const filteredItems = computed(() => {
  if (searchText.value) {
    return processItems.value.filter(item => item.id === searchText.value);
  } else {
    return processItems.value;
  }
});

const handleUpdateSearchText = (newSearchText: string) => {
  searchText.value = newSearchText
}

import SearchSort from "~/components/UI/SearchField.vue";
import SortField from "~/components/UI/SortField.vue";
</script>

<template>
  <PageHeader />
  <main class="container container--mobile">
    <CreateProcess />
    <hr>
    <div class="search-wrappers">
      <SearchSort @updateSearchText="handleUpdateSearchText"/>
      <SortField />
    </div>
    <ProcessItem
        v-for="(item, index) in filteredItems"
        :key="index"
        :processItem="item"
    />
  </main>
  <PageFooter />
</template>

<style scoped>
/* Стили для страницы можно добавить здесь */

main {
  position: relative;
}

.search-wrappers {
  display: flex;
  flex-direction: row;
}

</style>
