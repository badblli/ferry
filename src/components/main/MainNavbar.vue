<template>
    <div class="navbar flex justify-between items-center">
        <div class="navbar-section flex">
            <div v-for="(item, index) in navBarItems" :key="index" class="navbar-item">
                <a class="text-black text-base font-medium tracking-tight mr-3">
                    {{ item.text }}
                </a>
            </div>
        </div>

        <div class="navbar-section">
            <div class="navbar-item">
                <preline-icon-main-samosa />
                <div>
                    <span class="text-black text-2xl font-bold tracking-wide">samosa</span>
                    <span class="text-black text-2xl font-normal">feribot</span>
                </div>
            </div>
        </div>

        <div class="navbar-section">
            <div class="navbar-item">
                <div class="text-black text-base font-semibold tracking-tight mr-3">
                    Giriş Yap
                </div>
                <!-- <preline-icon-nav-login /> -->
            </div>
        </div>
    </div>
</template>
  
<script>
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
  

<style scoped></style>
