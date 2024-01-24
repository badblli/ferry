<script setup lang="ts">
import ToggleCountItem from '../components/sample/ToggleCountItem.vue'
</script>

<template>
  <div>
    <div class="mb-10">
      <h2 class="mb-2">Toggle Count 1</h2>
      <ToggleCountItem groupId="first-group" />
    </div>
    <div class="mb-10">
      <h2 class="mb-2">Toggle Count 2</h2>
      <ToggleCountItem groupId="second-group" />
    </div>
  </div>
</template>
