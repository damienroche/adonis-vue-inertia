import { usePage as useInertiaPage } from '@inertiajs/vue3'
import type { SharedProps } from '@adonisjs/inertia/types'
export const usePage = () => useInertiaPage<SharedProps>()

export const usePageProps = () => usePage().props
