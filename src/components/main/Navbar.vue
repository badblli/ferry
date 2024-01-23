<template>
    <nav class="navbar w-full bg-white flex justify-between items-center lg:px-28 md:px-16 sm:px-8">
        <div>
            <div v-for="(item, index) in navBarItems" :key="index">
                <a class="text-black text-base font-medium font-['Plus Jakarta Sans'] tracking-tight mr-4">
                    {{ item.text }}
                </a>
            </div>
        </div>
        <div className="mr-24">
            <IconMainSamosa />
            <div>
                <span className="text-black text-2xl font-bold font-['Plus Jakarta Display'] tracking-wide">Samosa</span>
                <span className="text-black text-2xl font-normal font-['Plus Jakarta">Feribot</span>
            </div>
        </div>
        <div>
            <div className="text-black text-base font-semibold font-['Plus Jakarta Sans' tracking-tight] mr-3">
                Giriş Yap
            </div>
            <IconMainSamosa />
        </div>
    </nav>
</template>
  
<script setup lang="ts">
import IconMainSamosa from "../icons/IconMainSamosa.vue";
// import IconNavLogin from "../icons/IconNavLogin.vue";
import { ref } from "vue";

const navBarItems = ref([
    { text: "Samos Turları", link: "#", items: [] },
    { text: "Ücretler", link: "#", items: [] },
    { text: "Seferlerimiz", link: "#", items: [] },
]);
</script>
  
<style scoped></style>