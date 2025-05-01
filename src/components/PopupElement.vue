<script setup lang="ts">
import { elementHasAncestor } from '../functions/element-has-ancestor'
import { autoPlacement, shift, useFloating } from '@floating-ui/vue'
import { onBeforeUnmount, ref } from 'vue'

const { open } = defineProps({
  open: Boolean,
})

const emit = defineEmits<{
  (e: 'onDismiss'): void
}>()

const trigger = ref(null)
const floating = ref(null)

function hideDropdown() {
  emit('onDismiss')
}

const { floatingStyles } = useFloating(trigger, floating, {
  open,
  placement: 'bottom-start',
  middleware: [shift()],
})

const clickOutsideListener = (event: Event) => {
  if (!(event.target instanceof HTMLElement) || !trigger.value || !floating.value) {
    return
  }

  if (
    open &&
    !elementHasAncestor(event.target, trigger.value) &&
    !elementHasAncestor(event.target, floating.value)
  ) {
    hideDropdown()
  }
}

const keydownListener = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    hideDropdown()
  }
}

document.addEventListener('keydown', keydownListener)

document.addEventListener('click', clickOutsideListener)

onBeforeUnmount(() => {
  document.removeEventListener('click', clickOutsideListener)
  document.removeEventListener('keydown', keydownListener)
})
</script>
<template>
  <div ref="trigger" class="trigger">
    <slot name="trigger"></slot>
  </div>
  <div ref="floating" :style="floatingStyles" class="dropdown" v-if="open">
    <slot></slot>
  </div>
</template>
<style scoped>
.dropdown {
  background-color: #fff;
  border: 1px solid #ccc;
}
.trigger {
  display: inline-flex;
}
</style>
