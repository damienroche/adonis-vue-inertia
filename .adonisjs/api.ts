import type { MakeTuyauRequest, MakeTuyauResponse } from '@tuyau/utils/types'
import type { InferInput } from '@vinejs/vine/types'

export interface ApiDefinition {}
const routes = [
  {
    params: [],
    name: 'home',
    path: '/',
    method: ['GET', 'HEAD'],
    types: {} as unknown,
  },
  {
    params: [],
    name: 'dashboard',
    path: '/dashboard',
    method: ['GET', 'HEAD'],
    types: {} as unknown,
  },
] as const
export const api = {
  routes,
  definition: {} as ApiDefinition,
}
declare module '@tuyau/inertia/types' {
  type InertiaApi = typeof api
  export interface Api extends InertiaApi {}
}
