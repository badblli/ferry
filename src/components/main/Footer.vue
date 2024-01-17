<template>
    <div class="w-full h-[172px] bg-slate-200 flex justify-center items-center">
        <div class="text-center text-black text-lg font-medium font-['Plus Jakarta Sans']">{{ footerContactText }}</div>
    </div>
    <footer>
        <div class="container">
            <p>&copy; {{ currentYear }} My Website. All rights reserved.</p>
        </div>
    </footer>
</template>

<script>
export default {
    data() {
        return {
            currentYear: new Date().getFullYear(),
            footerContactText: "SamosaFeribot destek hizmetlerinden faydalanmak ve hızlı bilet almak için bize ulaşın.",
        };
    }
};
</script>

<style scoped>
footer {
    background-color: #f5f5f5;
    padding: 20px;
    text-align: center;
}
</style>
