<script setup lang="ts">
import type { TableColumn } from '../types/table-column'
import DataTable from './DataTable.vue'
import type { SortingState } from '../types/sorting-state'
import FoodsToolbar from './FoodsToolbar.vue'
import { useFoodsStore } from '../store'
import { computed } from 'vue'

const foodsStore = useFoodsStore()

const baseColumns: TableColumn[] = [
  { id: 'name', title: 'Name' },
  { id: 'calories', title: 'Calories', sortable: true },
  { id: 'fats', title: 'Fat', sortable: true },
  { id: 'carbs', title: 'Carbs', sortable: true },
  { id: 'protein', title: 'Protein', sortable: true },
  { id: 'sugars', title: 'Sugars', sortable: true },
  { id: 'potassium', title: 'Potassium', sortable: true },
]

const columns = computed(() => {
  return baseColumns
    .slice(0, 1)
    .concat(baseColumns.filter((column) => foodsStore.selectedColumns.includes(column.id)))
})

function onSortChanged(sortingState: SortingState) {
  foodsStore.setSort(sortingState.slice())
}
</script>
<template>
  <div v-if="!foodsStore.loading || foodsStore.foods.length > 0" class="foodsList">
    <FoodsToolbar />
    <DataTable :items="foodsStore.foods" :columns="columns" @sort="onSortChanged" />
  </div>
  <div v-else>Loading...</div>
</template>
<style scoped>
.foodsList {
  display: flex;
  flex-direction: column;
  gap: 1em;
}
</style>
