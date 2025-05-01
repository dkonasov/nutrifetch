import type { SortingState } from '../types/sorting-state'
import type { FilterState } from '../types/filter-state'
import { defineStore } from 'pinia'
import { ref } from 'vue'
import type { FoodEntry } from '../types/food-entry'
import { getFoods } from '../functions/get-foods'

const creatorFn = () => {
  const filter = ref<FilterState>({
    foodName: '',
  })

  const sort = ref<SortingState>([])

  const foods = ref<FoodEntry[]>([])

  const selectedColumns = ref(['calories', 'fats', 'carbs', 'protein'])

  const loading = ref(false)

  function setSort(newFilter: SortingState) {
    sort.value = newFilter
  }

  function setFilter(newFilter: FilterState) {
    filter.value = newFilter
  }

  function toggleColumn(column: string) {
    if (selectedColumns.value.includes(column)) {
      selectedColumns.value = selectedColumns.value.filter((col) => col !== column)
    } else {
      selectedColumns.value = [...selectedColumns.value, column]
    }
  }

  async function loadFoods() {
    loading.value = true

    const ids = sort.value.length > 1 ? foods.value.map((food) => food.id) : undefined
    const limit = 20

    foods.value = await getFoods({
      limit,
      sort: sort.value,
      ids,
      foodName: filter.value.foodName,
    })

    loading.value = false
  }

  loadFoods()

  return {
    filter,
    sort,
    setFilter,
    setSort,
    loadFoods,
    loading,
    foods,
    selectedColumns,
    toggleColumn,
  }
}

export type StateTree = ReturnType<typeof creatorFn>

export const useFoodsStore = defineStore('foods', creatorFn)
