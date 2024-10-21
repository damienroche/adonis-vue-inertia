import type { HttpContext } from '@adonisjs/core/http'
import type { NextFn } from '@adonisjs/core/types/http'
import type { InferSharedProps } from '@adonisjs/inertia/types'
import inertiaConfig from '#config/inertia'
import router from '@adonisjs/core/services/router'
import { Routes } from '#start/routes'

export type NavItem = {
  href: string
  title: string
}

export type Nav = NavItem[]

export type AppSharedProps = {
  nav: Nav
}

const nav: Nav = [
  {
    title: 'Home',
    href: router.builder().make(Routes.Home),
  },
  {
    title: 'Dashboard',
    href: router.builder().make(Routes.Dashboard),
  },
]

export default class AppMiddleware {
  async handle({ inertia }: HttpContext, next: NextFn) {
    inertia.share({ app: { nav } })

    const output = await next()
    return output
  }
}

declare module '@adonisjs/inertia/types' {
  export interface SharedProps extends InferSharedProps<typeof inertiaConfig> {
    app: AppSharedProps
  }
}
