<script setup lang="ts">
import type { SortingState } from '../types/sorting-state'
import type { TableColumn } from '../types/table-column'
import { ref } from 'vue'
import arrowSrc from '../assets/icons/arrow.svg'

defineProps({
  items: Array<Record<string, number | string>>,
  columns: Array<TableColumn>,
})

const emit = defineEmits<{
  (e: 'sort', payload: SortingState): void
}>()

const sortingState = ref<SortingState>([])

function onSortChanged(column: TableColumn) {
  if (column.sortable) {
    const currentState = sortingState.value.find((state) => state[0] === column.id)

    if (!currentState) {
      if (sortingState.value.length < 2) {
        sortingState.value = [...sortingState.value, [column.id, 'asc']]
      } else {
        sortingState.value = [sortingState.value[0], [column.id, 'asc']]
      }
    } else {
      if (currentState[1] === 'asc') {
        currentState[1] = 'desc'
      } else {
        sortingState.value = sortingState.value.filter((state) => state[0] !== column.id)
      }
    }

    emit('sort', sortingState.value.slice())
  }
}

function getHeaderClasses(column: string) {
  const currentState = sortingState.value.find((state) => state[0] === column)
  const baseClasses = { header: true }

  if (currentState) {
    return {
      sortAsc: currentState[1] === 'asc',
      sortDesc: currentState[1] === 'desc',
      ...baseClasses,
    }
  }

  return baseClasses
}
</script>
<template>
  <table class="table">
    <thead>
      <tr>
        <th
          v-for="column in columns"
          :key="column.id"
          @click="onSortChanged(column)"
          :class="getHeaderClasses(column.id)"
        >
          <span>{{ column.title }}</span
          ><img :src="arrowSrc" alt="Sort" :class="'sortingArrow'" />
        </th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in items" :key="item.id">
        <td v-for="column in columns" :key="column.id" class="cell">{{ item[column.id] }}</td>
      </tr>
    </tbody>
  </table>
</template>
<style scoped>
.table {
  width: 100%;
  border-collapse: collapse;
}

.sortingArrow {
  visibility: hidden;
  height: 14px;
  width: auto;
}

.sortAsc .sortingArrow {
  visibility: visible;
  transform: rotate(180deg);
}

.sortDesc .sortingArrow {
  visibility: visible;
  display: inline-block;
}

.header {
  text-align: left;
  white-space: nowrap;
}

.header,
.cell {
  border-bottom: 1px solid #ccc;
}
</style>
