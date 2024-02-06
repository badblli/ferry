<template>
    <!-- <DatePicker /> -->
    <div class="flex flex-col justify-center items-center m-auto relative">
        <div class="w-full h-[223px] bg-slate-200" />
        <div class="relative top-[-10rem] w-full lg:px-28 md:px-16 sm:px-8">
            <div class="flex flex-row justify-between">
                <h1 class="text-black text-4xl font-medium font-display tracking-wide mb-9">
                    Feribot Seferleri 2024
                </h1>
                <div class="h-[37px] bg-white rounded-lg border flex justify-center items-center p-1">
                    <div class="text-black text-lg font-medium font-display ml-1">Feribot Bileti Al</div>
                    <svg width="30" height="31" viewBox="0 0 30 31" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M21.5868 16.4397C21.8398 16.6927 21.8398 17.103 21.5868 17.3561L15.7217 23.2211C15.4687 23.4742 15.0584 23.4742 14.8053 23.2211L8.94031 17.3561C8.68725 17.103 8.68725 16.6928 8.94031 16.4397C9.19336 16.1866 9.60366 16.1866 9.85672 16.4397L14.6155 21.1985V8.10036C14.6155 7.74248 14.9057 7.45236 15.2635 7.45236C15.6214 7.45236 15.9115 7.74248 15.9115 8.10036L15.9115 21.1985L20.6704 16.4397C20.9234 16.1866 21.3337 16.1866 21.5868 16.4397Z"
                            fill="black" />
                    </svg>
                </div>
            </div>
            <div className="w-full mx-auto bg-neutral-100 rounded-[20px] md:p-4 p-0">
                <div className="flex flex-col">
                    <div className="p-8">
                        <div className="flex flex-col md:flex-row justify-start">
                            <div class="py-3 flex flex-col justify-center bg-white rounded-xl border cursor-pointer">
                                <div
                                    class="text-black text-base font-medium font-display tracking-tight ml-[24px] mr-[24px]">
                                    Hangi
                                    tarihlerde
                                    gitmek istersin?</div>
                                <div
                                    class="text-black text-base font-light font-display tracking-tight ml-[24px] mr-[24px]">
                                    Tarih aralığı seçin</div>
                            </div>
                            <div
                                class="max-w-[307px] py-3 flex flex-col justify-center bg-white rounded-xl border md:ml-[15px] cursor-pointer">
                                <div class="flex flex-row justify-between items-center mr-[15px]">
                                    <div class="flex flex-col mb-[3px]">
                                        <div class="text-black text-base font-medium font-display tracking-tight ml-[24px]">
                                            Rota
                                            Seçin</div>
                                        <div class="text-black text-base font-light font-display tracking-tight ml-[24px]">
                                            Kuşadası - Samos</div>
                                    </div>
                                    <div>
                                        <svg width="30" height="31" viewBox="0 0 30 31" fill="none"
                                            xmlns="http://www.w3.org/2000/svg">
                                            <path fill-rule="evenodd" clip-rule="evenodd"
                                                d="M21.5863 16.4397C21.8394 16.6927 21.8394 17.103 21.5863 17.3561L15.7213 23.2211C15.4682 23.4742 15.0579 23.4742 14.8048 23.2211L8.93982 17.3561C8.68676 17.103 8.68676 16.6928 8.93982 16.4397C9.19288 16.1866 9.60317 16.1866 9.85623 16.4397L14.615 21.1985V8.10036C14.615 7.74248 14.9052 7.45236 15.263 7.45236C15.6209 7.45236 15.911 7.74248 15.911 8.10036L15.911 21.1985L20.6699 16.4397C20.9229 16.1866 21.3332 16.1866 21.5863 16.4397Z"
                                                fill="black" />
                                        </svg>

                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="mt-8 mb-[80px] rounded-2xl rounded-b-lg">
                            <div
                                class="bg-white pt-10 pl-10 rounded-t-lg text-black text-xl font-semibold font-['Plus Jakarta Sans']">
                                Kuşadası -
                                Samos Feribot Seferleri</div>
                            <table className="relative bg-white w-full">
                                <thead class="">
                                    <tr v-for="(header, index) in tableHeaders" :key="index"
                                        class="mt-[64px] md:pl-[50px] md:ml-16 m-4 flex flex-row justify-between items-center text-black text-lg font-semibold leading-loose rounded-lg">
                                        <th v-for="(label, labelIndex) in header" :key="labelIndex" class="w-full flex">
                                            {{ label }}</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    <tr v-for="(row, index) in tableData" :key="index"
                                        class="md:ml-16 md:mr-16 mb:mb-16 m-4 flex flex-row justify-between text-black text-lg font-normal leading-loose border border-neutral-200 rounded-lg">
                                        <td v-for="(cell, cellIndex) in row" :key="cellIndex"
                                            class="w-full border-r border-neutral-300 pt-[33px] pb-[33px] md:pl-[50px] pl-2 md:pr-[50px] pr-2">
                                            <span v-if="Array.isArray(cell)">
                                                <ul>
                                                    <li v-for="(item, itemIndex) in cell" :key="itemIndex"
                                                        class="leading-4 mb-[27px] ">{{ item }}</li>
                                                </ul>
                                            </span>
                                            <span v-else>{{ cell }}</span>
                                        </td>
                                    </tr>
                                </tbody>
                            </table>
                            <div class="mt-16">
                                <div className="flex flex-row items-center">
                                    <IconAsteriskSimple />
                                    <h2 className="text-black teacxt-base font-medium leading-[26.88px] h-7 ml-3">
                                        {{ whichFerry }}
                                    </h2>
                                </div>
                                <div className="flex flex-row items-center mt-5">
                                    <IconAsteriskSimple />
                                    <h2 className="text-black teacxt-base font-medium leading-[26.88px] h-7 ml-3">
                                        Samos adasına seyahatiniz için gerekli olan en az altı ay geçerli bir pasaport ve
                                        Schengen<br /> vizesi olup vize konusunda dilerseniz firmamız sizlere yardımcı
                                        olmaktan
                                        mutluluk duyacaktır.
                                    </h2>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconAsteriskSimple from "../components/icons/IconAsteriskSimple.vue";

const tableHeaders = [
    ["Gün", "Kuşadası Kalkış", "Samosa Kalkış"]
];

const tableData = [
    ["4 Kasım - Cumartesi", ["Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00"], "Samos Vathy - 17:00"],
    ["4 Kasım - Cumartesi", ["Kuşadası - 09:00", "Kuşadası - 09:00", "Kuşadası - 09:00"], "Samos Vathy - 17:00"],
    ["4 Kasım - Cumartesi", ["Kuşadası - 09:00", "Kuşadası - 09:00"], "Samos Vathy - 17:00"],
];

const whichFerry = "Alttaki Samos’a feribot bileti ücretlerine Kuşadası ve Samos liman vergileri dahildir.";
</script>
  
<style scoped></style>