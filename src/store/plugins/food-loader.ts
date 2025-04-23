import type { PiniaPlugin, PiniaPluginContext } from 'pinia'

export const foodLoaderPlugin: PiniaPlugin = (context: PiniaPluginContext) => {
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
