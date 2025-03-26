export type FoodAttribute = {
  /**
   * @type integer | undefined
   */
  id?: number
  /**
   * @type integer | undefined
   */
  sequenceNumber?: number
  /**
   * @type string | undefined
   */
  value?: string
  /**
   * @type object | undefined
   */
  FoodAttributeType?: {
    /**
     * @type integer | undefined
     */
    id?: number
    /**
     * @type string | undefined
     */
    name?: string
    /**
     * @type string | undefined
     */
    description?: string
  }
}