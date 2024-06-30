<script setup lang="ts">
import {ref, defineProps, defineEmits} from 'vue';

const props = defineProps({
  message: String
});

const visible = ref(false);

const show = () => {
  visible.value = true;
  setTimeout(() => {
    visible.value = false;
  }, 3000);
};

watch(() => props.message, show);

</script>

<template>
  <transition name="fade">
    <div v-if="visible" class="toast">{{ message }}</div>
  </transition>
</template>

<style scoped lang="less">
.toast {
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  background: #333;
  color: #fff;
  padding: 10px 20px;
  border-radius: 5px;
  box-shadow: 0 0 10px rgba(0, 0, 0, 0.1);
  opacity: 0.9;
}
.fade-enter-active, .fade-leave-active {
  transition: opacity 0.5s;
}
.fade-enter, .fade-leave-to {
  opacity: 0;
}
</style>