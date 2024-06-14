<template>

    <div class="relative flex flex-wrap sm:justify-start sm:flex-nowrap w-full h-[60px] text-sm py-4 loading-navbar">
        yükleniyor top menu
    </div>

</template>

<script setup>

</script>

<style>
.loading-navbar {
    animation: pulse-bg 1s infinite;
}

@keyframes pulse-bg {
    0% {
        background-color: #f1f1f1;
    }

    50% {
        background-color: #e7e7e7;
    }

    100% {
        background-color: #f1f1f1;
    }
}
</style>