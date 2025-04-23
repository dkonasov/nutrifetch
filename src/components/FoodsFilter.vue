<script setup lang="ts">
import { useFoodsStore } from '../store'

const foodsStore = useFoodsStore()

function onSubmit(e: Event) {
  e.preventDefault()

  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const payload: any = {}

  const formData = new FormData(e.target as HTMLFormElement)

  formData.forEach((value, key) => {
    payload[key] = value
  })

  foodsStore.setFilter(payload)
}
</script>

<template>
  <form class="filter" @submit="onSubmit">
    <input type="text" name="foodName" placeholder="Food name" class="input" />
    <button type="submit">Search</button>
  </form>
</template>
<style scoped>
.filter {
  display: flex;
  gap: 0.5em;
}

.input {
  font-size: 16px;
}
</style>
