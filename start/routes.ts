/*
|--------------------------------------------------------------------------
| Routes file
|--------------------------------------------------------------------------
|
| The routes file is used for defining the HTTP routes.
|
*/

import router from '@adonisjs/core/services/router'
import { middleware } from './kernel.js'
const DashboardController = () => import('#controllers/dashboard_controller')
const HomeController = () => import('#controllers/home_controller')

router
  .group(() => {
    router.get('/', [HomeController, 'render']).as('home')
    router.get('/dashboard', [DashboardController, 'render']).as('dashboard')
  })
  .use([middleware.app()])
