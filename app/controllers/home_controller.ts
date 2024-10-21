import type { HttpContext } from '@adonisjs/core/http'
import { type PageRenderInterface } from '#interfaces/index'

export default class HomeController implements PageRenderInterface {
  async render({ inertia }: HttpContext) {
    return inertia.render('home', {
      page: {
        title: 'Home',
      },
    })
  }
}
