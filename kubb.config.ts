import { defineConfig } from '@kubb/core'
import { pluginOas } from '@kubb/plugin-oas'
import { pluginTs } from '@kubb/plugin-ts'

export default defineConfig(() => {
  return {
    root: '.',
    input: {
      path: 'https://api.nal.usda.gov/fdc/v1/yaml-spec?api_key=DEMO_KEY',
    },
    output: {
      path: './src/gen',
    },
    plugins: [pluginOas(), pluginTs()],
  }
})
