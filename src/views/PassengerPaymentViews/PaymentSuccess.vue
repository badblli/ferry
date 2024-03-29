<template>
    <div class="w-full bg-white p-5">
        <div class="w-[100px] h-[100px] bg-slate-200 rounded-full mb-[37px] flex flex-row items-center justify-center">
            <IconCheckBlack />
        </div>
        <div class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] tracking-wide mb-[34px]">Ödemeniz
            başarıyla
            alınmıştır.</div>
        <div
            class="w-full text-black text-base font-medium font-['Plus Jakarta Sans'] leading-[26.88px] tracking-tight mb-[51px]">
            Ödemenizi güvenli bir şekilde tamamladınız. Altta yer alan yöntemler ile biletinize ulaşabilirsiniz.</div>
        <div class="flex flex-row items-center">
            <div class="text-black text-lg font-semibold font-['Plus Jakarta Sans']">Rezervasyon Numaranız : </div>
            <div
                class="w-[136px] h-8 bg-slate-200 rounded-lg border ml-[15px] flex flex-row items-center justify-center">
                <div class="text-black text-[15px] font-medium font-display">21GGD31AS</div>
                <div class="ml-[6px]">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M20.25 3H8.25C8.05109 3 7.86032 3.07902 7.71967 3.21967C7.57902 3.36032 7.5 3.55109 7.5 3.75V7.5H3.75C3.55109 7.5 3.36032 7.57902 3.21967 7.71967C3.07902 7.86032 3 8.05109 3 8.25V20.25C3 20.4489 3.07902 20.6397 3.21967 20.7803C3.36032 20.921 3.55109 21 3.75 21H15.75C15.9489 21 16.1397 20.921 16.2803 20.7803C16.421 20.6397 16.5 20.4489 16.5 20.25V16.5H20.25C20.4489 16.5 20.6397 16.421 20.7803 16.2803C20.921 16.1397 21 15.9489 21 15.75V3.75C21 3.55109 20.921 3.36032 20.7803 3.21967C20.6397 3.07902 20.4489 3 20.25 3ZM15 19.5H4.5V9H15V19.5ZM19.5 15H16.5V8.25C16.5 8.05109 16.421 7.86032 16.2803 7.71967C16.1397 7.57902 15.9489 7.5 15.75 7.5H9V4.5H19.5V15Z"
                            fill="#1F2A37" />
                    </svg>
                </div>
            </div>
        </div>
        <div class="w-full h-[1px] origin-top-left border border-zinc-300 my-10"></div>
        <div class="flex flex-row items-center">
            <div class="text-black text-lg font-semibold font-['Plus Jakarta Sans']">Kazandığınız Mil Puanı : </div>
            <div
                class="w-[136px] h-8 bg-slate-200 rounded-lg border flex flex-row items-center justify-center ml-[35px]">
                <div class="text-black text-[15px] font-medium font-display">15 Puan</div>
            </div>
        </div>
        <div class="mt-14">
            <div class="flex flex-col md:flex-row">
                <div
                    class="w-[271px] h-[83px] bg-white rounded-xl border border-zinc-300 flex flex-row items-center justify-center cursor-pointer mr-3 mb-4">
                    <div class="w-10">
                        <!-- <img src="../../assets/EmbeddedImages//AppleWallet.png" /> -->
                    </div>
                    <div class="text-black text-base font-semibold font-['Plus Jakarta Sans'] ml-7">Wallet'ıma ekle
                    </div>
                </div>
                <div
                    class="w-[271px] h-[83px] mr-3 bg-white rounded-xl border border-zinc-300 flex flex-row items-center justify-center cursor-pointer mb-4">
                    <IconDownloadSimple />
                    <div class="text-black text-base font-semibold font-['Plus Jakarta Sans'] ml-7">Biletimi İndir</div>
                </div>
                <div
                    class="w-[271px] h-[83px] bg-white rounded-xl border border-zinc-300 flex flex-row items-center justify-center cursor-pointer mb-4">
                    <IconPrinter />
                    <div class="text-black text-base font-semibold font-['Plus Jakarta Sans'] ml-7">Yazıcıya Gönder
                    </div>
                </div>
            </div>
            <div class="mt-[46px]">
                <div class="flex md:flex-row flex-col">
                    <div class="flex flex-row mr-[50px] mb-[48px] cursor-pointer" @click="navigateToHome">
                        <div class="text-black text-base font-semibold font-['Plus Jakarta Sans']">Anasayfaya dön</div>
                        <div class="w-7 h-7 p-1 bg-gray-800 rounded-full justify-center items-center inline-flex ml-3">
                            <div class="w-5 h-5 relative flex-col justify-start items-start flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g id="ArrowUpRight">
                                        <path id="Vector" opacity="0.2" d="M15 5V13.125L6.875 5H15Z" fill="white" />
                                        <path id="Vector_2"
                                            d="M14.9999 4.375H6.87486C6.75117 4.3749 6.63024 4.41151 6.52737 4.48017C6.4245 4.54884 6.34432 4.64649 6.29697 4.76076C6.24962 4.87502 6.23725 5.00076 6.2614 5.12207C6.28556 5.24337 6.34516 5.35478 6.43267 5.44219L10.0538 9.0625L4.55767 14.5578C4.4996 14.6159 4.45354 14.6848 4.42211 14.7607C4.39069 14.8366 4.37451 14.9179 4.37451 15C4.37451 15.0821 4.39069 15.1634 4.42211 15.2393C4.45354 15.3152 4.4996 15.3841 4.55767 15.4422C4.61574 15.5003 4.68468 15.5463 4.76055 15.5777C4.83642 15.6092 4.91774 15.6253 4.99986 15.6253C5.08198 15.6253 5.1633 15.6092 5.23917 15.5777C5.31504 15.5463 5.38398 15.5003 5.44205 15.4422L10.9374 9.94609L14.5577 13.5672C14.6451 13.6547 14.7565 13.7143 14.8778 13.7385C14.9991 13.7626 15.1248 13.7502 15.2391 13.7029C15.3534 13.6555 15.451 13.5754 15.5197 13.4725C15.5884 13.3696 15.625 13.2487 15.6249 13.125V5C15.6249 4.83424 15.559 4.67527 15.4418 4.55806C15.3246 4.44085 15.1656 4.375 14.9999 4.375ZM14.3749 11.6164L11.3795 8.62109L8.38345 5.625H14.3749V11.6164Z"
                                            fill="white" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div class="flex flex-row cursor-pointer" @click="navigateToReservation">
                        <div class="text-black text-base font-semibold font-['Plus Jakarta Sans']">Rezervasyonlarıma Git
                        </div>
                        <div class="w-7 h-7 p-1 bg-gray-800 rounded-full justify-center items-center inline-flex ml-3">
                            <div class="w-5 h-5 relative flex-col justify-start items-start flex">
                                <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"
                                    fill="none">
                                    <g id="ArrowUpRight">
                                        <path id="Vector" opacity="0.2" d="M15 5V13.125L6.875 5H15Z" fill="white" />
                                        <path id="Vector_2"
                                            d="M14.9999 4.375H6.87486C6.75117 4.3749 6.63024 4.41151 6.52737 4.48017C6.4245 4.54884 6.34432 4.64649 6.29697 4.76076C6.24962 4.87502 6.23725 5.00076 6.2614 5.12207C6.28556 5.24337 6.34516 5.35478 6.43267 5.44219L10.0538 9.0625L4.55767 14.5578C4.4996 14.6159 4.45354 14.6848 4.42211 14.7607C4.39069 14.8366 4.37451 14.9179 4.37451 15C4.37451 15.0821 4.39069 15.1634 4.42211 15.2393C4.45354 15.3152 4.4996 15.3841 4.55767 15.4422C4.61574 15.5003 4.68468 15.5463 4.76055 15.5777C4.83642 15.6092 4.91774 15.6253 4.99986 15.6253C5.08198 15.6253 5.1633 15.6092 5.23917 15.5777C5.31504 15.5463 5.38398 15.5003 5.44205 15.4422L10.9374 9.94609L14.5577 13.5672C14.6451 13.6547 14.7565 13.7143 14.8778 13.7385C14.9991 13.7626 15.1248 13.7502 15.2391 13.7029C15.3534 13.6555 15.451 13.5754 15.5197 13.4725C15.5884 13.3696 15.625 13.2487 15.6249 13.125V5C15.6249 4.83424 15.559 4.67527 15.4418 4.55806C15.3246 4.44085 15.1656 4.375 14.9999 4.375ZM14.3749 11.6164L11.3795 8.62109L8.38345 5.625H14.3749V11.6164Z"
                                            fill="white" />
                                    </g>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconQR from '@/components/icons/IconQR.vue';
import IconDownloadSimple from '@/components/icons/IconDownloadSİmple.vue'
import IconPrinter from '@/components/icons/IconPrinter.vue'
import IconCheckBlack from '@/components/icons/IconCheckBlack.vue'
import { useRouter } from "vue-router";

const router = useRouter();
const navigateToHome = () => {
    router.push('/');
};

const navigateToReservation = () => {
    router.push('/reservation');
};
</script>

<style></style>