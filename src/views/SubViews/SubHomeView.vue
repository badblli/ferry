<template>
     <div class="flex flex-col justify-center items-center m-auto relative">
          <div class="w-full flex flex-col mx-24 centered-w justify-center items-center">
               <div class="flex flex-col">
                    <div class="flex flex-row border-sub-line">
                         <div @click="activeTab = 'tab1'" class="tab mx-4 px-20 first:ml-20" :class="{ active: activeTab === 'tab1' }">Midilli Adası</div>
                         <div @click="activeTab = 'tab2'" class="tab mx-4 px-4" :class="{ active: activeTab === 'tab2' }">Feribot Seferleri</div>
                         <div @click="activeTab = 'tab3'" class="tab mx-4 px-4" :class="{ active: activeTab === 'tab3' }">Nasıl Gidilir</div>
                         <div @click="activeTab = 'tab4'" class="tab mx-4 px-4" :class="{ active: activeTab === 'tab4' }">Gezilecek Yerler</div>
                         <div @click="activeTab = 'tab5'" class="tab mx-4 px-4" :class="{ active: activeTab === 'tab5' }">Sıkça Sorular Sorular</div>
                         <div @click="activeTab = 'tab6'" class="tab mx-4 px-20 mr-20" :class="{ active: activeTab === 'tab6' }">Midilli Turları</div>
                    </div>
                    <div class="w-full bg-blue-700"></div>
               </div>
               <div class="w-full">
                    <div>
                         <div v-show="activeTab === 'tab1'" class="mt-[75px] mb-16">
                              <div class="flex flex-row justify-center items-center mb-6">
                                   <div class="text-center text-slate-800 text-2xl font-medium font-['Plus Jakarta Sans'] leading-normal mr-3">Ayvalık</div>
                                   <ArrowCircleUpRight />
                                   <div>
                                        <div class="text-center text-slate-800 text-2xl font-medium font-['Plus Jakarta Sans'] leading-normal ml-3">Midilli</div>
                                   </div>
                              </div>
                              <div>
                                   <div class="text-center text-slate-800 text-5xl font-bold font-['Plus Jakarta Sans'] leading-[48px]">Midilli Adası</div>
                              </div>
                         </div>
                         <div v-show="activeTab === 'tab2'" class="mt-[75px] mb-16">
                              <div class="flex flex-row justify-center items-center mb-6">
                                   <div class="text-center text-slate-800 text-2xl font-medium font-['Plus Jakarta Sans'] leading-normal mr-3">Ayvalık</div>
                                   <ArrowCircleUpRight />
                                   <div>
                                        <div class="text-center text-slate-800 text-2xl font-medium font-['Plus Jakarta Sans'] leading-normal ml-3">Midilli</div>
                                   </div>
                              </div>
                              <div>
                                   <div class="text-center text-slate-800 text-5xl font-bold font-['Plus Jakarta Sans'] leading-[48px]">Midilli Feribot Seferleri</div>
                              </div>
                         </div>
                         <div v-show="activeTab === 'tab3'" class="mt-[75px] mb-16">
                              <div class="flex flex-row justify-center items-center mb-6">
                                   <div class="text-center text-slate-800 text-2xl font-medium font-['Plus Jakarta Sans'] leading-normal mr-3">Ayvalık</div>
                                   <ArrowCircleUpRight />
                                   <div>
                                        <div class="text-center text-slate-800 text-2xl font-medium font-['Plus Jakarta Sans'] leading-normal ml-3">Midilli</div>
                                   </div>
                              </div>
                              <div>
                                   <div class="text-center text-slate-800 text-5xl font-bold font-['Plus Jakarta Sans'] leading-[48px]">Midilli Adasına Nasıl Gidilir?</div>
                              </div>
                         </div>
                         <div v-show="activeTab === 'tab4'" class="mt-[75px] mb-16">
                              <div class="flex flex-row justify-center items-center mb-6">
                                   <div class="text-center text-slate-800 text-2xl font-medium font-['Plus Jakarta Sans'] leading-normal mr-3">Ayvalık</div>
                                   <ArrowCircleUpRight />
                                   <div>
                                        <div class="text-center text-slate-800 text-2xl font-medium font-['Plus Jakarta Sans'] leading-normal ml-3">Midilli</div>
                                   </div>
                              </div>
                              <div>
                                   <div class="text-center text-slate-800 text-5xl font-bold font-['Plus Jakarta Sans'] leading-[48px]">Midilli Adası'nda Gezilecek Yerler</div>
                              </div>
                         </div>
                         <div v-show="activeTab === 'tab5'" class="mt-[75px] mb-16">
                              <div class="flex flex-row justify-center items-center mb-6">
                                   <div class="text-center text-slate-800 text-2xl font-medium font-['Plus Jakarta Sans'] leading-normal mr-3">Ayvalık</div>
                                   <ArrowCircleUpRight />
                                   <div>
                                        <div class="text-center text-slate-800 text-2xl font-medium font-['Plus Jakarta Sans'] leading-normal ml-3">Midilli</div>
                                   </div>
                              </div>
                              <div>
                                   <div class="text-center text-slate-800 text-5xl font-bold font-['Plus Jakarta Sans'] leading-[48px]">Midilli Hakkında S.S.S.</div>
                              </div>
                         </div>
                         <div v-show="activeTab === 'tab6'" class="mt-[75px] mb-16">
                              <div class="flex flex-row justify-center items-center mb-6">
                                   <div class="text-center text-slate-800 text-2xl font-medium font-['Plus Jakarta Sans'] leading-normal mr-3">Ayvalık</div>
                                   <ArrowCircleUpRight />
                                   <div>
                                        <div class="text-center text-slate-800 text-2xl font-medium font-['Plus Jakarta Sans'] leading-normal ml-3">Midilli</div>
                                   </div>
                              </div>
                              <div>
                                   <div class="text-center text-slate-800 text-5xl font-bold font-['Plus Jakarta Sans'] leading-[48px]">Midilli Turları</div>
                              </div>
                         </div>
                         <!-- <  <div class="mt-[75px] mb-16">
                        <div class="flex flex-row justify-center items-center mb-6">
                            <div
                                class="text-center text-slate-800 text-2xl font-medium font-['Plus Jakarta Sans'] leading-normal mr-3">
                                Ayvalık</div>
                            <ArrowCircleUpRight />
                            <div>
                                <div
                                    class="text-center text-slate-800 text-2xl font-medium font-['Plus Jakarta Sans'] leading-normal ml-3">
                                    Midilli</div>
                            </div>
                        </div>
                        <div>
                            <div
                                class="text-center text-slate-800 text-5xl font-bold font-['Plus Jakarta Sans'] leading-[48px]">
                                Midilli Feribot Seferleri</div>
                        </div>
                    </div>> -->
                         <form v-show="activeTab !== 'tab4' && activeTab !== 'tab6'" class="md:relative md:max-w-[798px] hidden md:block mx-auto md:z-50 z-40 custom-border">
                              <div class="flex flex-row">
                                   <div :class="{ '': showTrue, 'border-b-2 border-blue-700': !showTrue }" class="mr-[5px] py-3 px-6 rounded-t-xl cursor-pointer">
                                        <span @click="showTrue = false" class="text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug" :class="{ '': showTrue, ' text-blue-700': !showTrue }">Search Ferry Title</span>
                                   </div>
                                   <div :class="{ '': !showTrue, 'border-b-2 border-blue-700': showTrue }" class="mr-4 py-3 px-9 rounded-t-xl text-white cursor-pointer">
                                        <span @click="showTrue = true" class="text-center text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug" :class="{ '': !showTrue, 'text-blue-700': showTrue }"> Reservation No </span>
                                   </div>
                              </div>

                              <div class="bg-white rounded-b-xl rounded-tr-xl flex items-center">
                                   <div class="flex flex-row items-center w-full custom-border-top" v-show="!showTrue">
                                        <div class="hs-dropdown flex flex-row items-center">
                                             <button id="hs-dropdown-with-dividers" type="button" class="cursor-pointer flex flex-col justify-start py-6 px-7">
                                                  <div class="text-black text-base font-medium font-display tracking-tight">Nereden?</div>
                                                  <div class="text-black text-base font-light font-display tracking-tight overflow-hidden whitespace-nowrap truncate w-20 text-start">Ayvalık</div>
                                             </button>

                                             <div class="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-with-dividers">
                                                  <div class="flex flex-col w-[277px] p-5">
                                                       <div class="flex flex-col">
                                                            <div class="flex flex-col hover:bg-slate-200 transition delay-[5ms] mb-5 pt-[7px] pl-[14px] pb-2 rounded-lg cursor-pointer">
                                                                 <a class="text-black text-base font-medium font-display tracking-tight">TownName</a>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div class="pl-7 py-6 flex flex-row cursor-pointer">
                                                       <div class="text-gray-800 text-base font-medium font-display leading-[24.86px] tracking-tight mr-[17px]">Samos Turlarını Keşfet</div>
                                                       <div class="w-7 h-7 p-1 bg-gray-800 rounded-full justify-center items-center inline-flex">
                                                            <IconFooter />
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>

                                        <!-- @click="toggleDataPlacement" -->
                                        <div class="bg-black rounded-full flex flex-row justify-center items-center p-[7px] cursor-pointer">
                                             <IconsWhiteLeftRight />
                                        </div>

                                        <div class="hs-dropdown flex flex-row items-center justify-center">
                                             <button id="hs-dropdown-with-dividers-2" type="button" class="cursor-pointer flex flex-col justify-start py-6 px-7">
                                                  <div class="text-black text-base font-medium font-display tracking-tight">Nereye?</div>
                                                  <div class="overflow-hidden whitespace-nowrap truncate text-black text-base font-light font-display tracking-tight text-start">Midilli</div>
                                             </button>
                                             <div class="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700" aria-labelledby="hs-dropdown-with-dividers-2">
                                                  <div class="flex flex-col w-[277px] p-5">
                                                       <div class="flex flex-col">
                                                            <div class="flex flex-col">
                                                                 <div class="flex flex-col">
                                                                      <div class="text-black text-base font-medium font-display tracking-tight">Gidiş Seçiniz</div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                       <div class="flex flex-col">
                                                            <div class="flex flex-col">
                                                                 <div class="flex flex-col hover:bg-slate-200 transition delay-[5ms] mb-5 pt-[7px] pl-[14px] pb-2 rounded-lg cursor-pointer">
                                                                      <a class="text-black text-base font-medium font-display tracking-tight">TownName</a>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>

                                        <div class="h-14 border-l border-zinc-300"></div>

                                        <div class="hs-dropdown flex flex-row items-center justify-center">
                                             <button id="hs-dropdown-with-dividers-3" type="button" class="cursor-pointer flex flex-col justify-start py-6 px-7">
                                                  <div class="text-black text-base font-medium font-display tracking-tight">Bilet Tipi</div>
                                                  <div class="text-black text-base font-light font-display tracking-tight overflow-hidden whitespace-nowrap truncate">Tek</div>
                                             </button>
                                             <div class="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200" aria-labelledby="hs-dropdown-with-dividers-3">
                                                  <div class="flex flex-col w-[277px] p-5">
                                                       <div class="flex flex-col hover:bg-slate-200 transition delay-[5ms] mb-5 pt-[7px] pl-[14px] pb-2 rounded-lg cursor-pointer">
                                                            <a class="text-black text-base font-medium font-display tracking-tight">Gidiş-Dönüş</a>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>

                                        <div class="h-14 border-l border-zinc-300"></div>

                                        <div class="flex flex-row items-center">
                                             <div class="cursor-pointer flex flex-col justify-start py-6 px-7">
                                                  <span class="overflow-hidden whitespace-nowrap truncate text-black text-base font-medium font-display tracking-tight">Bilet Tipi</span>
                                                  <span class="text-black text-base font-light font-display tracking-tight"> Tarih Seçiniz </span>
                                             </div>
                                        </div>
                                        <div class="h-14 border-l border-zinc-300"></div>
                                        <div class="dropdown">
                                             <button type="button" class="cursor-pointer flex flex-col justify-start py-6 px-7">
                                                  <div class="text-start text-black text-base font-medium font-display tracking-tight">Kişi Sayısı</div>
                                                  <div class="text-black text-base font-light font-display tracking-tight">
                                                       Kişi Seçiniz

                                                       <span class="ml-1 justify-end hidden font-thin text-base"> TotalPasengerCount </span>
                                                  </div>
                                             </button>
                                             <div class="hidden min-w-60 bg-white w-[369px] shadow-md rounded-lg mt-2 divide-y divide-gray-200">
                                                  <div class="flex flex-col mt-[37px] ml-6">
                                                       <!-- {{ mainHomeSplide.search?.SearchFerryTicket.PassengerType }} -->

                                                       <!-- <button id="hs-dropdown-auto-close-false" type="button"
                                                  class="w-[353px] h-[53px] bg-blue-700 rounded-lg border flex flex-row justify-center items-center mb-5 cursor-pointer">
                                                  <div class="text-white text-base font-medium font-display">{{
                                                       mainHomeSplide.search?.SearchFerryTicket.submitBtn }}</div>
                                             </button> -->
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="w-28 h-[46px] bg-blue-600 rounded-[82px] text-white justify-center items-center flex flex-row">Bilet Ara</div>
                                   </div>
                                   <div v-show="showTrue">
                                        <div class="w-[798px]">
                                             <div class="flex flex-row justify-between items-center ml-5">
                                                  <SliderReservationInputs placeholder="PNR Sorgula" ariaLabel="Rezervasyon Sorgula" type="text" class="mr-3 flex flex-row justify-center items-center" />
                                                  <SliderReservationInputs placeholder="Rezervasyon Sorgula" ariaLabel="Rezervasyon Sorgula" type="text" class="mr-3 flex flex-row justify-center items-center" />
                                                  <div class="bg-slate-200 rounded-full cursor-pointer p-[17px] m-[11px]">
                                                       <IconSearchNormal />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </form>
                    </div>
                    <div class="px-2 md:px-16 sm:px-8 centered-w" v-show="activeTab === 'tab1'">
                         <div class="md:mt-[73px] md:mb-32 mb-5 mt-5">
                              <div class="w-full text-black text-lg font-normal font-display leading-loose tracking-tight">
                                   Yunan adalarının en çok tercih edilenleri arasında ilk sırada gelen Midilli'ye en rahat ulaşım yolu; Ayvalık Midilli feribot seferleri olarak bilinmektedir. Nisan ve eylül ayları arası olan dönem; yüksek sezon olarak geçmektedir. Bu dönemde, her gün Ayvalık Midilli feribot seferleri düzenlenmektedir.<br /><br />Türklerin yaz aylarında özellikle tatil için Yunan adalarına gitme sıklığı, son yıllarda artmaktadır. Bu artışta, Yunanistan'ın Yunan adalarına kapıda
                                   vize uygulaması getirmesinin etkisi büyüktür. Kapı vizesi uygulaması olduğundan dolayı ziyaretçi artışı gösteren Yunan Adaları'na Ege Denizi'nde yer alan ve feribot kullanılarak gidilebilmektedir. Yunan adaları; son yılların en gözde tatil ve ziyaret mekanları arasında yer almaktadır.
                              </div>
                         </div>
                         <div>
                              <div class="text-black text-[32px] font-medium font-['Plus Jakarta Display'] tracking-wide">Midilli Turu Ayrıcalıkları</div>
                              <div class="text-black text-lg font-normal font-['Plus Jakarta Display'] tracking-tight">En son aramalarınız</div>
                              <div class="mt-9 flex flex-row">
                                   <div class="w-[292px] h-[211px] bg-white rounded-xl border border-stone-300 mx-5">
                                        <div class="ml-5 mt-10">
                                             <div class="w-[42px] h-[42px] relative">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42" viewBox="0 0 42 42" fill="none">
                                                       <g id="Receipt">
                                                            <path id="Vector" opacity="0.2" d="M36.75 9.1875V34.125L31.5 31.5L26.25 34.125L21 31.5L15.75 34.125L10.5 31.5L5.25 34.125V9.1875C5.25 8.8394 5.38828 8.50556 5.63442 8.25942C5.88056 8.01328 6.2144 7.875 6.5625 7.875H35.4375C35.7856 7.875 36.1194 8.01328 36.3656 8.25942C36.6117 8.50556 36.75 8.8394 36.75 9.1875Z" fill="#1D2339" />
                                                            <path
                                                                 id="Vector_2"
                                                                 d="M11.8125 17.0625C11.8125 16.7144 11.9508 16.3806 12.1969 16.1344C12.4431 15.8883 12.7769 15.75 13.125 15.75H28.875C29.2231 15.75 29.5569 15.8883 29.8031 16.1344C30.0492 16.3806 30.1875 16.7144 30.1875 17.0625C30.1875 17.4106 30.0492 17.7444 29.8031 17.9906C29.5569 18.2367 29.2231 18.375 28.875 18.375H13.125C12.7769 18.375 12.4431 18.2367 12.1969 17.9906C11.9508 17.7444 11.8125 17.4106 11.8125 17.0625ZM13.125 23.625H28.875C29.2231 23.625 29.5569 23.4867 29.8031 23.2406C30.0492 22.9944 30.1875 22.6606 30.1875 22.3125C30.1875 21.9644 30.0492 21.6306 29.8031 21.3844C29.5569 21.1383 29.2231 21 28.875 21H13.125C12.7769 21 12.4431 21.1383 12.1969 21.3844C11.9508 21.6306 11.8125 21.9644 11.8125 22.3125C11.8125 22.6606 11.9508 22.9944 12.1969 23.2406C12.4431 23.4867 12.7769 23.625 13.125 23.625ZM38.0625 9.1875V34.125C38.0624 34.3487 38.0051 34.5687 37.8961 34.764C37.787 34.9593 37.6299 35.1235 37.4395 35.2411C37.2492 35.3586 37.032 35.4255 36.8085 35.4355C36.585 35.4455 36.3627 35.3982 36.1627 35.298L31.5 32.9667L26.8373 35.298C26.655 35.3893 26.4539 35.4368 26.25 35.4368C26.0461 35.4368 25.845 35.3893 25.6627 35.298L21 32.9667L16.3373 35.298C16.155 35.3893 15.9539 35.4368 15.75 35.4368C15.5461 35.4368 15.345 35.3893 15.1627 35.298L10.5 32.9667L5.83734 35.298C5.63729 35.3982 5.41497 35.4455 5.1915 35.4355C4.96802 35.4255 4.7508 35.3586 4.56045 35.2411C4.37011 35.1235 4.21297 34.9593 4.10394 34.764C3.99491 34.5687 3.93762 34.3487 3.9375 34.125V9.1875C3.9375 8.49131 4.21406 7.82363 4.70634 7.33134C5.19863 6.83906 5.86631 6.5625 6.5625 6.5625H35.4375C36.1337 6.5625 36.8014 6.83906 37.2937 7.33134C37.7859 7.82363 38.0625 8.49131 38.0625 9.1875ZM35.4375 9.1875H6.5625V32.002L9.91266 30.3253C10.095 30.2341 10.2961 30.1866 10.5 30.1866C10.7039 30.1866 10.905 30.2341 11.0873 30.3253L15.75 32.6583L20.4127 30.3253C20.595 30.2341 20.7961 30.1866 21 30.1866C21.2039 30.1866 21.405 30.2341 21.5873 30.3253L26.25 32.6583L30.9127 30.3253C31.095 30.2341 31.2961 30.1866 31.5 30.1866C31.7039 30.1866 31.905 30.2341 32.0873 30.3253L35.4375 32.002V9.1875Z"
                                                                 fill="#1D2339"
                                                            />
                                                       </g>
                                                  </svg>
                                             </div>
                                        </div>
                                        <div class="text-slate-800 text-lg font-medium font-display leading-[31px] tracking-tight ml-5 mt-8">Gidiş Dönüş Feribot<br />Bileti</div>
                                   </div>
                                   <div class="w-[292px] h-[211px] bg-white rounded-xl border border-stone-300 mx-5">
                                        <div class="ml-5 mt-10">
                                             <div class="w-[42px] h-[42px] relative">
                                                  <IconBoat />
                                             </div>
                                        </div>
                                        <div class="text-slate-800 text-lg font-medium font-display leading-[31px] tracking-tight ml-5 mt-8">Liman<br />Vergileri</div>
                                   </div>
                                   <div class="w-[292px] h-[211px] bg-white rounded-xl border border-stone-300 mx-5">
                                        <div class="ml-5 mt-10">
                                             <div class="w-[42px] h-[42px] relative">
                                                  <IconForkKnife />
                                             </div>
                                        </div>
                                        <div class="text-slate-800 text-lg font-medium font-display leading-[31px] tracking-tight ml-5 mt-8">Oda / Kahvaltı<br />Konaklama</div>
                                   </div>
                                   <div class="w-[292px] h-[211px] bg-white rounded-xl border border-stone-300 mx-5">
                                        <div class="ml-5 mt-10">
                                             <div class="w-[42px] h-[42px] relative">
                                                  <IconShieldChevron />
                                             </div>
                                        </div>
                                        <div class="text-slate-800 text-lg font-medium font-display leading-[31px] tracking-tight ml-5 mt-8">Türsab Zorunlu<br />Seyahat Sigortası</div>
                                   </div>
                              </div>
                         </div>
                         <div class="mt-16">
                              <div class="flex flex-row justify-between items-end">
                                   <div>
                                        <div class="text-black text-[32px] font-medium font-['Plus Jakarta Display'] tracking-wide">Eşsiz Midilli Turları</div>
                                        <div class="text-black text-lg font-normal font-['Plus Jakarta Display'] tracking-tight">Eşsiz tarihi Yunan mimarisi, görülmeye değer mekanlar.</div>
                                   </div>
                                   <div class="w-[125px] h-8 bg-slate-200 rounded-lg border justify-center items-center flex">
                                        <div class="mr-1">Hepsini Gör</div>
                                        <IconArrowUpRight />
                                   </div>
                              </div>
                         </div>
                         <div class="flex flex-row">
                              <div>
                                   <MainTourCardComponent :item="tourData" />
                              </div>
                         </div>
                         <div class="mt-10">
                              <div class="flex flex-row justify-between items-end">
                                   <div>
                                        <div class="text-black text-[32px] font-medium font-['Plus Jakarta Display'] tracking-wide">Yunan Adaları için Turlar</div>
                                        <div class="text-black text-lg font-normal font-['Plus Jakarta Display'] tracking-tight">Eşsiz tarihi Yunan mimarisi, görülmeye değer mekanlar.</div>
                                   </div>
                                   <div class="w-[125px] h-8 bg-slate-200 rounded-lg border justify-center items-center flex">
                                        <div class="mr-1">Hepsini Gör</div>
                                        <IconArrowUpRight />
                                   </div>
                              </div>
                         </div>
                         <div class="flex flex-row">
                              <div>
                                   <MainTourCardComponent :item="tourData" />
                              </div>
                         </div>
                         <!-- <div>
                        <HomeCardSplide />
                    </div> -->
                    </div>
                    <div class="px-2 md:px-16 sm:px-8 centered-w" v-show="activeTab === 'tab2'">
                         <div>
                              <div class="w-full md:mt-[73px] mt-5 text-black text-lg font-normal font-['Plus Jakarta Display'] leading-loose tracking-tight">
                                   Midilli adasına en hızlı ve ekonomik şekilde Ayvalık’tan gidilebilmektedir. Ayvalık Midilli feribot seferlerini gerçekleştiren Jalem Tur ve Turyol firmalarının feribotları vardır. Turyol firmasına ait normal feribot ile 90 dakikada ve Jalem Tur firmasına ait olan hızlı katamaran ile de seferler 45 dakika sürmektedir.<br /><br />Turyol ve Jalem Tur firmalarının Ayvalık Midilli feribot sefer saati yaz ve kış dönemlerinde farklılıklar göstermektedir. Ayvalık
                                   Midilli feribotlarının kalkış saati sabah 9.00’dur. Ramazan Bayramı ve Kurban Bayramı dönemlerinde ek feribot seferleri düzenlenmektedir.
                              </div>
                              <div className="w-full mx-auto  rounded-[20px] p-4">
                                   <div className="flex flex-col overflow-x-auto">
                                        <div>
                                             <!-- <div className="flex flex-row items-center">
                                        <IconAsteriskSimple />
                                        <h2 className="text-black text-base font-me dium  h-7 ml-3 md:mb-0 mb-2">
                                            {{ whichFerry }}
                                        </h2>
                                    </div> -->
                                             <table className="relative bg-white mb-4 rounded-2xl w-full">
                                                  <thead>
                                                       <tr v-for="(header, index) in tableHeaders" :key="index" class="md:mx-6 mx-4 mt-8 md:mt-14 md:mb-9 flex flex-row justify-between text-black md:text-lg text-base font-semibold leading-loose rounded-2xl">
                                                            <th v-for="(label, labelIndex) in header" :key="labelIndex" class="md:pl-14 first:pl-2 w-full flex">{{ label }}</th>
                                                       </tr>
                                                  </thead>
                                                  <tbody>
                                                       <tr v-for="(row, index) in tableData" :key="index" className="flex flex-row mx-6 mb-[15px] last:mb-[70px] border border-stone-300 rounded-2xl [&>*:nth-last-child(1)]:border-none">
                                                            <td v-for="(cell, cellIndex) in row" :key="cellIndex" className="w-full border-r border-neutral-300 md:py-[21px] py-2 md:pl-10 pl-3 first:text-lg first:font-semibold first:leading-loose md:text-2xl text-xl font-normal">
                                                                 {{ cell }}
                                                            </td>
                                                       </tr>
                                                  </tbody>
                                             </table>
                                        </div>
                                        <div class="mx-12">
                                             <div class="flex flex-row items-center mt-3">
                                                  <IconAsteriskSimple />
                                                  <div class="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-[26.88px] tracking-tight ml-6">Alttaki Samos’a feribot bileti ücretlerine Kuşadası ve Samos liman vergileri dahildir.</div>
                                             </div>
                                             <div class="flex flex-row items-center mt-3">
                                                  <IconAsteriskSimple />
                                                  <div class="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-[26.88px] tracking-tight ml-5">Samos adasına seyahatiniz için gerekli olan en az altı ay geçerli bir pasaport ve Schengen vizesi olup vize konusunda dilerseniz firmamız sizlere yardımcı olmaktan mutluluk duyacaktır.</div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div></div>
                         </div>
                    </div>
                    <div class="px-2 md:px-16 sm:px-8 centered-w" v-show="activeTab === 'tab3'">
                         <div>
                              <div class="w-full text-black text-lg font-normal font-['Plus Jakarta Display'] leading-loose tracking-tight my-20">
                                   Ayvalık Midilli feribot seferleri tüm yıl boyunca devam etmekte, yaz aylarında ise her gün yapılan seferler karşılıklı olarak düzenlenmektedir. Sabah 09:00 – 18:00 saatleri arasında yapılan feribot seferleri dönemsel olarak yoğunluğa göre ek seferlerle de güncellenmektedir. Seyahat öncesinde feribot saatlerinin kontrol edilmesi gerekmektedir. Ayvalık – Midilli feribot yolculuğu ortalama 1 saat sürmektedir.<br /><br />Bilindiği üzere Türkiye’den Midilli Adasına
                                   ziyaret için Balıkesir’in Ayvalık ilçesinde bulunan iskele kullanılmaktadır. Aynı zamanda Midilli Adası ziyaretleri için Yunanistan feribotları da kullanılabilir. Midilli ziyaretinizi Sakız adası ile birleştirmek istediğinizde ise yine feribot ulaşımını tercih edebilirsiniz.<br />Ayvalık’tan Midilliye gitmek için öncelikle ofislerden veya online olarak bilet satın alınmalıdır.
                              </div>
                         </div>
                         <div class="flex flex-row gap-10 justify-between md:mb-32 mb-5">
                              <div class="w-[397px] h-[267px] opacity-20 bg-black rounded-[20px]"></div>
                              <div class="w-[397px] h-[267px] opacity-20 bg-black rounded-[20px]"></div>
                              <div class="w-[397px] h-[267px] opacity-20 bg-black rounded-[20px]"></div>
                         </div>
                    </div>
                    <div class="centered-w" v-show="activeTab === 'tab4'">
                         <div class="flex flex-col justify-center items-center m-auto relative">
                              <div class="w-full lg:px-[100px] centered-w">
                                   <div v-for="(item, index) in fakeData" :key="index" class="flex flex-col md:flex-row mt-12">
                                        <div class="md:mb-[20px] mb-5 relative w-1/3">
                                             <img class="h-full rounded-xl" src="https://plus.unsplash.com/premium_photo-1661963602326-e15ba5eefb3e?q=80&w=2083&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
                                             <div class="w-[172px] h-[50px] bg-white rounded-[135px] absolute bottom-0 right-0 flex flex-row justify-evenly items-center mr-7 mb-7">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                                                       <g id="Copy">
                                                            <path id="Vector" opacity="0.2" d="M27 5V21H21V11H11V5H27Z" fill="#1F2A37" />
                                                            <path
                                                                 id="Vector_2"
                                                                 d="M27 4H11C10.7348 4 10.4804 4.10536 10.2929 4.29289C10.1054 4.48043 10 4.73478 10 5V10H5C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11V27C4 27.2652 4.10536 27.5196 4.29289 27.7071C4.48043 27.8946 4.73478 28 5 28H21C21.2652 28 21.5196 27.8946 21.7071 27.7071C21.8946 27.5196 22 27.2652 22 27V22H27C27.2652 22 27.5196 21.8946 27.7071 21.7071C27.8946 21.5196 28 21.2652 28 21V5C28 4.73478 27.8946 4.48043 27.7071 4.29289C27.5196 4.10536 27.2652 4 27 4ZM20 26H6V12H20V26ZM26 20H22V11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10H12V6H26V20Z"
                                                                 fill="#1F2A37"
                                                            />
                                                       </g>
                                                  </svg>
                                                  <span>Daha Fazla</span>
                                             </div>
                                        </div>
                                        <div class="mb-5 w-2/5">
                                             <div>
                                                  <div class="text-black text-[32px] font-semibold font-['Plus Jakarta Sans'] tracking-wide md:ml-6">
                                                       {{ item.title }}
                                                  </div>
                                                  <div class="text-black text-base font-normal font-['Plus Jakarta Sans'] md:leading-[29.03px] leading-5 md:ml-6 md:mt-3 mt-5">
                                                       {{ item.description }}
                                                  </div>
                                             </div>
                                             <div class="flex flex-col md:flex-row">
                                                  <div class="h-[66px] w-[152px] rounded-xl border border-zinc-200 md:ml-6 ml-0 flex flex-col justify-center pl-6 mt-[20px] bg-slate-50">
                                                       <div class="flex text-black text-sm font-light font-display leading-normal justify-start items-start">Konumu</div>
                                                       <div class="text-black text-sm font-medium font-display leading-normal">
                                                            {{ item.schedule }}
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div class="flex flex-row justify-center items-center mt-[83px] cursor-pointer lg:mb-[146px] mb-10">
                                        <div class="text-black text-lg font-medium font-display mr-[16px]">Daha fazla yazı</div>
                                        <IconArrowTopRight />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class="px-2 md:px-16 sm:px-8 centered-w" v-show="activeTab === 'tab5'">
                         <div class="text-black text-lg font-normal leading-loose mt-12 pl-5 md:pl-0 centered-w">
                              <div class="flex flex-col justify-center items-center m-auto relative">
                                   <div class="w-full">
                                        <div class="flex flex-col md:flex-row w-full justify-between lg:px-28 md:px-16 sm:px-8 items-center mt-[50px] mb-10 md:mb-40">
                                             <div class="text-black text-2xl font-medium font-['Plus Jakarta Sans'] leading-[37.06px]">
                                                  Sadece soruları okumak yetmez. Samos’a <br />
                                                  ait tüm bilgilerin yer aldığı kanalımızı inceleyibilirsin.
                                             </div>
                                             <div class="flex md:flex-row flex-col justify-center md:items-center cursor-pointer">
                                                  <div class="flex flex-row md:mr-12 mr-2 md:mt-0 mt-5">
                                                       <div class="text-gray-700 text-base font-medium font-display leading-[24.86px] tracking-tight mr-1">Youtube Kanalımıza Gidin</div>
                                                       <div class="w-7 h-7 p-1 bg-gray-800 rounded-full justify-center items-center inline-flex">
                                                            <div class="w-5 h-5 relative flex-col justify-start items-start flex">
                                                                 <ArrowUpRightWhite />
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div class="flex flex-row justify-center items-center">
                                                       <div class="w-[178px] h-[121px] bg-gray-500 rounded-2xl items-center justify-center flex">
                                                            <IconPlay />
                                                       </div>
                                                       <IconEllips2077 class="-left-36 relative -z-50" />
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="w-full mb-12 md:mb-44 relative lg:px-28 md:px-16 sm:px-8">
                                             <div>
                                                  <h1 class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-[37.06px] mb-9">Genel Bilgiler</h1>
                                                  <div class="hs-accordion-group">
                                                       <div v-for="(accordion, index) in accordions" :key="index" class="hs-accordion hs-accordion-active:border-blue-600 border border-transparent rounded-xl mb-[24px]" id="hs-active-bordered-heading-one">
                                                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center py-8 gap-x-3 w-full font-semibold text-xl font-['Plus Jakarta Sans'] leading-[38px] text-start text-black px-5 disabled:opacity-50 disabled:pointer-events-none" aria-controls="hs-basic-active-bordered-collapse-one">
                                                                 {{ accordion.title }}
                                                                 <IconAccordionActiveArrow class="hs-accordion-active:block hidden" />
                                                                 <IconAccordionArrow class="hs-accordion-active:hidden block" />
                                                            </button>
                                                            <div id="hs-basic-active-bordered-collapse-one" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-active-bordered-heading-one">
                                                                 <div class="pb-4 px-5 justify-center items-center flex flex-row">
                                                                      <p class="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-7">
                                                                           <br />
                                                                           {{ accordion.body }}
                                                                           <br />
                                                                           <br />
                                                                           <br />
                                                                      </p>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div class="flex flex-row justify-center items-center text-black text-lg font-medium font-['Plus Jakarta Display'] mr-1 cursor-pointer">
                                                       <h2>Daha fazla soru</h2>
                                                       <div>
                                                            <IconArrowDownBlack />
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="w-full mb-12 md:mb-44 relative lg:px-28 md:px-16 sm:px-8">
                                             <div>
                                                  <h1 class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-[37.06px] mb-9">Vize</h1>
                                                  <div class="hs-accordion-group">
                                                       <div v-for="(accordion, index) in accordions" :key="index" class="hs-accordion hs-accordion-active:border-blue-600 border border-transparent rounded-xl mb-[24px]" id="hs-active-bordered-heading-one">
                                                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center py-8 gap-x-3 w-full font-semibold text-xl font-['Plus Jakarta Sans'] leading-[38px] text-start text-black px-5 disabled:opacity-50 disabled:pointer-events-none" aria-controls="hs-basic-active-bordered-collapse-one">
                                                                 {{ accordion.title }}
                                                                 <IconAccordionActiveArrow class="hs-accordion-active:block hidden" />
                                                                 <IconAccordionArrow class="hs-accordion-active:hidden block" />
                                                            </button>
                                                            <div id="hs-basic-active-bordered-collapse-one" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-active-bordered-heading-one">
                                                                 <div class="pb-4 px-5 justify-center items-center flex flex-row">
                                                                      <p class="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-7">
                                                                           <br />
                                                                           {{ accordion.body }}
                                                                           <br />
                                                                           <br />
                                                                           <br />
                                                                      </p>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div class="flex flex-row justify-center items-center text-black text-lg font-medium font-display mr-1 cursor-pointer">
                                                       <h2>Daha fazla soru</h2>
                                                       <div>
                                                            <IconArrowDownBlack />
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                        <div class="w-full mb-12 md:mb-44 relative lg:px-28 md:px-16 sm:px-8">
                                             <div>
                                                  <h1 class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-[37.06px] mb-9">Paket Turlar</h1>
                                                  <div class="hs-accordion-group">
                                                       <div v-for="(accordion, index) in accordions" :key="index" class="hs-accordion hs-accordion-active:border-blue-600 border border-transparent rounded-xl mb-[24px]" id="hs-active-bordered-heading-one">
                                                            <button class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center py-8 gap-x-3 w-full font-semibold text-xl font-['Plus Jakarta Sans'] leading-[38px] text-start text-black px-5 disabled:opacity-50 disabled:pointer-events-none" aria-controls="hs-basic-active-bordered-collapse-one">
                                                                 {{ accordion.title }}
                                                                 <IconAccordionActiveArrow class="hs-accordion-active:block hidden" />
                                                                 <IconAccordionArrow class="hs-accordion-active:hidden block" />
                                                            </button>
                                                            <div id="hs-basic-active-bordered-collapse-one" class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300" aria-labelledby="hs-active-bordered-heading-one">
                                                                 <div class="pb-4 px-5 justify-center items-center flex flex-row">
                                                                      <p class="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-7">
                                                                           <br />
                                                                           {{ accordion.body }}
                                                                           <br />
                                                                           <br />
                                                                           <br />
                                                                      </p>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                                  <div class="flex flex-row justify-center items-center text-black text-lg font-medium font-display mr-1 cursor-pointer">
                                                       <h2>Daha fazla soru</h2>
                                                       <div>
                                                            <IconArrowDownBlack />
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class="centered-w" v-show="activeTab === 'tab6'">
                         <div class="flex flex-col items-center m-auto relative justify-between">
                              <div class="w-full lg:px-[100px]">
                                   <div v-for="(item, index) in fakeData2" :key="index" class="flex flex-col md:flex-row mt-12 gap-5">
                                        <!-- Left Column -->
                                        <div class="md:mb-[20px] mb-5 w-full md:w-1/4 relative top-0">
                                             <div class="bg-neutral-100 flex flex-row justify-center items-center py-6 px-14 rounded-xl">
                                                  <div class="text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">Tüm Filtreleri Temizle</div>
                                             </div>
                                             <!-- First Box -->
                                             <div class="w-full bg-white rounded-[20px] border border-neutral-400 flex flex-col justify-between items-start mt-3">
                                                  <div class="p-5 flex flex-col h-full w-full justify-between">
                                                       <div class="mb-4">Tur Tipi</div>
                                                       <div class="flex flex-row justify-between">
                                                            <div class="mb-4">Rehbersiz</div>
                                                            <div class="w-5 h-5 bg-blue-700 rounded-[5px]"></div>
                                                       </div>
                                                       <div class="flex flex-row justify-between">
                                                            <div class="mb-4">Rehberli</div>
                                                            <div class="w-5 h-5 bg-gray-200 rounded-[5px]"></div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <!-- Second Box -->
                                             <div class="w-full bg-white rounded-[20px] border border-neutral-400 flex flex-col justify-between items-start mt-3">
                                                  <div class="p-5 flex flex-col h-full w-full justify-between">
                                                       <div class="mb-4">Gece Sayısı</div>
                                                       <div class="flex flex-row justify-between mb-4">
                                                            <div>1 Gece 2 Gün</div>
                                                            <div class="w-5 h-5 bg-gray-200 rounded-[5px]"></div>
                                                       </div>
                                                       <div class="flex flex-row justify-between mb-4">
                                                            <div>2 Gece 3 Gün</div>
                                                            <div class="w-5 h-5 bg-gray-200 rounded-[5px]"></div>
                                                       </div>
                                                       <div class="flex flex-row justify-between mb-4">
                                                            <div>3 Gece 4 Gün</div>
                                                            <div class="w-5 h-5 bg-gray-200 rounded-[5px]"></div>
                                                       </div>
                                                       <div class="bg-slate-200 py-4 items-center justify-center flex rounded-xl cursor-pointer">+5 Daha Fazla</div>
                                                  </div>
                                             </div>
                                             <!-- Third Box -->
                                             <div class="w-full bg-white rounded-[20px] border border-neutral-400 flex flex-col justify-between items-start mt-3">
                                                  <div class="p-5 flex flex-col h-full w-full justify-between">
                                                       <div class="mb-4">Gece Sayısı</div>
                                                       <div class="flex flex-row justify-between">
                                                            <div class="mb-4">1 Gece 2 Gün</div>
                                                            <div class="w-5 h-5 bg-gray-200 rounded-[5px]"></div>
                                                       </div>
                                                       <div class="flex flex-row justify-between">
                                                            <div class="mb-4">2 Gece 3 Gün</div>
                                                            <div class="w-5 h-5 bg-gray-200 rounded-[5px]"></div>
                                                       </div>
                                                       <div class="flex flex-row justify-between">
                                                            <div class="mb-4">3 Gece 4 Gün</div>
                                                            <div class="w-5 h-5 bg-gray-200 rounded-[5px]"></div>
                                                       </div>
                                                       <div class="bg-slate-200 py-4 items-center justify-center flex rounded-xl cursor-pointer">+5 Daha Fazla</div>
                                                  </div>
                                             </div>
                                        </div>
                                        <!-- Right Column -->
                                        <div class="md:w-2/3 mb-5">
                                             <div class="w-full mb-5">
                                                  <div class="bg-white p-4 rounded-[20px] card-border flex flex-row">
                                                       <img class="w-[180px] h-[170px] rounded-[18px]" src="https://via.placeholder.com/180x170" />
                                                       <div class="w-full">
                                                            <div class="flex flex-row justify-between items-center">
                                                                 <div class="text-black text-2xl font-bold font-['Plus Jakarta Sans'] tracking-wide pl-5">Midilli Turu 1 Gece - Kasım</div>
                                                                 <IconShare3 />
                                                            </div>
                                                            <div class="text-black text-base font-light font-['Plus Jakarta Display'] leading-7 pl-5 pt-3">Feribot, liman vergisi, oda-kahvaltı konaklama içermektedir.</div>
                                                            <div clas="flex flex-row justify-between">
                                                                 <div class="flex flex-row justify-between mb-4">
                                                                      <div class="flex flex-row justify-center items-center rounded-xl mini-card-border ml-5 w-36 mt-4">
                                                                           <div class="flex flex-row">
                                                                                <div class="flex flex-row items-center justify-center">
                                                                                     <IconMoon />
                                                                                </div>
                                                                                <div class="flex flex-col ml-4 my-2">
                                                                                     <span> 1 gece </span>
                                                                                     <span> 2 gün </span>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                      <div class="flex flex-row justify-end items-end">
                                                                           <div class="mr-3 text-right text-blue-700 text-base font-medium font-['Plus Jakarta Display'] leading-[25.12px] justify-end flex flex-col items-end">€59’dan başlayan fiyatlar</div>
                                                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                <path
                                                                                     d="M20.7806 12.5307L14.0306 19.2807C13.8899 19.4214 13.699 19.5005 13.5 19.5005C13.301 19.5005 13.1101 19.4214 12.9694 19.2807C12.8286 19.1399 12.7496 18.9491 12.7496 18.7501C12.7496 18.551 12.8286 18.3602 12.9694 18.2194L18.4397 12.7501H3.75C3.55109 12.7501 3.36032 12.671 3.21967 12.5304C3.07902 12.3897 3 12.199 3 12.0001C3 11.8011 3.07902 11.6104 3.21967 11.4697C3.36032 11.3291 3.55109 11.2501 3.75 11.2501H18.4397L12.9694 5.78068C12.8286 5.63995 12.7496 5.44907 12.7496 5.25005C12.7496 5.05103 12.8286 4.86016 12.9694 4.71943C13.1101 4.5787 13.301 4.49963 13.5 4.49963C13.699 4.49963 13.8899 4.5787 14.0306 4.71943L20.7806 11.4694C20.8504 11.5391 20.9057 11.6218 20.9434 11.7128C20.9812 11.8039 21.0006 11.9015 21.0006 12.0001C21.0006 12.0986 20.9812 12.1962 20.9434 12.2873C20.9057 12.3783 20.8504 12.461 20.7806 12.5307Z"
                                                                                     fill="#2249D6"
                                                                                />
                                                                           </svg>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div class="w-full mb-5">
                                                  <div class="bg-white p-4 rounded-[20px] card-border flex flex-row">
                                                       <img class="w-[180px] h-[170px] rounded-[18px]" src="https://via.placeholder.com/180x170" />
                                                       <div class="w-full">
                                                            <div class="flex flex-row justify-between items-center">
                                                                 <div class="text-black text-2xl font-bold font-['Plus Jakarta Sans'] tracking-wide pl-5">Midilli Turu 1 Gece - Kasım</div>
                                                                 <IconShare3 />
                                                            </div>
                                                            <div class="text-black text-base font-light font-['Plus Jakarta Display'] leading-7 pl-5 pt-3">Feribot, liman vergisi, oda-kahvaltı konaklama içermektedir.</div>
                                                            <div clas="flex flex-row justify-between">
                                                                 <div class="flex flex-row justify-between mb-4">
                                                                      <div class="flex flex-row justify-center items-center rounded-xl mini-card-border ml-5 w-36 mt-4">
                                                                           <div class="flex flex-row">
                                                                                <div class="flex flex-row items-center justify-center">
                                                                                     <IconMoon />
                                                                                </div>
                                                                                <div class="flex flex-col ml-4 my-2">
                                                                                     <span> 1 gece </span>
                                                                                     <span> 2 gün </span>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                      <div class="flex flex-row justify-end items-end">
                                                                           <div class="text-right text-blue-700 text-base font-medium font-['Plus Jakarta Display'] leading-[25.12px] justify-end flex flex-col items-end">€59’dan başlayan fiyatlar</div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div class="w-full mb-5">
                                                  <div class="bg-white p-4 rounded-[20px] card-border flex flex-row">
                                                       <img class="w-[180px] h-[170px] rounded-[18px]" src="https://via.placeholder.com/180x170" />
                                                       <div class="w-full">
                                                            <div class="flex flex-row justify-between items-center">
                                                                 <div class="text-black text-2xl font-bold font-['Plus Jakarta Sans'] tracking-wide pl-5">Midilli Turu 1 Gece - Kasım</div>
                                                                 <IconShare3 />
                                                            </div>
                                                            <div class="text-black text-base font-light font-['Plus Jakarta Display'] leading-7 pl-5 pt-3">Feribot, liman vergisi, oda-kahvaltı konaklama içermektedir.</div>
                                                            <div clas="flex flex-row justify-between">
                                                                 <div class="flex flex-row justify-between mb-4">
                                                                      <div class="flex flex-row justify-center items-center rounded-xl mini-card-border ml-5 w-36 mt-4">
                                                                           <div class="flex flex-row">
                                                                                <div class="flex flex-row items-center justify-center">
                                                                                     <IconMoon />
                                                                                </div>
                                                                                <div class="flex flex-col ml-4 my-2">
                                                                                     <span> 1 gece </span>
                                                                                     <span> 2 gün </span>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                      <div class="flex flex-row justify-end items-end">
                                                                           <div class="text-right text-blue-700 text-base font-medium font-['Plus Jakarta Display'] leading-[25.12px] justify-end flex flex-col items-end">€59’dan başlayan fiyatlar</div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div class="w-full mb-5">
                                                  <div class="bg-white p-4 rounded-[20px] card-border flex flex-row">
                                                       <img class="w-[180px] h-[170px] rounded-[18px]" src="https://via.placeholder.com/180x170" />
                                                       <div class="w-full">
                                                            <div class="flex flex-row justify-between">
                                                                 <div class="text-black text-2xl font-bold font-['Plus Jakarta Sans'] tracking-wide pl-5">Midilli Turu 1 Gece - Kasım</div>
                                                                 <IconShare3 />
                                                            </div>
                                                            <div class="text-black text-base font-light font-['Plus Jakarta Display'] leading-7 pl-5 pt-3">Feribot, liman vergisi, oda-kahvaltı konaklama içermektedir.</div>
                                                            <div clas="flex flex-row justify-between">
                                                                 <div class="flex flex-row justify-between mb-4">
                                                                      <div class="flex flex-row justify-center items-center rounded-xl mini-card-border ml-5 w-36 mt-4">
                                                                           <div class="flex flex-row">
                                                                                <div class="flex flex-row items-center justify-center">
                                                                                     <IconMoon />
                                                                                </div>
                                                                                <div class="flex flex-col ml-4 my-2">
                                                                                     <span> 1 gece </span>
                                                                                     <span> 2 gün </span>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                      <div class="flex flex-row justify-end items-end">
                                                                           <div class="text-right text-blue-700 text-base font-medium font-['Plus Jakarta Display'] leading-[25.12px] justify-end flex flex-col items-end">€59’dan başlayan fiyatlar</div>
                                                                           <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                                                                <path
                                                                                     d="M20.7806 12.5307L14.0306 19.2807C13.8899 19.4214 13.699 19.5005 13.5 19.5005C13.301 19.5005 13.1101 19.4214 12.9694 19.2807C12.8286 19.1399 12.7496 18.9491 12.7496 18.7501C12.7496 18.551 12.8286 18.3602 12.9694 18.2194L18.4397 12.7501H3.75C3.55109 12.7501 3.36032 12.671 3.21967 12.5304C3.07902 12.3897 3 12.199 3 12.0001C3 11.8011 3.07902 11.6104 3.21967 11.4697C3.36032 11.3291 3.55109 11.2501 3.75 11.2501H18.4397L12.9694 5.78068C12.8286 5.63995 12.7496 5.44907 12.7496 5.25005C12.7496 5.05103 12.8286 4.86016 12.9694 4.71943C13.1101 4.5787 13.301 4.49963 13.5 4.49963C13.699 4.49963 13.8899 4.5787 14.0306 4.71943L20.7806 11.4694C20.8504 11.5391 20.9057 11.6218 20.9434 11.7128C20.9812 11.8039 21.0006 11.9015 21.0006 12.0001C21.0006 12.0986 20.9812 12.1962 20.9434 12.2873C20.9057 12.3783 20.8504 12.461 20.7806 12.5307Z"
                                                                                     fill="#2249D6"
                                                                                />
                                                                           </svg>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div class="flex flex-row justify-center items-center mt-[83px] cursor-pointer lg:mb-[146px] mb-10">
                                        <div class="text-black text-lg font-medium font-display mr-[16px]">Daha fazla yazı</div>
                                        <IconArrowTopRight />
                                   </div>
                              </div>
                         </div>
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup lang="ts">
import IconsWhiteLeftRight from '../../components/icons/IconsArrowsLeftRight.vue'
import ArrowCircleUpRight from '../../components/icons/IconCircleUpRight.vue'
import IconArrowUpRight from '../../components/icons/IconArrowUpRight.vue'
import MainTourCardComponent from '../HomeView/components/MainTourCard/component/MainTourCardComponent.vue'
import { onMounted, watch } from 'vue'
import { fetchData } from '../../utils/globalHelper'
import { useI18n } from 'vue-i18n'
import IconAsteriskSimple from '../../components/icons/IconAsteriskSimple.vue'
import IconMoon from '../../components/icons/IconMoon.vue'
import IconShare3 from '../../components/icons/IconShare3.vue'
import SliderReservationInputs from '../HomeView/components/SliderReservationInputs.vue'
import IconSearchNormal from '../../components/icons/IconSearchNormal.vue'
import IconBoat from '../../components/icons/IconBoat.vue'
import IconForkKnife from '../../components/icons/IconForkKnife.vue'
import IconArrowRight from '../../components/icons/IconArrowRight.vue'
import { ref, watchEffect } from 'vue'
import IconArrowUpRightWhite from '../../components/icons/IconArrowUpRightWhite.vue'
import IconEllips2077 from '../../components/icons/IconEllips2077.vue'
import IconPlay from '../../components/icons/IconPlay.vue'
import IconArrowDownBlack from '../../components/icons/IconArrowDownBlack.vue'
import IconAccordionActiveArrow from '../../components/icons/IconAccordionActiveArrow.vue'
import IconAccordionArrow from '@/components/icons/IconAccordionArrow.vue'
import IconShieldChevron from '../../components/icons/IconShieldChevron.vue'

