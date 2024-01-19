<script setup lang="ts">
import TabsItem from '../components/sample/TabsItem.vue'
</script>

<template>
  <div>
    <div class="mb-10">
      <h2 class="mb-2">Tabs 1</h2>
      <TabsItem groupId="first-group" />
    </div>
    <div class="mb-10">
      <h2 class="mb-2">Tabs 2</h2>
      <TabsItem groupId="second-group" />
    </div>
  </div>
</template>
