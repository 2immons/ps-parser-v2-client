<script setup>
import { ref, defineEmits, watch } from 'vue';
import { processesStore } from "~/store/processes.ts";

const store = processesStore();

import Treeselect from 'vue3-treeselect'
import 'vue3-treeselect/dist/vue3-treeselect.css'

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

const categoriesSelects = ref([
  {
    id: 'TECH',
    label: 'Технологии',
    children: [ {
      id: 'COMPUTER_MONITORS',
      label: 'Компьютерные мониторы',
    }, {
      id: 'COMPUTER_MOUSES',
      label: 'Компьютерные мыши',
    } ],
  }, {
    id: 'SEX',
    label: 'Секс',
  }
])

const providersSelects = ref([
  {
    id: 'TECH',
    label: 'Технологии',
    children: [ {
      id: 'COMPUTER_MONITORS',
      label: 'Компьютерные мониторы',
    }, {
      id: 'COMPUTER_MOUSES',
      label: 'Компьютерные мыши',
    } ],
  }, {
    id: 'SEX',
    label: 'Секс',
  }
])

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
  store.createProcess(process)
  isCreateProcessFormVisible2.value = false;
  setTimeout(() => {
    emits('create-process');
  }, 700);
};
</script>

<template>
  <Transition>
    <div class="create-process-form-bg" v-if="isCreateProcessFormVisible2">
        <div class="create-process-form-wrapper">
          <form @submit.prevent="createProcess">
            <div class="input">
              <label for="">Категории</label>
              <treeselect v-model="categories" :multiple="true" :options="categoriesSelects" />
            </div>

            <div class="input">
              <label for="">Площадки</label>
              <treeselect v-model="providers" :multiple="true" :options="providersSelects" />
            </div>

            <div class="input">
              <label for="">Ключевые слова</label>
              <textarea placeholder="Введите ключевые слова через запятую" v-model="keyWordsString"></textarea>
            </div>

            <div class="short-input">
              <label for="">Мин. цена</label>
              <input type="text" v-model="minPrice">
            </div>

            <div class="short-input">
              <label for="">Макс. цена</label>
              <input type="text" v-model="maxPrice">
            </div>

            <div class="short-input">
              <label for="">Мин. % бонуса</label>
              <input type="text" v-model="minBonus">
            </div>

            <div class="short-input">
              <label for="">Мин. % скидки</label>
              <input type="text" v-model="minSale">
            </div>

            <button type="button" @click="cancelProcessCreation">Закрыть</button>
            <button type="submit">Создать</button>
          </form>
        </div>
      </div>
  </Transition>
</template>

<style scoped>
.create-process-form-bg {
  position: absolute;
  background: white;
  overflow: hidden;
  height: 100%;
}

form {
  display: flex;
  flex-direction: column;
  padding: 10px 0 10px 0;

  .input {
    margin: 5px 0 5px 0px;
  }
}

.short-input {
  display: grid;
  grid-template-columns: 2fr 3fr;
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