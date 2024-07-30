<template>
     <div class="max-w-[378px] text-black text-base font-medium font-['Plus Jakarta Sans'] leading-[26.88px] tracking-tight mb-[34px]">{{ data.description }}</div>
     <div class="mt-[70px]">
          <div class="text-black text-base font-normal font-['Plus Jakarta Sans'] leading-7 mt-[58px]">
               <form class="w-full max-w-sm">
                    <InputBasic v-model="creditCardNo" :placeholder="data.creditCardNo" ariaLabel="Full name" @update:modelValue="updateCreditCardNo" />
                    <InputBasic v-model="creditCardName" :placeholder="data.creditCardName" ariaLabel="Full name" @update:modelValue="updateCreditCardName" />
                    <InputExperationDate v-model="lastUseDate" :placeholder="data.lastUseDate" ariaLabel="E-posta" :info="data.dayMonth" @update:modelValue="updateLastUseDate" />
                    <InputSecure v-model="cvv" :placeholder="data.cvv" :info="data.threeDigitCode" ariaLabel="password" type="password" @update:modelValue="updateCVV" />
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
import { ref } from 'vue'
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

const emit = defineEmits(['updateData'])

const creditCardNo = ref('')
const creditCardName = ref('')
const lastUseDate = ref('')
const cvv = ref('')

const updateCreditCardNo = (value: string) => {
     creditCardNo.value = value
     emitUpdateParentParent('creditCardNo', value)
}

const updateCreditCardName = (value: string) => {
     creditCardName.value = value
     emitUpdateParentParent('creditCardName', value)
}

const updateLastUseDate = (value: string) => {
     lastUseDate.value = value
     emitUpdateParentParent('lastUseDate', value)
}

const updateCVV = (value: string) => {
     cvv.value = value
     emitUpdateParentParent('cvv', value)
}

const emitUpdateParentParent = (key: string, value: string) => {
     emit('updateData', { key, value })
}
</script>

<style scoped></style>
