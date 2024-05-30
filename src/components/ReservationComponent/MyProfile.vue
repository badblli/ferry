<template>
     <div class="flex flex-col">
          <div class="items-center mb-8" v-for="(person, index) in people" :key="index">
               <div class="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex items-center justify-between">
                    <div class="ml-[46px]">
                         <div>
                              <h2 class="mb-1 text-black text-base font-medium font-display">
                                   {{ person.title }}
                              </h2>
                              <input :disabled="!person.editing" v-model="person.value" class="border border-gray-300 rounded text-zinc-600 text-base font-normal font-display tracking-tight" />
                         </div>
                    </div>
                    <div class="w-32 h-14 px-8 py-4 rounded-xl justify-center items-center gap-2.5 inline-flex mr-10 hover:bg-slate-200 cursor-pointer transition ease-in-out delay-100">
                         <button class="text-center text-black text-base font-bold font-text leading-normal" @click="person.editing ? saveEdit(index) : editField(index)">
                              {{ person.editing ? 'Kaydet' : 'Düzenle' }}
                         </button>
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import { callPostApi } from '@/utils/globalHelper'
import p from '@/utils/pathConfig'
import { useUserStore } from '@/stores/auth'

const userStore = useUserStore()
const userInfo = ref(userStore.user)
const applicationName = ref(p.Product)
const controllerName = ref('Product')
const name = ref('SaveMember')

const people = ref([
     { title: 'İsim', value: userInfo.value ? userInfo.value.Name : '', editing: false },
     { title: 'Soyisim', value: userInfo.value ? userInfo.value.SurName : '', editing: false },
     { title: 'E-posta Adresi', value: userInfo.value ? userInfo.value.EmailAddress : '', editing: false },
     { title: 'Telefon Numarası', value: userInfo.value ? userInfo.value.PhoneNumber : '', editing: false },
     { title: 'Doğum Tarihi', value: userInfo.value ? userInfo.value.BirthDate : '', editing: false },
     { title: 'TC Kimlik Numarası', value: userInfo.value ? userInfo.value.TckNo : '', editing: false },
     { title: 'Pasaport Numarası', value: userInfo.value ? userInfo.value.PassportNumber : '', editing: false },
     { title: 'Uyruğu', value: userInfo.value ? userInfo.value.NationalityID : '', editing: false },
     { title: 'Adres Bilgileri', value: userInfo.value ? userInfo.value.Address : '', editing: false },
     { title: 'Şifre', value: '*****', editing: false }
])

const editedValue = ref('')

const editField = (index: number) => {
     people.value[index].editing = !people.value[index].editing
}

const saveEdit = (index: number) => {
     console.log(people.value[index].value)

     people.value[index].editing = false
     console.log(people.value[index].value)
     updateUserInfo()
}

const updateUserInfo = () => {
     const updatedUserInfo = {
          ...userInfo.value,
          Name: people.value[0].value,
          SurName: people.value[1].value,
          EmailAddress: people.value[2].value,
          PhoneNumber: people.value[3].value,
          BirthDate: people.value[4].value,
          TckNo: people.value[5].value,
          PassportNumber: people.value[6].value,
          NationalityID: people.value[7].value,
          Address: people.value[8].value
          // Password is not updated for security reasons
     }
     saveMember(updatedUserInfo)
}
const saveMember = async (userInfo: any) => {
     try {
          const response = await callPostApi(applicationName.value, controllerName.value, name.value, userInfo)
          console.log(response, 'responseVARMI')
          if (response && response.data.status === 1) {
               let resUserInfo = JSON.parse(response.data.result)
               userStore.saveMember(resUserInfo)

               console.log(userInfo, 'responseVAR')
          } else {
               console.error('Unexpected response status:', response?.data?.status)
          }
     } catch (error) {
          console.error('An error occurred:', error)
     }
}
const cancelEdit = (index: number) => {
     people.value[index].editing = false
     editedValue.value = people.value[index].value
}

const buttonProps = computed(() => {
     return (index: number) => {
          const value = people.value[index].value
          if (!value.trim()) {
               return { text: 'Ekle', color: 'red' }
          } else {
               return { text: 'Düzenle', color: 'blue' }
          }
     }
})
</script>
