import type { FoodNutrientSource } from './FoodNutrientSource.ts'

export type FoodNutrientDerivation = {
  /**
   * @type integer | undefined, int32
   */
  id?: number
  /**
   * @type string | undefined
   */
  code?: string
  /**
   * @type string | undefined
   */
  description?: string
  foodNutrientSource?: FoodNutrientSource
}