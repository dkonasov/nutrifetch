import type { GetFoodsListQueryResponse } from '../types/GetFoodsList.ts'
import { http } from 'msw'

export function getFoodsListHandler(data?: GetFoodsListQueryResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Response)) {
  return http.get('https://api.nal.usda.gov/v1/foods/list', function handler(info) {
    if (typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  })
}