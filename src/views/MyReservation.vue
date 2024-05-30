<template>
     <div>
          <div class="w-full h-[223px] bg-slate-200" />
          <div class="relative top-[-175px] centered-w lg:px-[100px] px-16 md:px-16 sm:px-8">
               <span class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide pl-10 md:pl-0">Merhaba Kevin.</span>
               <div class="mt-[63px]">
                    <div class="border-b border-gray-200 pl-10 md:pl-0">
                         <nav class="flex overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500" aria-label="Tabs" role="tablist">
                              <button type="button" class="mr-[48px] md:text-xl text-lg hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black pb-10 inline-flex items-center gap-x-4 border-b-[1px] border-transparent whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-30 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active" id="tabs-with-icons-item-1" data-hs-tab="#tabs-with-icons-1" aria-controls="tabs-with-icons-1" role="tab">
                                   <IconReceipt />
                                   Rezervasyon
                              </button>
                              <button type="button" class="mr-[48px] md:text-xl text-lg hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black pb-10 inline-flex items-center gap-x-4 border-b-[1px] border-transparent whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-30 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500" id="tabs-with-icons-item-2" data-hs-tab="#tabs-with-icons-2" aria-controls="tabs-with-icons-2" role="tab">
                                   <IconUsers />
                                   Profilim
                              </button>
                              <button type="button" class="mr-[48px] md:text-xl text-lg hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black pb-10 inline-flex items-center gap-x-4 border-b-[1px] border-transparent whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500" id="tabs-with-icons-item-3" data-hs-tab="#tabs-with-icons-3" aria-controls="tabs-with-icons-3" role="tab">
                                   <IconGearSix />
                                   Hesap Ayarlarım
                              </button>
                              <button type="button" class="mr-[48px] md:text-xl text-lg hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black pb-10 inline-flex items-center gap-x-4 border-b-[1px] border-transparent whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500" id="tabs-with-icons-item-4" data-hs-tab="#tabs-with-icons-4" aria-controls="tabs-with-icons-4" role="tab">
                                   <IconBellSimple />
                                   Bildirimler
                              </button>
                              <button type="button" class="mr-[48px] md:text-xl text-lg hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black pb-10 inline-flex items-center gap-x-4 border-b-[1px] border-transparent whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none" id="tabs-with-icons-item-5" data-hs-tab="#tabs-with-icons-5" aria-controls="tabs-with-icons-5" role="tab">
                                   <IconMile />
                                   Mil Puan
                              </button>
                         </nav>
                    </div>
                    <div class="mt-[70px] mb-16">
                         <div id="tabs-with-icons-1" role="tabpanel">
                              <div>
                                   <nav class="-mb-0.5 flex space-x-8 pl-10 md:pl-0" aria-label="Tabs" role="tablist">
                                        <button type="button" class="leading-4 tracking-tight text-xl hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black inline-flex items-center gap-x-2 whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active" id="horizontal-alignment-item-1" data-hs-tab="#horizontal-alignment-1" aria-controls="horizontal-alignment-1" role="tab">
                                             Güncel Rezervasyon
                                        </button>
                                        <button type="button" class="leading-4 tracking-tight text-xl hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black inline-flex items-center gap-x-2 whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active" id="horizontal-alignment-item-2" data-hs-tab="#horizontal-alignment-2" aria-controls="horizontal-alignment-2" role="tab">
                                             Geçmiş Rezervasyon
                                        </button>
                                   </nav>
                                   <div class="md:mt-[91px] mt-10 w-full">
                                        <div id="horizontal-alignment-1" role="tabpanel" aria-labelledby="horizontal-alignment-item-1">
                                             <ReservationTable :reservations="reservations" />
                                        </div>
                                        <div id="horizontal-alignment-2" role="tabpanel" aria-labelledby="horizontal-alignment-item-2" class="hidden">
                                             <ReservationTable :reservations="pastReservations" />
                                        </div>
                                        <div class="flex flex-row items-center justify-center pt-12 cursor-pointer">
                                             <h1 class="pt-4 text-black text-lg font-medium font-display mb-4 mr-4">Daha fazla rezervasyon</h1>
                                             <IconArrowDownBlack />
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div id="tabs-with-icons-2" class="hidden" role="tabpanel" aria-labelledby="tabs-with-icons-item-2">
                              <div id="tabs-with-icons-1" role="tabpanel">
                                   <div>
                                        <div>
                                             <nav class="-mb-0.5 flex space-x-8" aria-label="Tabs" role="tablist">
                                                  <button type="button" class="leading-4 tracking-tight text-xl hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black inline-flex items-center gap-x-2 whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active" id="horizontal-alignment-item-1" data-hs-tab="#horizontal-alignment-1" aria-controls="horizontal-alignment-1" role="tab">
                                                       Profil Bilgileri
                                                  </button>
                                             </nav>
                                        </div>
                                        <div class="pt-[91px] w-full">
                                             <div id="horizontal-alignment-1" role="tabpanel" aria-labelledby="horizontal-alignment-item-1">
                                                  <div class="-m-1.5 overflow-x-auto w-full">
                                                       <div class="p-1.5 w-full inline-block align-middle">
                                                            <MyProfile :profileData="people" />
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div id="tabs-with-icons-3" class="hidden" role="tabpanel" aria-labelledby="tabs-with-icons-item-3">
                              <div id="tabs-with-icons-1" role="tabpanel">
                                   <div>
                                        <div>
                                             <nav class="-mb-0.5 flex space-x-8" aria-label="Tabs" role="tablist">
                                                  <button type="button" class="leading-4 tracking-tight text-xl hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black inline-flex items-center gap-x-2 whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active" id="horizontal-alignment-item-1" data-hs-tab="#horizontal-alignment-1" aria-controls="horizontal-alignment-1" role="tab">
                                                       Kişisel Ayarlarım
                                                  </button>
                                             </nav>
                                        </div>
                                        <div class="pt-[91px] w-full">
                                             <div id="horizontal-alignment-1" role="tabpanel" aria-labelledby="horizontal-alignment-item-1">
                                                  <div class="-m-1.5 overflow-x-auto w-full">
                                                       <div>
                                                            <AccountMail />
                                                       </div>
                                                       <div>
                                                            <AccountPassword />
                                                       </div>
                                                       <div>
                                                            <AccountDeactive />
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div id="tabs-with-icons-1" role="tabpanel">
                                   <div>
                                        <div>
                                             <nav class="-mb-0.5 flex space-x-8" aria-label="Tabs" role="tablist">
                                                  <button
                                                       type="button"
                                                       class="pt-12 leading-4 tracking-tight text-xl hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black inline-flex items-center gap-x-2 whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
                                                       id="horizontal-alignment-item-1"
                                                       data-hs-tab="#horizontal-alignment-1"
                                                       aria-controls="horizontal-alignment-1"
                                                       role="tab"
                                                  >
                                                       Diğer Ayarlarım
                                                  </button>
                                             </nav>
                                        </div>
                                        <div class="pt-[91px] w-full">
                                             <div id="horizontal-alignment-1" role="tabpanel" aria-labelledby="horizontal-alignment-item-1">
                                                  <div class="-m-1.5 overflow-x-auto w-full">
                                                       <div>
                                                            <AccountLanguage />
                                                       </div>
                                                       <div>
                                                            <AccountCurrency />
                                                       </div>
                                                       <div>
                                                            <AccountGMT />
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div id="tabs-with-icons-4" class="hidden" role="tabpanel" aria-labelledby="tabs-with-icons-item-4">
                              <AccountNotification :notifications="notifications" />
                         </div>
                         <div id="tabs-with-icons-5" class="hidden" role="tabpanel" aria-labelledby="tabs-with-icons-item-5">
                              <ReservationMileTab />
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import ReservationTable from '../components/ReservationComponent/ReservationTable.vue'
import MyProfile from '../components/ReservationComponent/MyProfile.vue'
import ReservationMileTab from '@/components/ReservationComponent/ReservationMileTab.vue'
import AccountMail from '../components/ReservationComponent/AccountMail.vue'
import AccountPassword from '../components/ReservationComponent/AccountPassword.vue'
import AccountDeactive from '../components/ReservationComponent/AccountDeactive.vue'
import AccountLanguage from '../components/ReservationComponent/AccountLanguage.vue'
import AccountCurrency from '../components/ReservationComponent/AccountCurrency.vue'
import AccountGMT from '../components/ReservationComponent/AccountGMT.vue'
import AccountNotification from '../components/ReservationComponent/AccountNotification.vue'
import IconReceipt from '../components/icons/IconReceipt.vue'
import IconUsers from '../components/icons/IconUsers.vue'
import IconGearSix from '../components/icons/IconGearSix.vue'
import IconBellSimple from '../components/icons/IconBellSimple.vue'
import IconMile from '../components/icons/IconMile.vue'
import IconArrowDownBlack from '@/components/icons/IconArrowDownBlack.vue'

