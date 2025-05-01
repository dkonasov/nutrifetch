<script lang="ts" setup>
defineProps<{
  icon: string
  alt: string
  className: any
}>()

const baseUrl = import.meta.env.BASE_URL
</script>
<template>
  <img :src="`${baseUrl}icons/${icon}.svg`" :alt="alt" :class="className" />
</template>
