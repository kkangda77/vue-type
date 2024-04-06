<template>
  <div class="job-list">
    <ul>
      <li v-for="todo in todos" :key="todo.id">
        <div class="todo">
          <h2>{{ todo.title }}</h2>
          <h2 :class="todo.completed === 'complete' ? 'blue' : 'red'">
            {{ todo.completed }}
          </h2>
        </div>
      </li>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Todo } from '../types/Todo';

export default defineComponent({
  props: {
    todos: {
      type: Array as PropType<Todo[]>,
    },
  },
  setup() {
    return {};
  },
});
</script>

<style scoped>
.job-list {
  max-width: 960px;
  margin: 40px auto;
}
.job-list ul {
  padding: 0;
}
.job-list li {
  list-style-type: none;
  background: white;
  padding: 16px;
  margin: 16px 0;
  border-radius: 4px;
}
.job-list h2 {
  margin: 0 0 10px;
  text-transform: capitalize;
}
.salary {
  display: flex;
}
.salary img {
  width: 30px;
}
.salary p {
  color: #17bf66;
  font-weight: bold;
  margin: 10px 4px;
}
.todo {
  display: flex;
  justify-content: space-between;
}
.blue {
  color: blue;
}
.red {
  color: red;
}
</style>