import { useChannel } from '../../stores/channel'
import { useRouter } from 'vue-router'

const router = useRouter()
const useChannelStore = useChannel()
watchEffect(() => {
     const subSaleChannel = router.currentRoute.value.params.name.replace('/', '')
     useChannelStore.setSubSaleChannel(subSaleChannel)
})

const showTrue = ref(false)

const activeTab = ref('tab1')

const tourData = ref({
     btnLink: '/tours',
     Tours: [
          {
               duration: '5 days',
               description: 'A wonderful tour through the mountains.',
               price: '$1000'
          },
          {
               duration: '3 days',
               description: 'Explore the beautiful beaches.',
               price: '$700'
          }
     ]
})

interface FakeDataItem {
     imageUrl: string
     title: string
     description: string
     schedule: string
}

const fakeData = ref<FakeDataItem[]>([
     {
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNwIyXeL_Rx8guCc_R0Huryp52OZHPAr6og&s',
          title: 'Molyvos Kalesi',
          description: 'Çam ağaçlarıyla dolu bir tepenin üzerinde yer alan ve bölgenin muhteşem manzarını sunan Molyvos Klaesi birçok işareti, arması ve diğer ayırt edici unsurları olan halen ayakta',
          schedule: 'Molivos'
     },
     {
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNwIyXeL_Rx8guCc_R0Huryp52OZHPAr6og&s',
          title: 'Molyvos Kalesi',
          description: 'Çam ağaçlarıyla dolu bir tepenin üzerinde yer alan ve bölgenin muhteşem manzarını sunan Molyvos Klaesi birçok işareti, arması ve diğer ayırt edici unsurları olan halen ayakta',
          schedule: 'Molivos'
     },
     {
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNwIyXeL_Rx8guCc_R0Huryp52OZHPAr6og&s',
          title: 'Molyvos Kalesi',
          description: 'Çam ağaçlarıyla dolu bir tepenin üzerinde yer alan ve bölgenin muhteşem manzarını sunan Molyvos Klaesi birçok işareti, arması ve diğer ayırt edici unsurları olan halen ayakta',
          schedule: 'Molivos'
     }
])

