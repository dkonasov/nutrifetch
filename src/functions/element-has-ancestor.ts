export function elementHasAncestor(candidate: HTMLElement, ancestor: HTMLElement): boolean {
  let currentElement: HTMLElement | null = candidate

  while (currentElement) {
    if (currentElement === ancestor) {
      return true
    }
    currentElement = currentElement.parentElement
  }

  return false
}
