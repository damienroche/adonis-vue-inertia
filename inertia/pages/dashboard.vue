<script lang="ts" setup>
defineProps<{
  title: string
}>()
</script>

<template>
  <Default :title="title">
  </Default>
</template>
