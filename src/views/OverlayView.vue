<script setup lang="ts">
import OverlayItem from '../components/sample/OverlayItem.vue'
</script>

<template>
  <div>
    <div class="mb-10">
      <h2 class="mb-2">Overlay 1</h2>
      <OverlayItem contentId="overlay-1" title="Overlay 1"
        content="Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc." />
    </div>
    <div class="mb-10">
      <h2 class="mb-2">Overlay 2</h2>
      <OverlayItem contentId="overlay-2" title="Overlay 2"
        content="Some text as placeholder. In real life you can have the elements you have chosen. Like, text, images, lists, etc." />
    </div>
  </div>
</template>
