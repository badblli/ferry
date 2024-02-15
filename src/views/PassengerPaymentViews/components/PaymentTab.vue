<template>
    <div class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] tracking-wide mb-[34px]">
        {{ fakeData.title }}</div>
    <div
        class="w-[378px] text-black text-base font-medium font-['Plus Jakarta Sans'] leading-[26.88px] tracking-tight mb-[34px]">
        Faturalama işlemi için yetişkin kullanıcılardan altta seçim
        yapabilirsiniz.</div>
    <div class="flex flex-row">
        <div>
            <div
                class="mr-[10px] py-[13px] pl-[14px] pr-[11px] bg-white rounded-lg border border-stone-300 flex flex-row items-center justify-center">
                <div class="text-black text-base font-medium font-['Plus Jakarta Sans'] mr-7">
                    Yeni Fatura Girişi</div>
                <div>
                    <IconPlus />
                </div>
            </div>
        </div>
        <div>
            <div
                class="mr-[10px] py-[13px] pl-[14px] pr-[14px]  bg-blue-700 rounded-lg border flex flex-row items-center justify-center">
                <div class="text-white text-base font-medium font-['Plus Jakarta Sans'] mr-[17px]">
                    Yaman B.</div>
                <div>
                    <IconCheck />
                </div>
            </div>
        </div>
        <div>
            <div
                class="py-[13px] pl-[14px]  bg-white rounded-lg border border-stone-300 flex flex-row items-center justify-center">
                <div class="text-black text-base font-medium font-['Plus Jakarta Sans'] mr-[17px]">
                    Samet A.</div>
            </div>
        </div>
    </div>
    <div class="mt-[70px]">
        <div class="text-black text-base font-normal font-['Plus Jakarta Sans'] leading-7 mt-[67px]">
            <form class="w-full max-w-sm">
                <InputBasic placeholder="İsim *" ariaLabel="Full name" />
                <InputBasic placeholder="Soyisim *" ariaLabel="Full name" />
                <InputBasic placeholder="E-Posta Adresiniz" ariaLabel="E-posta" />
                <InputPhone placeholder="Telefon" ariaLabel="Phone" />
                <InputBirth placeholder="Doğum Tarihiniz" ariaLabel="Birth" />
                <InputBasic placeholder="Uyruğunuzu Seçin" ariaLabel="years" />
                <InputBasic placeholder="Pasaport numaranızı girin" ariaLabel="Pasaport" />
                <InputBasic placeholder="T.C Numaranızı girin" ariaLabel="id" />
                <InputBasic placeholder="Lütfen tam adresinizi girin." ariaLabel="adress" />
            </form>
        </div>
    </div>
    <div class="flex flex-row justify-end mr-9 mb-[34px]">
        <button class="w-[222px] h-[53px] bg-blue-700 rounded-lg border">
            <div class="text-center text-white text-lg font-medium font-['Plus Jakarta Display']">
                Bilgileri Kaydet</div>
        </button>
    </div>
</template>
  
<script setup lang="ts">
import InputBasic from './InputBasic.vue';
import InputBirth from './InputBirth.vue';
import InputPhone from './InputPhone.vue';
import IconPlus from '@/components/icons/IconPlus.vue'
import IconCheck from '@/components/icons/IconCheck.vue'

defineProps<{
    fakeData: {
        title: string;
    };
}>();
</script>

<style scoped></style>
