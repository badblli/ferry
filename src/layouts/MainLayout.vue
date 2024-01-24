<script>
import { RouterView } from "vue-router";
import TopMenu from '../components/main/TopMenu.vue'
import MainNavbar from '../components/main/MainNavbar.vue'
import MainFooter from '../components/main/MainFooter.vue'

export default {
    name: 'MainLayout',
    components: {
        RouterView,
        TopMenu,
        MainNavbar,
        MainFooter,
    },
    // Component logic goes here
}
</script>


<template>
    <TopMenu />
    <MainNavbar />
    <RouterView />
    <MainFooter />
</template>


