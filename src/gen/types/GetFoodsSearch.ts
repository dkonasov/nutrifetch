import type { SearchResult } from './SearchResult.ts'

export const getFoodsSearchQueryParamsDataTypeEnum = {
  Branded: 'Branded',
  Foundation: 'Foundation',
  'Survey (FNDDS)': 'Survey (FNDDS)',
  'SR Legacy': 'SR Legacy',
} as const

export type GetFoodsSearchQueryParamsDataTypeEnum = (typeof getFoodsSearchQueryParamsDataTypeEnum)[keyof typeof getFoodsSearchQueryParamsDataTypeEnum]

export const getFoodsSearchQueryParamsSortByEnum = {
  'dataType.keyword': 'dataType.keyword',
  'lowercaseDescription.keyword': 'lowercaseDescription.keyword',
  fdcId: 'fdcId',
  publishedDate: 'publishedDate',
} as const

export type GetFoodsSearchQueryParamsSortByEnum = (typeof getFoodsSearchQueryParamsSortByEnum)[keyof typeof getFoodsSearchQueryParamsSortByEnum]

export const getFoodsSearchQueryParamsSortOrderEnum = {
  asc: 'asc',
  desc: 'desc',
} as const

export type GetFoodsSearchQueryParamsSortOrderEnum = (typeof getFoodsSearchQueryParamsSortOrderEnum)[keyof typeof getFoodsSearchQueryParamsSortOrderEnum]

export type GetFoodsSearchQueryParams = {
  /**
   * @description One or more search terms.  The string may include [search operators](https://fdc.nal.usda.gov/help.html#bkmk-2)
   * @type string
   */
  query: string
  /**
   * @description Optional. Filter on a specific data type; specify one or more values in an array.
   * @type array | undefined
   */
  dataType?: GetFoodsSearchQueryParamsDataTypeEnum[]
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
  sortBy?: GetFoodsSearchQueryParamsSortByEnum
  /**
   * @description Optional. The sort direction for the results. Only applicable if sortBy is specified.
   * @type string | undefined
   */
  sortOrder?: GetFoodsSearchQueryParamsSortOrderEnum
  /**
   * @description Optional. Filter results based on the brand owner of the food. Only applies to Branded Foods
   * @type string | undefined
   */
  brandOwner?: string
}

/**
 * @description List of foods that matched search terms
 */
export type GetFoodsSearch200 = SearchResult[]

/**
 * @description bad input parameter
 */
export type GetFoodsSearch400 = any

export type GetFoodsSearchQueryResponse = GetFoodsSearch200

export type GetFoodsSearchQuery = {
  Response: GetFoodsSearch200
  QueryParams: GetFoodsSearchQueryParams
  Errors: GetFoodsSearch400
}