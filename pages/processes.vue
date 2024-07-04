<script setup lang="ts">
import { computed, ref } from 'vue';

import PageHeader from "~/components/PageHeader.vue";
import CreateProcess from "~/components/CreateProcess.vue";
import ProcessItem from "~/components/ProcessItem.vue";
import PageFooter from "~/components/PageFooter.vue";
import SearchSort from "~/components/UI/SearchField.vue";
import SortField from "~/components/UI/SortField.vue";

import { processesStore } from "~/store/processes";

const store = processesStore()
const processItems = computed(() => {
  return store.processItems
})

interface ProcessItem {
  status: string,
  id: number,
  providers: string[],
  categories: string[],
  time: string
}

interface SortField {
  field: string,
  order: boolean
}

const searchText = ref('')

interface SortField {
  field: string,
  order: boolean
}

const sortField = ref({
  field: '',
  order: false,
});

const sortFields = ref([
  {
    name: 'status',
    displayName: 'По статусу'
  },
  {
    name: 'id',
    displayName: 'По номеру'
  },
  {
    name: 'time',
    displayName: 'По ост. времени'
  },
])

// Сортировка
const filteredItems = computed<ProcessItem[]>(() => {
  let items = processItems.value;

  if (searchText.value) {
    items = items.filter(item => item.id.toString() === searchText.value);
  }

  if (sortField.value) {
    const sortFieldValue = sortField.value.field
    const sortFieldOrder = sortField.value.order

    if (sortFieldValue === 'id') {
      items = items.slice().sort((a, b) => {
        if (sortFieldOrder) {
          if (a.id > b.id) return -1;
          if (a.id < b.id) return 1;
          return 0;
        } else {
          if (a.id > b.id) return 1;
          if (a.id < b.id) return -1;
          return 0;
        }
      });
    }

    else if (sortFieldValue === 'status' || sortFieldValue === 'time') {
      items = items.slice().sort((a, b) => {
        if (sortFieldOrder)
          return b[sortFieldValue].localeCompare(a[sortFieldValue]);
        else
          return a[sortFieldValue].localeCompare(b[sortFieldValue]);
      });
    }
  }

  return items;
});

const handleUpdateSearchText = (newSearchText: string) => {
  searchText.value = newSearchText
}
const handleUpdateSortField = (newSortField: SortField) => {
  sortField.value.field = newSortField.field;
  sortField.value.order = newSortField.order;
}
</script>

<template>
  <PageHeader />
  <main class="container container--mobile">
    <CreateProcess />
    <hr>
    <div class="search-wrappers">
      <SearchSort @updateSearchText="handleUpdateSearchText"/>
      <SortField @update-sort-field="handleUpdateSortField" :sort-fields="sortFields"/>
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
  display: grid;
  grid-template-columns: 4fr 2fr;
}

</style>
