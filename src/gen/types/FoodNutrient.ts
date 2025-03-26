import type { FoodNutrientDerivation } from './FoodNutrientDerivation.ts'
import type { Nutrient } from './Nutrient.ts'
import type { NutrientAnalysisDetails } from './NutrientAnalysisDetails.ts'

export type FoodNutrient = {
  /**
   * @type integer, uint
   */
  id: number
  /**
   * @type number | undefined, float
   */
  amount?: number
  /**
   * @type integer | undefined, int32
   */
  dataPoints?: number
  /**
   * @type number | undefined, float
   */
  min?: number
  /**
   * @type number | undefined, float
   */
  max?: number
  /**
   * @type number | undefined, float
   */
  median?: number
  /**
   * @type string | undefined
   */
  type?: string
  nutrient?: Nutrient
  foodNutrientDerivation?: FoodNutrientDerivation
  nutrientAnalysisDetails?: NutrientAnalysisDetails
}