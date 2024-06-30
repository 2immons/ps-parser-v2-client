<script setup lang="ts">
import { ref } from 'vue';

const isBurgerMenuVisible = ref(false)
const isBurgerMenuBackgroundVisible = ref(false)

const toggleBurgerMenu = () => {
  if (!isBurgerMenuBackgroundVisible.value) {
    isBurgerMenuBackgroundVisible.value = true;
    isBurgerMenuVisible.value = true;
    return
  }
  closeBurgerMenu();
}

const closeBurgerMenu = () => {
  isBurgerMenuVisible.value = false;
}

const closeBurgerMenuBackground = () => {
  isBurgerMenuBackgroundVisible.value = false
}

</script>

<template>
<header>
  <div class="bg-account-menu" v-show="isBurgerMenuBackgroundVisible" @click="closeBurgerMenu">
    <Transition name="menu" @click.stop @after-leave="closeBurgerMenuBackground">
      <div class="account-menu" v-show="isBurgerMenuVisible">
        <div class="container container--mobile">
          <div>Профиль пользователя</div>
          <div>Настройки</div>
        </div>
      </div>
    </Transition>
  </div>
  <div class="container container--footer container--mobile">
    <nuxt-link to="/processes">
      <h1>PS-PARSER-V2</h1>
    </nuxt-link>
    <nuxt-link to="/user-profile">
      <button class="ui-btn ui-btn--account">
        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M20.3995 21.6L20.3998 18.0003C20.4 16.012 18.7881 14.4 16.7998 14.4H7.2005C5.21244 14.4 3.60073 16.0116 3.6005 17.9996L3.6001 21.6M15.6001 6.00002C15.6001 7.98825 13.9883 9.60002 12.0001 9.60002C10.0119 9.60002 8.4001 7.98825 8.4001 6.00002C8.4001 4.0118 10.0119 2.40002 12.0001 2.40002C13.9883 2.40002 15.6001 4.0118 15.6001 6.00002Z" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
        </svg>
        <span v-if="not-mobile">Привет, Андрей</span>
      </button>
    </nuxt-link>
    <button class="ui-btn ui-btn--burger" @click="toggleBurgerMenu">
      <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.39998 3.60001L21.6 3.60001M2.39998 8.80001L21.6 8.80001M2.39998 14L21.6 14M2.39998 19.2L21.6 19.2" stroke="white" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
    </button>
  </div>
</header>
</template>

<style lang="less" scoped>
header {
  z-index: 2;
  top: 0;
  background: var(--vt-c-myblack);
  border-bottom: 2px solid var(--vt-c-borders);
  height: 60px;
  align-content: center;
  color: var(--vt-c-mytext-on-black);
  width: 100%;
  transition: background 0.3s, border-bottom 0.3s;
}

.bg-account-menu {
  position: absolute;
  width: 100%;
  top: 60px;
  height: 100vh;
  background: transparent;
  z-index: 3;
  color: black;
}

.account-menu {
  width: 100%;
  height: fit-content;
  background: white;
  z-index: 4;
  overflow: hidden;
}

.container--footer{
  position: relative;
}

h1 {
  text-align: center;
}

.ui-btn {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  color: inherit;
  font-size: 14px;
}

.ui-btn--burger {
  right: 0;
}

.ui-btn--account {
  justify-content: space-between;
  width: 130px;
  left: 0;
}

.menu-enter-active, .menu-leave-active {
  transition: max-height 0.3s ease-out;
}

.menu-enter-from, .menu-leave-to {
  max-height: 0;
}

.menu-enter-to, .menu-leave-from {
  max-height: 200px;
}
</style>