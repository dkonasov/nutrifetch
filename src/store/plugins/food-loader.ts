import type { SortingState } from '@/types/sorting-state'
import type { PiniaPluginContext } from 'pinia'
import type { StateTree } from '../foods'

export function foodLoaderPlugin(context: PiniaPluginContext<string, StateTree>) {
  context.store.$onAction((action) => {
    if (action.name === 'setSort') {
      action.after(() => {
        context.store.loadFoods()
      })
    }

    if (action.name === 'setFilter') {
      action.after(() => {
        context.store.loadFoods()
      })
    }
  })
}
