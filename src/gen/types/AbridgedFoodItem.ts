import type { AbridgedFoodNutrient } from './AbridgedFoodNutrient.ts'

export type AbridgedFoodItem = {
  /**
   * @type string
   */
  dataType: string
  /**
   * @type string
   */
  description: string
  /**
   * @type integer
   */
  fdcId: number
  /**
   * @type array | undefined
   */
  foodNutrients?: AbridgedFoodNutrient[]
  /**
   * @type string | undefined
   */
  publicationDate?: string
  /**
   * @description only applies to Branded Foods
   * @type string | undefined
   */
  brandOwner?: string
  /**
   * @description only applies to Branded Foods
   * @type string | undefined
   */
  gtinUpc?: string
  /**
   * @description only applies to Foundation and SRLegacy Foods
   * @type string | undefined
   */
  ndbNumber?: string
  /**
   * @description only applies to Survey Foods
   * @type string | undefined
   */
  foodCode?: string
}