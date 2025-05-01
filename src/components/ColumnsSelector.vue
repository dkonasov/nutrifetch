<script lang="ts" setup>
import { useFoodsStore } from '../store'
import CustomSelect from './CustomSelect.vue'

const foodsStore = useFoodsStore()
</script>

<template>
  <CustomSelect
    label="Columns"
    :options="[
      { label: 'Calories', value: 'calories' },
      { label: 'Fats', value: 'fats' },
      { label: 'Carbs', value: 'carbs' },
      { label: 'Protein', value: 'protein' },
      { label: 'Sugars', value: 'sugars' },
      { label: 'Potassium', value: 'potassium' },
    ]"
    :value="foodsStore.selectedColumns"
    @on-element-selected="foodsStore.toggleColumn($event)"
  />
</template>
