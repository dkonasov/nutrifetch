import type { FoodNutrient } from './FoodNutrient.ts'
import type { FoodUpdateLog } from './FoodUpdateLog.ts'

export type BrandedFoodItem = {
  /**
   * @type integer
   */
  fdcId: number
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
   * @type array | undefined
   */
  foodNutrients?: FoodNutrient[]
  /**
   * @type array | undefined
   */
  foodUpdateLog?: FoodUpdateLog[]
  /**
   * @type object | undefined
   */
  labelNutrients?: {
    /**
     * @type object | undefined
     */
    fat?: {
      /**
       * @type number | undefined, float
       */
      value?: number
    }
    /**
     * @type object | undefined
     */
    saturatedFat?: {
      /**
       * @type number | undefined, float
       */
      value?: number
    }
    /**
     * @type object | undefined
     */
    transFat?: {
      /**
       * @type number | undefined, float
       */
      value?: number
    }
    /**
     * @type object | undefined
     */
    cholesterol?: {
      /**
       * @type number | undefined, float
       */
      value?: number
    }
    /**
     * @type object | undefined
     */
    sodium?: {
      /**
       * @type number | undefined, float
       */
      value?: number
    }
    /**
     * @type object | undefined
     */
    carbohydrates?: {
      /**
       * @type number | undefined, float
       */
      value?: number
    }
    /**
     * @type object | undefined
     */
    fiber?: {
      /**
       * @type number | undefined, float
       */
      value?: number
    }
    /**
     * @type object | undefined
     */
    sugars?: {
      /**
       * @type number | undefined, float
       */
      value?: number
    }
    /**
     * @type object | undefined
     */
    protein?: {
      /**
       * @type number | undefined, float
       */
      value?: number
    }
    /**
     * @type object | undefined
     */
    calcium?: {
      /**
       * @type number | undefined, float
       */
      value?: number
    }
    /**
     * @type object | undefined
     */
    iron?: {
      /**
       * @type number | undefined, float
       */
      value?: number
    }
    /**
     * @type object | undefined
     */
    postassium?: {
      /**
       * @type number | undefined, float
       */
      value?: number
    }
    /**
     * @type object | undefined
     */
    calories?: {
      /**
       * @type number | undefined, float
       */
      value?: number
    }
  }
}