import type { InferPageProps } from '@adonisjs/inertia/types'
import type DashboardController from '#controllers/dashboard_controller'
import type HomeController from '#controllers/home_controller'

export type DashboardPageProps = InferPageProps<DashboardController, 'render'>['page']
export type HomePageProps = InferPageProps<HomeController, 'render'>['page']
