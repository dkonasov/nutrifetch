export const foodSearchCriteriaDataTypeEnum = {
  Branded: 'Branded',
  Foundation: 'Foundation',
  'Survey (FNDDS)': 'Survey (FNDDS)',
  'SR Legacy': 'SR Legacy',
} as const

export type FoodSearchCriteriaDataTypeEnum = (typeof foodSearchCriteriaDataTypeEnum)[keyof typeof foodSearchCriteriaDataTypeEnum]

export const foodSearchCriteriaSortByEnum = {
  'dataType.keyword': 'dataType.keyword',
  'lowercaseDescription.keyword': 'lowercaseDescription.keyword',
  fdcId: 'fdcId',
  publishedDate: 'publishedDate',
} as const

export type FoodSearchCriteriaSortByEnum = (typeof foodSearchCriteriaSortByEnum)[keyof typeof foodSearchCriteriaSortByEnum]

export const foodSearchCriteriaSortOrderEnum = {
  asc: 'asc',
  desc: 'desc',
} as const

export type FoodSearchCriteriaSortOrderEnum = (typeof foodSearchCriteriaSortOrderEnum)[keyof typeof foodSearchCriteriaSortOrderEnum]

/**
 * @description JSON for request body of \'search\' POST request
 */
export type FoodSearchCriteria = {
  /**
   * @description Search terms to use in the search. The string may also include standard [search operators](https://fdc.nal.usda.gov/help.html#bkmk-2)
   * @type string | undefined
   */
  query?: string
  /**
   * @description Optional. Filter on a specific data type; specify one or more values in an array.
   * @type array | undefined
   */
  dataType?: FoodSearchCriteriaDataTypeEnum[]
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
  sortBy?: FoodSearchCriteriaSortByEnum
  /**
   * @description Optional. The sort direction for the results. Only applicable if sortBy is specified.
   * @type string | undefined
   */
  sortOrder?: FoodSearchCriteriaSortOrderEnum
  /**
   * @description Optional. Filter results based on the brand owner of the food. Only applies to Branded Foods.
   * @type string | undefined
   */
  brandOwner?: string
}