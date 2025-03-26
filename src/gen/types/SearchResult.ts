import type { FoodSearchCriteria } from './FoodSearchCriteria.ts'
import type { SearchResultFood } from './SearchResultFood.ts'

export type SearchResult = {
  /**
   * @description A copy of the criteria that were used in the search.
   * @type object | undefined
   */
  foodSearchCriteria?: FoodSearchCriteria[]
  /**
   * @description The total number of foods found matching the search criteria.
   * @type integer | undefined
   */
  totalHits?: number
  /**
   * @description The current page of results being returned.
   * @type integer | undefined
   */
  currentPage?: number
  /**
   * @description The total number of pages found matching the search criteria.
   * @type integer | undefined
   */
  totalPages?: number
  /**
   * @description The list of foods found matching the search criteria. See Food Fields below.
   * @type array | undefined
   */
  foods?: SearchResultFood[]
}