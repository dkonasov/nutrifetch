import type { SampleFoodItem } from './SampleFoodItem.ts'

/**
 * @description applies to Foundation foods. Not all inputFoods will have all fields.
 */
export type InputFoodFoundation = {
  /**
   * @type integer | undefined
   */
  id?: number
  /**
   * @type string | undefined
   */
  foodDescription?: string
  inputFood?: SampleFoodItem
}