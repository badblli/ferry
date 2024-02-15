<template>
    <div class="w-full bg-white p-5">
        <div class="w-[100px] h-[100px] bg-slate-200 rounded-full mb-[37px] flex flex-row items-center justify-center">
            <IconCheck />
        </div>
        <div class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] tracking-wide mb-[34px]">Ödemeniz başarıyla
            alınmıştır.</div>
        <div
            class="w-[417px] text-black text-base font-medium font-['Plus Jakarta Sans'] leading-[26.88px] tracking-tight mb-[51px]">
            Ödemenizi güvenli bir şekilde tamamladınız. Altta yer alan yöntemler ile biletinize ulaşabilirsiniz.</div>
        <div class="flex flex-row items-center">
            <div class="text-black text-lg font-semibold font-['Plus Jakarta Sans']">Rezervasyon Numaranız : </div>
            <div class="w-[136px] h-8 bg-slate-200 rounded-lg border ml-[15px] flex flex-row items-center justify-center">
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
        <div class="w-[403px] h-[1px] origin-top-left border border-zinc-300 my-10"></div>
        <div class="flex flex-row items-center">
            <div class="text-black text-lg font-semibold font-['Plus Jakarta Sans']">Kazandığınız Mil Puanı : </div>
            <div class="w-[136px] h-8 bg-slate-200 rounded-lg border flex flex-row items-center justify-center ml-[35px]">
                <div class="text-black text-[15px] font-medium font-display">15 Puan</div>
            </div>
        </div>
        <div class="mt-14">
            <div class="flex flex-row">
                <div
                    class="w-[271px] h-[83px] bg-white rounded-xl border border-zinc-300 flex flex-row items-center justify-center cursor-pointer mr-3 mb-4">
                    <IconQR />
                    <div class="text-black text-base font-semibold font-['Plus Jakarta Sans'] ml-7">QR Code ile ulaş</div>
                </div>
                <div
                    class="w-[271px] h-[83px] bg-white rounded-xl border border-zinc-300 flex flex-row items-center justify-center cursor-pointer">
                    <IconDownloadSimple />
                    <div class="text-black text-base font-semibold font-['Plus Jakarta Sans'] ml-7">Biletimi İndir</div>
                </div>
            </div>
            <div class="flex flex-row">
                <div
                    class="w-[271px] h-[83px] bg-white rounded-xl border border-zinc-300 flex flex-row items-center justify-center cursor-pointer mr-3 mb-4">
                    <IconQR />
                    <div class="text-black text-base font-semibold font-['Plus Jakarta Sans'] ml-7">Wallet'ıma ekle</div>
                </div>
                <div
                    class="w-[271px] h-[83px] bg-white rounded-xl border border-zinc-300 flex flex-row items-center justify-center cursor-pointer">
                    <IconPrinter />
                    <div class="text-black text-base font-semibold font-['Plus Jakarta Sans'] ml-7">QR Code ile ulaş</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
// import IconCheck from '@/components/icons/IconCheck.vue';
import IconQR from '@/components/icons/IconQR.vue';
import IconDownloadSimple from '@/components/icons/IconDownloadSİmple.vue'
import IconPrinter from '@/components/icons/IconPrinter.vue'
import IconCheck from '@/components/icons/IconCheck.vue'
</script>

<style></style>