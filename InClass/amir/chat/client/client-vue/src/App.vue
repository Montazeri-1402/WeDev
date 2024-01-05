<script setup>
import { RouterLink, RouterView } from 'vue-router'
import chatList from './views/chatList.vue'
</script>

<template>
  <div class="background">
    <chatList />
  </div>
</template>

<style scoped>
.background {
  padding: 0;
  margin: 0;
  display: inline-flex;
  align-items: center;
  justify-content: center;
  height: 90vh;
  width: 120vh;
  border: 2px solid grey;

  border-radius: 20px;
}
</style>
