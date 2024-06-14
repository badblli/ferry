<template>
     <div>
          <div class="w-full h-[223px] bg-slate-200" />
          <div class="relative top-[-175px] centered-w lg:px-[100px] px-16 md:px-16 sm:px-8">
               <span class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide pl-10 md:pl-0">Merhaba
                    {{ userName }}.</span>
               <div class="mt-[63px]">
                    <div class="border-b border-gray-200 pl-10 md:pl-0">
                         <nav class="flex overflow-x-auto [&::-webkit-scrollbar]:h-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-slate-700 dark:[&::-webkit-scrollbar-thumb]:bg-slate-500"
                              aria-label="Tabs" role="tablist">
                              <button type="button"
                                   class="mr-[48px] md:text-xl text-lg hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black pb-10 inline-flex items-center gap-x-4 border-b-[1px] border-transparent whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-30 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
                                   id="tabs-with-icons-item-1" data-hs-tab="#tabs-with-icons-1"
                                   aria-controls="tabs-with-icons-1" role="tab">
                                   <IconReceipt />
                                   Rezervasyon
                              </button>
                              <button type="button"
                                   class="mr-[48px] md:text-xl text-lg hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black pb-10 inline-flex items-center gap-x-4 border-b-[1px] border-transparent whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-30 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
                                   id="tabs-with-icons-item-2" data-hs-tab="#tabs-with-icons-2"
                                   aria-controls="tabs-with-icons-2" role="tab">
                                   <IconUsers />
                                   Profilim
                              </button>
                              <button type="button"
                                   class="mr-[48px] md:text-xl text-lg hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black pb-10 inline-flex items-center gap-x-4 border-b-[1px] border-transparent whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
                                   id="tabs-with-icons-item-3" data-hs-tab="#tabs-with-icons-3"
                                   aria-controls="tabs-with-icons-3" role="tab">
                                   <IconGearSix />
                                   Hesap Ayarlarım
                              </button>
                              <button type="button"
                                   class="mr-[48px] md:text-xl text-lg hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black pb-10 inline-flex items-center gap-x-4 border-b-[1px] border-transparent whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500"
                                   id="tabs-with-icons-item-4" data-hs-tab="#tabs-with-icons-4"
                                   aria-controls="tabs-with-icons-4" role="tab">
                                   <IconBellSimple />
                                   Bildirimler
                              </button>
                              <button type="button"
                                   class="mr-[48px] md:text-xl text-lg hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black pb-10 inline-flex items-center gap-x-4 border-b-[1px] border-transparent whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
                                   id="tabs-with-icons-item-5" data-hs-tab="#tabs-with-icons-5"
                                   aria-controls="tabs-with-icons-5" role="tab">
                                   <IconMile />
                                   Mil Puan
                              </button>
                         </nav>
                    </div>
                    <div class="mt-[70px] mb-16">
                         <div id="tabs-with-icons-1" role="tabpanel">
                              <div>
                                   <nav class="-mb-0.5 flex space-x-8 pl-10 md:pl-0" aria-label="Tabs" role="tablist">
                                        <button type="button"
                                             class="leading-4 tracking-tight text-xl hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black inline-flex items-center gap-x-2 whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
                                             id="horizontal-alignment-item-1" data-hs-tab="#horizontal-alignment-1"
                                             aria-controls="horizontal-alignment-1" role="tab">
                                             Güncel Rezervasyon
                                        </button>
                                        <button type="button"
                                             class="leading-4 tracking-tight text-xl hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black inline-flex items-center gap-x-2 whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
                                             id="horizontal-alignment-item-2" data-hs-tab="#horizontal-alignment-2"
                                             aria-controls="horizontal-alignment-2" role="tab">
                                             Geçmiş Rezervasyon
                                        </button>
                                   </nav>
                                   <div class="md:mt-[91px] mt-10 w-full">
                                        <div id="horizontal-alignment-1" role="tabpanel"
                                             aria-labelledby="horizontal-alignment-item-1">
                                             <ReservationTable :reservations="reservations" />
                                        </div>
                                        <div id="horizontal-alignment-2" role="tabpanel"
                                             aria-labelledby="horizontal-alignment-item-2" class="hidden">
                                             <ReservationTable :reservations="pastReservations" />
                                        </div>
                                        <div class="flex flex-row items-center justify-center pt-12 cursor-pointer">
                                             <h1 class="pt-4 text-black text-lg font-medium font-display mb-4 mr-4">Daha
                                                  fazla rezervasyon</h1>
                                             <IconArrowDownBlack />
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div id="tabs-with-icons-2" class="hidden" role="tabpanel"
                              aria-labelledby="tabs-with-icons-item-2">
                              <div id="tabs-with-icons-1" role="tabpanel">
                                   <div>
                                        <div>
                                             <nav class="-mb-0.5 flex space-x-8" aria-label="Tabs" role="tablist">
                                                  <button type="button"
                                                       class="leading-4 tracking-tight text-xl hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black inline-flex items-center gap-x-2 whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
                                                       id="horizontal-alignment-item-1"
                                                       data-hs-tab="#horizontal-alignment-1"
                                                       aria-controls="horizontal-alignment-1" role="tab">
                                                       Profil Bilgileri
                                                  </button>
                                             </nav>
                                        </div>
                                        <div class="pt-[91px] w-full">
                                             <div id="horizontal-alignment-1" role="tabpanel"
                                                  aria-labelledby="horizontal-alignment-item-1">
                                                  <div class="-m-1.5 overflow-x-auto w-full">
                                                       <div class="p-1.5 w-full inline-block align-middle">
                                                            <div
                                                                 class="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex items-center justify-between">
                                                                 <div class="ml-[46px] ">
                                                                      <div>
                                                                           <h2
                                                                                class="mb-1 text-black text-base font-medium font-display">
                                                                                İsim
                                                                           </h2>
                                                                           <div class="flex items-center border-b border-gray-200">
                                                                                <input v-model="name"
                                                                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div
                                                                      class="w-32 h-14 px-8 py-4 rounded-xl justify-center items-center gap-2.5 inline-flex mr-10 hover:bg-slate-200 cursor-pointer transition ease-in-out delay-100 border-b border-gray-200">
                                                                      <button
                                                                           @click="editingName ? saveEdit('name') : editField('name')"
                                                                           class="text-center text-black text-base font-bold font-text leading-normal">
                                                                           {{ editingName ? 'Kaydet' : 'Düzenle' }}
                                                                      </button>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div class="p-1.5 w-full inline-block align-middle">
                                                            <div
                                                                 class="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex items-center justify-between">
                                                                 <div class="ml-[46px]">
                                                                      <div>
                                                                           <h2
                                                                                class="mb-1 text-black text-base font-medium font-display">
                                                                                Soyisim
                                                                           </h2>
                                                                           <div class="flex items-center border-b border-gray-200">
                                                                                <input v-model="surname"
                                                                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div
                                                                      class="w-32 h-14 px-8 py-4 rounded-xl justify-center items-center gap-2.5 inline-flex mr-10 hover:bg-slate-200 cursor-pointer transition ease-in-out delay-100">
                                                                      <button
                                                                           @click="editingSurname ? saveEdit('surname') : editField('surname')"
                                                                           class="text-center text-black text-base font-bold font-text leading-normal">
                                                                           {{ editingSurname ? 'Kaydet' : 'Düzenle' }}
                                                                      </button>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div class="p-1.5 w-full inline-block align-middle">
                                                            <div
                                                                 class="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex items-center justify-between">
                                                                 <div class="ml-[46px]">
                                                                      <div>
                                                                           <h2
                                                                                class="mb-1 text-black text-base font-medium font-display">
                                                                                Telefon Numarası
                                                                           </h2>
                                                                           <div class="flex items-center border-b border-gray-200">
                                                                                <input v-model="PhoneNumber"
                                                                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div
                                                                      class="w-32 h-14 px-8 py-4 rounded-xl justify-center items-center gap-2.5 inline-flex mr-10 hover:bg-slate-200 cursor-pointer transition ease-in-out delay-100">
                                                                      <button
                                                                           @click="editingPhoneNumber ? saveEdit('PhoneNumber') : editField('PhoneNumber')"
                                                                           class="text-center text-black text-base font-bold font-text leading-normal">
                                                                           {{ editingPhoneNumber ? 'Kaydet' : 'Düzenle' }}
                                                                      </button>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div class="p-1.5 w-full inline-block align-middle">
                                                            <div
                                                                 class="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex items-center justify-between">
                                                                 <div class="ml-[46px]">
                                                                      <div>
                                                                           <h2
                                                                                class="mb-1 text-black text-base font-medium font-display">
                                                                                Doğum Tarihi
                                                                           </h2>
                                                                                <div class="flex items-center border-b border-gray-200">
                                                                                <input v-model="BirthDate"
                                                                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div
                                                                      class="w-32 h-14 px-8 py-4 rounded-xl justify-center items-center gap-2.5 inline-flex mr-10 hover:bg-slate-200 cursor-pointer transition ease-in-out delay-100">
                                                                      <button placeholder="GG/AA/YYYY"
                                                                           @click="editingBirthDate ? saveEdit('BirthDate') : editField('BirthDate')"
                                                                           class="text-center text-black text-base font-bold font-text leading-normal">
                                                                           {{ editingBirthDate ? 'Kaydet' : 'Düzenle' }}
                                                                      </button>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div class="p-1.5 w-full inline-block align-middle">
                                                            <div
                                                                 class="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex items-center justify-between">
                                                                 <div class="ml-[46px]">
                                                                      <div>
                                                                           <h2
                                                                                class="mb-1 text-black text-base font-medium font-display">
                                                                                Uyruğu
                                                                           </h2>
                                                                                <div class="flex items-center border-b border-gray-200">
                                                                                <input v-model="NationalityID"
                                                                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                                                           </div>  
                                                                      </div>
                                                                 </div>
                                                                 <div
                                                                      class="w-32 h-14 px-8 py-4 rounded-xl justify-center items-center gap-2.5 inline-flex mr-10 hover:bg-slate-200 cursor-pointer transition ease-in-out delay-100">
                                                                      <button
                                                                           @click="editingNationalityID ? saveEdit('NationalityID') : editField('NationalityID')"
                                                                           class="text-center text-black text-base font-bold font-text leading-normal">
                                                                           {{ editingNationalityID ? 'Kaydet' : 'Düzenle' }}
                                                                      </button>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div class="p-1.5 w-full inline-block align-middle">
                                                            <div
                                                                 class="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex items-center justify-between">
                                                                 <div class="ml-[46px]">
                                                                      <div>
                                                                           <h2
                                                                                class="mb-1 text-black text-base font-medium font-display">
                                                                                Pasaport Numarası
                                                                           </h2>
                                                                                <div class="flex items-center border-b border-gray-200">
                                                                                <input v-model="PassportNumber"
                                                                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div
                                                                      class="w-32 h-14 px-8 py-4 rounded-xl justify-center items-center gap-2.5 inline-flex mr-10 hover:bg-slate-200 cursor-pointer transition ease-in-out delay-100">
                                                                      <button
                                                                           @click="editingPassportNumber ? saveEdit('PassportNumber') : editField('PassportNumber')"
                                                                           class="text-center text-black text-base font-bold font-text leading-normal">
                                                                           {{ editingPassportNumber ? 'Kaydet' : 'Düzenle' }}
                                                                      </button>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div class="p-1.5 w-full inline-block align-middle">
                                                            <div
                                                                 class="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex items-center justify-between">
                                                                 <div class="ml-[46px]">
                                                                      <div>
                                                                           <h2
                                                                                class="mb-1 text-black text-base font-medium font-display">
                                                                                TC Kimlik No
                                                                           </h2>
                                                                           <div class="flex items-center border-b border-gray-200">
                                                                                <input v-model="TckNo"
                                                                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div
                                                                      class="w-32 h-14 px-8 py-4 rounded-xl justify-center items-center gap-2.5 inline-flex mr-10 hover:bg-slate-200 cursor-pointer transition ease-in-out delay-100">
                                                                      <button
                                                                           @click="editingTckNo ? saveEdit('TckNo') : editField('TckNo')"
                                                                           class="text-center text-black text-base font-bold font-text leading-normal">
                                                                           {{ editingTckNo ? 'Kaydet' : 'Düzenle' }}
                                                                      </button>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div class="p-1.5 w-full inline-block align-middle">
                                                            <div
                                                                 class="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex items-center justify-between">
                                                                 <div class="ml-[46px]">
                                                                      <div>
                                                                           <h2
                                                                                class="mb-1 text-black text-base font-medium font-display">
                                                                                Adres Bilgileri
                                                                           </h2>
                                                                           <div class="flex items-center border-b border-gray-200">
                                                                                <input v-model="Address"
                                                                                class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none" />
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                                 <div
                                                                      class="w-32 h-14 px-8 py-4 rounded-xl justify-center items-center gap-2.5 inline-flex mr-10 hover:bg-slate-200 cursor-pointer transition ease-in-out delay-100">
                                                                      <button
                                                                           @click="editingAddress ? saveEdit('Address') : editField('Address')"
                                                                           class="text-center text-black text-base font-bold font-text leading-normal">
                                                                           {{ editingAddress ? 'Kaydet' : 'Düzenle' }}
                                                                      </button>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div id="tabs-with-icons-3" class="hidden" role="tabpanel"
                              aria-labelledby="tabs-with-icons-item-3">
                              <div id="tabs-with-icons-1" role="tabpanel">
                                   <div>
                                        <div>
                                             <nav class="-mb-0.5 flex space-x-8" aria-label="Tabs" role="tablist">
                                                  <button type="button"
                                                       class="leading-4 tracking-tight text-xl hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black inline-flex items-center gap-x-2 whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
                                                       id="horizontal-alignment-item-1"
                                                       data-hs-tab="#horizontal-alignment-1"
                                                       aria-controls="horizontal-alignment-1" role="tab">
                                                       Kişisel Ayarlarım
                                                  </button>
                                             </nav>
                                        </div>
                                        <div class="pt-[91px] w-full">
                                             <div id="horizontal-alignment-1" role="tabpanel"
                                                  aria-labelledby="horizontal-alignment-item-1">
                                                  <div class="-m-1.5 overflow-x-auto w-full">
                                                       <!-- <div>
                                                            <AccountMail />
                                                       </div> -->
                                                       <div className="flex flex-col mb-4">
                                                            <div className="items-center">
                                                                 <div
                                                                      className="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex justify-between items-center">
                                                                      <div className="ml-[46px]">
                                                                           <div
                                                                                className="flex justify-center items-center">
                                                                                <div>
                                                                                     <h2
                                                                                          className="mb-1 text-black text-base font-medium font-display">
                                                                                          E-posta Adresi
                                                                                     </h2>
                                                                                     <div
                                                                                          class="text-zinc-600 text-base font-normal font-display tracking-tight">
                                                                                          salimgrsy@gmail.com</div>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                      <div
                                                                           class="w-[211px] h-14 px-8 py-4 rounded-md justify-center items-center gap-2.5 inline-flex">
                                                                           <div
                                                                                class="text-center text-base font-bold font-text leading-normal">
                                                                                Düzenle</div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <!-- <div>
                                                            <AccountPassword />
                                                       </div> -->
                                                       <div className="flex flex-col mb-4">
                                                            <div className="items-center">
                                                                 <div
                                                                      className="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex justify-between items-center">
                                                                      <div className="ml-[46px]">
                                                                           <div
                                                                                className="flex justify-center items-center">
                                                                                <div>
                                                                                     <h2
                                                                                          className="mb-1 text-black text-base font-medium font-display">
                                                                                          Şifre
                                                                                     </h2>
                                                                                     <div
                                                                                          class="text-zinc-600 text-base font-normal font-display tracking-wider">
                                                                                          ***********</div>
                                                                                </div>
                                                                                <div
                                                                                     class="w-[146px] h-[29px] rounded-md border ml-[42px] bg-green-100">
                                                                                     <div
                                                                                          class="flex items-center justify-center mt-1 text-black text-sm font-semibold ">
                                                                                          2 gün önce değişti.
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                      <div
                                                                           class="w-[195px] h-14 px-8 py-4 rounded-md justify-center items-center gap-2.5 mr-5  inline-flex hover:bg-slate-200 transition ease-in-out delay-100 cursor-pointer">
                                                                           <div
                                                                                class="text-center text-zinc-900 text-base font-bold font-text leading-normal">
                                                                                Şifremi Güncelle</div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div>
                                                            <div className="flex flex-col mb-4">
                                                                 <div className="items-center">
                                                                      <div
                                                                           className="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex justify-between items-center">
                                                                           <div className="ml-[46px]">
                                                                                <div
                                                                                     className="flex justify-center items-center">
                                                                                     <div>
                                                                                          <h2
                                                                                               className="mb-1 text-black text-base font-medium font-display">
                                                                                               Hesabımı Sil
                                                                                          </h2>
                                                                                          <div
                                                                                               class="text-zinc-600 text-base font-normal font-display">
                                                                                               You can deactive your
                                                                                               account permanantly.
                                                                                          </div>
                                                                                     </div>
                                                                                </div>
                                                                           </div>
                                                                           <div
                                                                                class="w-[195px] h-14 px-8 py-4 rounded-md justify-center items-center gap-2.5 mr-5  inline-flex hover:bg-slate-200 transition ease-in-out delay-100 cursor-pointer">
                                                                                <div
                                                                                     class="text-center text-zinc-900 text-base font-bold font-text leading-normal">
                                                                                     Şifremi Güncelle</div>
                                                                           </div>
                                                                      </div>
                                                                 </div>
                                                            </div>
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
                                                  <button type="button"
                                                       class="pt-12 leading-4 tracking-tight text-xl hs-tab-active:font-semibold hs-tab-active:border-black hs-tab-active:text-black inline-flex items-center gap-x-2 whitespace-nowrap text-gray-500 focus:outline-none disabled:opacity-50 disabled:pointer-events-none dark:text-gray-400 dark:hover:text-blue-500 active"
                                                       id="horizontal-alignment-item-1"
                                                       data-hs-tab="#horizontal-alignment-1"
                                                       aria-controls="horizontal-alignment-1" role="tab">
                                                       Diğer Ayarlarım
                                                  </button>
                                             </nav>
                                        </div>
                                        <div class="pt-[91px] w-full">
                                             <div id="horizontal-alignment-1" role="tabpanel"
                                                  aria-labelledby="horizontal-alignment-item-1">
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
                         <div id="tabs-with-icons-4" class="hidden" role="tabpanel"
                              aria-labelledby="tabs-with-icons-item-4">
                              <AccountNotification :notifications="notifications" />
                         </div>
                         <div id="tabs-with-icons-5" class="hidden" role="tabpanel"
                              aria-labelledby="tabs-with-icons-item-5">
                              <ReservationMileTab />
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue'
import ReservationTable from '../components/ReservationComponent/ReservationTable.vue'
// import MyProfile from '../components/ReservationComponent/MyProfile.vue'
import ReservationMileTab from '@/components/ReservationComponent/ReservationMileTab.vue'
// import AccountMail from '../components/ReservationComponent/AccountMail.vue'
// import AccountPassword from '../components/ReservationComponent/AccountPassword.vue'
// import AccountDeactive from '../components/ReservationComponent/AccountDeactive.vue'
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
import { useUserStore } from '@/stores/auth'
import { callPostApi } from '@/utils/globalHelper'
import p from '@/utils/pathConfig'

