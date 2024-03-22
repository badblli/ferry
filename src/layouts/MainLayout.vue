<template>
    <TopMenu />
    <MainNavbar  />
    <RouterView />
    <!-- <MainFooter /> -->
</template>

<script setup lang="ts">
import { RouterView } from "vue-router";
import TopMenu from '../components/main/TopMenu.vue';
import MainNavbar from '../components/main/MainNavbar.vue';
</script>