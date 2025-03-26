import type { AbridgedFoodItem } from './AbridgedFoodItem.ts'
import type { BrandedFoodItem } from './BrandedFoodItem.ts'
import type { FoodsCriteria } from './FoodsCriteria.ts'
import type { FoundationFoodItem } from './FoundationFoodItem.ts'
import type { SRLegacyFoodItem } from './SRLegacyFoodItem.ts'
import type { SurveyFoodItem } from './SurveyFoodItem.ts'

/**
 * @description List of Food details matching specified FDC ID\'s. Invalid FDC ID\'s or ones that are not found are omitted.
 */
export type PostFoods200 = (AbridgedFoodItem | BrandedFoodItem | FoundationFoodItem | SRLegacyFoodItem | SurveyFoodItem)[]

/**
 * @description bad input parameter
 */
export type PostFoods400 = any

export type PostFoodsMutationRequest = FoodsCriteria

export type PostFoodsMutationResponse = PostFoods200

export type PostFoodsMutation = {
  Response: PostFoods200
  Request: PostFoodsMutationRequest
  Errors: PostFoods400
}