<script lang="ts" setup>
import type { DashboardPageProps } from '@/types'

defineProps<{
  page: DashboardPageProps
}>()
</script>

<template>
  <Default :title="page.title">
    <h1>{{ page.title }}</h1>
  </Default>
</template>
