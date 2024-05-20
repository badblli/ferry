<template>
    <div
        class="w-[378px] text-black text-base font-medium font-['Plus Jakarta Sans'] leading-[26.88px] tracking-tight mb-[34px]">
        Ödemenizi bu sayfa üzerinden güvenli şekilde yapabilirsiniz. 3D Secure aktif olarak kullanabilirsiniz.</div>
    <div class="mt-[70px]">
        <div class="text-black text-base font-normal font-['Plus Jakarta Sans'] leading-7 mt-[58px]">
            <form class="w-full max-w-sm">
                <InputBasic placeholder="Kredi Kartı Numarası" ariaLabel="Full name" />
                <InputBasic placeholder="Kart Üzerindeki İsim" ariaLabel="Full name" />
                <InputExperationDate placeholder="Son Kullanma Tarihi" ariaLabel="E-posta" />
                <InputSecure placeholder="Güvenli Kod" type="password" ariaLabel="password" />
            </form>
        </div>
    </div>
    <!-- <div class="flex flex-row justify-end mr-9 mb-[34px]">
        <button class="w-[222px] h-[53px] bg-blue-700 rounded-lg border">
            <div class="text-center text-white text-lg font-medium font-['Plus Jakarta Display']">
                Bilgileri Kaydet</div>
        </button>
    </div> -->
</template>
  
<script setup lang="ts">
import InputBasic from './InputBasic.vue';
import InputExperationDate from './InputExperationDate.vue';
import InputSecure from './InputSecure.vue';

defineProps<{
    fakeData: {
        title: string;
    };
}>();
</script>

<style scoped></style>
