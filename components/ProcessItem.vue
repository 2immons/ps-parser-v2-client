<script setup lang="ts">
import { computed } from 'vue';
import { processesStore} from "~/store/processes";
const store = processesStore();

const downloadFile = (id: Number) => {
  store.fetchDownloadFile(id);
  // TODO: обработка скачивания файла
}

const props = defineProps<{
  processItem: {
    status: string,
    id: number,
    providers: string,
    categories: string,
    time: string
  }
}>();

const statusButtonText = computed(() => {
  switch (props.processItem.status) {
    case 'completed':
      return 'Завершен';
    case 'pending':
      return 'В работе';
    case 'error':
      return 'Ошибка';
    case 'in-queue':
      return 'В очереди';
  }
});

const statusButtonClass = computed(() => {
  return [
    'status-button',
    {
      'status-button--completed': props.processItem.status === 'completed',
      'status-button--pending': props.processItem.status === 'pending',
      'status-button--error': props.processItem.status === 'error',
      'status-button--in-queue': props.processItem.status === 'in-queue',
    }
  ];
});
</script>

<template>
    <div class="process-item">
      <div class="process-title">
        <div class="title-wrapper title-wrapper--number">
          <h3 class="number">#{{ processItem.id }}</h3>
        </div>
        <div class="title-wrapper title-wrapper--status">
          <button :class="statusButtonClass">{{ statusButtonText }}</button>
        </div>
      </div>
      <div class="creation-date">
        <span class="creation-date">Дата создания: 23.05.23 19:00</span>
      </div>
      <div class="process-info">
        <div class="info-section">
          <div class="info-wrapper info-wrapper--provider">
            <p class="info-wrapper__title">Площадки:</p>
            <p class="info-wrapper__text">
              <span v-for="(provider, index) in processItem.providers" :key="index">
                {{ provider }}<span v-if="index < processItem.providers.length - 1">, </span>
              </span>
            </p>
          </div>
          <div class="info-wrapper info-wrapper--categories">
            <p class="info-wrapper__title">Категории:</p>
            <p class="info-wrapper__text">
              <span v-for="(category, index) in processItem.categories" :key="index">
                {{ category }}<span v-if="index < processItem.categories.length - 1">, </span>
              </span>
            </p>
          </div>
          <div class="info-wrapper info-wrapper--time">
            <p class="info-wrapper__title">Оставшееся время: <span>{{ processItem.time }}</span></p>
          </div>
        </div>
        <div class="interaction-section">
          <button class="interaction-wrapper interaction-wrapper--info">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M10 10V6.25M10 12.7795V12.8125M17.5 10C17.5 14.1421 14.1421 17.5 10 17.5C5.85786 17.5 2.5 14.1421 2.5 10C2.5 5.85786 5.85786 2.5 10 2.5C14.1421 2.5 17.5 5.85786 17.5 10Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Информация
          </button>
          <button class="interaction-wrapper interaction-wrapper--download"
                  @click="downloadFile(processItem.id)"
                  v-if="processItem.status === 'completed'">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33337 16.9856C3.67063 17.315 4.12805 17.5 4.605 17.5H15.3951C15.872 17.5 16.3295 17.315 16.6667 16.9856M10.001 2.5V12.4521M10.001 12.4521L14.1116 8.64941M10.001 12.4521L5.89053 8.64941" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Скачать файл
          </button>
          <button class="interaction-wrapper interaction-wrapper--cancel">
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M3.33337 5.14706H16.6667M8.33337 13.9706V8.67647M11.6667 13.9706V8.67647M13.3334 17.5H6.66671C5.74623 17.5 5.00004 16.7099 5.00004 15.7353V6.02941C5.00004 5.5421 5.37314 5.14706 5.83337 5.14706H14.1667C14.6269 5.14706 15 5.5421 15 6.02941V15.7353C15 16.7099 14.2538 17.5 13.3334 17.5ZM8.33337 5.14706H11.6667C12.1269 5.14706 12.5 4.75202 12.5 4.26471V3.38235C12.5 2.89504 12.1269 2.5 11.6667 2.5H8.33337C7.87314 2.5 7.50004 2.89504 7.50004 3.38235V4.26471C7.50004 4.75202 7.87314 5.14706 8.33337 5.14706Z" stroke="black" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
            </svg>
            Удалить
          </button>
        </div>
      </div>
    </div>
  <hr>
</template>

<style scoped lang="less">
.process-item{
  padding: 15px 0 15px 0;
}
.process-title{
  display: grid;
  grid-template-columns: 4fr 2fr;
  margin-bottom: 15px;
}

.title-wrapper{
  display: flex;
  align-items: center;
}

.creation-date{
}

.number {
  font-weight: bold;
}

.status-button {
  /* Общие стили для кнопки */
  padding: 10px;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 8px;
  font-size: 14px;
  height: 20px;
  width: 100%;
  text-transform: uppercase;
  font-weight: bold;
  display: flex;
  justify-content: center;
  align-items: center;
}

.status-button--completed {
  background-color: #17A952;
}

.status-button--pending {
  background-color: #BF9321;
}

.status-button--error {
  background-color: #891919;
}

.status-button--in-queue {
  background-color: #680f85;
}

.process-info{
  display: grid;
  grid-template-columns: 4fr 2fr;
}

.info-wrapper__title {
  font-weight: 700;
}

.interaction-section {
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 10%
}

.interaction-wrapper {
  display: flex;
  align-items: center;
  flex-direction: row;
  gap: 5%;
  border: none;
  height: 20px;
  background: transparent;
  padding: 0;
  width: 100%;
  cursor: pointer;
}
</style>