const pastReservations = ref([
     {
          number: '#575433',
          date: '28.10.2023',
          status: 'Geçmiş',
          total: '1 ürün, 1,549.40 ₺'
     }
])

const people = ref([
     { title: 'İsim' },
     { title: 'Soyisim' },
     { title: 'E-posta Adresi' },
     { title: 'Telefon Numarası' },
     { title: 'Doğum Tarihi' },
     { title: 'TC Kimlik Numarası' },
     { title: 'Pasaport Numarası' },
     { title: 'Uyruğu' }, // Buraya uygun bir değer eklemelisiniz
     { title: 'Adres Bilgileri' },
     { title: 'Şifre' } // Şifreyi bu şekilde görüntülemek genellikle güvenli değildir, bu nedenle gerçek şifreyi ekranda göstermek yerine yıldızlarla göstermek daha iyidir.
])
const notifications = ref([
     {
          offers: {
               name: 'Teklifler ve İpuçları',
               subName: 'Günlük Teklif ve İpuçları'
          },
          trends: {
               name: 'Trendler ve Öneriler',
               subName: 'Günlük kişiselleştirilmiş trendler ve öneriler'
          },
          news: {
               name: 'Haberler ve Güncellemeler',
               subName: 'Günlük olarak güncelleme ve haberler'
          },
          feedback: {
               name: 'Geri Bildirimler',
               subName: 'E-posta üzerinden geri bildirimler'
          }
     }
])

const reservations = ref([
     {
          number: '#575433',
          date: '28.10.2023',
          status: 'Onaylandı',
          total: '1 ürün, 1,549.40 ₺'
     },
     {
          number: '#575433',
          date: '29.10.2023',
          status: 'İptal Edildi',
          total: '2 ürün, 1,249.40 ₺'
     },
     {
          number: '#575433',
          date: '29.10.2023',
          status: 'Onay Bekliyor',
          total: '2 ürün, 1,249.40 ₺'
     }
])
</script>

<style scoped></style>
