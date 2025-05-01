<script setup lang="ts">
import FoodsFilter from './FoodsFilter.vue'
import ColumnsSelector from './ColumnsSelector.vue'
</script>

<template>
  <div class="toolbar">
    <FoodsFilter />
    <ColumnsSelector />
  </div>
</template>
<style scoped>
.toolbar {
  display: flex;
  gap: 1em;
}
</style>
