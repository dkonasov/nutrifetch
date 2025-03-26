import type { AbridgedFoodNutrient } from './AbridgedFoodNutrient.ts'

export type SearchResultFood = {
  /**
   * @description Unique ID of the food.
   * @type integer
   */
  fdcId: number
  /**
   * @description The type of the food data.
   * @type string | undefined
   */
  dataType?: string
  /**
   * @description The description of the food.
   * @type string
   */
  description: string
  /**
   * @description Any A unique ID identifying the food within FNDDS.
   * @type string | undefined
   */
  foodCode?: string
  /**
   * @type array | undefined
   */
  foodNutrients?: AbridgedFoodNutrient[]
  /**
   * @description Date the item was published to FDC.
   * @type string | undefined
   */
  publicationDate?: string
  /**
   * @description The scientific name of the food.
   * @type string | undefined
   */
  scientificName?: string
  /**
   * @description Brand owner for the food. Only applies to Branded Foods.
   * @type string | undefined
   */
  brandOwner?: string
  /**
   * @description GTIN or UPC code identifying the food. Only applies to Branded Foods.
   * @type string | undefined
   */
  gtinUpc?: string
  /**
   * @description The list of ingredients (as it appears on the product label). Only applies to Branded Foods.
   * @type string | undefined
   */
  ingredients?: string
  /**
   * @description Unique number assigned for foundation foods. Only applies to Foundation and SRLegacy Foods.
   * @type string | undefined
   */
  ndbNumber?: string
  /**
   * @description Any additional descriptions of the food.
   * @type string | undefined
   */
  additionalDescriptions?: string
  /**
   * @description allHighlightFields
   * @type string | undefined
   */
  allHighlightFields?: string
  /**
   * @description Relative score indicating how well the food matches the search criteria.
   * @type number | undefined, float
   */
  score?: number
}