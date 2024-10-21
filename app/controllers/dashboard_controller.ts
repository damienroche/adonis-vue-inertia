import type { HttpContext } from '@adonisjs/core/http'
import { type PageRenderInterface } from '#interfaces/index'

export default class DashboardController implements PageRenderInterface {
  async render({ inertia }: HttpContext) {
    return inertia.render('dashboard', {
      page: {
        title: 'Dashboard',
      },
    })
  }
}
