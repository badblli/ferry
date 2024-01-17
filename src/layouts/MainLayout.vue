<script>
import { RouterView } from "vue-router";
import TopMenu from '@/components/main/TopMenu.vue'
import Navbar from '@/components/main/Navbar.vue'
import Footer from '@/components/main/Footer.vue'

export default {
    name: 'MainLayout',
    components: {
        RouterView,
        TopMenu,
        Navbar,
        Footer,
    },
    // Component logic goes here
}
</script>


<template>
    <div class="main-layout">
        <TopMenu />
        <Navbar />

        <RouterView />
        <Footer />

    </div>
</template>


