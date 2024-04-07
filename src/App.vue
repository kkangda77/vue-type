<template>
  <div class="app">
    <div style="display: flex; justify-content: space-around">
      <h2 @click="showList(0)">TodoList</h2>
      <h2 @click="showList(1)">JobList</h2>
    </div>
    <TodoList v-if="tabs === 0" :todos="todos" />
    <JobList v-if="tabs === 1" :jobs="job" />
  </div>
</template>

<script lang="ts">
import { defineComponent, Ref, ref } from 'vue';
import { job } from './libs/data';
import { Todo } from './types/Todo';
import { fetchTodos } from './libs/api';
import TodoList from './components/TodoList.vue';
import JobList from './components/JobList.vue';

export default defineComponent({
  name: 'App',
  components: { TodoList, JobList },
  setup() {
    const todos: Ref<Todo<string>[]> = ref([]);
    const tabs = ref<number>(0);

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
    };
  },
});
</script>
