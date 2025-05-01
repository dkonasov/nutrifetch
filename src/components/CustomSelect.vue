<script lang="ts" setup>
import { ref, defineProps, computed, onBeforeUnmount, watchEffect, h } from 'vue'
import PopupElement from './PopupElement.vue'
import type { CustomSelectOption } from '../types/custom-select-option'
import AppIcon from './AppIcon.vue'
import { getUniqueId } from '@/functions/get-unique-id'

const { options = [], label } = defineProps({
  options: Array<CustomSelectOption>,
  value: Array<string>,
  label: String,
})

const emit = defineEmits<{
  (e: 'onElementSelected', payload: string): void
}>()

const open = ref(false)
const selectedIndex = ref(-1)

function onTriggerClick() {
  open.value = !open.value
}

function onOptionClick(option: CustomSelectOption, index: number) {
  selectedIndex.value = index
  emit('onElementSelected', option.value)
}

function hideDropdown() {
  open.value = false
}

const id = getUniqueId()

const optionsIds = computed(() => {
  return options.map(() => getUniqueId())
})

const ariaActiveDescendant = computed(() => {
  if (selectedIndex.value === -1) {
    return undefined
  }
  return optionsIds.value[selectedIndex.value]
})

const handleKeyDown = (event: KeyboardEvent) => {
  // TODO: figure out what names up and down should have
  if (event.key === 'ArrowDown' || event.key === 'ArrowUp') {
    event.preventDefault()
    if (!open.value) {
      open.value = true
    } else {
      if (event.key === 'ArrowDown') {
        selectedIndex.value = (selectedIndex.value + 1) % options.length
      } else {
        selectedIndex.value = (selectedIndex.value - 1 + options.length) % options.length
      }
    }
  }

  if (open.value && (event.key === 'Enter' || event.key === ' ')) {
    event.preventDefault()
    const selectedOption = options[selectedIndex.value]
    if (selectedOption) {
      emit('onElementSelected', selectedOption.value)
      open.value = false
    }
  }
}

watchEffect(() => {
  if (open.value) {
    selectedIndex.value = 0
  } else {
    selectedIndex.value = -1
  }
})

document.addEventListener('keydown', handleKeyDown)

onBeforeUnmount(() => {
  document.removeEventListener('keydown', handleKeyDown)
})
</script>

<template>
  <PopupElement :open="open" @onDismiss="hideDropdown">
    <template v-slot:trigger>
      <button
        type="submit"
        role="combobox"
        aria-autocomplete="none"
        :aria-label="label"
        :aria-controls="id"
        :aria-expanded="open"
        :aria-activedescendant="ariaActiveDescendant"
        @click="onTriggerClick()"
      >
        {{ label }}
      </button>
    </template>

    <div class="dropdown" :id="id" role="listbox">
      <div
        v-for="(option, index) in options"
        :key="option.value"
        @click="onOptionClick(option, index)"
        :class="{
          option: true,
          highlighted: selectedIndex === index,
        }"
        :id="optionsIds[index]"
        :aria-selected="value?.includes(option.value)"
      >
        <AppIcon
          icon="check"
          alt="Selected icon"
          :className="{ checkIcon: true, checked: value?.includes(option.value) }"
        />
        <div>{{ option.label }}</div>
      </div>
    </div>
  </PopupElement>
</template>
<style scoped>
.option {
  display: flex;
  align-items: center;
  gap: 0.3em;
  padding: 0.5em;
  cursor: default;
  user-select: none;
  box-sizing: border-box;
}

.checkIcon {
  visibility: hidden;
  width: 19px;
  height: 19px;
}
.checkIcon.checked {
  visibility: visible;
}

.highlighted {
  background-color: #f0f0f0;
}
</style>
