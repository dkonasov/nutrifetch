import type { SortingState } from '@/types/sorting-state'
import { SqlJsStorage } from '../storages/sqljs'

export interface GetFoodsParams {
  limit: number
  sort: SortingState
  ids?: number[]
}

export async function getFoods(params: GetFoodsParams) {
  const { limit, sort, ids } = params
  const storage = new SqlJsStorage({})

  return storage.list({ limit, sort, ids })
}
