<template>
  <div class="error-page">
    <h1>An error occurred</h1>
    <p>Sorry, something went wrong.</p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'ErrorPage',
  setup() {
    return {};
  },
});
</script>

<style scoped>
.error-page {
  text-align: center;
  padding: 50px;
}
</style>
