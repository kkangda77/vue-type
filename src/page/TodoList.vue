<template>
  <div>
    <listPagination :items="todos" :itemNumPerPage="5" />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { Todo } from '../types/Todo';
import listPagination from '../components/listPagination.vue';

export default defineComponent({
  components: { listPagination },
  props: {
    todos: {
      type: Array as PropType<Todo<string>[]>,
    },
  },
  setup() {
    return {};
  },
});
</script>
