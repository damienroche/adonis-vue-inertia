// vite.config.ts
import { defineConfig } from "file:///Users/damien/Sites/Sandbox/adonis-vue-inertia/node_modules/vite/dist/node/index.js";
import { getDirname } from "file:///Users/damien/Sites/Sandbox/adonis-vue-inertia/node_modules/@adonisjs/core/build/src/helpers/main.js";
import inertia from "file:///Users/damien/Sites/Sandbox/adonis-vue-inertia/node_modules/@adonisjs/inertia/build/src/plugins/vite.js";
import vue from "file:///Users/damien/Sites/Sandbox/adonis-vue-inertia/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import adonisjs from "file:///Users/damien/Sites/Sandbox/adonis-vue-inertia/node_modules/@adonisjs/vite/build/src/client/main.js";
import tailwind from "file:///Users/damien/Sites/Sandbox/adonis-vue-inertia/node_modules/tailwindcss/lib/index.js";
import autoprefixer from "file:///Users/damien/Sites/Sandbox/adonis-vue-inertia/node_modules/autoprefixer/lib/autoprefixer.js";
import Components from "file:///Users/damien/Sites/Sandbox/adonis-vue-inertia/node_modules/unplugin-vue-components/dist/vite.js";
import AutoImport from "file:///Users/damien/Sites/Sandbox/adonis-vue-inertia/node_modules/unplugin-auto-import/dist/vite.js";
var __vite_injected_original_import_meta_url = "file:///Users/damien/Sites/Sandbox/adonis-vue-inertia/vite.config.ts";
var vite_config_default = defineConfig({
  css: {
    postcss: {
      plugins: [tailwind(), autoprefixer()]
    }
  },
  plugins: [
    inertia({ ssr: { enabled: false } }),
    vue(),
    adonisjs({ entrypoints: ["inertia/app/app.ts"], reload: ["resources/views/**/*.edge"] }),
    Components({
      dirs: ["inertia/components"],
      dts: "inertia/components.d.ts"
    }),
    AutoImport({
      vueTemplate: true,
      imports: ["vue"],
      dirs: ["inertia/composables/**", "inertia/lib/**"],
      dts: "inertia/auto-import.d.ts"
    })
  ],
  /**
   * Define aliases for importing modules from
   * your frontend code
   */
  resolve: {
    alias: {
      "@/": `${getDirname(__vite_injected_original_import_meta_url)}/inertia/`
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCIvVXNlcnMvZGFtaWVuL1NpdGVzL1NhbmRib3gvYWRvbmlzLXZ1ZS1pbmVydGlhXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCIvVXNlcnMvZGFtaWVuL1NpdGVzL1NhbmRib3gvYWRvbmlzLXZ1ZS1pbmVydGlhL3ZpdGUuY29uZmlnLnRzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9Vc2Vycy9kYW1pZW4vU2l0ZXMvU2FuZGJveC9hZG9uaXMtdnVlLWluZXJ0aWEvdml0ZS5jb25maWcudHNcIjtpbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xuaW1wb3J0IHsgZ2V0RGlybmFtZSB9IGZyb20gJ0BhZG9uaXNqcy9jb3JlL2hlbHBlcnMnXG5pbXBvcnQgaW5lcnRpYSBmcm9tICdAYWRvbmlzanMvaW5lcnRpYS9jbGllbnQnXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcbmltcG9ydCBhZG9uaXNqcyBmcm9tICdAYWRvbmlzanMvdml0ZS9jbGllbnQnXG5pbXBvcnQgdGFpbHdpbmQgZnJvbSAndGFpbHdpbmRjc3MnXG5pbXBvcnQgYXV0b3ByZWZpeGVyIGZyb20gJ2F1dG9wcmVmaXhlcidcbmltcG9ydCBDb21wb25lbnRzIGZyb20gJ3VucGx1Z2luLXZ1ZS1jb21wb25lbnRzL3ZpdGUnXG5pbXBvcnQgQXV0b0ltcG9ydCBmcm9tICd1bnBsdWdpbi1hdXRvLWltcG9ydC92aXRlJ1xuXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBjc3M6IHtcbiAgICBwb3N0Y3NzOiB7XG4gICAgICBwbHVnaW5zOiBbdGFpbHdpbmQoKSwgYXV0b3ByZWZpeGVyKCldLFxuICAgIH0sXG4gIH0sXG4gIHBsdWdpbnM6IFtcbiAgICBpbmVydGlhKHsgc3NyOiB7IGVuYWJsZWQ6IGZhbHNlIH0gfSksXG4gICAgdnVlKCksXG4gICAgYWRvbmlzanMoeyBlbnRyeXBvaW50czogWydpbmVydGlhL2FwcC9hcHAudHMnXSwgcmVsb2FkOiBbJ3Jlc291cmNlcy92aWV3cy8qKi8qLmVkZ2UnXSB9KSxcbiAgICBDb21wb25lbnRzKHtcbiAgICAgIGRpcnM6IFsnaW5lcnRpYS9jb21wb25lbnRzJ10sXG4gICAgICBkdHM6ICdpbmVydGlhL2NvbXBvbmVudHMuZC50cycsXG4gICAgfSksXG4gICAgQXV0b0ltcG9ydCh7XG4gICAgICB2dWVUZW1wbGF0ZTogdHJ1ZSxcbiAgICAgIGltcG9ydHM6IFsndnVlJ10sXG4gICAgICBkaXJzOiBbJ2luZXJ0aWEvY29tcG9zYWJsZXMvKionLCAnaW5lcnRpYS9saWIvKionXSxcbiAgICAgIGR0czogJ2luZXJ0aWEvYXV0by1pbXBvcnQuZC50cycsXG4gICAgfSksXG4gIF0sXG5cbiAgLyoqXG4gICAqIERlZmluZSBhbGlhc2VzIGZvciBpbXBvcnRpbmcgbW9kdWxlcyBmcm9tXG4gICAqIHlvdXIgZnJvbnRlbmQgY29kZVxuICAgKi9cbiAgcmVzb2x2ZToge1xuICAgIGFsaWFzOiB7XG4gICAgICAnQC8nOiBgJHtnZXREaXJuYW1lKGltcG9ydC5tZXRhLnVybCl9L2luZXJ0aWEvYCxcbiAgICB9LFxuICB9LFxufSlcbiJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFQsU0FBUyxvQkFBb0I7QUFDelYsU0FBUyxrQkFBa0I7QUFDM0IsT0FBTyxhQUFhO0FBQ3BCLE9BQU8sU0FBUztBQUNoQixPQUFPLGNBQWM7QUFDckIsT0FBTyxjQUFjO0FBQ3JCLE9BQU8sa0JBQWtCO0FBQ3pCLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBUjZLLElBQU0sMkNBQTJDO0FBVXJQLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLEtBQUs7QUFBQSxJQUNILFNBQVM7QUFBQSxNQUNQLFNBQVMsQ0FBQyxTQUFTLEdBQUcsYUFBYSxDQUFDO0FBQUEsSUFDdEM7QUFBQSxFQUNGO0FBQUEsRUFDQSxTQUFTO0FBQUEsSUFDUCxRQUFRLEVBQUUsS0FBSyxFQUFFLFNBQVMsTUFBTSxFQUFFLENBQUM7QUFBQSxJQUNuQyxJQUFJO0FBQUEsSUFDSixTQUFTLEVBQUUsYUFBYSxDQUFDLG9CQUFvQixHQUFHLFFBQVEsQ0FBQywyQkFBMkIsRUFBRSxDQUFDO0FBQUEsSUFDdkYsV0FBVztBQUFBLE1BQ1QsTUFBTSxDQUFDLG9CQUFvQjtBQUFBLE1BQzNCLEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxJQUNELFdBQVc7QUFBQSxNQUNULGFBQWE7QUFBQSxNQUNiLFNBQVMsQ0FBQyxLQUFLO0FBQUEsTUFDZixNQUFNLENBQUMsMEJBQTBCLGdCQUFnQjtBQUFBLE1BQ2pELEtBQUs7QUFBQSxJQUNQLENBQUM7QUFBQSxFQUNIO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQSxFQU1BLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLE1BQU0sR0FBRyxXQUFXLHdDQUFlLENBQUM7QUFBQSxJQUN0QztBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
