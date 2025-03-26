import type { GetFoodsQueryResponse } from '../types/GetFoods.ts'
import { http } from 'msw'

export function getFoodsHandler(data?: GetFoodsQueryResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Response)) {
  return http.get('https://api.nal.usda.gov/v1/foods', function handler(info) {
    if (typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  })
}