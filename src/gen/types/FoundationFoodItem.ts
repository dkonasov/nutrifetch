import type { FoodCategory } from './FoodCategory.ts'
import type { FoodComponent } from './FoodComponent.ts'
import type { FoodNutrient } from './FoodNutrient.ts'
import type { FoodPortion } from './FoodPortion.ts'
import type { InputFoodFoundation } from './InputFoodFoundation.ts'
import type { NutrientConversionFactors } from './NutrientConversionFactors.ts'

export type FoundationFoodItem = {
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
   * @type string | undefined
   */
  footNote?: string
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
  foodComponents?: FoodComponent[]
  /**
   * @type array | undefined
   */
  foodNutrients?: FoodNutrient[]
  /**
   * @type array | undefined
   */
  foodPortions?: FoodPortion[]
  /**
   * @type array | undefined
   */
  inputFoods?: InputFoodFoundation[]
  /**
   * @type array | undefined
   */
  nutrientConversionFactors?: NutrientConversionFactors[]
}