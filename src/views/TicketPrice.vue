<template>
    <div class="flex flex-col justify-center items-center m-auto relative">
        <div class="w-full h-[223px] bg-slate-200" />
        <div class="relative top-[-11rem] w-full lg:px-[100px] px-16 md:px-16 sm:px-8 centered-w">
            <h1 class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide mb-14 pl-10 md:pl-0">
                Feribot Bileti Ücretleri
            </h1>
            <div className="w-full mx-auto bg-neutral-100 rounded-[20px] p-4">
                <div className="flex flex-col overflow-x-auto">
                    <div className="p-8">
                        <div className="flex flex-row items-center">
                            <IconAsteriskSimple />
                            <h2 className="text-black text-base font-medium leading-[26.88px] h-7 ml-3">
                                {{ whichFerry }}
                            </h2>
                        </div>
                        <table className="relative bg-white mb-4 rounded-2xl w-full mt-10">
                            <thead>
                                <tr v-for="(header, index) in tableHeaders" :key="index"
                                    class="md:mx-24 mx-14 mt-8 md:mt-14 md:mb-9 flex flex-row justify-between text-black md:text-lg text-base font-semibold leading-loose rounded-2xl ">
                                    <th v-for="(label, labelIndex) in header" :key="labelIndex"
                                        class="md:pl-14 first:pl-2 w-full flex">{{ label }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, index) in tableData" :key="index"
                                    className="flex flex-row mx-16 mb-[15px] last:mb-[70px] border border-stone-300 rounded-2xl [&>*:nth-last-child(1)]:border-none">
                                    <td v-for="(cell, cellIndex) in row" :key="cellIndex"
                                        className="w-full border-r border-neutral-300 md:py-[21px] py-2 md:pl-10 pl-3 first:text-lg first:font-semibold first:leading-loose md:text-2xl text-xl font-normal">
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
    ["Tek Yön", "39€", "39€", "39€"],
    ["Günü Birlik", "39€", "39€", "39€"],
    ["Gidiş Dönüş", "39€", "39€", "39€"]
];

const whichFerry = "Alttaki Samos’a feribot bileti ücretlerine Kuşadası ve Samos liman vergileri dahildir.";
</script>

<style scoped></style>