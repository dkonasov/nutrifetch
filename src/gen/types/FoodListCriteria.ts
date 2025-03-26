export const foodListCriteriaDataTypeEnum = {
  Branded: 'Branded',
  Foundation: 'Foundation',
  'Survey (FNDDS)': 'Survey (FNDDS)',
  'SR Legacy': 'SR Legacy',
} as const

export type FoodListCriteriaDataTypeEnum = (typeof foodListCriteriaDataTypeEnum)[keyof typeof foodListCriteriaDataTypeEnum]

export const foodListCriteriaSortByEnum = {
  'dataType.keyword': 'dataType.keyword',
  'lowercaseDescription.keyword': 'lowercaseDescription.keyword',
  fdcId: 'fdcId',
  publishedDate: 'publishedDate',
} as const

export type FoodListCriteriaSortByEnum = (typeof foodListCriteriaSortByEnum)[keyof typeof foodListCriteriaSortByEnum]

export const foodListCriteriaSortOrderEnum = {
  asc: 'asc',
  desc: 'desc',
} as const

export type FoodListCriteriaSortOrderEnum = (typeof foodListCriteriaSortOrderEnum)[keyof typeof foodListCriteriaSortOrderEnum]

/**
 * @description JSON for request body of \'list\' POST request
 */
export type FoodListCriteria = {
  /**
   * @description Optional. Filter on a specific data type; specify one or more values in an array.
   * @type array | undefined
   */
  dataType?: FoodListCriteriaDataTypeEnum[]
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
  sortBy?: FoodListCriteriaSortByEnum
  /**
   * @description Optional. The sort direction for the results. Only applicable if sortBy is specified.
   * @type string | undefined
   */
  sortOrder?: FoodListCriteriaSortOrderEnum
}