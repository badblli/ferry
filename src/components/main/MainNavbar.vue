<template>
    <nav
        class="navbar centered-w w-full h-[100px] bg-white flex justify-between items-center z-50 lg:px-[100px] px-2 md:px-16 sm:px-8">
        <div class="hs-dropdown relative inline-flex md:hidden">
            <button id="hs-dropdown-slideup-animation block md:hidden" type="button"
                class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                <IconRwpNavbar />
            </button>
            <div class="hs-dropdown-menu  w-72 p-12  duration hs-dropdown-open:opacity-100 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg"
                aria-labelledby="hs-dropdsown-slideup-animation">
                <router-link v-for="(item, index) in navBarItems" :key="index" :to="item.to"
                    class="flex cursor-pointer items-center gap-x-3.5 py-2 pr-3 rounded-lg text-md text-gray-800 hover:bg-gray-100 focus:outline-none"
                    href="#">
                    {{ item.text }}
                </router-link>
                <a class="flex items-center gap-x-3.5 py-2 pr-3 rounded-lg text-md text-gray-800 hover:bg-gray-100 focus:outline-none"
                    href="#" data-hs-overlay="#hs-medium-modal">
                    Giriş Yap
                </a>
            </div>
        </div>
        <div className="hidden md:flex">
            <router-link v-for="(item, index) in navBarItems" :key="index" :to="item.to"
                class="flex flex-row cursor-pointer items-center gap-x-3.5 py-2 pr-3 rounded-lg text-md text-gray-800 focus:outline-none">
                {{ item.text }}
            </router-link>
        </div>
        <div class="flex flex-row justify-center items-center cursor-pointer lg:mr-16 mr-0" @click="navigateToHome">
            <IconMainSamosa />
            <div class="ml-4">
                <span class="text-black text-xl md:text-2xl font-bold font-display tracking-wide">Samosa</span>
                <span class="text-black text-xl md:text-2xl font-normal font-display">Feribot</span>
            </div>
        </div>
        <div>
            <div class="text-center cursor-pointer hidden md:flex">
                <button type="button"
                    class="text-black text-sm md:text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight mr-1"
                    data-hs-overlay="#hs-medium-modal">
                    Giriş Yap
                </button>
                <IconChevronDown />
            </div>
            <SignInModal />
        </div>
    </nav>
    <div class="w-full h-[1px] border border-gray-200"></div>
</template>

<script setup lang="ts">
import { useRouter } from "vue-router";
import SignInModal from "../advanced/SignInModal.vue";
import IconMainSamosa from "../icons/IconMainSamosa.vue";
import IconChevronDown from "../icons/IconChevronDown.vue";
import IconRwpNavbar from "../icons/IconRwpNavbar.vue";

const router = useRouter();
const navigateToHome = () => {
    router.push('/');
};

const navBarItems = [
    { text: "Samos Turları", link: "#", to: "/tours" },
    { text: "Ücretler", link: "#", to: "/price" },
    { text: "Seferlerimiz", link: "#", to: "/journey" },
];
</script>

<style scoped></style>