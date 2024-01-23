<script setup lang="ts">
import AccordionItem from './AccordionItem.vue'
</script>

<template>
  <div class="hs-accordion-group">
    <AccordionItem title="Accordion #1"
      content="This is the first item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions." />
    <AccordionItem title="Accordion #2"
      content="This is the second item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions." />
    <AccordionItem title="Accordion #3"
      content="This is the third item's accordion body. It is hidden by default, until the collapse plugin adds the appropriate classes that we use to style each element. These classes control the overall appearance, as well as the showing and hiding via CSS transitions." />
  </div>
</template>
