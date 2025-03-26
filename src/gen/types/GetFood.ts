import type { AbridgedFoodItem } from './AbridgedFoodItem.ts'
import type { BrandedFoodItem } from './BrandedFoodItem.ts'
import type { FoundationFoodItem } from './FoundationFoodItem.ts'
import type { SRLegacyFoodItem } from './SRLegacyFoodItem.ts'
import type { SurveyFoodItem } from './SurveyFoodItem.ts'

export type GetFoodPathParams = {
  /**
   * @description FDC id of the food to retrieve
   * @type string
   */
  fdcId: string
}

export const getFoodQueryParamsFormatEnum = {
  abridged: 'abridged',
  full: 'full',
} as const

export type GetFoodQueryParamsFormatEnum = (typeof getFoodQueryParamsFormatEnum)[keyof typeof getFoodQueryParamsFormatEnum]

export type GetFoodQueryParams = {
  /**
   * @description Optional. \'abridged\' for an abridged set of elements, \'full\' for all elements (default).
   * @type string | undefined
   */
  format?: GetFoodQueryParamsFormatEnum
  /**
   * @description Optional. List of up to 25 nutrient numbers. Only the nutrient information for the specified nutrients will be returned. Should be comma separated list (e.g. nutrients=203,204) or repeating parameters (e.g. nutrients=203&nutrients=204). If a food does not have any matching nutrients, the food will be returned with an empty foodNutrients element.
   * @type array | undefined
   */
  nutrients?: number[]
}

/**
 * @description One food result.
 */
export type GetFood200 = AbridgedFoodItem | BrandedFoodItem | FoundationFoodItem | SRLegacyFoodItem | SurveyFoodItem

/**
 * @description bad input parameter
 */
export type GetFood400 = any

/**
 * @description no results found
 */
export type GetFood404 = any

export type GetFoodQueryResponse = GetFood200

export type GetFoodQuery = {
  Response: GetFood200
  PathParams: GetFoodPathParams
  QueryParams: GetFoodQueryParams
  Errors: GetFood400 | GetFood404
}