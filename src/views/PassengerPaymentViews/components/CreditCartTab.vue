<template>
     <div class="w-[378px] text-black text-base font-medium font-['Plus Jakarta Sans'] leading-[26.88px] tracking-tight mb-[34px]">{{ data.description }}</div>
     <div class="mt-[70px]">
          <div class="text-black text-base font-normal font-['Plus Jakarta Sans'] leading-7 mt-[58px]">
               <form class="w-full max-w-sm">
                    <InputBasic :placeholder="data.creditCardNo" ariaLabel="Full name" />
                    <InputBasic :placeholder="data.creditCardName" ariaLabel="Full name" />
                    <InputExperationDate :placeholder="data.lastUseDate" :info="data.dayMonth" ariaLabel="E-posta" />
                    <InputSecure :placeholder="data.cvv" :info="data.threeDigitCode" type="password" ariaLabel="password" />
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
import InputBasic from './InputBasic.vue'
import InputExperationDate from './InputExperationDate.vue'
import InputSecure from './InputSecure.vue'

interface PaymentTab {
     id: number
     tabTitle: string
     description: string
     creditCardNo: string
     creditCardName: string
     lastUseDate: string
     dayMonth: string
     cvv: string
     threeDigitCode: string
}

const props = defineProps<{
     data: PaymentTab
}>()
</script>

<style scoped></style>
