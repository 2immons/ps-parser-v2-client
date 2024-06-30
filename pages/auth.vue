<script setup lang="ts">
import PageHeader from "~/components/PageHeader.vue";
import AuthComponent from "~/components/AuthComponent.vue";
import PageFooter from "~/components/PageFooter.vue";

</script>

<template>
  <PageHeader />
  <main>
    <AuthComponent/>
  </main>
  <PageFooter />
</template>

<style scoped>

main {
  position: relative;
}
</style>
