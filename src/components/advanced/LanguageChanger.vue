<template>
    <div class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none]">
        <button id="hs-mega-menu-basic-dr" type="button"
            class="flex items-center w-full text-white hover:text-gray-400 font-semibold dark:text-gray-400 dark:hover:text-gray-500"
            @click="toggleDropdown">
            {{ selectedLanguage }}
            <svg class="ms-1 flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                stroke-linejoin="round">
                <path d="m6 9 6 6 6-6" />
            </svg>
        </button>

        <div class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] sm:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 sm:w-48 z-10 bg-white sm:shadow-md rounded-lg p-2 dark:bg-gray-800 sm:dark:border dark:border-gray-700 dark:divide-gray-700 before:absolute top-full sm:border before:-top-5 before:start-0 before:w-full before:h-5 hidden"
            style="">
            <a v-for="(option, index) in options" :key="index" @click="selectLanguage(option)"
                class="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-black hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-gray-300"
                href="#">
                {{ option }}
            </a>
        </div>
    </div>
</template>
  
<script>
export default {
    data() {
        return {
            selectedLanguage: "Turkish",
            options: ["Turkish", "English", "Deutsch", "Français", "Italiano"],
            dropdownOpen: false,
        };
    },
    methods: {
        toggleDropdown() {
            this.dropdownOpen = !this.dropdownOpen;
        },
        selectLanguage(language) {
            this.selectedLanguage = language;
            this.dropdownOpen = false; // İsteğe bağlı: seçim yapıldıktan sonra dropdown'u kapat
        },
    },
};
</script>
  