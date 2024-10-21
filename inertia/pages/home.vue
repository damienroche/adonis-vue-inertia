<script lang="ts" setup>
import type { HomePageProps } from '@/types'

defineProps<{
  page: HomePageProps
}>()
</script>

<template>
  <Default :title="page.title">
    <h1>{{ page.title }}</h1>
  </Default>
</template>
