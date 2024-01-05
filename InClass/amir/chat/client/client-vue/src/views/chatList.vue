<script>
import axios from 'axios';
import { ref } from 'vue';

let chats = ref([]);
axios.get('/api/users')
  .then((res) => {
    console.log({ res });
    chats.value = res.data;
  });
</script>

<template>
    <div class="back">
        <p v-for="i in chats">
        {{ i.id }}
        </p>
    </div>
</template>

<style scoped>
.back {
    display: flex;
    flex-direction: column;
}
</style>