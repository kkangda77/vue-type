<template>
  <div>
    <listPagination :items="orderedTodos" :itemNumPerPage="7" :order="order" />
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import { Todo, OrderTerm } from '../types/Todo';
import listPagination from '../components/listPagination.vue';

export default defineComponent({
  components: { listPagination },
  props: {
    todos: {
      type: Array as PropType<Todo<string>[]>,
      required: true,
    },
    order: {
      type: String as PropType<OrderTerm>,
      required: true,
    },
  },
  setup(props) {
    const orderedTodos = computed(() => {
      return [...props.todos].sort((a: Todo<string>, b: Todo<string>) => {
        return a[props.order] > b[props.order] ? 1 : -1;
      });
    });
    return { orderedTodos };
  },
});
</script>
