import type { FoodAttribute } from './FoodAttribute.ts'
import type { FoodPortion } from './FoodPortion.ts'
import type { InputFoodSurvey } from './InputFoodSurvey.ts'
import type { WweiaFoodCategory } from './WweiaFoodCategory.ts'

export type SurveyFoodItem = {
  /**
   * @type integer
   */
  fdcId: number
  /**
   * @type string | undefined
   */
  datatype?: string
  /**
   * @type string
   */
  description: string
  /**
   * @type string | undefined
   */
  endDate?: string
  /**
   * @type string | undefined
   */
  foodClass?: string
  /**
   * @type string | undefined
   */
  foodCode?: string
  /**
   * @type string | undefined
   */
  publicationDate?: string
  /**
   * @type string | undefined
   */
  startDate?: string
  /**
   * @type array | undefined
   */
  foodAttributes?: FoodAttribute[]
  /**
   * @type array | undefined
   */
  foodPortions?: FoodPortion[]
  /**
   * @type array | undefined
   */
  inputFoods?: InputFoodSurvey[]
  wweiaFoodCategory?: WweiaFoodCategory
}