let uniqueId = 0

export function getUniqueId(): string {
  return `id-${++uniqueId}`
}
