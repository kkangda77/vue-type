<template>
  <div class="pagenumbers">
    <button @click="btnPressed" :class="{ active: isCurrentPage }">
      {{ pageNumber }}
    </button>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    pageNumber: {
      type: Number as PropType<number>,
      required: true,
    },
    curPage: {
      type: Number as PropType<number>,
      required: true,
    },
  },
  emits: ['changePage'],
  setup(props, { emit }) {
    const btnPressed = () => {
      emit('changePage', props.pageNumber);
    };
    const isCurrentPage = computed(() => {
      return props.pageNumber === props.curPage;
    });
    return {
      btnPressed,
      isCurrentPage,
    };
  },
});
</script>

<style scoped>
.pagenumbers {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
}

.pagenumbers button {
  width: 50px;
  height: 50px;

  appearance: none;
  border: none;
  outline: none;
  cursor: pointer;

  background-color: #fff;

  margin: 5px;
  transition: 0.4s;

  font-size: 18px;
  box-shadow: 0px 0px 4px rgba(0, 0, 0, 0.2);
}

.pagenumbers button:hover {
  background-color: aqua;
  color: #fff;
}

.pagenumbers button.active {
  background-color: aqua;
  box-shadow: inset 0px 0px 4px rgba(0, 0, 0, 0.2);
  color: #fff;
}
</style>
