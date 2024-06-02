<template>
     <div>
          <div class="fixed inset-0 flex flex-col items-center justify-start z-50 bg-white w-[638px] h-[732px] m-auto overflow-y-hidden rounded-3xl">
               <div class="flex flex-row items-center justify-center mt-10 w-full">
                    <div class="w-full flex flex-row justify-center">
                         <div class="text-black text-xl font-semibold font-['Plus Jakarta Sans'] ml-20">Kullanıcı Kaydı</div>
                    </div>
                    <div class="mr-5 cursor-pointer" @click="closeModal">
                         <div class="w-[65px] h-[65px] bg-neutral-100 rounded-full flex flex-row justify-center items-center">
                              <svg xmlns="http://www.w3.org/2000/svg" width="34" height="34" viewBox="0 0 34 34" fill="none">
                                   <g id="vuesax/outline/add">
                                        <g id="add">
                                             <path id="Vector" d="M20.7128 21.7726L12.2275 13.2873C11.9376 12.9974 11.9376 12.5165 12.2275 12.2266C12.5174 11.9367 12.9982 11.9367 13.2881 12.2266L21.7734 20.7119C22.0633 21.0018 22.0633 21.4826 21.7734 21.7726C21.4835 22.0625 21.0027 22.0625 20.7128 21.7726Z" fill="#2B2B33" />
                                             <path id="Vector_2" d="M12.2266 21.7726C11.9367 21.4826 11.9367 21.0018 12.2266 20.7119L20.7119 12.2266C21.0018 11.9367 21.4826 11.9367 21.7725 12.2266C22.0624 12.5165 22.0624 12.9974 21.7725 13.2873L13.2872 21.7726C12.9973 22.0625 12.5165 22.0625 12.2266 21.7726Z" fill="#2B2B33" />
                                        </g>
                                   </g>
                              </svg>
                         </div>
                    </div>
               </div>
               <div class="mt-[93px] mb-[44px] mx-auto">
                    <form class="flex justify-center items-center" @submit.prevent="saveMember">
                         <div class="grid gap-y-4 my-auto justify-between items-center">
                              <!-- Form Group -->
                              <div>
                                   <div class="relative">
                                        <div class="flex items-center border-b border-gray-200">
                                             <input v-model="forms.emailAddress" class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" type="email" id="email" name="email" placeholder="Email Address" aria-label="Full name" />
                                             <span class="flex-shrink-0 bg-white text-sm text-white flex justify-center items-center w-[50px] h-[50px] rounded-full" type="button"> </span>
                                        </div>
                                        <!-- <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none">
                                                    <svg class="h-5 w-5 text-red-500" width="16" height="16"
                                                        fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path
                                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div> -->
                                   </div>
                                   <!-- <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a
                                                valid
                                                email address so we can get back to you</p> -->
                              </div>
                              <!-- End Form Group -->
                              <!-- Form Group -->
                              <div class="w-[298px]">
                                   <div class="relative mt-2">
                                        <div class="flex items-center border-b border-gray-200">
                                             <input v-model="forms.password" class="mb-5 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-0" type="password" id="password" name="password" placeholder="Password" aria-label="Full name" />
                                             <span class="flex-shrink-0 bg-white text-sm text-white flex justify-center items-center w-[50px] h-[50px] rounded-full" type="button"> </span>
                                        </div>
                                        <!-- <div
                                                    class="hidden absolute inset-y-0 end-0 items-center pointer-events-none pe-3">
                                                    <svg class="h-5 w-5 text-red-500" width="16" height="16"
                                                        fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path
                                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div> -->
                                   </div>
                                   <!-- <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters
                                                required</p> -->
                              </div>
                              <!-- End Form Group -->
                              <!-- Checkbox -->
                              <!-- End Checkbox -->

                              {{ forms }}
                              <button type="submit" class="m-auto w-[398px] h-[62px] py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                   <div class="text-center text-white text-base font-bold font-text leading-normal">Üye Ol ve Başla</div>
                              </button>
                         </div>
                    </form>
               </div>
               <div class="w-[368px] text-center mb-[38px]"><span class="text-slate-500 text-sm font-normal font-['Plus Jakarta Sans'] leading-snug">Hesap oluşturmak, </span><span class="text-black text-sm font-medium font-['Plus Jakarta Sans'] leading-snug">Hizmet Koşullarımızı ve Gizlilik Politikamızı</span><span class="text-slate-500 text-sm font-normal font-['Plus Jakarta Sans'] leading-snug"> kabul ettiğiniz anlamına gelir</span></div>
               <!-- <div class="text-black text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px] tracking-widest">
                    YA DA</div> -->

               <!-- <div class="mt-7">
                    <div class="flex flex-col md:flex-row justify-center items-center">
                         <button
                              class="flex p-4 h-14 bg-white rounded-xl border border-stone-300 mr-1 text-zinc-600 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal flex flex-row items-center">
                              <IconGoogle />
                              <span class="ml-5">Sign up with Google</span>
                         </button>
                         <button
                              class="flex p-4 h-14 bg-white rounded-xl border border-stone-300  text-zinc-600 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal flex flex-row items-center">
                              <IconFacebook />
                              <span class="ml-5">Sign up with Facebook</span>
                         </button>
                    </div>
                    <p class="mt-8 text-sm h-14 flex justify-center">
                         Üyeliğin yok mu?
                         <a class="text-blue-600 decoration-2 hover:underline font-medium">
                              &nbsp;Kayıt Ol
                         </a>
                    </p>
               </div> -->
          </div>
     </div>
</template>

<script setup lang="ts">
import { defineEmits, ref } from 'vue'
import { callPostApi } from '@/utils/globalHelper'
import p from '@/utils/pathConfig'
import { useUserStore } from '@/stores/auth'
// import IconGoogle from '../icons/IconGoogle.vue';
// import IconFacebook from '../icons/IconFacebook.vue';

const userStore = useUserStore()
const applicationName = ref(p.Product)
const controllerName = ref('Product')
const name = ref('SaveMember')
const forms = ref({
     emailAddress: '',
     password: ''
})

const saveMember = async () => {
     console.log(forms.value, 'forms')

     try {
          const response = await callPostApi(applicationName.value, controllerName.value, name.value, forms.value)
          console.log(response, 'responseVARMI')
          if (response && response.data.status === 1) {
               let userInfo = JSON.parse(response.data.result)
               userStore.login(userInfo) // Burada response.data'nın UserInfo formatında olduğundan emin olun
               emit('closeModal')
               console.log(userInfo, 'responseVAR')
          } else {
               return
          }
     } catch (error) {
          console.error('An error occurred:', error)
     }
}

const closeModal = () => {
     // Perform any necessary actions before closing the modal
     // Emit the 'closeModal' event to notify the parent component
     emit('closeModal')
}

const emit = defineEmits(['closeModal'])
</script>

<style></style>