const fakeData2 = ref<FakeDataItem[]>([
     {
          imageUrl: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRkNwIyXeL_Rx8guCc_R0Huryp52OZHPAr6og&s',
          title: 'Molyvos Kalesi',
          description: 'Çam ağaçlarıyla dolu bir tepenin üzerinde yer alan ve bölgenin muhteşem manzarını sunan Molyvos Klaesi birçok işareti, arması ve diğer ayırt edici unsurları olan halen ayakta',
          schedule: 'Molivos'
     }
])

// import IconMainSamosa from "../components/icons/IconMainSamosa.vue";
// import MyNotifications from "../components/advanced/MyNotifications.vue"
// import MySettingsDeactive from "../components/advanced/MySettingsDeactive.vue"
// import MyProfile from "../components/advanced/MyProfile.vue"
// import MySettingPassword from "../components/advanced/MySettingsPassword.vue"

const { locale } = useI18n()
const tableHeaders = ref<any[]>([])

const tableData = ref([])

let pageTitle = ref('')
let whichFerry = ref('')
let ticketPrice = ref<any | null>(null)
const getTicketPrice = async () => {
     try {
          let filters = {
               pageName: 'Price'
          }

          const res = await fetchData('pages', locale.value.toLowerCase(), filters)
          if (res) {
               let data = res.data[0].layout
               ticketPrice.value = data.find((x: any) => x.__component === 'price-page.price-page')
               whichFerry.value = ticketPrice.value.whichFerry
               pageTitle.value = res.data[0].pageTitle
               initilizaTableData(ticketPrice.value.PriceTable)
               console.log(ticketPrice.value, 'ticketPriceticketPriceticketPriceticketPriceticketPrice')
          }
     } catch (error) {
          console.error('Hata:', error)
     }
}

