<script setup>
import {ref, defineEmits, watch, computed} from 'vue';
import { processesStore } from "~/store/processes.ts";
import { providersStore } from "~/store/providers.ts";
import { categoriesStore } from "~/store/categories.ts";
import Treeselect from 'vue3-treeselect'
import 'vue3-treeselect/dist/vue3-treeselect.css'
import '/styles/UI/input.less'
import '/styles/UI/buttons.less'

const processesStoreInstance = processesStore();
const providersStoreInstance = providersStore();
const categoriesStoreInstance = categoriesStore();

const providersSelects = computed(() => {
  return providersStoreInstance.providers
})

const categoriesSelects = computed(() => {
  return categoriesStoreInstance.categories
})

const emits = defineEmits([
    "create-process",
    "cancel-process-creation"
]);

const props = defineProps({
  isCreateProcessFormVisible: Boolean
});

const isCreateProcessFormVisible2 = ref(props.isCreateProcessFormVisible);

watch(() => props.isCreateProcessFormVisible, (newValue) => {
  isCreateProcessFormVisible2.value = newValue;
});

let keyWordsString = ref('');
watch(keyWordsString, (newValue) => {
  keyWordsArray.value = newValue.split(/\\s*,\\s*/);
});

let categories = ref([]);
let providers = ref([]);
let keyWordsArray = ref([]);
let minPrice = ref();
let maxPrice = ref();
let minBonus = ref();
let minSale = ref();

const cancelProcessCreation = () => {
  isCreateProcessFormVisible2.value = false;
  setTimeout(() => {
    emits('cancel-process-creation');
  }, 700);
};

const createProcess = () => {
  let process = {
    keyWordsArray: keyWordsArray.value,
    categories: categories.value,
    providers: providers.value,
    minPrice: minPrice.value,
    maxPrice: maxPrice.value,
    minBonus: minBonus.value,
    minSale: minSale.value
  }
  processesStoreInstance.createProcess(process)
  isCreateProcessFormVisible2.value = false;
  setTimeout(() => {
    emits('create-process');
  }, 700);
};
</script>

<template>
  <Transition>
    <div class="create-process-form-bg" v-if="isCreateProcessFormVisible2" @click="cancelProcessCreation">
        <div class="create-process-form-wrapper" @click.stop>
          <form @submit.prevent="createProcess">
            <div class="input">
              <label for="">Категории</label>
              <Treeselect
                  placeholder="Выберите категории..."
                  noResultsText="Ничего не найдено"
                  :multiple="true"
                  :options="categoriesSelects"
                  v-model="categories" />
            </div>

            <div class="input">
              <label for="">Площадки</label>
              <Treeselect
                  placeholder="Выберите площадки..."
                  noResultsText="Ничего не найдено"
                  :multiple="true"
                  :options="providersSelects"
                  v-model="providers" />
            </div>

            <div class="short-input">
              <label for="">Ключевые слова</label>
              <textarea class="input-field" placeholder="Введите ключевые слова через запятую" v-model="keyWordsString"></textarea>
            </div>

            <div class="short-input">
              <label for="">Мин. цена</label>
              <input class="input-field" type="number" v-model="minPrice">
            </div>

            <div class="short-input">
              <label for="">Макс. цена</label>
              <input class="input-field" type="number" v-model="maxPrice">
            </div>

            <div class="short-input">
              <label for="">Мин. % бонуса</label>
              <input class="input-field" type="number" v-model="minBonus">
            </div>

            <div class="short-input">
              <label for="">Мин. % скидки</label>
              <input class="input-field" type="number" v-model="minSale">
            </div>

            <div class="button-wrapper">
              <button class="form-btn form-btn--close" type="button" @click="cancelProcessCreation">Закрыть</button>
              <button class="form-btn form-btn--create" type="submit">Создать</button>
            </div>
          </form>
        </div>
      </div>
  </Transition>
</template>

<style scoped>
.create-process-form-bg {
  position: absolute;
  z-index: 3;
  background: rgba(0, 0, 0, 0.32);
  overflow: hidden;
  height: 100%;
  left: 0;
}

.create-process-form-wrapper {
  z-index: 4;
  background: white;
}

form {
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 0;
}

.button-wrapper {
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  margin: 10px 0 10px 0;

}

.v-enter-active,
.v-leave-active {
  transition: height 0.7s ease-out;
  height: 100%;
}

.v-enter-from,
.v-leave-to {
  height: 0;
}
</style>