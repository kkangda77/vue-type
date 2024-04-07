<template>
  <div class="job-list">
    <h4>Ordered by {{ order }}</h4>
    <transition-group name="list" tag="ul">
      <li v-for="todo in displayItems" :key="todo.id">
        <div class="todo">
          <h2>{{ todo.title }}</h2>
          <h2 :class="todo.completed === 'complete' ? 'blue' : 'red'">
            {{ todo.completed }}
          </h2>
        </div>
      </li>
    </transition-group>
    <div class="pagination">
      <button @click="goToFirstPage" :disabled="curPage === 1">《</button>
      <button @click="prevPage" :disabled="curPage === 1">〈</button>
      <page-button
        v-for="n in visiblePageButtons"
        :key="n"
        :pageNumber="n"
        :curPage="curPage"
        @changePage="changePage"
      />
      <button @click="nextPage" :disabled="curPage === pageNum">〉</button>
      <button @click="goToLastPage" :disabled="curPage === pageNum">》</button>
    </div>
  </div>
</template>

<script lang="ts">
import { computed, defineComponent, PropType, ref } from 'vue';
import { Todo, OrderTerm } from '@/types/Todo';
import PageButton from '../components/ui/pageButton.vue';

export default defineComponent({
  components: {
    PageButton,
  },
  props: {
    items: {
      type: Array as PropType<Todo<string>[]>,
      required: true,
    },
    itemNumPerPage: {
      type: Number as PropType<number>,
      required: true,
    },
    order: {
      type: String as PropType<OrderTerm>,
      required: true,
    },
  },
  setup(props) {
    const curPage = ref<number>(1);
    const pageNum = computed(() =>
      Math.ceil((props.items?.length || 0) / props.itemNumPerPage)
    );

    const visiblePageButtons = computed(() => {
      const PAGE_BUTTON_COUNT = 10; // 화면에 표시할 페이지 버튼 개수
      const halfCount = Math.floor(PAGE_BUTTON_COUNT / 2); // 페이지 버튼 개수의 절반
      let startPage = Math.max(1, curPage.value - halfCount); // 시작 페이지
      const endPage = Math.min(
        startPage + PAGE_BUTTON_COUNT - 1,
        pageNum.value
      ); // 끝 페이지

      // 시작 페이지를 조정하여 페이지 버튼 개수가 부족할 경우 보완
      if (endPage - startPage + 1 < PAGE_BUTTON_COUNT) {
        startPage = Math.max(1, endPage - PAGE_BUTTON_COUNT + 1);
      }

      return Array.from(
        { length: endPage - startPage + 1 },
        (_, index) => startPage + index
      );
    });

    const changePage = (value: number) => {
      curPage.value = value;
    };

    const prevPage = () => {
      if (curPage.value > 1) {
        curPage.value--;
      }
    };

    const goToFirstPage = () => {
      curPage.value = 1;
    };

    const goToLastPage = () => {
      curPage.value = pageNum.value;
    };

    const nextPage = () => {
      if (curPage.value < pageNum.value) {
        curPage.value++;
      }
    };

    const displayItems = computed(() => {
      const startIdx = (curPage.value - 1) * props.itemNumPerPage;
      const endIdx = startIdx + props.itemNumPerPage;
      return props.items.slice(startIdx, endIdx);
    });

    return {
      curPage,
      pageNum,
      changePage,
      prevPage,
      nextPage,
      displayItems,
      visiblePageButtons,
      goToFirstPage,
      goToLastPage,
    };
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
.blue {
  color: rebeccapurple;
}
.red {
  color: chocolate;
}
.pagination {
  display: flex;
  justify-content: center;
  align-items: center;
}
.todo {
  display: flex;
  justify-content: space-between;
}
.pagination button {
  margin: 0 5px;
}
.list-move {
  transition: all 1s;
}
</style>
