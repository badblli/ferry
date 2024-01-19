<script setup lang="ts">
import TogglePasswordItem from '../components/sample/TogglePasswordItem.vue'
</script>

<template>
  <div>
    <div class="mb-10">
      <h2 class="mb-2">Toggle Password 1</h2>
      <TogglePasswordItem groupId="first-group" />
    </div>
    <div class="mb-10">
      <h2 class="mb-2">Toggle Password 2</h2>
      <TogglePasswordItem groupId="second-group" />
    </div>
  </div>
</template>
