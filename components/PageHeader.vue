<script setup lang="ts">

</script>

<template>
<header>
  <div class="container container--footer container--mobile">
    <h1>PS-PARSER-V2</h1>
    <button>
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

.container--footer{
  position: relative;
}

h1 {
  text-align: center;
}

button {
  position: absolute;
  top: 50%;
  right: 0;
  transform: translateY(-50%);
  background: transparent;
  border: none;
  padding: 0;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>