<template>
    <div class="flex flex-col justify-center items-center m-auto relative">
        <div class="w-full h-[223px] bg-slate-200" />
        <div class="relative top-[-10rem] w-full lg:px-28 md:px-16 sm:px-8">
            <h1 class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide mb-9 pl-10 md:pl-0">
                Feribot Bileti Ücretleri
            </h1>
            <div className="w-full mx-auto bg-neutral-100 rounded-[20px] p-4">
                <div className="flex flex-col pt-8 overflow-x-auto">
                    <div className="p-8">
                        <div className="flex flex-row items-center">
                            <IconAsteriskSimple />
                            <h2 className="text-black text-base font-medium leading-[26.88px] h-7 ml-3">
                                {{ whichFerry }}
                            </h2>
                        </div>
                        <table className="relative bg-white mb-8 rounded-2xl w-full mt-10">
                            <thead>
                                <tr v-for="(header, index) in tableHeaders" :key="index"
                                    class="my-6 md:mx-8 mx-4 flex flex-row justify-between items-center text-black text-lg font-semibold leading-loose rounded-2xl">
                                    <th v-for="(label, labelIndex) in header" :key="labelIndex"
                                        class="pt-3 pl-8 w-full flex">{{
                                            label }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, index) in tableData" :key="index"
                                    className="m-6 flex flex-row justify-between text-black text-lg font-semibold leading-loose border border-neutral-200 rounded-2xl [&>*:nth-last-child(1)]:border-none">
                                    <td v-for="(cell, cellIndex) in row" :key="cellIndex"
                                        className="w-full border-r border-neutral-300 py-7 md:pl-10 pl-3">
                                        {{ cell }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconAsteriskSimple from "../components/icons/IconAsteriskSimple.vue";
// import IconMainSamosa from "../components/icons/IconMainSamosa.vue";
// import MyNotifications from "../components/advanced/MyNotifications.vue"
// import MySettingsDeactive from "../components/advanced/MySettingsDeactive.vue"
// import MyProfile from "../components/advanced/MyProfile.vue"
// import MySettingPassword from "../components/advanced/MySettingsPassword.vue"

const tableHeaders = [
    ["Bilet Tipi", "Yetişkin", "Çocuk 6-11", "Çocuk 6-11"]
];

const tableData = [
    ["Tek Yön", "39TL", "39TL", "39TL"],
    ["Günü Birlik", "39TL", "39TL", "39TL"],
    ["Gidiş Dönüş", "39TL", "39TL", "39TL"]
];

const whichFerry = "Alttaki Samos’a feribot bileti ücretlerine Kuşadası ve Samos liman vergileri dahildir.";
</script>
  
<style scoped></style>