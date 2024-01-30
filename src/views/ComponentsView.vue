<template>
    <header>
        <div class="py-[20px] px-[50px]">
            <div class="flex flex-wrap gap-x-4">
                <RouterLink to="/components">Home</RouterLink>
                <RouterLink to="/accordion">Accordion</RouterLink>
                <RouterLink to="/carousel">Carousel</RouterLink>
                <RouterLink to="/collapse">Collapse</RouterLink>
                <RouterLink to="/dropdown">Dropdown</RouterLink>
                <RouterLink to="/input-number">Input Number</RouterLink>
                <RouterLink to="/overlay">Overlay</RouterLink>
                <RouterLink to="/pin-input">Pin Input</RouterLink>
                <RouterLink to="/remove-element">Remove Element</RouterLink>
                <RouterLink to="/scrollspy">Scrollspy</RouterLink>
                <RouterLink to="/select">Select</RouterLink>
                <RouterLink to="/stepper">Stepper</RouterLink>
                <RouterLink to="/strong-password">Strong Password</RouterLink>
                <RouterLink to="/tabs">Tabs</RouterLink>
                <RouterLink to="/toggle-count">Toggle Count</RouterLink>
                <RouterLink to="/toggle-password">Toggle Password</RouterLink>
                <RouterLink to="/tooltip">Tooltip</RouterLink>
            </div>
        </div>
    </header>

    <div class="pb-[20px] px-[50px]">
        Go through the menu items...
        <RouterView />
    </div>
</template>
  
<script setup>
import { RouterView, RouterLink } from 'vue-router';

// Component logic goes here
</script>
  