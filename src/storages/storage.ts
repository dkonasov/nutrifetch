import type { SortingState } from '../types/sorting-state'
import type { FoodEntry } from '../types/food-entry'

export interface StorageListParams {
  limit: number
  sort: SortingState
  ids?: number[]
}

export abstract class Storage<Config> {
  constructor(config: Config) {}

  abstract list(params: StorageListParams): Promise<FoodEntry[]>
}
