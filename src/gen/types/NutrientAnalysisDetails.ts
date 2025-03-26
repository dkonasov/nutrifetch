import type { NutrientAcquisitionDetails } from './NutrientAcquisitionDetails.ts'

export type NutrientAnalysisDetails = {
  /**
   * @type integer | undefined
   */
  subSampleId?: number
  /**
   * @type number | undefined, float
   */
  amount?: number
  /**
   * @type integer | undefined
   */
  nutrientId?: number
  /**
   * @type string | undefined
   */
  labMethodDescription?: string
  /**
   * @type string | undefined
   */
  labMethodOriginalDescription?: string
  /**
   * @type string | undefined, url
   */
  labMethodLink?: string
  /**
   * @type string | undefined
   */
  labMethodTechnique?: string
  /**
   * @type array | undefined
   */
  nutrientAcquisitionDetails?: NutrientAcquisitionDetails[]
}