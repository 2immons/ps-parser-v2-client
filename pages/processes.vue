<script setup lang="ts">
import { computed } from 'vue';

import PageHeader from "~/components/PageHeader.vue";
import CreateProcess from "~/components/CreateProcess.vue";
import ProcessItem from "~/components/ProcessItem.vue";
import PageFooter from "~/components/PageFooter.vue";

import { processesStore } from "~/store/store";

const store = processesStore()
const processItems = computed(() => {
  return store.processItems
})

import CreateProcessForm from "~/components/CreateProcessForm.vue";
</script>

<template>
  <PageHeader />
  <main>
    <CreateProcess />
    <hr>
    <ProcessItem
        v-for="(item, index) in processItems"
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
</style>
