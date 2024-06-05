<template>
    <div class="flex flex-col justify-center items-center m-auto relative">
        <div class="w-full flex flex-col mx-24 centered-w justify-center items-center">
            <div class="flex flex-row">
                <div @click="activeTab = 'tab1'" class="tab mx-4 px-4" :class="{ active: activeTab === 'tab1' }">
                    Midilliye Adası
                </div>
                <div @click="activeTab = 'tab2'" class="tab mx-4 px-4" :class="{ active: activeTab === 'tab2' }">
                    Feribot Seferleri
                </div>
                <div @click="activeTab = 'tab3'" class="tab mx-4 px-4" :class="{ active: activeTab === 'tab3' }">
                    Nasıl Gidilir
                </div>
                <div @click="activeTab = 'tab4'" class="tab mx-4 px-4" :class="{ active: activeTab === 'tab4' }">
                    Gezilecek Yerler
                </div>
                <div @click="activeTab = 'tab5'" class="tab mx-4 px-4" :class="{ active: activeTab === 'tab5' }">
                    Sıkça Sorular Sorular
                </div>
                <div @click="activeTab = 'tab6'" class="tab mx-4 px-4" :class="{ active: activeTab === 'tab6' }">
                    Midilli Turları
                </div>
            </div>
            <div>
                <div v-show="activeTab === 'tab1'">
                    <div class="mt-[75px] mb-16">
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
                                Midilli Adası</div>
                        </div>
                    </div>
                    <div>
                        <form class="md:relative md:max-w-[798px] hidden md:block mx-auto md:z-50 z-40 custom-border">
                            <div class="flex flex-row">
                                <div :class="{ '': showTrue, 'border-b-2 border-blue-700': !showTrue }"
                                    class=" mr-[5px] py-3 px-9 rounded-t-xl cursor-pointer">
                                    <span @click="showTrue = false"
                                        class="text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">Search
                                        Ferry Title</span>
                                </div>
                                <div :class="{ '': !showTrue, 'border-b-2 border-blue-700': showTrue }"
                                    class="mr-4  py-3 px-9 rounded-t-xl text-white cursor-pointer">
                                    <span @click="showTrue = true"
                                        class="text-center text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug">
                                        Reservation No </span>
                                </div>
                            </div>

                            <div class="bg-white rounded-b-xl rounded-tr-xl flex items-center">
                                <div class="flex flex-row items-center w-full custom-border-top" v-show="!showTrue">
                                    <div class="hs-dropdown flex flex-row items-center ml-7">
                                        <button id="hs-dropdown-with-dividers" type="button"
                                            class="cursor-pointer flex flex-col justify-start">
                                            <div class="text-black text-base font-medium font-display tracking-tight">
                                                Nereden?</div>
                                            <div
                                                class="text-black text-base font-light font-display tracking-tight overflow-hidden whitespace-nowrap truncate w-20 text-start">
                                                Ayvalık
                                            </div>
                                        </button>

                                        <div class="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                                            aria-labelledby="hs-dropdown-with-dividers">
                                            <div class="flex flex-col w-[277px] p-5">
                                                <div class="flex flex-col">
                                                    <div
                                                        class="flex flex-col hover:bg-slate-200 transition delay-[5ms] mb-5 pt-[7px] pl-[14px] pb-2 rounded-lg cursor-pointer">
                                                        <a
                                                            class="text-black text-base font-medium font-display tracking-tight">TownName</a>
                                                    </div>
                                                </div>
                                            </div>
                                            <div class="pl-7 py-6 flex flex-row cursor-pointer">
                                                <div
                                                    class="text-gray-800 text-base font-medium font-display leading-[24.86px] tracking-tight mr-[17px]">
                                                    Samos Turlarını Keşfet</div>
                                                <div
                                                    class="w-7 h-7 p-1 bg-gray-800 rounded-full justify-center items-center inline-flex">
                                                    <IconFooter />
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <!-- @click="toggleDataPlacement" -->
                                    <div
                                        class="bg-black rounded-full flex flex-row justify-center items-center p-[7px] ml-[26px] cursor-pointer">
                                        <IconsWhiteLeftRight />
                                    </div>

                                    <div class="hs-dropdown flex flex-row items-center">
                                        <button id="hs-dropdown-with-dividers-2" type="button"
                                            class="cursor-pointer flex flex-col justify-start ml-[21px]">
                                            <div class="text-black text-base font-medium font-display tracking-tight">
                                                Nereye?</div>
                                            <div
                                                class="w-24 overflow-hidden whitespace-nowrap truncate text-black text-base font-light font-display tracking-tight text-start">
                                                Midilli
                                            </div>
                                        </button>
                                        <div class="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                                            aria-labelledby="hs-dropdown-with-dividers-2">
                                            <div class="flex flex-col w-[277px] p-5">
                                                <div class="flex flex-col">
                                                    <div class="flex flex-col">
                                                        <div class="flex flex-col">
                                                            <div
                                                                class="text-black text-base font-medium font-display tracking-tight">
                                                                Gidiş Seçiniz</div>
                                                        </div>
                                                    </div>
                                                </div>
                                                <div class="flex flex-col">
                                                    <div class="flex flex-col">
                                                        <div
                                                            class="flex flex-col hover:bg-slate-200 transition delay-[5ms] mb-5 pt-[7px] pl-[14px] pb-2 rounded-lg cursor-pointer">
                                                            <a
                                                                class="text-black text-base font-medium font-display tracking-tight">TownName</a>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="h-14 border-l border-zinc-300 ml-3"></div>

                                    <div class="hs-dropdown flex flex-row items-center">
                                        <button id="hs-dropdown-with-dividers-3" type="button"
                                            class="cursor-pointer text-start ml-7">
                                            <div class="text-black text-base font-medium font-display tracking-tight">
                                                Bilet Tipi</div>
                                            <div
                                                class="text-black text-base font-light font-display tracking-tight overflow-hidden whitespace-nowrap truncate w-24">
                                                Tek
                                            </div>
                                        </button>
                                        <div class="hs-dropdown-menu hidden transition-[opacity,margin] duration hs-dropdown-open:opacity-100 opacity-0 min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                                            aria-labelledby="hs-dropdown-with-dividers-3">
                                            <div class="flex flex-col w-[277px] p-5">
                                                <div
                                                    class="flex flex-col hover:bg-slate-200 transition delay-[5ms] mb-5 pt-[7px] pl-[14px] pb-2 rounded-lg cursor-pointer">
                                                    <a
                                                        class="text-black text-base font-medium font-display tracking-tight">Gidiş-Dönüş</a>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    <div class="h-14 border-l border-zinc-300 ml-3"></div>

                                    <div class="flex flex-row items-center ml-7">
                                        <div class="cursor-pointer flex flex-col">
                                            <span
                                                class="overflow-hidden whitespace-nowrap truncate w-28 text-black text-base font-medium font-display tracking-tight">Bilet
                                                Tipi</span>
                                            <span class="text-black text-base font-light font-display tracking-tight">
                                                Tarih Seçiniz
                                            </span>
                                        </div>
                                    </div>
                                    <div class="h-14 border-l border-zinc-300"></div>
                                    <div class="dropdown ml-7">
                                        <button type="button" class="cursor-pointer">
                                            <div
                                                class="text-start text-black text-base font-medium font-display tracking-tight">
                                                Kişi Sayısı
                                            </div>
                                            <div class="text-black text-base font-light font-display tracking-tight">
                                                Kişi Seçiniz

                                                <span class="ml-1 justify-end hidden font-thin text-base">
                                                    TotalPasengerCount
                                                </span>
                                            </div>
                                        </button>
                                        <div
                                            class="hidden min-w-60 bg-white w-[369px] shadow-md rounded-lg mt-2 divide-y divide-gray-200">
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
                                    <div
                                        class="w-28 h-[46px] bg-blue-600 rounded-[82px] text-white justify-center items-center flex flex-row">
                                        Bilet Ara</div>
                                </div>
                                <div v-show="showTrue">
                                    <div class="w-[798px]">
                                        <div class="flex flex-row justify-between items-center ml-5">
                                            <SliderReservationInputs placeholder="PNR Sorgula"
                                                ariaLabel="Rezervasyon Sorgula" type="text"
                                                class="mr-3 flex flex-row justify-center items-center" />
                                            <SliderReservationInputs placeholder="Rezervasyon Sorgula"
                                                ariaLabel="Rezervasyon Sorgula" type="text"
                                                class="mr-3 flex flex-row justify-center items-center" />
                                            <div class="bg-slate-200 rounded-full cursor-pointer p-[17px] m-[11px]">
                                                <IconSearchNormal />
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </form>
                    </div>
                    <div class="md:mt-[73px] md:mb-44 mb-24 mt-11">
                        <div
                            class="w-[1135px] text-black text-lg font-normal font-display leading-loose tracking-tight">
                            Yunan adalarının en çok tercih edilenleri arasında ilk sırada gelen Midilli'ye en rahat
                            ulaşım yolu; Ayvalık Midilli feribot seferleri olarak bilinmektedir. Nisan ve eylül ayları
                            arası olan dönem; yüksek sezon olarak geçmektedir. Bu dönemde, her gün Ayvalık Midilli
                            feribot seferleri düzenlenmektedir.<br /><br />Türklerin yaz aylarında özellikle tatil için
                            Yunan adalarına gitme sıklığı, son yıllarda artmaktadır. Bu artışta, Yunanistan'ın Yunan
                            adalarına kapıda vize uygulaması getirmesinin etkisi büyüktür. Kapı vizesi uygulaması
                            olduğundan dolayı ziyaretçi artışı gösteren Yunan Adaları'na Ege Denizi'nde yer alan ve
                            feribot kullanılarak gidilebilmektedir. Yunan adaları; son yılların en gözde tatil ve
                            ziyaret mekanları arasında yer almaktadır.</div>
                    </div>
                    <div>
                        <div class="text-black text-[32px] font-medium font-['Plus Jakarta Display'] tracking-wide">
                            Midilli Turu
                            Ayrıcalıkları</div>
                        <div class="text-black text-lg font-normal font-['Plus Jakarta Display'] tracking-tight">En son
                            aramalarınız
                        </div>
                        <div class="mt-9 flex flex-row">
                            <div class="w-[292px] h-[211px] bg-white rounded-xl border border-stone-300 mx-5">
                                <div class="ml-5 mt-10">
                                    <div class="w-[42px] h-[42px] relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42"
                                            viewBox="0 0 42 42" fill="none">
                                            <g id="Receipt">
                                                <path id="Vector" opacity="0.2"
                                                    d="M36.75 9.1875V34.125L31.5 31.5L26.25 34.125L21 31.5L15.75 34.125L10.5 31.5L5.25 34.125V9.1875C5.25 8.8394 5.38828 8.50556 5.63442 8.25942C5.88056 8.01328 6.2144 7.875 6.5625 7.875H35.4375C35.7856 7.875 36.1194 8.01328 36.3656 8.25942C36.6117 8.50556 36.75 8.8394 36.75 9.1875Z"
                                                    fill="#1D2339" />
                                                <path id="Vector_2"
                                                    d="M11.8125 17.0625C11.8125 16.7144 11.9508 16.3806 12.1969 16.1344C12.4431 15.8883 12.7769 15.75 13.125 15.75H28.875C29.2231 15.75 29.5569 15.8883 29.8031 16.1344C30.0492 16.3806 30.1875 16.7144 30.1875 17.0625C30.1875 17.4106 30.0492 17.7444 29.8031 17.9906C29.5569 18.2367 29.2231 18.375 28.875 18.375H13.125C12.7769 18.375 12.4431 18.2367 12.1969 17.9906C11.9508 17.7444 11.8125 17.4106 11.8125 17.0625ZM13.125 23.625H28.875C29.2231 23.625 29.5569 23.4867 29.8031 23.2406C30.0492 22.9944 30.1875 22.6606 30.1875 22.3125C30.1875 21.9644 30.0492 21.6306 29.8031 21.3844C29.5569 21.1383 29.2231 21 28.875 21H13.125C12.7769 21 12.4431 21.1383 12.1969 21.3844C11.9508 21.6306 11.8125 21.9644 11.8125 22.3125C11.8125 22.6606 11.9508 22.9944 12.1969 23.2406C12.4431 23.4867 12.7769 23.625 13.125 23.625ZM38.0625 9.1875V34.125C38.0624 34.3487 38.0051 34.5687 37.8961 34.764C37.787 34.9593 37.6299 35.1235 37.4395 35.2411C37.2492 35.3586 37.032 35.4255 36.8085 35.4355C36.585 35.4455 36.3627 35.3982 36.1627 35.298L31.5 32.9667L26.8373 35.298C26.655 35.3893 26.4539 35.4368 26.25 35.4368C26.0461 35.4368 25.845 35.3893 25.6627 35.298L21 32.9667L16.3373 35.298C16.155 35.3893 15.9539 35.4368 15.75 35.4368C15.5461 35.4368 15.345 35.3893 15.1627 35.298L10.5 32.9667L5.83734 35.298C5.63729 35.3982 5.41497 35.4455 5.1915 35.4355C4.96802 35.4255 4.7508 35.3586 4.56045 35.2411C4.37011 35.1235 4.21297 34.9593 4.10394 34.764C3.99491 34.5687 3.93762 34.3487 3.9375 34.125V9.1875C3.9375 8.49131 4.21406 7.82363 4.70634 7.33134C5.19863 6.83906 5.86631 6.5625 6.5625 6.5625H35.4375C36.1337 6.5625 36.8014 6.83906 37.2937 7.33134C37.7859 7.82363 38.0625 8.49131 38.0625 9.1875ZM35.4375 9.1875H6.5625V32.002L9.91266 30.3253C10.095 30.2341 10.2961 30.1866 10.5 30.1866C10.7039 30.1866 10.905 30.2341 11.0873 30.3253L15.75 32.6583L20.4127 30.3253C20.595 30.2341 20.7961 30.1866 21 30.1866C21.2039 30.1866 21.405 30.2341 21.5873 30.3253L26.25 32.6583L30.9127 30.3253C31.095 30.2341 31.2961 30.1866 31.5 30.1866C31.7039 30.1866 31.905 30.2341 32.0873 30.3253L35.4375 32.002V9.1875Z"
                                                    fill="#1D2339" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    class="text-slate-800 text-lg font-medium font-display leading-[31px] tracking-tight ml-5 mt-8">
                                    Gidiş Dönüş Feribot<br />Bileti</div>
                            </div>
                            <div class="w-[292px] h-[211px] bg-white rounded-xl border border-stone-300 mx-5">
                                <div class="ml-5 mt-10">
                                    <div class="w-[42px] h-[42px] relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42"
                                            viewBox="0 0 42 42" fill="none">
                                            <g id="Receipt">
                                                <path id="Vector" opacity="0.2"
                                                    d="M36.75 9.1875V34.125L31.5 31.5L26.25 34.125L21 31.5L15.75 34.125L10.5 31.5L5.25 34.125V9.1875C5.25 8.8394 5.38828 8.50556 5.63442 8.25942C5.88056 8.01328 6.2144 7.875 6.5625 7.875H35.4375C35.7856 7.875 36.1194 8.01328 36.3656 8.25942C36.6117 8.50556 36.75 8.8394 36.75 9.1875Z"
                                                    fill="#1D2339" />
                                                <path id="Vector_2"
                                                    d="M11.8125 17.0625C11.8125 16.7144 11.9508 16.3806 12.1969 16.1344C12.4431 15.8883 12.7769 15.75 13.125 15.75H28.875C29.2231 15.75 29.5569 15.8883 29.8031 16.1344C30.0492 16.3806 30.1875 16.7144 30.1875 17.0625C30.1875 17.4106 30.0492 17.7444 29.8031 17.9906C29.5569 18.2367 29.2231 18.375 28.875 18.375H13.125C12.7769 18.375 12.4431 18.2367 12.1969 17.9906C11.9508 17.7444 11.8125 17.4106 11.8125 17.0625ZM13.125 23.625H28.875C29.2231 23.625 29.5569 23.4867 29.8031 23.2406C30.0492 22.9944 30.1875 22.6606 30.1875 22.3125C30.1875 21.9644 30.0492 21.6306 29.8031 21.3844C29.5569 21.1383 29.2231 21 28.875 21H13.125C12.7769 21 12.4431 21.1383 12.1969 21.3844C11.9508 21.6306 11.8125 21.9644 11.8125 22.3125C11.8125 22.6606 11.9508 22.9944 12.1969 23.2406C12.4431 23.4867 12.7769 23.625 13.125 23.625ZM38.0625 9.1875V34.125C38.0624 34.3487 38.0051 34.5687 37.8961 34.764C37.787 34.9593 37.6299 35.1235 37.4395 35.2411C37.2492 35.3586 37.032 35.4255 36.8085 35.4355C36.585 35.4455 36.3627 35.3982 36.1627 35.298L31.5 32.9667L26.8373 35.298C26.655 35.3893 26.4539 35.4368 26.25 35.4368C26.0461 35.4368 25.845 35.3893 25.6627 35.298L21 32.9667L16.3373 35.298C16.155 35.3893 15.9539 35.4368 15.75 35.4368C15.5461 35.4368 15.345 35.3893 15.1627 35.298L10.5 32.9667L5.83734 35.298C5.63729 35.3982 5.41497 35.4455 5.1915 35.4355C4.96802 35.4255 4.7508 35.3586 4.56045 35.2411C4.37011 35.1235 4.21297 34.9593 4.10394 34.764C3.99491 34.5687 3.93762 34.3487 3.9375 34.125V9.1875C3.9375 8.49131 4.21406 7.82363 4.70634 7.33134C5.19863 6.83906 5.86631 6.5625 6.5625 6.5625H35.4375C36.1337 6.5625 36.8014 6.83906 37.2937 7.33134C37.7859 7.82363 38.0625 8.49131 38.0625 9.1875ZM35.4375 9.1875H6.5625V32.002L9.91266 30.3253C10.095 30.2341 10.2961 30.1866 10.5 30.1866C10.7039 30.1866 10.905 30.2341 11.0873 30.3253L15.75 32.6583L20.4127 30.3253C20.595 30.2341 20.7961 30.1866 21 30.1866C21.2039 30.1866 21.405 30.2341 21.5873 30.3253L26.25 32.6583L30.9127 30.3253C31.095 30.2341 31.2961 30.1866 31.5 30.1866C31.7039 30.1866 31.905 30.2341 32.0873 30.3253L35.4375 32.002V9.1875Z"
                                                    fill="#1D2339" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    class="text-slate-800 text-lg font-medium font-display leading-[31px] tracking-tight ml-5 mt-8">
                                    Gidiş Dönüş Feribot<br />Bileti</div>
                            </div>
                            <div class="w-[292px] h-[211px] bg-white rounded-xl border border-stone-300 mx-5">
                                <div class="ml-5 mt-10">
                                    <div class="w-[42px] h-[42px] relative">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="42" height="42"
                                            viewBox="0 0 42 42" fill="none">
                                            <g id="Receipt">
                                                <path id="Vector" opacity="0.2"
                                                    d="M36.75 9.1875V34.125L31.5 31.5L26.25 34.125L21 31.5L15.75 34.125L10.5 31.5L5.25 34.125V9.1875C5.25 8.8394 5.38828 8.50556 5.63442 8.25942C5.88056 8.01328 6.2144 7.875 6.5625 7.875H35.4375C35.7856 7.875 36.1194 8.01328 36.3656 8.25942C36.6117 8.50556 36.75 8.8394 36.75 9.1875Z"
                                                    fill="#1D2339" />
                                                <path id="Vector_2"
                                                    d="M11.8125 17.0625C11.8125 16.7144 11.9508 16.3806 12.1969 16.1344C12.4431 15.8883 12.7769 15.75 13.125 15.75H28.875C29.2231 15.75 29.5569 15.8883 29.8031 16.1344C30.0492 16.3806 30.1875 16.7144 30.1875 17.0625C30.1875 17.4106 30.0492 17.7444 29.8031 17.9906C29.5569 18.2367 29.2231 18.375 28.875 18.375H13.125C12.7769 18.375 12.4431 18.2367 12.1969 17.9906C11.9508 17.7444 11.8125 17.4106 11.8125 17.0625ZM13.125 23.625H28.875C29.2231 23.625 29.5569 23.4867 29.8031 23.2406C30.0492 22.9944 30.1875 22.6606 30.1875 22.3125C30.1875 21.9644 30.0492 21.6306 29.8031 21.3844C29.5569 21.1383 29.2231 21 28.875 21H13.125C12.7769 21 12.4431 21.1383 12.1969 21.3844C11.9508 21.6306 11.8125 21.9644 11.8125 22.3125C11.8125 22.6606 11.9508 22.9944 12.1969 23.2406C12.4431 23.4867 12.7769 23.625 13.125 23.625ZM38.0625 9.1875V34.125C38.0624 34.3487 38.0051 34.5687 37.8961 34.764C37.787 34.9593 37.6299 35.1235 37.4395 35.2411C37.2492 35.3586 37.032 35.4255 36.8085 35.4355C36.585 35.4455 36.3627 35.3982 36.1627 35.298L31.5 32.9667L26.8373 35.298C26.655 35.3893 26.4539 35.4368 26.25 35.4368C26.0461 35.4368 25.845 35.3893 25.6627 35.298L21 32.9667L16.3373 35.298C16.155 35.3893 15.9539 35.4368 15.75 35.4368C15.5461 35.4368 15.345 35.3893 15.1627 35.298L10.5 32.9667L5.83734 35.298C5.63729 35.3982 5.41497 35.4455 5.1915 35.4355C4.96802 35.4255 4.7508 35.3586 4.56045 35.2411C4.37011 35.1235 4.21297 34.9593 4.10394 34.764C3.99491 34.5687 3.93762 34.3487 3.9375 34.125V9.1875C3.9375 8.49131 4.21406 7.82363 4.70634 7.33134C5.19863 6.83906 5.86631 6.5625 6.5625 6.5625H35.4375C36.1337 6.5625 36.8014 6.83906 37.2937 7.33134C37.7859 7.82363 38.0625 8.49131 38.0625 9.1875ZM35.4375 9.1875H6.5625V32.002L9.91266 30.3253C10.095 30.2341 10.2961 30.1866 10.5 30.1866C10.7039 30.1866 10.905 30.2341 11.0873 30.3253L15.75 32.6583L20.4127 30.3253C20.595 30.2341 20.7961 30.1866 21 30.1866C21.2039 30.1866 21.405 30.2341 21.5873 30.3253L26.25 32.6583L30.9127 30.3253C31.095 30.2341 31.2961 30.1866 31.5 30.1866C31.7039 30.1866 31.905 30.2341 32.0873 30.3253L35.4375 32.002V9.1875Z"
                                                    fill="#1D2339" />
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                                <div
                                    class="text-slate-800 text-lg font-medium font-display leading-[31px] tracking-tight ml-5 mt-8">
                                    Gidiş Dönüş Feribot<br />Bileti</div>
                            </div>
                        </div>
                    </div>
                    <div class="mt-16">
                        <div class="flex flex-row justify-between items-end">
                            <div>
                                <div
                                    class="text-black text-[32px] font-medium font-['Plus Jakarta Display'] tracking-wide">
                                    Eşsiz Midilli Turları</div>
                                <div
                                    class="text-black text-lg font-normal font-['Plus Jakarta Display'] tracking-tight">
                                    Eşsiz tarihi Yunan mimarisi, görülmeye değer mekanlar.</div>
                            </div>
                            <div class="w-[125px] h-8 bg-slate-200 rounded-lg border justify-center items-center flex">
                                <div class="mr-1">
                                    Hepsini Gör
                                </div>
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
                                <div
                                    class="text-black text-[32px] font-medium font-['Plus Jakarta Display'] tracking-wide">
                                    Yunan Adaları için Turlar</div>
                                <div
                                    class="text-black text-lg font-normal font-['Plus Jakarta Display'] tracking-tight">
                                    Eşsiz tarihi Yunan mimarisi, görülmeye değer mekanlar.</div>
                            </div>
                            <div class="w-[125px] h-8 bg-slate-200 rounded-lg border justify-center items-center flex">
                                <div class="mr-1">
                                    Hepsini Gör
                                </div>
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
                <div v-show="activeTab === 'tab2'">
                    Second payment tab will be here
                </div>
                <div v-show="activeTab === 'tab3'">
                    Third payment tab will be here
                </div>
                <div v-show="activeTab === 'tab4'">
                    Fourth payment tab will be here
                </div>
                <div v-show="activeTab === 'tab5'">
                    Fifth payment tab will be here
                </div>
                <div v-show="activeTab === 'tab6'">
                    Sixt payment tab will be here
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import IconsWhiteLeftRight from '../../components/icons/IconsArrowsLeftRight.vue';
import ArrowCircleUpRight from '../../components/icons/IconCircleUpRight.vue'
import IconArrowUpRight from '../../components/icons/IconArrowUpRight.vue';
import IconShare2 from '../../components/icons/IconShare2.vue';
import MainTourCardComponent from '../HomeView/components/MainTourCard/component/MainTourCardComponent.vue';
import { onMounted, watch } from 'vue'
import { fetchData } from '../../utils/globalHelper'
import { useI18n } from 'vue-i18n'
import HomeCardSplide from '../HomeView/components/HomeCardSplide.vue';

const showTrue = ref(false)

const activeTab = ref('tab1');

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
        },
    ]
});

</script>

<style scoped>
.tab.active {
    border-bottom: 2px solid #2149D5;
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
    border: 0.5px solid #C5C5C5;
    background: var(--white, #FFF);
}

.custom-border-top {
    border-top: 0.5px solid #C5C5C5;
    background: var(--white, #FFF);
}
</style>