const userStore = useUserStore()
const userInfo = ref(userStore.user)
const userName = computed(() => userStore.user?.Name)

const applicationName = ref(p.Product)
const controllerName = ref('Product')
const name2 = ref('SaveMember')

const name = ref(userInfo.value ? userInfo.value.Name : '')
const surname = ref(userInfo.value ? userInfo.value.SurName : '')
const email = ref(userInfo.value ? userInfo.value.EmailAddress : '')
const PhoneNumber = ref(userInfo.value ? userInfo.value.PhoneNumber : '')
const BirthDate = ref(userInfo.value ? userInfo.value.BirthDate : '')
const NationalityID = ref(userInfo.value ? userInfo.value.NationalityID : '')
const PassportNumber = ref(userInfo.value ? userInfo.value.PassportNumber : '')
const TckNo = ref(userInfo.value ? userInfo.value.TckNo : '')
const Address = ref(userInfo.value ? userInfo.value.Address : '')

const editingName = ref(false)
const editingSurname = ref(false)
const editingEmail = ref(false)
const editingPhoneNumber = ref(false)
const editingBirthDate = ref(false)
const editingNationalityID = ref(false)
const editingPassportNumber = ref(false)
const editingTckNo = ref(false)
const editingAddress = ref(false)

const saveEdit = (field: any) => {
     switch (field) {
          case 'name':
               editingName.value = false
               break
          case 'surname':
               editingSurname.value = false
               break
          case 'email':
               editingEmail.value = false
               break
          case 'PhoneNumber':
               editingPhoneNumber.value = false
               break
          case 'BirthDate':
               editingBirthDate.value = false
               break
          case 'NationalityID':
               editingNationalityID.value = false
               break
          case 'PassportNumber':
               editingPassportNumber.value = false
               break
          case 'TckNo':
               editingTckNo.value = false
               break
          case 'Address':
               editingAddress.value = false
               break
          default:
     }
     updateUserInfo()
}
const updateUserInfo = () => {
     const updatedUserInfo = {
          ...userInfo.value,
          Name: name.value,
          SurName: surname.value,
          EmailAddress: email.value,
          PhoneNumber: PhoneNumber.value,
          BirthDate: BirthDate.value,
          // NationalityID: NationalityID.value,
          PassportNumber: PassportNumber.value,
          TckNo: TckNo.value,
          Address: Address.value
     }
     saveMember(updatedUserInfo)
}

