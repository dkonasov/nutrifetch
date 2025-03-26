import type { FoodSearchCriteria } from './FoodSearchCriteria.ts'
import type { SearchResult } from './SearchResult.ts'

/**
 * @description List of foods that matched search terms
 */
export type PostFoodsSearch200 = SearchResult[]

/**
 * @description bad input parameter
 */
export type PostFoodsSearch400 = any

/**
 * @description The query string may also include standard [search operators](https://fdc.nal.usda.gov/help.html#bkmk-2)
 */
export type PostFoodsSearchMutationRequest = FoodSearchCriteria

export type PostFoodsSearchMutationResponse = PostFoodsSearch200

export type PostFoodsSearchMutation = {
  Response: PostFoodsSearch200
  Request: PostFoodsSearchMutationRequest
  Errors: PostFoodsSearch400
}