import { PageObject } from '@adonisjs/inertia/types'
import type { HttpContext } from '@adonisjs/core/http'

export interface PageRenderInterface {
  render(ctx: HttpContext, ...opts: any): Promise<string | PageObject<{ page: any }> | void>
}
