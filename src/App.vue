<script setup>
import AppHeader  from './components/AppHeader.vue';
</script>

<template>
  <div id="app">
        <AppHeader />
        <router-view></router-view>
        <div class="info_text_wrapper">
          <RouterView name="history" />
          <RouterView name="location" />

        </div>
  </div>
</template>
<style scoped>
  .info_text_wrapper{
    display: flex;
    align-items: center;
    flex-direction: column;
  }
  @media (min-width: 900px){
    .info_text_wrapper{
      flex-direction: row;
    }
  }
</style>