import type { StorageListParams } from '@/storages/storage'

export function buildWhereClause(params: StorageListParams) {
  const { foodName, ids } = params

  const expressions: string[] = []

  if (ids?.length) {
    expressions.push(`id IN (${ids.join(',')})`)
  }

  if (foodName) {
    expressions.push(`name LIKE '%${foodName}%'`)
  }

  if (expressions.length < 1) {
    return ''
  }

  return ` WHERE ${expressions.join(' AND ')} `
}
