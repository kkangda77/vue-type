<template>
  <nav class="navbar">
    <img src="../assets/heart.svg" alt="rupee icon" />
    <h1 @click="toggleDropdown">MENU</h1>
    <div class="dropdown-menu">
      <h4 :class="listNumber === 0 ? 'red' : 'blue'" @click="goList(0)">
        TodoList
      </h4>
      <h4 :class="listNumber === 1 ? 'red' : 'blue'" @click="goList(1)">
        JobList
      </h4>
    </div>
  </nav>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue';
export default defineComponent({
  emits: ['showList'],
  setup(_, { emit }) {
    const listNumber = ref<number>(0);
    const goList = (pageNumber: number) => {
      listNumber.value = pageNumber;
      emit('showList', pageNumber);
    };
    return {
      goList,
      listNumber,
    };
  },
});
</script>

<style scoped>
.navbar {
  background-color: #1195c9;
  color: white;
  display: flex;
  align-items: center;
}

.navbar img {
  width: 60px;
  margin-right: 20px;
}

.dropdown-menu {
  list-style-type: none;
  margin-left: 10px;
  padding: 0 10px;
  display: flex;
}

.dropdown-menu h4 {
  padding: 0 10px;
  cursor: pointer;
}

.dropdown-menu button a:hover {
  color: #fff;
  text-decoration: underline;
}

.red {
  color: chocolate;
}

.blue {
  color: #d5f0ff;
}
</style>