const initilizaTableData = (data: any) => {
     let table = data[0]
     console.log(table, 'tableeeeee')

     tableHeaders.value = [table.headers.map((header: any) => header.text)]
     console.log(tableHeaders.value, 'TABLE HEADERS')

     let rows = table.rows.map((row: any) => row.row.map((row: any) => row.text))
     console.log(rows, 'ROWS')
     tableData.value = rows
     console.log(tableData.value, 'TABLE DATA')
}
watch(locale, (newLocale, oldLocale) => {
     if (newLocale !== oldLocale) {
          console.log(newLocale, 'new', oldLocale, 'old')
          getTicketPrice()
     }
})
onMounted(async () => {
     useChannelStore.setSubSaleChannel(item.href.replace('/', '')) // setSubChannel fonksiyonunu çağırıyoruz (store'da tanımlıdır

     await getTicketPrice() // Veriyi asenkron bir şekilde yükleyin
})

const accordions = ref([
     {
          title: 'Samos a turlar ne zaman başlar',
          body: 'Sabah 07:30’da Kuşadası Meander Travel ofisinde check-in ve pasaport işlemlerinizin ardından saat 09:00’da Samos’a hareket ediyor ve 10:15de varıyorsunuz.Vaktinizi adanın güzel köşelerini keşfederek geçirebilirsiniz.',
          active: true
     },
     {
          title: 'Vize işlemlerinde yapılması gerekenler nelerdir?',
          body: 'Sabah 07:30’da Kuşadası Meander Travel ofisinde check-in ve pasaport işlemlerinizin ardından saat 09:00’da Samos’a hareket ediyor ve 10:15de varıyorsunuz.Vaktinizi adanın güzel köşelerini keşfederek geçirebilirsiniz.',
          active: true
     },
     {
          title: 'Bilet almadan önce sizinle iletişim kurabilir miyim?',
          body: 'Sabah 07:30’da Kuşadası Meander Travel ofisinde check-in ve pasaport işlemlerinizin ardından saat 09:00’da Samos’a hareket ediyor ve 10:15de varıyorsunuz.Vaktinizi adanın güzel köşelerini keşfederek geçirebilirsiniz.',
          active: true
     },
     {
          title: 'Sadece Samos adasına mı bilet alabiliyorum?',
          body: 'Sabah 07:30’da Kuşadası Meander Travel ofisinde check-in ve pasaport işlemlerinizin ardından saat 09:00’da Samos’a hareket ediyor ve 10:15de varıyorsunuz.Vaktinizi adanın güzel köşelerini keşfederek geçirebilirsiniz.',
          active: true
     }
])
</script>

<style scoped>
.tab.active {
     border-bottom: 2px solid #2149d5;
     color: #2149d5;
     /* Aktif durumdaki alt çizgi rengi */
}

.tab {
     border-bottom: 2px solid rgb(255, 255, 255);
     /* Pasif durumdaki alt çizgi rengi */
     cursor: pointer;
     padding: 0px;
     padding-bottom: 23px;
}

/* Remove the incorrect selector */
.flex {
     display: flex;
}

.flex-row {
     flex-direction: row;
}

.custom-border {
     border-radius: 12px;
     border: 1px solid #c5c5c5;
     background: var(--white, #fff);
}

.custom-border-top {
     border-top: 0.5px solid #c5c5c5;
     background: var(--white, #fff);
}

.card-border {
     border: 0.5px solid #a4a4a4;
}

.card-border:hover {
     border: 0.5px solid #2149d5;
     cursor: pointer;
}

.mini-card-border {
     border: 1px solid #bababa;
}

.border-sub-line {
     border-bottom: 1px solid #dbdbdb;
}

.custom-form-border {
     border-radius: 12px;
     border: 0.5px solid #c5c5c5;
     background: var(--white, #fff);
}
</style>
