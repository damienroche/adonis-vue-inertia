<script setup lang="ts">
import { Head, Link } from '@inertiajs/vue3'
defineProps<{
  title: string
}>()
</script>

<template>
  <div>
    <Head :title="title" />
    <header>
      <nav>
        <Button as-child>
          <Link :href="useTuyau().tuyau.$route('home').path">
            Home
          </Link>
        </Button>
      </nav>
    </header>
  </div>
</template>
