import type { GetFoodQueryResponse } from '../types/GetFood.ts'
import { http } from 'msw'

export function getFoodHandler(data?: GetFoodQueryResponse | ((info: Parameters<Parameters<typeof http.get>[1]>[0]) => Response)) {
  return http.get('https://api.nal.usda.gov/v1/food/:fdcId', function handler(info) {
    if (typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  })
}