import type { GetYamlSpecQueryResponse } from '../types/GetYamlSpec.ts'
import { http } from 'msw'

export function getYamlSpecHandler(data?: GetYamlSpecQueryResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Response)) {
  return http.get('https://api.nal.usda.gov/v1/yaml-spec', function handler(info) {
    if (typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  })
}