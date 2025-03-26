import type { AbridgedFoodItem } from './AbridgedFoodItem.ts'
import type { FoodListCriteria } from './FoodListCriteria.ts'

/**
 * @description List of foods for the requested page
 */
export type PostFoodsList200 = AbridgedFoodItem[]

/**
 * @description bad input parameter
 */
export type PostFoodsList400 = any

export type PostFoodsListMutationRequest = FoodListCriteria

export type PostFoodsListMutationResponse = PostFoodsList200

export type PostFoodsListMutation = {
  Response: PostFoodsList200
  Request: PostFoodsListMutationRequest
  Errors: PostFoodsList400
}