<template>
     <div>
          <h1>Terms of Use</h1>
          <p>{{ terms }}</p>
     </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'

export default defineComponent({
     name: 'TermOfUse',
     setup() {
          const terms = ref('')

          // Fetch terms of use from API or set it manually
          // Example:
          // terms.value = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.';

          return {
               terms
          }
     }
})
</script>

<style scoped>
/* Add your component-specific styles here */
</style>
