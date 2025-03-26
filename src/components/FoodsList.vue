<script setup lang="ts">
import type { TableColumn } from '../types/table-column'
import { useFoodList, type UseFoodListParams } from '../composables/use-food-list'
import DataTable from './DataTable.vue'
import type { SortingState } from '../types/sorting-state'

const defaultFetchParams = { limit: 20, sort: [] }
const { data: foods, refetch: refetchFoods } = useFoodList(defaultFetchParams)
const columns: TableColumn[] = [
  { id: 'name', title: 'Name' },
  { id: 'calories', title: 'Calories', sortable: true },
  { id: 'fats', title: 'Fat', sortable: true },
  { id: 'carbs', title: 'Carbs', sortable: true },
  { id: 'protein', title: 'Protein', sortable: true },
]

function onSortChanged(sortingState: SortingState) {
  const params: UseFoodListParams = { ...defaultFetchParams, sort: sortingState }

  if (sortingState.length > 1 && foods.value) {
    params.ids = foods.value.map((food) => food.id)
  }

  refetchFoods(params)
}
</script>
<template>
  <div v-if="foods">
    <DataTable :items="foods" :columns="columns" @sort="onSortChanged" />
  </div>
  <div v-else>Loading...</div>
</template>
