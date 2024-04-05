<template>
  <div>
    <input type="text" v-model="message" />
    <button @click="showAlert(event)">show</button>
    <div>{{ message }}</div>
    <div v-for="item in data" :key="item.id">
      <div>{{ item }}</div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';

interface Todo {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
}

export default defineComponent({
  name: 'App',
  components: {},
  setup() {
    const message = ref('');
    const showAlert = (event: string) => {
      message.value = event;
    };
    const apiUrl = 'https://jsonplaceholder.typicode.com/todos';
    const data: Ref<Todo[]> = ref([]);

    const fetchTodos = async () => {
      const response = await fetch(apiUrl);
      const res = await response.json();
      return res;
    };
    fetchTodos()
      .then((todos) => (data.value = todos))
      .catch((err) => console.log(err));

    return {
      message,
      showAlert,
      data,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