const editField = (field: any) => {
     switch (field) {
          case 'name':
               editingName.value = !editingName.value
               break
          case 'surname':
               editingSurname.value = !editingSurname.value
               break
          case 'email':
               editingEmail.value = !editingEmail.value
               break
          case 'PhoneNumber':
               editingPhoneNumber.value = !editingPhoneNumber.value 
               break
          case 'BirthDate':
               editingBirthDate.value = !editingBirthDate.value
               break
          case 'NationalityID':
               editingNationalityID.value = !editingNationalityID.value
               break
          case 'PassportNumber':
               editingPassportNumber.value = !editingPassportNumber.value
               break
          case 'TckNo':
               editingTckNo.value = !editingTckNo.value
               break
          case 'Address':
               editingAddress.value = !editingAddress.value
               break
          default:
     }
}

const saveMember = async (userInfo: any) => {
     try {
          const response = await callPostApi(applicationName.value, controllerName.value, name2.value, userInfo)
          if (response && response.data.status === 1) {
               let resUserInfo = JSON.parse(response.data.result)
               userStore.saveMember(resUserInfo)

               console.log(userInfo, 'responseVAR')
          } else {
               return ''
          }
     } catch (error) {
          console.error('An error occurred:', error)
     }
}

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

const pastReservations = ref([
     {
          number: '#575433',
          date: '28.10.2023',
          status: 'Geçmiş',
          total: '1 ürün, 1,549.40 ₺'
     }
])
</script>

<style scoped></style>
