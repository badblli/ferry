<template>
    <select v-model="selectedLanguage" class="select select-ghost text-white font-semibold  max-w-xs">

        <option class="menu bg-base-200 w-56 rounded-box" v-for="(option, index) in options" :key="index">{{ option }}
        </option>
    </select>
</template>

<script>
export default {
    data() {
        return {
            selectedLanguage: "Turkish",
            options: ["Turkish", "English", "Deutsch", "Français", "Italiano"]
        };
    },
};
</script>

<style scoped>
/* İhtiyacınıza göre özelleştirmeler yapabilirsiniz */
select.select.select-ghost.max-w-xs.ml-6 {
    font-size: 16px !important;
    border: none !important;
}

.select-ghost {
    --tw-bg-opacity: 0.05;
    font-size: medium;
}

.select-ghost:focus {
    --tw-bg-opacity: 1;
    --tw-text-opacity: 1;
    color: var(--fallback-bc, oklch(var(--bc)/var(--tw-text-opacity)));
    border: none !important;
}
</style>
