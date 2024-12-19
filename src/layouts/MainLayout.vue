<template>
     <TopMenu />
     <MainNavbar :isMeanderLayout="isMeanderLayout" />
     <RouterView />
     <MainFooter />
</template>
s
<script setup lang="ts">
import { RouterView } from 'vue-router'
import { ref } from 'vue'
import TopMenu from '../components/main/TopMenu.vue'
import MainNavbar from '../components/main/MainNavbar.vue'
import MainFooter from '../components/main/MainFooter.vue'
window.HSStaticMethods.autoInit()
let isMeanderLayout = ref(import.meta.env.VITE_SALE_CHANNEL === 'Meander' ? true : false)
console.log(isMeanderLayout.value, 'isMeanderLayout')
</script>
