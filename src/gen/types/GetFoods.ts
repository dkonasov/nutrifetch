import type { AbridgedFoodItem } from './AbridgedFoodItem.ts'
import type { BrandedFoodItem } from './BrandedFoodItem.ts'
import type { FoundationFoodItem } from './FoundationFoodItem.ts'
import type { SRLegacyFoodItem } from './SRLegacyFoodItem.ts'
import type { SurveyFoodItem } from './SurveyFoodItem.ts'

export const getFoodsQueryParamsFormatEnum = {
  abridged: 'abridged',
  full: 'full',
} as const

export type GetFoodsQueryParamsFormatEnum = (typeof getFoodsQueryParamsFormatEnum)[keyof typeof getFoodsQueryParamsFormatEnum]

export type GetFoodsQueryParams = {
  /**
   * @description List of multiple FDC ID\'s. Should be comma separated list (e.g. fdcIds=534358,373052) or repeating parameters (e.g. fdcIds=534358&fdcIds=373052).
   * @type array
   */
  fdcIds: string[]
  /**
   * @description Optional. \'abridged\' for an abridged set of elements, \'full\' for all elements (default).
   * @type string | undefined
   */
  format?: GetFoodsQueryParamsFormatEnum
  /**
   * @description Optional. List of up to 25 nutrient numbers. Only the nutrient information for the specified nutrients will be returned. Should be comma separated list (e.g. nutrients=203,204) or repeating parameters (e.g. nutrients=203&nutrients=204). If a food does not have any matching nutrients, the food will be returned with an empty foodNutrients element.
   * @type array | undefined
   */
  nutrients?: number[]
}

/**
 * @description List of Food details matching specified FDC ID\'s. Invalid FDC ID\'s or ones that are not found are omitted.
 */
export type GetFoods200 = (AbridgedFoodItem | BrandedFoodItem | FoundationFoodItem | SRLegacyFoodItem | SurveyFoodItem)[]

/**
 * @description bad input parameter
 */
export type GetFoods400 = any

export type GetFoodsQueryResponse = GetFoods200

export type GetFoodsQuery = {
  Response: GetFoods200
  QueryParams: GetFoodsQueryParams
  Errors: GetFoods400
}