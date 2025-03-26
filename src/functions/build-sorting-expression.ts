import type { SortingState } from '../types/sorting-state'

export function buildSortingExpression(sortingState: SortingState) {
  if (sortingState.length === 0) {
    return ''
  }

  return `ORDER BY ${sortingState[sortingState.length - 1][0]} ${sortingState[sortingState.length - 1][1]}`
}
