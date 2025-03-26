import type { FoodAttribute } from './FoodAttribute.ts'

export type FoodUpdateLog = {
  /**
   * @type integer | undefined
   */
  fdcId?: number
  /**
   * @type string | undefined
   */
  availableDate?: string
  /**
   * @type string | undefined
   */
  brandOwner?: string
  /**
   * @type string | undefined
   */
  dataSource?: string
  /**
   * @type string | undefined
   */
  dataType?: string
  /**
   * @type string | undefined
   */
  description?: string
  /**
   * @type string | undefined
   */
  foodClass?: string
  /**
   * @type string | undefined
   */
  gtinUpc?: string
  /**
   * @type string | undefined
   */
  householdServingFullText?: string
  /**
   * @type string | undefined
   */
  ingredients?: string
  /**
   * @type string | undefined
   */
  modifiedDate?: string
  /**
   * @type string | undefined
   */
  publicationDate?: string
  /**
   * @type integer | undefined, float32
   */
  servingSize?: number
  /**
   * @type string | undefined
   */
  servingSizeUnit?: string
  /**
   * @type string | undefined
   */
  brandedFoodCategory?: string
  /**
   * @type string | undefined
   */
  changes?: string
  /**
   * @type array | undefined
   */
  foodAttributes?: FoodAttribute[]
}