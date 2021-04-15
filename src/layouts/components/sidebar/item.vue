<template>
  <i :class="icon" />
  <span>{{ name }}</span>
</template>

<script>
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'item',
  props: {
    icon: {
      type: String
    },
    name: {
      type: String
    }
  }
})
</script>

<style scoped></style>
