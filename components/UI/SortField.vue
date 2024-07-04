<script setup lang="ts">
import { ref, defineEmits, defineProps, computed } from 'vue'

const isSortListVisible = ref(false)

const sortField = ref({
  field: '',
  order: false,
})

interface SortFieldForButton {
  name: string;
  displayName: string;
}

const props = defineProps<{ sortFields: SortFieldForButton[] }>()

const currentField = ref(props.sortFields[0].displayName)

const emit = defineEmits(['update-sort-field'])

const sortFieldSelect = (field: string) => {
  isSortListVisible.value = !isSortListVisible.value;

  const foundField = props.sortFields.find(item => item.name === field);
  if (foundField)
    currentField.value = foundField.displayName

  sortField.value.field = field;
  sortField.value.order = !sortField.value.order

  emit('update-sort-field', sortField.value)
}

const sortClass = computed(() => {
  return {
    'sort-list-btn': true,
    'sort-list-btn--visible': isSortListVisible.value
  };
});
</script>

<template>
  <div class="sort-wrapper">
    <button :class="sortClass" @click="isSortListVisible = !isSortListVisible">
      <svg v-if="sortField.order" class="sort-list-btn__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.75 17.5L15 11.25L21.25 17.5H8.75Z" fill="#1D1B20"/>
      </svg>
      <svg v-if="!sortField.order" class="sort-list-btn__icon" width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 18.75L8.75 12.5H21.25L15 18.75Z" fill="#1D1B20"/>
      </svg>
      {{ currentField }}
    </button>
    <Transition>
      <div class="sort-dropdown-bg" v-show="isSortListVisible">
        <div class="sort-dropdown-buttons">
          <div v-for="field in sortFields"
               :key="field.name"
               class="sort-button"
               @click="sortFieldSelect(field.name)">
              <button class="sort-button">
                  {{ field.displayName }}
              </button>
              <hr>
          </div>
        </div>
      </div>
    </Transition>
  </div>
</template>

<style scoped>
.sort-wrapper{
  position: relative;
  display: flex;
  flex-direction: row;
  gap: 10px;
  margin: 10px 0 10px 0;
  width: 100%;
  justify-self: center;
  max-width: 200px;
}
.sort-list-btn {
  position: relative;
  background: transparent;
  border: 1px solid black;
  width: 100%;
  padding: 0 15px 0 25px;
  border-radius: 10px;
  cursor: pointer;
}

.sort-list-btn--visible {
  border-radius: 10px 10px 0 0;
  border-bottom: none;
}

.sort-list-btn__icon {
  position: absolute;
  top: 50%;
  left: -4px;
  transform: translateY(-50%);
}

.sort-dropdown-bg {
  position: absolute;
  width: 100%;
  padding: 0;
  top: 24px;
  height: fit-content;
  background: white;
  border-bottom: 1px solid black;
  border-right: 1px solid black;
  border-left: 1px solid black;
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
}

.sort-dropdown-buttons {
  padding: 5px 5px 5px 5px;
}

.sort-button {
  background: transparent;
  border: none;
  padding: 3px 0 6px 0;
  text-align: left;
  font-size: inherit;
  width: 100%;
  cursor: pointer;
}

.v-enter-active,
.v-leave-active {
  transition: height 0.2s ease-out;
  height: 110px;
}

.v-enter-from,
.v-leave-to {
  height: 0;
}
</style>