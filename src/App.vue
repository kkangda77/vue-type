<template>
  <div class="app">
    <navigationBar @showList="showList" />
    <header v-if="tabs === 0">
      <div class="title">
        <h1>Todos</h1>
      </div>
      <div class="order">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('completed')">Order by completed</button>
      </div>
    </header>
    <header v-if="tabs === 1">
      <div class="title">
        <h1>Jobs</h1>
      </div>
      <div class="order">
        <button @click="handleClick('title')">Order by title</button>
        <button @click="handleClick('salary')">Order by salary</button>
        <button @click="handleClick('location')">Order by location</button>
      </div>
    </header>
    <TodoList v-if="tabs === 0" :todos="todos" :order="order" />
    <JobList v-if="tabs === 1" :jobs="job" :order="order" />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { job } from './libs/data';
import { OrderTerm } from './types/Job';
import { Todo } from './types/Todo';
import { fetchTodos } from './libs/api';
import TodoList from './page/TodoList.vue';
import JobList from './page/JobList.vue';
import navigationBar from './components/navigationBar.vue';

export default defineComponent({
  name: 'App',
  components: { TodoList, JobList, navigationBar },
  setup() {
    const todos: Ref<Todo<string>[]> = ref([]);
    const tabs = ref<number>(0);
    const order = ref<OrderTerm>('title');

    const handleClick = (term: OrderTerm) => {
      order.value = term;
    };

    const showList = (tab: number) => {
      tabs.value = tab;
    };

    fetchTodos().then((res) => {
      todos.value = res;
      todos.value.map((i) => {
        if (i.completed) {
          i.completed = 'complete';
        } else {
          i.completed = 'incomplete';
        }
      });
    });

    return {
      todos,
      showList,
      tabs,
      job,
      handleClick,
      order,
    };
  },
});
</script>
<style>
header {
  text-align: center;
}
header .order {
  margin-top: 20px;
}
header .title {
  display: flex;
  justify-content: center;
}

header h1 {
  font-size: 3em;
}
button {
  margin: 0 10px;
  color: #1195c9;
  border: 3px solid #1195c9;
  background: #d5f0ff;
  padding: 8px 16px;
  border-radius: 4px;
  cursor: pointer;
  font-weight: bold;
}
button:hover {
  background-color: rebeccapurple;
  color: #fff;
}
.navbar {
  background-color: #333;
  color: white;
}
</style>
