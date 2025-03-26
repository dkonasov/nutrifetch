import type { AbridgedFoodItem } from './AbridgedFoodItem.ts'

export const getFoodsListQueryParamsDataTypeEnum = {
  Branded: 'Branded',
  Foundation: 'Foundation',
  'Survey (FNDDS)': 'Survey (FNDDS)',
  'SR Legacy': 'SR Legacy',
} as const

export type GetFoodsListQueryParamsDataTypeEnum = (typeof getFoodsListQueryParamsDataTypeEnum)[keyof typeof getFoodsListQueryParamsDataTypeEnum]

export const getFoodsListQueryParamsSortByEnum = {
  'dataType.keyword': 'dataType.keyword',
  'lowercaseDescription.keyword': 'lowercaseDescription.keyword',
  fdcId: 'fdcId',
  publishedDate: 'publishedDate',
} as const

export type GetFoodsListQueryParamsSortByEnum = (typeof getFoodsListQueryParamsSortByEnum)[keyof typeof getFoodsListQueryParamsSortByEnum]

export const getFoodsListQueryParamsSortOrderEnum = {
  asc: 'asc',
  desc: 'desc',
} as const

export type GetFoodsListQueryParamsSortOrderEnum = (typeof getFoodsListQueryParamsSortOrderEnum)[keyof typeof getFoodsListQueryParamsSortOrderEnum]

export type GetFoodsListQueryParams = {
  /**
   * @description Optional. Filter on a specific data type; specify one or more values in an array.
   * @type array | undefined
   */
  dataType?: GetFoodsListQueryParamsDataTypeEnum[]
  /**
   * @description Optional. Maximum number of results to return for the current page. Default is 50.
   * @minLength 1
   * @maxLength 200
   * @type integer | undefined
   */
  pageSize?: number
  /**
   * @description Optional. Page number to retrieve. The offset into the overall result set is expressed as (pageNumber * pageSize)
   * @type integer | undefined
   */
  pageNumber?: number
  /**
   * @description Optional. Specify one of the possible values to sort by that field. Note, dataType.keyword will be dataType and lowercaseDescription.keyword will be description in future releases.
   * @type string | undefined
   */
  sortBy?: GetFoodsListQueryParamsSortByEnum
  /**
   * @description Optional. The sort direction for the results. Only applicable if sortBy is specified.
   * @type string | undefined
   */
  sortOrder?: GetFoodsListQueryParamsSortOrderEnum
}

/**
 * @description List of foods for the requested page
 */
export type GetFoodsList200 = AbridgedFoodItem[]

/**
 * @description bad input parameter
 */
export type GetFoodsList400 = any

export type GetFoodsListQueryResponse = GetFoodsList200

export type GetFoodsListQuery = {
  Response: GetFoodsList200
  QueryParams: GetFoodsListQueryParams
  Errors: GetFoodsList400
}