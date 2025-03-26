import type { FoodCategory } from './FoodCategory.ts'
import type { FoodNutrient } from './FoodNutrient.ts'
import type { NutrientConversionFactors } from './NutrientConversionFactors.ts'

export type SRLegacyFoodItem = {
  /**
   * @type integer
   */
  fdcId: number
  /**
   * @type string
   */
  dataType: string
  /**
   * @type string
   */
  description: string
  /**
   * @type string | undefined
   */
  foodClass?: string
  /**
   * @type boolean | undefined
   */
  isHistoricalReference?: boolean
  /**
   * @type string | undefined
   */
  ndbNumber?: string
  /**
   * @type string | undefined
   */
  publicationDate?: string
  /**
   * @type string | undefined
   */
  scientificName?: string
  foodCategory?: FoodCategory
  /**
   * @type array | undefined
   */
  foodNutrients?: FoodNutrient[]
  /**
   * @type array | undefined
   */
  nutrientConversionFactors?: NutrientConversionFactors[]
}