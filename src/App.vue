<template>
  <div class="app">
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'App',
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
