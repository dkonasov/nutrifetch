import type { PostFoodsSearchMutationResponse } from '../types/PostFoodsSearch.ts'
import { http } from 'msw'

export function postFoodsSearchHandler(data?: PostFoodsSearchMutationResponse | ((info: Parameters<Parameters<typeof http.post>[1]>[0]) => Response)) {
  return http.post('https://api.nal.usda.gov/v1/foods/search', function handler(info) {
    if (typeof data === 'function') return data(info)

    return new Response(JSON.stringify(data), {
      headers: {
        'Content-Type': 'application/json',
      },
    })
  })
}