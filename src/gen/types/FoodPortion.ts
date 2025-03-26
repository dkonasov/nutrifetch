import type { MeasureUnit } from './MeasureUnit.ts'

export type FoodPortion = {
  /**
   * @type integer | undefined, int32
   */
  id?: number
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
  gramWeight?: number
  /**
   * @type integer | undefined
   */
  minYearAcquired?: number
  /**
   * @type string | undefined
   */
  modifier?: string
  /**
   * @type string | undefined
   */
  portionDescription?: string
  /**
   * @type integer | undefined
   */
  sequenceNumber?: number
  measureUnit?: MeasureUnit
}