<script setup lang="ts">
import CreateProcessForm from "~/components/CreateProcessForm.vue";

</script>

<template>
  <div class="container container--mobile">
    <div class="create-process-button-wrapper">
      <button class="create-process-button">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12.0001 4.79999L12 19.2M19.2 12L4.80005 12" stroke="black" stroke-width="2" stroke-linecap="round"/>
        </svg>
        Создать запрос
      </button>
    </div>
  </div>
</template>

<style scoped>
.create-process-button-wrapper {
  display: flex;
  justify-content: center;
  align-items: center;
  height: 60px;
}

.create-process-button {
  display: flex;
  font-size: 16px;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-radius: 25px;
  background: #FDFDFD;
  border: 1px solid black;
  height: 30px;
}
</style>