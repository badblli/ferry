<template>
     <div class="flex flex-col">
          <div class="items-center mb-8" v-for="(person, index) in people" :key="index">
               <div class="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex items-center justify-between">
                    <div class="ml-[46px]">
                         <div>
                              <h2 class="mb-1 text-black text-base font-medium font-display">
                                   {{ person.title }}
                              </h2>
                              <input :disabled="!person.editing" v-model="person.value" class="border border-gray-300 rounded text-zinc-600 text-base font-normal font-display tracking-tight" @keyup.enter="saveEdit(index)" />
                              <!-- <h2 v-else class="text-zinc-600 text-base font-normal font-display tracking-tight">
                                   {{ person.value }}
                              </h2> -->
                         </div>
                    </div>
                    <div class="w-32 h-14 px-8 py-4 rounded-xl justify-center items-center gap-2.5 inline-flex mr-10 hover:bg-slate-200 cursor-pointer transition ease-in-out delay-100">
                         <button class="text-center text-black text-base font-bold font-text leading-normal" @click="editField(index)">
                              {{ person.editing ? 'Kaydet' : 'Düzenle' }}
                         </button>
                         <!-- <button v-if="person.editing" class="ml-2 px-4 py-1 bg-gray-300 text-gray-700 rounded" @click="cancelEdit(index)">İptal</button> -->
                    </div>
               </div>
          </div>
     </div>
</template>
<script setup lang="ts">
import { ref, computed, defineProps } from 'vue'
import { useUserStore } from '@/stores/auth'

const userStore = useUserStore()
const userInfo = ref(userStore.user)

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
     { title: 'Şifre', value: '*****', editing: false } // Şifre güvenlik nedeniyle yıldızlarla gösterilmelidir.
])

let editedValue = ref('')

const editField = (index: number) => {
     people.value[index].editing = !people.value[index].editing
     editedValue.value = people.value[index].value
}

const saveEdit = (index: number) => {
     people.value[index].value = editedValue.value
     people.value[index].editing = false
}

const cancelEdit = (index: number) => {
     people.value[index].editing = false
     editedValue.value = people.value[index].value
}

// Computed property to determine button text and color
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
