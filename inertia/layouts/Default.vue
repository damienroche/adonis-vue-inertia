<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
defineProps<{
  title: string
}>()

const { tuyau } = useTuyau()
</script>

<template>
  <Head :title="title" />
  <div>
    <header class="max-w-screen-lg mx-auto py-4">
      <nav>
        <Button as-child variant="ghost">
          <Link :href="tuyau.$route('home').path">Home</Link>
        </Button>
        <Button as-child variant="ghost">
          <Link :href="tuyau.$route('dashboard').path">Dashboard</Link>
        </Button>
      </nav>
    </header>
    <div class="max-w-screen-lg mx-auto">
      <slot />
    </div>
  </div>
</template>
