<template>
    <nav class="navbar w-full h-[100px] bg-white flex justify-between items-center z-50 lg:px-28 md:px-16 sm:px-8">
        <div className="flex">
            <div v-for="(item, index) in navBarItems" :key="index">
                <a class="text-black text-base font-medium font-['Plus Jakarta Sans'] tracking-tight mr-4">
                    {{ item.text }}
                </a>
            </div>
        </div>
        <div className="mr-48 flex justify-center items-center ">
            <IconMainSamosa />
            <div className="ml-4">
                <span className="text-black text-2xl font-bold font-['Plus Jakarta Display'] tracking-wide">Samosa</span>
                <span className="text-black text-2xl font-normal font-['Plus Jakarta">Feribot</span>
            </div>
        </div>
        <div className="flex items-center justify-center">
            <div className="text-black text-base font-semibold font-['Plus Jakarta Sans' tracking-tight] mr-3">
                Giriş Yap
            </div>
            <IconMainSamosa />
        </div>
    </nav>
</template>

  
<script lang="ts">
import IconMainSamosa from "../icons/IconMainSamosa.vue";
// import IconNavLogin from "../icons/IconNavLogin.vue"

export default {
    name: 'MainNavbar',
    data() {
        return {
            navBarItems: [
                { text: "Samos Turları", link: "#", items: [] },
                { text: "Ücretler", link: "#", items: [] },
                { text: "Seferlerimiz", link: "#", items: [] },
            ],
        };
    },
    components: {
        IconMainSamosa,
        // IconNavLogin
    },
};
</script>
  
<style scoped></style>
  