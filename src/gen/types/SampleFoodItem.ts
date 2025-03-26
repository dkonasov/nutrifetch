import type { FoodCategory } from './FoodCategory.ts'

export type SampleFoodItem = {
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
  foodClass?: string
  /**
   * @type string | undefined
   */
  publicationDate?: string
  /**
   * @type array | undefined
   */
  foodAttributes?: FoodCategory[]
}