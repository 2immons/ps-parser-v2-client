<script setup lang="ts">
import { ref } from 'vue';
import { usersStore } from "~/store/users";
import {processesStore} from "~/store/processes";

let registrationData = ref({
  tel: '',
  password: '',
  repeatPassword: ''
})

let loginData = ref({
  tel: '',
  password: ''
})

const register = () => {
  store.registerUser(registrationData.value)
}

const login = () => {
  store.loginUser(loginData.value)
}

let isLoginMode = ref(true);

const switchForms = () => {
  isLoginMode.value = !isLoginMode.value
}

const store = usersStore()


</script>

<template>
  <div class="container container--mobile">
    <form @submit.prevent="login" v-if="isLoginMode">
      <h2>Войти</h2>
      <div class="form-inputs-wrapper">
        <label for="">Логин или номер телефона</label>
        <input type="text" v-model="loginData.tel">
        <label for="">Пароль</label>
        <input type="text" v-model="loginData.password">
      </div>

      <div class="form-buttons">
        <button class="form-buttons__submit" type="submit">Войти</button>
        <button class="form-buttons__switch" @click="switchForms">Нет аккаунта? <span class="advice">Зарегистрироваться</span></button>
      </div>
    </form>

    <form @submit.prevent="register" v-if="!isLoginMode">
      <h2>Регистрация</h2>
      <div class="form-inputs-wrapper">
        <label for="">Номер телефона</label>
        <input type="text" v-model="registrationData.tel">
        <label for="">Пароль</label>
        <input type="text" v-model="registrationData.password">
        <label for="">Подтвердите пароль</label>
        <input type="text" v-model="registrationData.repeatPassword">
      </div>

      <div class="form-buttons">
        <button class="form-buttons__submit" type="submit">Зарегистрироваться</button>
        <button class="form-buttons__switch" @click="switchForms">Есть аккаунт? <span class="advice">Войти</span></button>
      </div>
    </form>
  </div>
</template>

<style scoped>
form {
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 20px 0 20px 0;

  h2 {
    text-transform: uppercase;
    font-weight: 600;
  }
}

.form-inputs-wrapper {
  display: flex;
  flex-direction: column;
  width: 100%;
  margin: 20px 0 20px 0;
}

.form-buttons {
  width: 100%;
  display: flex;
  flex-direction: column;
  margin: 10px 0 10px 0;
}

.form-buttons__submit {
  align-self: center;
  background: transparent;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 18px;
  padding: 3px 8px 3px 8px;
  width: fit-content;
}

.form-buttons__switch {
  background: transparent;
  align-self: center;
  border: none;
  font-size: 14px;
  min-width: 280px;
  width: 50%;
  margin-top: 10px;
}

.advice {
  font-weight: 600;
  color: #2046cc;
}

</style>