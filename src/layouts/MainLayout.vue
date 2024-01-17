<script>
import { RouterView } from "vue-router";
import Header from '@/components/Header.vue'

export default {
    name: 'MainLayout',
    components: {
        RouterView,
        Header
    },
    // Component logic goes here
}
</script>


<template>
    <div class="main-layout">
        <Header />
        <RouterView />
        <!-- <div class="main-layout__content">
            <slot />
        </div>
        <Footer /> -->
    </div>
</template>


