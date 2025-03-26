import type { FoodEntry } from '../types/food-entry'
import { getFoods } from '../functions/get-foods'
import { ref } from 'vue'
import type { SortingState } from '@/types/sorting-state'

export interface UseFoodListParams {
  limit: number
  sort: SortingState
  ids?: number[]
}

export function useFoodList(params: UseFoodListParams) {
  const data = ref<FoodEntry[] | null>(null)

  const refetch = (params: UseFoodListParams) => {
    const { limit, sort, ids } = params
    getFoods({ limit, sort, ids }).then((foods) => {
      data.value = foods
    })
  }

  refetch(params)

  return { data, refetch }
}
