<template>
    <table class="w-full">
        <thead class="flex flex-row">
            <tr class="flex flex-row w-full justify-between mb-9 ml-[30px]">
                <th scope="col"
                    class="text-start text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-loose w-full">
                    Rezervasyon
                </th>
                <th scope="col"
                    class="text-start text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-loose w-full">
                    Tarih
                </th>
                <th scope="col"
                    class="text-start text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-loose w-full">
                    Durumu
                </th>
                <th scope="col"
                    class="text-start text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-loose w-full">
                    Toplam
                </th>
                <th scope="col"
                    class="text-start text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-loose w-full">
                </th>    
     
            </tr>
        </thead>
        <tbody>
            <tr v-for="(reservation, index) in reservations" :key="index"
                class="flex flex-row items-center rounded-2xl border border-stone-300 mb-[15px]">
                <td class="whitespace-nowrap text-sm text-gray-800 flex w-full ml-[30px]">
                    <span class="whitespace-nowrap text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-7">
                        {{ reservation.number }}
                    </span>
                    <span
                        class="flex justify-center items-center cursor-pointer w-[33px] h-[33px] bg-neutral-100 rounded-full ml-[29px]">
                        <svg width="21" height="21" viewBox="0 0 21 21" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M17.7188 2.625H7.21875C7.0447 2.625 6.87778 2.69414 6.75471 2.81721C6.63164 2.94028 6.5625 3.1072 6.5625 3.28125V6.5625H3.28125C3.1072 6.5625 2.94028 6.63164 2.81721 6.75471C2.69414 6.87778 2.625 7.0447 2.625 7.21875V17.7188C2.625 17.8928 2.69414 18.0597 2.81721 18.1828C2.94028 18.3059 3.1072 18.375 3.28125 18.375H13.7812C13.9553 18.375 14.1222 18.3059 14.2453 18.1828C14.3684 18.0597 14.4375 17.8928 14.4375 17.7188V14.4375H17.7188C17.8928 14.4375 18.0597 14.3684 18.1828 14.2453C18.3059 14.1222 18.375 13.9553 18.375 13.7812V3.28125C18.375 3.1072 18.3059 2.94028 18.1828 2.81721C18.0597 2.69414 17.8928 2.625 17.7188 2.625ZM13.125 17.0625H3.9375V7.875H13.125V17.0625ZM17.0625 13.125H14.4375V7.21875C14.4375 7.0447 14.3684 6.87778 14.2453 6.75471C14.1222 6.63164 13.9553 6.5625 13.7812 6.5625H7.875V3.9375H17.0625V13.125Z"
                                fill="#1F2A37" />
                        </svg>
                    </span>
                </td>
                <td class="whitespace-nowrap text-black text-base font-normal font-['Plus Jakarta Sans'] w-full">
                    {{ reservation.date }}
                </td>
                <td class="whitespace-nowrap text-sm text-gray-800 flex w-full my-[25px]">
                    <span :class="{
                        'bg-green-100': reservation.status === 'Onaylandı',
                        'bg-red-100': reservation.status === 'İptal Edildi',
                        'bg-blue-100': reservation.status === 'Onay Bekliyor' }"
                        class="w-[124px] h-[37px] rounded-lg  cursor-pointer p-2 mr-3 text-center text-black text-sm font-semibold font-['Plus Jakarta Sans']">
                        {{ reservation.status }}
                    </span>
                </td>
                <td class="whitespace-nowrap text-black text-base font-normal font-['Plus Jakarta Sans'] w-full">
                    {{ reservation.total }}
                </td>
                <td class="whitespace-nowrap text-sm text-gray-800 flex w-full">
                    <span
                        class="w-[124px] h-[37px] bg-neutral-100 rounded-lg  cursor-pointer p-2 mr-3 text-center text-black text-sm font-semibold font-['Plus Jakarta Sans']">
                        Detay Göster
                    </span>
                    <span class="flex justify-center items-center cursor-pointer">
                        <span class="flex justify-center items-center cursor-pointer">
                            <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path
                                    d="M17.5 16C17.5 16.2967 17.412 16.5867 17.2472 16.8334C17.0824 17.08 16.8481 17.2723 16.574 17.3858C16.2999 17.4993 15.9983 17.5291 15.7074 17.4712C15.4164 17.4133 15.1491 17.2704 14.9393 17.0607C14.7296 16.8509 14.5867 16.5836 14.5288 16.2926C14.4709 16.0017 14.5007 15.7001 14.6142 15.426C14.7277 15.1519 14.92 14.9176 15.1666 14.7528C15.4133 14.588 15.7033 14.5 16 14.5C16.3978 14.5 16.7794 14.658 17.0607 14.9393C17.342 15.2206 17.5 15.6022 17.5 16ZM24.5 14.5C24.2033 14.5 23.9133 14.588 23.6666 14.7528C23.42 14.9176 23.2277 15.1519 23.1142 15.426C23.0007 15.7001 22.9709 16.0017 23.0288 16.2926C23.0867 16.5836 23.2296 16.8509 23.4393 17.0607C23.6491 17.2704 23.9164 17.4133 24.2074 17.4712C24.4983 17.5291 24.7999 17.4993 25.074 17.3858C25.3481 17.2723 25.5824 17.08 25.7472 16.8334C25.912 16.5867 26 16.2967 26 16C26 15.6022 25.842 15.2206 25.5607 14.9393C25.2794 14.658 24.8978 14.5 24.5 14.5ZM7.5 14.5C7.20333 14.5 6.91332 14.588 6.66665 14.7528C6.41997 14.9176 6.22771 15.1519 6.11418 15.426C6.00065 15.7001 5.97094 16.0017 6.02882 16.2926C6.0867 16.5836 6.22956 16.8509 6.43934 17.0607C6.64912 17.2704 6.91639 17.4133 7.20737 17.4712C7.49834 17.5291 7.79994 17.4993 8.07403 17.3858C8.34811 17.2723 8.58238 17.08 8.74721 16.8334C8.91203 16.5867 9 16.2967 9 16C9 15.6022 8.84197 15.2206 8.56066 14.9393C8.27936 14.658 7.89783 14.5 7.5 14.5Z"
                                    fill="#1F2A37" />
                            </svg>
                        </span>
                    </span>
                </td>
            </tr>
        </tbody>
    </table>
</template>
  
<script setup lang="ts">
import { defineProps } from 'vue';
const { reservations } = defineProps(['reservations']);
</script>