<template>
  <div class="test-container page-container">
    <div class="page-title">Unit Test Page</div>
    <p>count is: {{ count }}</p>
    <button @click="increment">increment</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
  name: 'Test',
  setup() {
    const count = ref<number>(0)
    const increment = () => {
      count.value += 2
    }
    return { count, increment }
  }
})
</script>
