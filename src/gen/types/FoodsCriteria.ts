export const foodsCriteriaFormatEnum = {
  abridged: 'abridged',
  full: 'full',
} as const

export type FoodsCriteriaFormatEnum = (typeof foodsCriteriaFormatEnum)[keyof typeof foodsCriteriaFormatEnum]

/**
 * @description JSON for request body of \'foods\' POST request. Retrieves a list of food items by a list of up to 20 FDC IDs. Optional format and nutrients can be specified. Invalid FDC ID\'s or ones that are not found are omitted and an empty set is returned if there are no matches.
 */
export type FoodsCriteria = {
  /**
   * @description List of multiple FDC ID\'s
   * @type array | undefined
   */
  fdcIds?: number[]
  /**
   * @description Optional. \'abridged\' for an abridged set of elements, \'full\' for all elements (default).
   * @type string | undefined
   */
  format?: FoodsCriteriaFormatEnum
  /**
   * @description Optional. List of up to 25 nutrient numbers. Only the nutrient information for the specified nutrients will be returned.  If a food does not have any matching nutrients, the food will be returned with an empty foodNutrients element.
   * @type array | undefined
   */
  nutrients?: number[]
}