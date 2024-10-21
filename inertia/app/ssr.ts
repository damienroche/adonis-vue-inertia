import { createInertiaApp } from '@inertiajs/vue3'
import { renderToString } from '@vue/server-renderer'
import { createSSRApp, h, type DefineComponent } from 'vue'
import { TuyauPlugin } from '@tuyau/inertia/vue'
import { tuyau } from './tuyau'
import Default from '@/layouts/Default.vue'

import '@/css/app.css'

export default function render(page: any) {
  return createInertiaApp({
    page,
    render: renderToString,
    resolve: (name) => {
      const pages = import.meta.glob<DefineComponent>('../pages/**/*.vue', { eager: true })
      return pages[`../pages/${name}.vue`]
    },

    setup({ App, props, plugin }) {
      return createSSRApp({ render: () => h(App, props) })
        .use(TuyauPlugin, { client: tuyau })
        .component('Default', Default)
        .use(plugin)
    },
  })
}
