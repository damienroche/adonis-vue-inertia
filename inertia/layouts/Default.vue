<script setup lang="ts">

import { Head, Link } from '@inertiajs/vue3'
defineProps<{
  title: string
}>()
const { app } = usePageProps()
const { url } = usePage()
</script>

<template>
  <Head :title="title" />
  <div>
    <header class="max-w-screen-lg mx-auto py-4">
      <nav>
        <Button
          v-for="link in app.nav"
          as-child
          :key="link.href"
          :variant="url === link.href ? 'default' : 'ghost'"
        >
          <Link :href="link.href">{{ link.title }}</Link>
        </Button>
      </nav>
    </header>
    <div class="max-w-screen-lg mx-auto">
      <slot />
    </div>
  </div>
</template>
