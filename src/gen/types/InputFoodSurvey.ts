import type { RetentionFactor } from './RetentionFactor.ts'
import type { SurveyFoodItem } from './SurveyFoodItem.ts'

/**
 * @description applies to Survey (FNDDS). Not all inputFoods will have all fields.
 */
export type InputFoodSurvey = {
  /**
   * @type integer | undefined
   */
  id?: number
  /**
   * @type number | undefined, float
   */
  amount?: number
  /**
   * @type string | undefined
   */
  foodDescription?: string
  /**
   * @type integer | undefined
   */
  ingredientCode?: number
  /**
   * @type string | undefined
   */
  ingredientDescription?: string
  /**
   * @type number | undefined, float
   */
  ingredientWeight?: number
  /**
   * @type string | undefined
   */
  portionCode?: string
  /**
   * @type string | undefined
   */
  portionDescription?: string
  /**
   * @type integer | undefined
   */
  sequenceNumber?: number
  /**
   * @type integer | undefined
   */
  surveyFlag?: number
  /**
   * @type string | undefined
   */
  unit?: string
  inputFood?: SurveyFoodItem
  retentionFactor?: RetentionFactor
}