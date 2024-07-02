<template>
     <hr class="w-2 border" />
     <div class="flex flex-col justify-center items-center m-auto relative">
          <div class="w-full flex flex-col mx-24 centered-w justify-center items-center">
               <div class="flex flex-col mt-10">
                    <div class="flex flex-row border-sub-line">
                         <div v-for="(tab, index) in copyTabs" :key="index" @click="activeTab = tab.id"
                              class="tab mx-4 px-20 first:ml-20" :class="{ active: activeTab === tab.id }">{{ tab.title
                              }}</div>
                    </div>
                    <div class="w-full bg-blue-700"></div>
               </div>
               <div v-for="(tab, index) in copyTabs" :key="index" v-show="activeTab == tab.id" class="w-full">
                    <div>
                         <TabComponent :from="tab.from" :to="tab.to" :contentTitle="tab.contentTitle" />
                         <!-- && activeTab !== copyTabs[5].id -->
                         <form v-show="activeTab !== copyTabs[3].id"
                              class="md:relative md:max-w-[798px] hidden md:block mx-auto md:z-50 z-40 custom-border">
                              <div class="flex flex-row">
                                   <div :class="{ '': showTrue, 'border-b-2 border-blue-700': !showTrue }"
                                        class="mr-[5px] py-3 px-6 rounded-t-xl cursor-pointer">
                                        <span @click="showTrue = false"
                                             class="text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug"
                                             :class="{ '': showTrue, ' text-blue-700': !showTrue }"> {{
                                                  searchBar.SearchFerryTicket?.title }}</span>
                                   </div>
                                   <div :class="{ '': !showTrue, 'border-b-2 border-blue-700': showTrue }"
                                        class="mr-4 py-3 px-9 rounded-t-xl text-white cursor-pointer">
                                        <span @click="showTrue = true"
                                             class="text-center text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-snug"
                                             :class="{ '': !showTrue, 'text-blue-700': showTrue }"> {{
                                                  searchBar.SearchReservation?.reservationNo }} </span>
                                   </div>
                              </div>
                              <div class="rounded-b-xl rounded-tr-xl flex items-center">
                                   <div class="flex flex-row items-center w-full custom-border-top" v-show="!showTrue">
                                        <div class="flex flex-row items-center">
                                             <div>
                                                  <button @click="toggleDropdown2" id="hs-dropdown-with-dividers"
                                                       type="button"
                                                       class="cursor-pointer flex flex-col justify-start px-5">
                                                       <div
                                                            class="text-black text-base font-medium font-display tracking-tight">
                                                            {{ searchBar.SearchFerryTicket?.from }}
                                                       </div>
                                                       <div
                                                            class="text-black text-base font-light font-display tracking-tight overflow-hidden whitespace-nowrap truncate w-20 text-start">
                                                            {{ _fromWhere?.TownName }}
                                                       </div>
                                                  </button>
                                                  <transition name="dropdown">
                                                       <div v-show="isOpen2"
                                                            class="absolute min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200"
                                                            aria-labelledby="hs-dropdown-with-dividers">
                                                            <div class="flex flex-col w-[277px] p-5">
                                                                 <div class="flex flex-col">
                                                                      <div @click="updateFromWhere(i)"
                                                                           v-for="(i, index) in fromWhereObject"
                                                                           :key="index"
                                                                           :class="{ 'bg-slate-200': _fromWhere !== null && typeof _fromWhere === 'object' && isEqual(i, _fromWhere) }"
                                                                           class="flex flex-col hover:bg-slate-200 transition delay-[5ms] mb-5 pt-[7px] pl-[14px] pb-2 rounded-lg cursor-pointer truncate">
                                                                           <a
                                                                                class="text-black text-base font-medium font-display tracking-tight truncate">{{
                                                                                     i.TownName }}</a>
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
                                                  </transition>
                                             </div>
                                        </div>
                                        <!-- @click="toggleDataPlacement" -->
                                        <div
                                             class="bg-black rounded-full flex flex-row justify-center items-center p-[7px] cursor-pointer">
                                             <IconsWhiteLeftRight />
                                        </div>
                                        <div class="flex flex-row items-center justify-center">
                                             <div>
                                                  <button @click="toggleDropdown3" type="button"
                                                       class="cursor-pointer flex flex-col justify-start px-7">
                                                       <div
                                                            class="text-black text-base font-medium font-display tracking-tight">
                                                            {{ searchBar.SearchFerryTicket?.to }}
                                                       </div>
                                                       <div
                                                            class="text-black text-base font-light font-display tracking-tight overflow-hidden whitespace-nowrap truncate w-20 text-start">
                                                            {{ _toWhere?.TownName }}
                                                       </div>
                                                  </button>
                                                  <transition name="dropdown">
                                                       <div v-show="isOpen3"
                                                            class="absolute min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200"
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
                                                                      <div @click="updateToWhere(i)"
                                                                           v-for="(i, index) in toWhereObject"
                                                                           :key="index"
                                                                           :class="{ 'bg-slate-200': _toWhere !== null && typeof _toWhere === 'object' && isEqual(i, _toWhere) }"
                                                                           class="flex flex-col hover:bg-slate-200 transition delay-[5ms] mb-5 pt-[7px] pl-[14px] pb-2 rounded-lg cursor-pointer">
                                                                           <a
                                                                                class="text-black text-base font-medium font-display tracking-tight">{{
                                                                                     i.TownName }}</a>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </transition>
                                             </div>
                                        </div>
                                        <div class="h-14 border-l border-zinc-300"></div>
                                        <div class="flex flex-row items-center">
                                             <div>
                                                  <button @click="toggleDropdown4" type="button"
                                                       class="cursor-pointer text-start ml-7">
                                                       <div
                                                            class="text-black text-base font-medium font-display tracking-tight">
                                                            {{
                                                                 mainHomeSplide.search?.SearchFerryTicket.ticketType }}</div>
                                                       <div
                                                            class="text-black text-base font-light font-display tracking-tight overflow-hidden whitespace-nowrap truncate w-24">
                                                            {{ _roundTrip?.Name }}
                                                       </div>
                                                  </button>
                                                  <transition name="dropdown">
                                                       <div v-show="isOpen4"
                                                            class="absolute min-w-60 bg-white shadow-md rounded-lg mt-2 divide-y divide-gray-200 dark:bg-gray-800 dark:border dark:border-gray-700 dark:divide-gray-700"
                                                            aria-labelledby="hs-dropdown-with-dividers-3">
                                                            <div class="flex flex-col w-[277px] p-5">
                                                                 <div @click="updateToTrip(i)"
                                                                      v-for="(i, index) in travelObject" :key="index"
                                                                      :class="{ 'bg-slate-200': _roundTrip !== null && typeof _roundTrip === 'object' && isEqualTrip(i, _roundTrip) }"
                                                                      class="flex flex-col hover:bg-slate-200 transition delay-[5ms] mb-5 pt-[7px] pl-[14px] pb-2 rounded-lg cursor-pointer">
                                                                      <a
                                                                           class="text-black text-base font-medium font-display tracking-tight">{{
                                                                                i.Name }}</a>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </transition>
                                             </div>
                                        </div>
                                        <div class="h-14 border-l border-zinc-300"></div>
                                        <div class="flex flex-row items-center ml-7">
                                             <div class="cursor-pointer flex flex-col">
                                                  <span @click="togglePickerModal"
                                                       class="overflow-hidden whitespace-nowrap truncate w-28 text-black text-base font-medium font-display tracking-tight">{{
                                                            _roundTrip?.Name }}</span>
                                                  <span
                                                       class="text-black text-base font-light font-display tracking-tight">
                                                       {{ formattedDateToShow }}
                                                  </span>
                                             </div>
                                             <transition name="dropdown">
                                                  <div v-show="litepickerModalVisible" id="container"
                                                       class="w-full h-full -bottom-32 left-0 absolute">
                                                       <div id="litepicker">
                                                            <div
                                                                 class="absolute z-50 border-b-[1px] custom-border-color mt-5 pb-5 w-full">
                                                                 <span
                                                                      class="ml-12 text-zinc-700 text-lg font-semibold font-sans flex flex-row items-center">
                                                                      {{ formattedValue }}
                                                                      <span v-if="formattedValue2" class="mx-2"> -
                                                                      </span>
                                                                      {{ formattedValue2 }}
                                                                 </span>
                                                            </div>
                                                       </div>
                                                       <div @click="togglePickerModal"
                                                            class="relative bottom-14 right-0 ml-12 mb-2 bg-slate-100 w-12 items-center justify-center p-2 rounded-2xl cursor-pointer">
                                                            <p class="text-stone-800">Seç</p>
                                                       </div>
                                                  </div>
                                             </transition>
                                        </div>
                                        <div class="h-14 border-l border-zinc-300"></div>
                                        <div class="dropdown">
                                             <button @click="toggleDropdown" type="button"
                                                  class="cursor-pointer flex flex-col justify-start py-6 px-5">
                                                  <div
                                                       class="text-start text-black text-base font-medium font-display tracking-tight">
                                                       {{ searchBar.SearchFerryTicket?.passengers }}
                                                  </div>
                                                  <div
                                                       class="text-black text-base font-light font-display tracking-tight">
                                                       {{ searchBar.SearchFerryTicket?.choosePerson }}

                                                       <span class="ml-1 justify-end hidden font-thin text-base">
                                                            TotalPasengerCount </span>
                                                  </div>
                                             </button>
                                             <transition name="dropdown">
                                                  <div v-show="isOpen"
                                                       class="absolute min-w-60 bg-white w-[369px] shadow-md rounded-lg mt-2 divide-y divide-gray-200">
                                                       <div class="flex flex-col mt-[37px] ml-6">
                                                            <!-- {{ searchBar?.SearchFerryTicket.PassengerType }} -->
                                                            <div v-for="(i, index) in searchBar?.SearchFerryTicket.PassengerType"
                                                                 :key="index"
                                                                 class="flex flex-row mb-[46px] last:mb-9 justify-between items-center">
                                                                 <div class="flex flex-row">
                                                                      <div
                                                                           class="text-black text-base font-medium font-display tracking-tight">
                                                                           {{ i.TypeName }}
                                                                      </div>
                                                                 </div>
                                                                 <div
                                                                      class="mr-4 flex flex-row justify-center items-center">
                                                                      <span @click="decreaseCount(index)"
                                                                           class="mx-2 cursor-pointer">
                                                                           <IconMinus />
                                                                      </span>
                                                                      <div
                                                                           class="text-black text-[22px] font-normal font-display tracking-wide">
                                                                           {{ passenger[index].count }}
                                                                      </div>
                                                                      <span @click="increaseCount(index)"
                                                                           class="mx-2 cursor-pointer">
                                                                           <IconPlus />
                                                                      </span>
                                                                 </div>
                                                            </div>
                                                            <!-- <button id="hs-dropdown-auto-close-false" type="button"
                                                  class="w-[353px] h-[53px] bg-blue-700 rounded-lg border flex flex-row justify-center items-center mb-5 cursor-pointer">
                                                  <div class="text-white text-base font-medium font-display">{{
                                                       searchBar?.SearchFerryTicket.submitBtn }}</div>
                                             </button> -->
                                                       </div>
                                                  </div>
                                             </transition>

                                        </div>
                                        <div @click="navigateToSecondPage"
                                             class="w-28 h-[46px] bg-blue-600 rounded-[82px] text-white justify-center items-center flex flex-row cursor-pointer">
                                             {{ searchBar.SearchFerryTicket?.submitBtn }}
                                        </div>
                                   </div>
                                   <div v-show="showTrue">
                                        <div class="w-[798px]">
                                             <div class="flex flex-row justify-between items-center ml-5">
                                                  <SliderReservationInputs
                                                       :placeholder="searchBar.SearchReservation?.searchPNR"
                                                       ariaLabel="Rezervasyon Sorgula" type="text"
                                                       class="mr-3 flex flex-row justify-center items-center" />
                                                  <SliderReservationInputs
                                                       :placeholder="searchBar.SearchReservation?.searchReservation"
                                                       ariaLabel="Rezervasyon Sorgula" type="text"
                                                       class="mr-3 flex flex-row justify-center items-center" />
                                                  <div @click="navigateToSecondPage"
                                                       class="bg-slate-200 rounded-full cursor-pointer p-[17px] m-[11px]">
                                                       <IconSearchNormal />
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </form>
                    </div>
                    <div class="px-2 md:px-16 sm:px-8 centered-w" :key="index" v-show="activeTab === copyTabs[0].id">
                         <div class="md:mt-[73px] md:mb-32 mb-5 mt-5">
                              <div v-for="(paragraph, index) in tab.description" :key="index"
                                   class="w-full text-black text-lg font-normal font-display leading-loose tracking-tight">
                                   <p v-for="(child, childIndex) in paragraph.children" :key="childIndex">
                                        {{ child.text }}
                                   </p>
                              </div>
                         </div>
                         <div>
                              <div
                                   class="text-black text-[32px] font-medium font-['Plus Jakarta Display'] tracking-wide">
                                   {{ tourDetail.title }}
                              </div>
                              <div class="text-black text-lg font-normal font-['Plus Jakarta Display'] tracking-tight">
                                   {{ tourDetail.subtitle }}
                              </div>
                              <div class="mt-9 flex flex-row">
                                   <div v-for="tourDetail in tourDetail?.tourDetails" :key="tourDetail.id"
                                        class="w-[292px] h-[211px] bg-white rounded-xl border border-stone-300 mx-5">
                                        <div class="ml-5 mt-10">
                                             <div class="w-[42px] h-[42px] relative">
                                                  <img :src="getImage(tourDetail.img.url)" :alt="tourDetail.img.name" />
                                             </div>
                                        </div>
                                        <div
                                             class="text-slate-800 text-lg font-medium font-display leading-[31px] tracking-tight ml-5 mt-8">
                                             {{ tourDetail.title }}
                                        </div>
                                   </div>
                              </div>
                         </div>
                         <div class="mt-16">
                              <div class="flex flex-row justify-between items-end">
                                   <div>
                                        <div
                                             class="text-black text-[32px] font-medium font-['Plus Jakarta Display'] tracking-wide">
                                             {{ tourCards.title }}
                                        </div>
                                        <div
                                             class="text-black text-lg font-normal font-['Plus Jakarta Display'] tracking-tight">
                                             {{ tourCards.subtitle }}
                                        </div>
                                   </div>
                                   <div
                                        class="w-[125px] h-8 bg-slate-200 rounded-lg border justify-center items-center flex">
                                        <div class="mr-1">{{ tourCards.btnText }}</div>
                                        <IconArrowUpRight />
                                   </div>
                              </div>
                         </div>
                         <div class="flex flex-row">
                              <MainTourCardComponent :item="tourCards" />
                         </div>
                         <div class="mt-10">

                              <HomeSubCardSplide  :key="index" :item="allTours"/>
                              
                              <!-- HERE-->
                              <!-- <div class="flex flex-row justify-between items-end">
                                   <div>
                                        <div
                                             class="text-black text-[32px] font-medium font-['Plus Jakarta Display'] tracking-wide">
                                             {{ allTours.title }}
                                        </div>
                                        <div
                                             class="text-black text-lg font-normal font-['Plus Jakarta Display'] tracking-tight">
                                             {{ allTours.subtitle }}
                                        </div>
                                   </div>
                                   <div
                                        class="w-[125px] h-8 bg-slate-200 rounded-lg border justify-center items-center flex">
                                        <div class="mr-1">{{ allTours.btnText }}</div>
                                        <IconArrowUpRight />
                                   </div>
                              </div> -->
                              <!-- HERE -->
                         </div>
                         <!-- <div class="flex flex-row">
                              <MainTourCardComponent :item="allTours" />
                         </div> -->
                    </div>
                    <div class="px-2 md:px-16 sm:px-8 centered-w" v-show="activeTab === copyTabs[1].id">
                         <div>
                              <div v-for="(paragraph, index) in tab.description" :key="index"
                                   class="w-full md:mt-[73px] mt-5 text-black text-lg font-normal font-['Plus Jakarta Display'] leading-loose tracking-tight">
                                   <p v-for="(child, childIndex) in paragraph.children" :key="childIndex">
                                        {{ child.text }}
                                   </p>
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
                                                       <tr
                                                            class="md:mx-6 mx-4 mt-8 md:mt-14 md:mb-9 flex flex-row justify-between text-black md:text-lg text-base font-semibold leading-loose rounded-2xl">
                                                            <th v-for="(header, headerIndex) in sharedTable.headers"
                                                                 :key="headerIndex"
                                                                 class="md:pl-14 first:pl-2 w-full flex">
                                                                 {{ header.text }}
                                                            </th>
                                                       </tr>
                                                  </thead>
                                                  <tbody>
                                                       <tr v-for="(row, rowIndex) in sharedTable.rows" :key="rowIndex"
                                                            className="flex flex-row mx-6 mb-[15px] last:mb-[70px] border border-stone-300 rounded-2xl [&>*:nth-last-child(1)]:border-none">
                                                            <td v-for="(cell, cellIndex) in row.row" :key="cellIndex"
                                                                 className="w-full border-r border-neutral-300 md:py-[21px] py-2 md:pl-10 pl-3 first:text-lg first:font-semibold first:leading-loose md:text-2xl text-xl font-normal">
                                                                 {{ cell.text }}
                                                            </td>
                                                       </tr>
                                                  </tbody>
                                             </table>
                                        </div>
                                        <div class="mx-12">
                                             <div class="flex flex-row items-center mt-3">
                                                  <IconAsteriskSimple />
                                                  <div
                                                       class="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-[26.88px] tracking-tight ml-6">
                                                       Alttaki Samos’a feribot bileti ücretlerine Kuşadası ve Samos
                                                       liman vergileri dahildir.</div>
                                             </div>
                                             <div class="flex flex-row items-center mt-3">
                                                  <IconAsteriskSimple />
                                                  <div
                                                       class="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-[26.88px] tracking-tight ml-5">
                                                       Samos adasına seyahatiniz için gerekli olan en az altı ay geçerli
                                                       bir pasaport ve Schengen vizesi olup vize konusunda dilerseniz
                                                       firmamız sizlere yardımcı olmaktan mutluluk duyacaktır.</div>
                                             </div>
                                        </div>
                                   </div>
                              </div>
                              <div></div>
                         </div>
                    </div>
                    <div class="px-2 md:px-16 sm:px-8 centered-w" v-show="activeTab === copyTabs[2].id">
                         <div>
                              <div v-for="(paragraph, index) in tab.description" :key="index"
                                   class="w-full text-black text-lg font-normal font-['Plus Jakarta Display'] leading-loose tracking-tight my-20">
                                   <p v-for="(child, childIndex) in paragraph.children" :key="childIndex">
                                        {{ child.text }}
                                   </p>
                              </div>
                         </div>
                         <div class="flex flex-row gap-10 justify-between mb-5">
                              <div v-for="(img, index) in sharedImages.images" :key="index"
                                   class="flex flex-row gap-10 justify-between mb-5">
                                   <div class="flex flex-row">
                                        <img :src="getImage(img.url)"
                                             class="w-[397px] h-[267px] bg-black rounded-[20px]" />
                                   </div>
                              </div>
                         </div>

                    </div>
                    <div class="centered-w" v-show="activeTab === copyTabs[3].id">
                         <div class="flex flex-col justify-center items-center m-auto relative">
                              <div class="w-full lg:px-[100px] centered-w">
                                   <div v-for="(blog, index) in sharedBlogCard.BlogCard" :key="index"
                                        class="flex flex-col md:flex-row mt-12">
                                        <div class="md:mb-[20px] mb-5 relative w-1/3">
                                             <img :src="getImage(blog.img.url)" class="h-full rounded-xl"
                                                  alt="blog image" />
                                             <div
                                                  class="w-[172px] h-[50px] bg-white rounded-[135px] absolute bottom-0 right-0 flex flex-row justify-evenly items-center mr-7 mb-7">
                                                  <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32"
                                                       viewBox="0 0 32 32" fill="none">
                                                       <g id="Copy">
                                                            <path id="Vector" opacity="0.2" d="M27 5V21H21V11H11V5H27Z"
                                                                 fill="#1F2A37" />
                                                            <path id="Vector_2"
                                                                 d="M27 4H11C10.7348 4 10.4804 4.10536 10.2929 4.29289C10.1054 4.48043 10 4.73478 10 5V10H5C4.73478 10 4.48043 10.1054 4.29289 10.2929C4.10536 10.4804 4 10.7348 4 11V27C4 27.2652 4.10536 27.5196 4.29289 27.7071C4.48043 27.8946 4.73478 28 5 28H21C21.2652 28 21.5196 27.8946 21.7071 27.7071C21.8946 27.5196 22 27.2652 22 27V22H27C27.2652 22 27.5196 21.8946 27.7071 21.7071C27.8946 21.5196 28 21.2652 28 21V5C28 4.73478 27.8946 4.48043 27.7071 4.29289C27.5196 4.10536 27.2652 4 27 4ZM20 26H6V12H20V26ZM26 20H22V11C22 10.7348 21.8946 10.4804 21.7071 10.2929C21.5196 10.1054 21.2652 10 21 10H12V6H26V20Z"
                                                                 fill="#1F2A37" />
                                                       </g>
                                                  </svg>
                                                  <span>{{ blog.btnText }}</span>
                                             </div>
                                        </div>
                                        <div class="mb-5 w-2/5 md:ml-6">
                                             <div>
                                                  <div
                                                       class="text-black text-[32px] font-semibold font-['Plus Jakarta Sans'] tracking-wide">
                                                       {{ blog.title }}
                                                  </div>
                                                  <div
                                                       class="text-black text-base font-normal font-['Plus Jakarta Sans'] md:leading-[29.03px] leading-5 mt-5">
                                                       <span v-for="desc in blog.description" :key="desc.type">
                                                            <span v-for="child in desc.children" :key="child.type">
                                                                 {{ child.text }}
                                                            </span>
                                                       </span>
                                                  </div>
                                             </div>
                                             <div class="flex flex-col md:flex-row mt-5">
                                                  <div
                                                       class="h-[66px] w-[152px] rounded-xl border border-zinc-200 flex flex-col justify-center pl-6 bg-slate-50">
                                                       <div
                                                            class="text-black text-sm font-light font-display leading-normal">
                                                            {{ blog.locationTitle }}
                                                       </div>
                                                       <div
                                                            class="text-black text-sm font-medium font-display leading-normal">
                                                            {{ blog.location }}
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div
                                        class="flex flex-row justify-center items-center mt-10 cursor-pointer lg:mb-[146px] mb-10">
                                        <div class="text-black text-lg font-medium font-display mr-2">{{
                                             sharedBlogCard.more }}</div>
                                        <IconArrowTopRight />
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class="px-2 md:px-16 sm:px-8 centered-w" v-show="activeTab === copyTabs[4].id">
                         <div class="text-black text-lg font-normal leading-loose mt-12 pl-5 md:pl-0 centered-w">
                              <div class="flex flex-col justify-center items-center m-auto relative">
                                   <div class="w-full">
                                        <div
                                             class="flex flex-col md:flex-row w-full justify-between lg:px-28 md:px-16 sm:px-8 items-center mt-[50px] mb-10 md:mb-40">
                                             <div
                                                  class="text-black text-2xl font-medium font-['Plus Jakarta Sans'] leading-[37.06px]">
                                                  {{ sharedYoutubeArea.title }}
                                             </div>
                                             <div
                                                  class="flex md:flex-row flex-col justify-center md:items-center cursor-pointer">
                                                  <div class="flex flex-row md:mr-12 mr-2 md:mt-0 mt-5">
                                                       <div
                                                            class="text-gray-700 text-base font-medium font-display leading-[24.86px] tracking-tight mr-1">
                                                            {{ sharedYoutubeArea.goYoutubeText }}</div>
                                                       <div
                                                            class="w-7 h-7 p-1 bg-gray-800 rounded-full justify-center items-center inline-flex">
                                                            <div
                                                                 class="w-5 h-5 relative flex-col justify-start items-start flex">
                                                                 <ArrowUpRightWhite />
                                                            </div>
                                                       </div>
                                                  </div>

                                                  <a href="{{ sharedYoutubeArea.youtubeLink }}" target="_blank"
                                                       class="flex flex-row justify-center items-center">
                                                       <div
                                                            class="w-[178px] h-[121px] bg-gray-500 rounded-2xl items-center justify-center flex">
                                                            <IconPlay />

                                                       </div>
                                                       <IconEllips2077 class="-left-36 relative -z-50" />
                                                  </a>
                                             </div>
                                        </div>
                                        <div v-for="(accordion, index) in objWithId6" :key="index"
                                             class="w-full mb-12 md:mb-44 relative lg:px-28 md:px-16 sm:px-8">
                                             <div>
                                                  <h1
                                                       class="text-black text-2xl font-semibold font-['Plus Jakarta Sans'] leading-[37.06px] mb-9">
                                                       {{ accordion.category }}</h1>
                                                  <div>
                                                       <AccordionPanel2 :title="question.title"
                                                            v-for="(question, qIndex) in accordion.CategoryQuestion"
                                                            :key="qIndex"
                                                            class=" border border-transparent rounded-xl mb-[24px]">
                                                            <div
                                                                 class="w-full overflow-hidden transition-[height] duration-300">
                                                                 <div class="pb-4 px-10 items-center flex flex-row">
                                                                      <p
                                                                           class="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-7">
                                                                           <br />
                                                                           {{ question.description }}
                                                                           <br />
                                                                           <br />
                                                                           <br />
                                                                      </p>
                                                                 </div>
                                                            </div>
                                                       </AccordionPanel2>
                                                  </div>
                                                  <!-- <div
                                                       class="flex flex-row justify-center items-center text-black text-lg font-medium font-display mr-1 cursor-pointer">
                                                       <h2>Daha fazla soru</h2>
                                                       <div>
                                                            <IconArrowDownBlack />
                                                       </div>
                                                  </div> -->
                                             </div>
                                        </div>
                                   </div>
                              </div>
                         </div>
                    </div>
                    <div class="centered-w" v-show="activeTab === copyTabs[5]?.id">
                         <div class="flex flex-col items-center m-auto relative justify-between">
                              <div class="w-full lg:px-[100px]">
                                   <div v-for="(item, index) in fakeData2" :key="index"
                                        class="flex flex-col md:flex-row mt-12 gap-5">
                                        <!-- Left Column -->
                                        <div class="md:mb-[20px] mb-5 w-full md:w-1/4 relative top-0">
                                             <div
                                                  class="bg-neutral-100 flex flex-row justify-center items-center py-6 px-14 rounded-xl">
                                                  <div
                                                       class="text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                                       Tüm Filtreleri Temizle</div>
                                             </div>
                                             <!-- First Box -->
                                             <div
                                                  class="w-full bg-white rounded-[20px] border border-neutral-400 flex flex-col justify-between items-start mt-3">
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
                                             <div
                                                  class="w-full bg-white rounded-[20px] border border-neutral-400 flex flex-col justify-between items-start mt-3">
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
                                                       <div
                                                            class="bg-slate-200 py-4 items-center justify-center flex rounded-xl cursor-pointer">
                                                            +5 Daha Fazla</div>
                                                  </div>
                                             </div>
                                             <!-- Third Box -->
                                             <div
                                                  class="w-full bg-white rounded-[20px] border border-neutral-400 flex flex-col justify-between items-start mt-3">
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
                                                       <div
                                                            class="bg-slate-200 py-4 items-center justify-center flex rounded-xl cursor-pointer">
                                                            +5 Daha Fazla</div>
                                                  </div>
                                             </div>
                                        </div>
                                        <!-- Right Column -->
                                        <div class="md:w-2/3 mb-5">
                                             <div class="w-full mb-5">
                                                  <div class="bg-white p-4 rounded-[20px] card-border flex flex-row">
                                                       <img class="w-[180px] h-[170px] rounded-[18px]"
                                                            src="https://via.placeholder.com/180x170" />
                                                       <div class="w-full">
                                                            <div class="flex flex-row justify-between items-center">
                                                                 <div
                                                                      class="text-black text-2xl font-bold font-['Plus Jakarta Sans'] tracking-wide pl-5">
                                                                      Midilli Turu 1 Gece - Kasım</div>
                                                                 <IconShare3 />
                                                            </div>
                                                            <div
                                                                 class="text-black text-base font-light font-['Plus Jakarta Display'] leading-7 pl-5 pt-3">
                                                                 Feribot, liman vergisi, oda-kahvaltı konaklama
                                                                 içermektedir.</div>
                                                            <div clas="flex flex-row justify-between">
                                                                 <div class="flex flex-row justify-between mb-4">
                                                                      <div
                                                                           class="flex flex-row justify-center items-center rounded-xl mini-card-border ml-5 w-36 mt-4">
                                                                           <div class="flex flex-row">
                                                                                <div
                                                                                     class="flex flex-row items-center justify-center">
                                                                                     <IconMoon />
                                                                                </div>
                                                                                <div class="flex flex-col ml-4 my-2">
                                                                                     <span> 1 gece </span>
                                                                                     <span> 2 gün </span>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                      <div class="flex flex-row justify-end items-end">
                                                                           <div
                                                                                class="mr-3 text-right text-blue-700 text-base font-medium font-['Plus Jakarta Display'] leading-[25.12px] justify-end flex flex-col items-end">
                                                                                €59’dan başlayan fiyatlar</div>
                                                                           <svg xmlns="http://www.w3.org/2000/svg"
                                                                                width="24" height="24"
                                                                                viewBox="0 0 24 24" fill="none">
                                                                                <path d="M20.7806 12.5307L14.0306 19.2807C13.8899 19.4214 13.699 19.5005 13.5 19.5005C13.301 19.5005 13.1101 19.4214 12.9694 19.2807C12.8286 19.1399 12.7496 18.9491 12.7496 18.7501C12.7496 18.551 12.8286 18.3602 12.9694 18.2194L18.4397 12.7501H3.75C3.55109 12.7501 3.36032 12.671 3.21967 12.5304C3.07902 12.3897 3 12.199 3 12.0001C3 11.8011 3.07902 11.6104 3.21967 11.4697C3.36032 11.3291 3.55109 11.2501 3.75 11.2501H18.4397L12.9694 5.78068C12.8286 5.63995 12.7496 5.44907 12.7496 5.25005C12.7496 5.05103 12.8286 4.86016 12.9694 4.71943C13.1101 4.5787 13.301 4.49963 13.5 4.49963C13.699 4.49963 13.8899 4.5787 14.0306 4.71943L20.7806 11.4694C20.8504 11.5391 20.9057 11.6218 20.9434 11.7128C20.9812 11.8039 21.0006 11.9015 21.0006 12.0001C21.0006 12.0986 20.9812 12.1962 20.9434 12.2873C20.9057 12.3783 20.8504 12.461 20.7806 12.5307Z"
                                                                                     fill="#2249D6" />
                                                                           </svg>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div class="w-full mb-5">
                                                  <div class="bg-white p-4 rounded-[20px] card-border flex flex-row">
                                                       <img class="w-[180px] h-[170px] rounded-[18px]"
                                                            src="https://via.placeholder.com/180x170" />
                                                       <div class="w-full">
                                                            <div class="flex flex-row justify-between items-center">
                                                                 <div
                                                                      class="text-black text-2xl font-bold font-['Plus Jakarta Sans'] tracking-wide pl-5">
                                                                      Midilli Turu 1 Gece - Kasım</div>
                                                                 <IconShare3 />
                                                            </div>
                                                            <div
                                                                 class="text-black text-base font-light font-['Plus Jakarta Display'] leading-7 pl-5 pt-3">
                                                                 Feribot, liman vergisi, oda-kahvaltı konaklama
                                                                 içermektedir.</div>
                                                            <div clas="flex flex-row justify-between">
                                                                 <div class="flex flex-row justify-between mb-4">
                                                                      <div
                                                                           class="flex flex-row justify-center items-center rounded-xl mini-card-border ml-5 w-36 mt-4">
                                                                           <div class="flex flex-row">
                                                                                <div
                                                                                     class="flex flex-row items-center justify-center">
                                                                                     <IconMoon />
                                                                                </div>
                                                                                <div class="flex flex-col ml-4 my-2">
                                                                                     <span> 1 gece </span>
                                                                                     <span> 2 gün </span>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                      <div class="flex flex-row justify-end items-end">
                                                                           <div
                                                                                class="text-right text-blue-700 text-base font-medium font-['Plus Jakarta Display'] leading-[25.12px] justify-end flex flex-col items-end">
                                                                                €59’dan başlayan fiyatlar</div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div class="w-full mb-5">
                                                  <div class="bg-white p-4 rounded-[20px] card-border flex flex-row">
                                                       <img class="w-[180px] h-[170px] rounded-[18px]"
                                                            src="https://via.placeholder.com/180x170" />
                                                       <div class="w-full">
                                                            <div class="flex flex-row justify-between items-center">
                                                                 <div
                                                                      class="text-black text-2xl font-bold font-['Plus Jakarta Sans'] tracking-wide pl-5">
                                                                      Midilli Turu 1 Gece - Kasım</div>
                                                                 <IconShare3 />
                                                            </div>
                                                            <div
                                                                 class="text-black text-base font-light font-['Plus Jakarta Display'] leading-7 pl-5 pt-3">
                                                                 Feribot, liman vergisi, oda-kahvaltı konaklama
                                                                 içermektedir.</div>
                                                            <div clas="flex flex-row justify-between">
                                                                 <div class="flex flex-row justify-between mb-4">
                                                                      <div
                                                                           class="flex flex-row justify-center items-center rounded-xl mini-card-border ml-5 w-36 mt-4">
                                                                           <div class="flex flex-row">
                                                                                <div
                                                                                     class="flex flex-row items-center justify-center">
                                                                                     <IconMoon />
                                                                                </div>
                                                                                <div class="flex flex-col ml-4 my-2">
                                                                                     <span> 1 gece </span>
                                                                                     <span> 2 gün </span>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                      <div class="flex flex-row justify-end items-end">
                                                                           <div
                                                                                class="text-right text-blue-700 text-base font-medium font-['Plus Jakarta Display'] leading-[25.12px] justify-end flex flex-col items-end">
                                                                                €59’dan başlayan fiyatlar</div>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                             <div class="w-full mb-5">
                                                  <div class="bg-white p-4 rounded-[20px] card-border flex flex-row">
                                                       <img class="w-[180px] h-[170px] rounded-[18px]"
                                                            src="https://via.placeholder.com/180x170" />
                                                       <div class="w-full">
                                                            <div class="flex flex-row justify-between">
                                                                 <div
                                                                      class="text-black text-2xl font-bold font-['Plus Jakarta Sans'] tracking-wide pl-5">
                                                                      Midilli Turu 1 Gece - Kasım</div>
                                                                 <IconShare3 />
                                                            </div>
                                                            <div
                                                                 class="text-black text-base font-light font-['Plus Jakarta Display'] leading-7 pl-5 pt-3">
                                                                 Feribot, liman vergisi, oda-kahvaltı konaklama
                                                                 içermektedir.</div>
                                                            <div clas="flex flex-row justify-between">
                                                                 <div class="flex flex-row justify-between mb-4">
                                                                      <div
                                                                           class="flex flex-row justify-center items-center rounded-xl mini-card-border ml-5 w-36 mt-4">
                                                                           <div class="flex flex-row">
                                                                                <div
                                                                                     class="flex flex-row items-center justify-center">
                                                                                     <IconMoon />
                                                                                </div>
                                                                                <div class="flex flex-col ml-4 my-2">
                                                                                     <span> 1 gece </span>
                                                                                     <span> 2 gün </span>
                                                                                </div>
                                                                           </div>
                                                                      </div>
                                                                      <div class="flex flex-row justify-end items-end">
                                                                           <div
                                                                                class="text-right text-blue-700 text-base font-medium font-['Plus Jakarta Display'] leading-[25.12px] justify-end flex flex-col items-end">
                                                                                €59’dan başlayan fiyatlar</div>
                                                                           <svg xmlns="http://www.w3.org/2000/svg"
                                                                                width="24" height="24"
                                                                                viewBox="0 0 24 24" fill="none">
                                                                                <path d="M20.7806 12.5307L14.0306 19.2807C13.8899 19.4214 13.699 19.5005 13.5 19.5005C13.301 19.5005 13.1101 19.4214 12.9694 19.2807C12.8286 19.1399 12.7496 18.9491 12.7496 18.7501C12.7496 18.551 12.8286 18.3602 12.9694 18.2194L18.4397 12.7501H3.75C3.55109 12.7501 3.36032 12.671 3.21967 12.5304C3.07902 12.3897 3 12.199 3 12.0001C3 11.8011 3.07902 11.6104 3.21967 11.4697C3.36032 11.3291 3.55109 11.2501 3.75 11.2501H18.4397L12.9694 5.78068C12.8286 5.63995 12.7496 5.44907 12.7496 5.25005C12.7496 5.05103 12.8286 4.86016 12.9694 4.71943C13.1101 4.5787 13.301 4.49963 13.5 4.49963C13.699 4.49963 13.8899 4.5787 14.0306 4.71943L20.7806 11.4694C20.8504 11.5391 20.9057 11.6218 20.9434 11.7128C20.9812 11.8039 21.0006 11.9015 21.0006 12.0001C21.0006 12.0986 20.9812 12.1962 20.9434 12.2873C20.9057 12.3783 20.8504 12.461 20.7806 12.5307Z"
                                                                                     fill="#2249D6" />
                                                                           </svg>
                                                                      </div>
                                                                 </div>
                                                            </div>
                                                       </div>
                                                  </div>
                                             </div>
                                        </div>
                                   </div>
                                   <div
                                        class="flex flex-row justify-center items-center mt-[83px] cursor-pointer lg:mb-[146px] mb-10">
                                        <div class="text-black text-lg font-medium font-display mr-[16px]">Daha fazla
                                             yazı</div>
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
import { onMounted, watch, computed, ref, watchEffect, onUnmounted } from 'vue'
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
import IconArrowUpRightWhite from '../../components/icons/IconArrowUpRightWhite.vue'
import IconEllips2077 from '../../components/icons/IconEllips2077.vue'
import IconPlay from '../../components/icons/IconPlay.vue'
import IconArrowDownBlack from '../../components/icons/IconArrowDownBlack.vue'
import IconAccordionActiveArrow from '../../components/icons/IconAccordionActiveArrow.vue'
import IconAccordionArrow from '@/components/icons/IconAccordionArrow.vue'
import IconShieldChevron from '../../components/icons/IconShieldChevron.vue'
import p from '@/utils/pathConfig'
import { useChannel } from '../../stores/channel'
import { useRouter } from 'vue-router'
import Litepicker from 'litepicker'
import IconPlus from '../../components/icons/IconPlus.vue'
import IconMinus from '../../components/icons/IconMinus.vue'
import HomeSubCardSplide from '../../views/SubViews/components/HomeSubCardSplide.vue'

import Splide from '@splidejs/splide';
import '@splidejs/splide/dist/css/themes/splide-default.min.css';

const router = useRouter()
const useChannelStore = useChannel()

const applicationName = ref(p.Product)
const controllerName = ref('Keydefinition')
const name = ref('SearchTownList')

// watchEffect(() => {
//      if (router.currentRoute.value.params.name) {
//           const subSaleChannel = router.currentRoute.value.params.name.replace('/', '')
//           useChannelStore.setSubSaleChannel(subSaleChannel)
//      }
// })

const showTrue = ref(false)

const scn = ref(localStorage.getItem('SubSalechannelName'))

const activeTab = ref(2)

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
import { getApi, getImage } from '@/utils/globalHelper'
import { useTripStore } from '../../../src/stores/tripStore'
import TabComponent from '../SubViews/components/TabComponent.vue'
import AccordionPanel2 from '../../components/advanced/AccordionPanel2.vue'

const tripStore = useTripStore()

interface Passenger {
     age: string
     price: string
     count: number
     id: string
}

const AdultCount: Passenger = { id: 'adult', age: 'Yetişkin', price: '€41', count: 0 }
const ChildCount: Passenger = { id: 'child', age: 'Çocuk', price: '€31', count: 0 }
const InfantCount: Passenger = { id: 'infant', age: 'Bebek', price: '€0', count: 0 }
const passenger = ref<Passenger[]>([AdultCount, ChildCount, InfantCount])

function isEqual(obj1: { TownName: string; TownID: string }, obj2: { TownName: string; TownID: string }) {
     return obj1 !== null && obj2 !== null && obj1.TownName === obj2.TownName && obj1.TownID === obj2.TownID
}

function isEqualTrip(obj1: { Name: string }, obj2: { Name: string }) {
     return obj1 !== null && obj2 !== null && obj1.Name === obj2.Name
}

const formattedDateToShow = computed(() => {
     // Üç tarihin tamamı mevcut olduğunda
     // Yalnızca ilk iki tarih mevcut olduğunda
     if (date.formattedDate.value && date.formattedDate2.value) {
          console.log('first if')
          return `${date.formattedDate.value} - ${date.formattedDate2.value}`
     }
     // Yalnızca ilk tarih mevcut olduğunda
     else if (date.formattedDate.value) {
          console.log('else first if')
          return date.formattedDate.value
     } else {
          console.log('last if')
          return searchBar.value.SearchFerryTicket?.date
     }
})

const formattedValue = computed(() => {
     if (date.formattedDate.value) {
          // console.log('first formattedValue date is here')
          return date.formattedDate.value
     } else {
          return 'Tarih Seçiniz'
     }
})

const formattedValue2 = computed(() => {
     if (date.formattedDate2.value) {
          // console.log('first formattedValue date is here')
          return date.formattedDate2.value
     } else {
          return ''
     }
})

const isOpen = ref(false)
const toggleDropdown = () => {
     isOpen.value = !isOpen.value
}

const isOpen2 = ref(false)
const toggleDropdown2 = () => {
     isOpen2.value = !isOpen2.value
}

const isOpen3 = ref(false)
const toggleDropdown3 = () => {
     isOpen3.value = !isOpen3.value
}

const isOpen4 = ref(false)
const toggleDropdown4 = () => {
     isOpen4.value = !isOpen4.value
}

const increaseCount = (index: number) => {
     if (passenger.value[index]) {
          passenger.value[index].count++
          console.log(`Passenger count increased for ${passenger.value[index].age}. New count: ${passenger.value[index].count}`)
          console.log(`Total passenger count: ${totalCount()}`)
     }
}

const decreaseCount = (index: number) => {
     if (passenger.value[index] && passenger.value[index].count > 0) {
          passenger.value[index].count--
          console.log(`Passenger count decreased for ${passenger.value[index].age}. New count: ${passenger.value[index].count}`)
          console.log(`Total passenger count: ${totalCount()}`)
          console.log(passenger.value[index], 'index')
     }
}

const totalCount = () => {
     return passenger.value.reduce((total, current) => total + current.count, 0)
}

const { locale } = useI18n()
const tableHeaders = ref<any[]>([])
const toWhereData = ref([])

const tableData = ref([])
const _fromWhere = ref<{ TownName: string; TownID: string } | null>(null)
const _toWhere = ref<{ TownName: string; TownID: string } | null>(null)
const _roundTrip = ref<{ Name: string; ID: number } | null>(null)

const arrivalTownId = ref<string | null>(null)

let pageTitle = ref('')
let whichFerry = ref('')
let ticketPrice = ref<any | null>(null)

interface search {
     SearchFerryTicket: searchFerryTicket
     SearchReservation: searchReservation
     id: number
}

interface Img {
     id: number
     name: string
     alternativeText: string | null
     caption: string | null
     width: number | null
     height: number | null
     formats: any | null
     hash: string
     ext: string
     mime: string
     size: number
     url: string
     previewUrl: string | null
     provider: string
     provider_metadata: any | null
     createdAt: string
     updatedAt: string
}

interface MainSliderData {
     btnLink: string
     btnText: string
     id: number
     img: Img[]
     price: string
     search: search
     subtitle: string
     title: string
}
const fromWhereData = ref([])
const departureTownId = ref<string | null>(null)
const toWhereObject = ref<any[]>([])
const travelData = ref([])
const travelObject = ref<any[]>([])
let currentSingleMode: boolean | null = null
const travelName = ref('FerryTravelTypeList')
const litepickerModalVisible = ref(false)
const queryDate = {
     formattedDepartureDate: ref<string | null>(null),
     formattedArrivalDate: ref<string | null>(null)
}
const date = {
     formattedDate: ref<string | null>(null),
     formattedDate2: ref<string | null>(null)
}

const formatDate = (dateInstance: string): string => {
     const date = new Date(dateInstance)
     if (isNaN(date.getTime())) {
          console.error('Invalid date for formatting')
          return '' // Geçersiz tarih için boş string döndür veya başka bir hata yönetimi yap
     }
     const options: Intl.DateTimeFormatOptions = { day: '2-digit', month: 'short' }
     return date.toLocaleDateString(locale.value.toLowerCase().toString(), options)
}

const queryFormatDate = (dateInstance: string): string => {
     const date = new Date(dateInstance)
     if (isNaN(date.getTime())) {
          console.error('Invalid date for formatting')
          return '' // Geçersiz tarih için boş string döndür veya başka bir hata yönetimi yap
     }
     const year = date.getFullYear()
     const month = ('0' + (date.getMonth() + 1)).slice(-2)
     const day = ('0' + date.getDate()).slice(-2)
     return `${year}-${month}-${day}`
}

const togglePickerModal = () => {
     litepickerModalVisible.value = !litepickerModalVisible.value
}

const fetchFromWhere = async () => {
     let params = {
          RouteType: 1,
          DepartureTownID: 0
     }
     getApi(applicationName.value, controllerName.value, name.value, params).then((response: any) => {
          if (response.data.status == 1) {
               const fetchFromWhereData = response.data.result
               fromWhereData.value = JSON.parse(fetchFromWhereData)
               fromWhereObject.value = fromWhereData.value
               console.log(fromWhereObject.value, 'toWhereObject is heretoWhereObject is heretoWhereObject is heretoWhereObject is here')
               // console.log(fromWhereData.value, 'fromWhereData.value')
               // console.log(departureTownId.value, 'DepartureTownId.value is here')
          }
     })
}

function updateFromWhere(value: { TownName: string; TownID: string }) {
     console.log(value.TownID)
     departureTownId.value = value.TownID.toString()
     console.log(departureTownId.value, 'departureTownId.VALUE')
     fetchToWhere(departureTownId.value)
     _fromWhere.value = value
     console.log(_fromWhere.value, 'fromWhere.VALUE')
}

function updateToWhere(value: { TownName: string; TownID: string }) {
     _toWhere.value = value
     arrivalTownId.value = value.TownID.toString()
     console.log(arrivalTownId.value, 'arrivalTownId.VALUE')
     console.log(_toWhere.value, 'toWhere.VALUE')
}

function updateToTrip(value: { Name: string; ID: number }) {
     _roundTrip.value = value
     console.log(_roundTrip.value.ID, 'roundTrip.VALUE')
     fetchFromWhere()

     // Yeni singleMode değerini hesapla
     const newSingleMode = value.ID !== 1
     console.log(newSingleMode, 'newSingleMode is here')

     // singleMode değeri değiştiyse, Litepicker'ı güncelle
     if (currentSingleMode !== newSingleMode) {
          console.log('singleMode has changed. Updating Litepicker...')
          createOrUpdateLitepicker(newSingleMode)

          // Güncelleme yapıldıktan sonra, mevcut singleMode değerini yeni değerle güncelle
          currentSingleMode = newSingleMode
     } else {
          console.log('singleMode has not changed. No need to update Litepicker.')
     }
}

let picker: Litepicker | null = null
// let currentSingleMode: boolean | null = null

function createOrUpdateLitepicker(singleMode: boolean) {
     console.log(singleMode, 'singleMode')
     const element = document.getElementById('litepicker')
     if (element instanceof HTMLElement) {
          if (!picker || currentSingleMode !== singleMode) {
               currentSingleMode = singleMode
               if (picker) {
                    picker.destroy()
               }
               picker = new Litepicker({
                    element: element,
                    singleMode: singleMode,
                    numberOfMonths: 2,
                    lang: locale.value.toLowerCase().toString(),
                    autoRefresh: true,
                    inlineMode: true
               })

               picker.on('selected', (date1, date2) => {
                    // Tarih seçimi yapıldığında, tarihleri kontrol edip formatlayalım
                    if (date1.dateInstance && !isNaN(new Date(date1.dateInstance).getTime())) {
                         const selectedDate1 = new Date(date1.dateInstance)
                         console.log(selectedDate1, 'selectedDate1 inside picker on')
                         const today = new Date()

                         if (singleMode) {
                              date.formattedDate2.value = null // Tekli moddaysa ikinci tarihi sıfırlayalım
                              console.log('formattedDate2 value is null in singleMode')
                         }

                         if (!singleMode && date2.dateInstance && !isNaN(new Date(date2.dateInstance).getTime())) {
                              const selectedDate2 = new Date(date2.dateInstance)
                              console.log(selectedDate2, 'selectedDate2 inside picker on')

                              if (selectedDate1 >= today && selectedDate2 >= today) {
                                   // Her iki tarih de bugün veya gelecekteyse formatlayıp kaydedelim
                                   date.formattedDate.value = formatDate(date1.dateInstance)
                                   date.formattedDate2.value = formatDate(date2.dateInstance)
                                   queryDate.formattedDepartureDate.value = queryFormatDate(date1.dateInstance)
                                   queryDate.formattedArrivalDate.value = queryFormatDate(date2.dateInstance)
                                   console.log(queryDate.formattedDepartureDate.value, 'formattedDepartureDate')
                                   console.log(queryDate.formattedArrivalDate.value, 'formattedArrivalDate')
                                   console.log('Both dates are set in doubleMode')
                              }
                         } else if (singleMode && selectedDate1 >= today) {
                              // Tekli modda ve seçilen tarih bugün veya gelecekteyse formatlayıp kaydedelim
                              date.formattedDate.value = formatDate(date1.dateInstance)
                              queryDate.formattedDepartureDate.value = queryFormatDate(date1.dateInstance)
                              console.log('Date is set in singleMode')
                         }
                    } else {
                         console.error('Invalid date selection')
                         // Geçersiz tarih seçimi durumunda, belki bir hata mesajı gösterilebilir
                    }
               })
          } else {
               picker.setDateRange(null, null)
               picker.setOptions({ singleMode: singleMode })
          }
     } else {
          console.error("Litepicker element not found. Make sure you have an element with id 'litepicker' in your HTML.")
     }
}

const fetchTravelType = async () => {
     getApi(applicationName.value, controllerName.value, travelName.value).then((response: any) => {
          if (response.data.status == 1) {
               const travelTypeData = response.data.result
               // console.log(travelTypeData, 'travelTypeData')
               travelData.value = JSON.parse(travelTypeData)
               travelObject.value = travelData.value
               // console.log(travelData.value, 'travelObject')
               // console.log(travelObject.value, 'travelObject')
          }
     })
}

const fetchToWhere = async (departureTownIdValue: string | null) => {
     let params = {
          RouteType: 2,
          DepartureTownID: departureTownIdValue
     }
     getApi(applicationName.value, controllerName.value, name.value, params).then((response: any) => {
          if (response.data.status == 1) {
               const fetchtoWhereData = response.data.result
               toWhereData.value = JSON.parse(fetchtoWhereData)
               toWhereObject.value = toWhereData.value
               // console.log(toWhereData.value, 'toWhereDataValue')
               // console.log(toWhereObject.value, 'toWhereObject')
          }
     })
}

// const fetchToWhere = async (departureTownIdValue: string | null) => {
//      let params = {
//           RouteType: 2,
//           DepartureTownID: departureTownIdValue
//      }
//      getApi(applicationName.value, controllerName.value, name.value, params).then((response: any) => {
//           if (response.data.status == 1) {
//                const fetchtoWhereData = response.data.result
//                toWhereData.value = JSON.parse(fetchtoWhereData)
//                toWhereObject.value = toWhereData.value
//                // console.log(toWhereData.value, 'toWhereDataValue')
//                // console.log(toWhereObject.value, 'toWhereObject')
//           }
//      })
// }

const mainHomeSplide = ref<MainSliderData | any>([])
const fromWhereObject = ref<any[]>([])

const getHomeSpide = async () => {
     try {
          let filters = {
               pageName: 'Home'
          }

          const res = await fetchData('pages', locale.value.toLowerCase(), filters)
          if (res) {
               let data = res.data[0].layout
               mainHomeSplide.value = data.find((x: any) => x.__component === 'home-page.home-page')
               console.log(mainHomeSplide, 'mainHomeSplidemainHomeSplidemainHomeSplide')
          }
     } catch (error) {
          return
     }
}

watch(locale, (newLocale, oldLocale) => {
     if (newLocale !== oldLocale) {
          console.log(newLocale, 'new', oldLocale, 'old')
          getHomeSpide()
     }
})

onMounted(async () => {
     await getHomeSpide()
})

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

const tabContent = ref([])
const tabs = ref([])
const copyTabs = ref([])
const searchBar = ref([])
const tourDetail = ref([])
const tourCards = ref([])
const allTours = ref([])
const sharedTable = ref([])
const sharedImages = ref([])
const sharedBlogCard = ref([])
const sharedCategoryQuestions = ref([])
const sharedYoutubeArea = ref([])
const objWithId6 = ref([])

const getIslands = async () => {
     let params = {
          subSaleChannelID: localStorage.getItem('SubSalechannelID')
     }
     try {
          const res = await fetchData('islands', locale.value.toLowerCase(), params)
          if (res) {
               tabs.value = res.data
               copyTabs.value = res.data.map((item: any) => {
                    // Her bir öğenin içindeki değerleri kontrol et
                    const newItem = { ...item } // Orijinal öğeyi değiştirmemek için kopyasını oluştur
                    Object.entries(newItem).forEach(([key, value]) => {
                         // Eğer değer bir dize ise ve içinde "$" işareti varsa
                         if (typeof value === 'string' && value.includes('$')) {
                              // "$" işaretini "Meander" ile değiştir
                              newItem[key] = value.replace(/\$/g, scn.value)
                         }
                    })
                    return newItem // Değiştirilmiş öğeyi döndür
               })
               let layouts = res.data.flatMap((item: any) => item.layout)

               searchBar.value = layouts.find((x: any) => x.__component === 'shared.search-bar')
               tourDetail.value = layouts.find((x: any) => x.__component === 'island-page.tour-detail-section')
               tourCards.value = layouts.find((x: any) => x.__component === 'home-page.tour-card')
               allTours.value = layouts.find((x: any) => x.__component === 'shared.island-tours')
               sharedTable.value = layouts.find((x: any) => x.__component === 'shared.table')
               sharedImages.value = layouts.find((x: any) => x.__component === 'shared.images')
               sharedBlogCard.value = layouts.find((x: any) => x.__component === 'shared.blog-card')
               sharedCategoryQuestions.value = layouts.find((x: any) => x.__component === 'shared.category-questions')
               sharedYoutubeArea.value = layouts.find((x: any) => x.__component === 'shared.youtube-area')
               objWithId6.value = copyTabs.value.find((item: any) => item.id === 6)?.layout
               // const objWithId6: any = copyTabs.value.find((item: any) => item.id === 6)?.layout;
               console.log(objWithId6, 'objWithId6')
               console.log(sharedYoutubeArea, 'sharedyoutube')
               console.log(tourCards.value, 'tourCards.value')
               console.log(copyTabs.value, 'copyTabs.value')
               console.log(sharedTable.value, 'sharedTable')
               console.log(sharedImages.value, 'sharedImages')
               console.log(sharedBlogCard.value, 'sharedBlogCard')
               console.log(sharedCategoryQuestions.value, 'sharedCategoryQuestions'),
               console.log(allTours.value, 'allTours.value');
          }
     } catch (error) {
          console.error('Hata:', error)
     }
}

window.addEventListener('storage', (event) => {
     if (event.key === 'SubSalechannelID') {
          getIslands()
     }
})

// watchEffect(() => {
//      useChannelStore.subSaleChannelID // Bu değeri dinler ve değiştiğinde getIslands fonksiyonunu çağırır
//     getIslands()
// })

const initilizaTableData = (data: any) => {
     let table = data[0]
     // console.log(table, 'tableeeeee')

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
          getIslands()
     }
})

const sub = computed(() => useChannelStore.subSaleChannelName)

watch(
     sub,
     (newLocale, oldLocale) => {
          console.log(newLocale, 'new', oldLocale, 'old')
          console.log('tabs', tabs.value)
          if (copyTabs.value && copyTabs.value.length > 0) {
               console.log('IF', tabs.value)
               copyTabs.value = tabs.value.map((item) => {
                    console.log('ITEM', item)
                    // Her bir öğenin içindeki değerleri kontrol et
                    const newItem = { ...item } // Orijinal öğeyi değiştirmemek için kopyasını oluştur
                    Object.entries(newItem).forEach(([key, value]) => {
                         // Eğer değer bir dize ise ve içinde "$" işareti varsa
                         if (typeof value === 'string' && value.includes('$')) {
                              // "$" işaretini "Meander" ile değiştir
                              newItem[key] = value.replace(/\$/g, newLocale)
                              console.log('NEW ITEM', newItem)
                         }
                    })

                    return newItem // Değiştirilmiş öğeyi döndür
               })
          }
     },
     { immediate: true }
)
onMounted(async () => {
     // useChannelStore.setSubSaleChannel(item.href.replace('/', '')) // setSubChannel fonksiyonunu çağırıyoruz (store'da tanımlıdır
     await getIslands()

     await getTicketPrice() // Veriyi asenkron bir şekilde yükleyin
})

onMounted(() => {
     fetchFromWhere()
     fetchTravelType()
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

const isClickable = computed(() => {
     return _fromWhere.value && _toWhere.value && _roundTrip.value && date.formattedDate.value && passenger.value[0]?.count > 0
})

const selectedLanguage = JSON.parse(localStorage.getItem('selectedLanguage') || '{}')
const languageName = selectedLanguage.code || ''

function navigateToSecondPage() {
     if (!isClickable.value) return

     tripStore.setFromTo(_fromWhere.value.TownName, _toWhere.value.TownName)
     // router.push metodunu kullanarak belirli bir rota adı ve sorgu parametreleri ile yönlendirme yapın
     const adultCount = passenger.value.find((p: any) => p.id === 'adult')?.count || 0
     const childCount = passenger.value.find((p: any) => p.id === 'child')?.count || 0
     const infantCount = passenger.value.find((p: any) => p.id === 'infant')?.count || 0
     router.push({
          name: 'tickets',
          query: {
               FromTownID: departureTownId.value,
               ToTownID: arrivalTownId.value,
               DepartureDate: queryDate.formattedDepartureDate.value,
               ReturnDate: queryDate.formattedArrivalDate.value,
               AdultCount: adultCount,
               ChildCount: childCount,
               InfantCount: infantCount,
               AgencyID: 1,
               PriceGroupID: 1,
               FerryTravelType: _roundTrip.value!.ID,
               // SaleChannelID: 1,
               LanguageIsoCode: languageName
          }
     })
}
const splideRef2 = ref<string | HTMLElement>('');

onMounted(() => {
     console.log(splideRef2, 'splideRef2')
     if (splideRef2.value) {
          console.log(splideRef2.value, 'splideRef2')
          const splide = new Splide(splideRef2.value, {
               type: 'slide',
               perPage: 3,
               perMove: 1,
               arrows: true,
               pagination: false,
               focus: 0,
               interval: 3000,
               breakpoints: {
                    1380: {
                         perPage: 4,
                    },
                    1140: {
                         perPage: 3,
                    },
                    840: {
                         perPage: 2,
                    },
                    580: {
                         perPage: 1,
                    },
               },
          }).mount();

          splide.on('moved', () => {
               // const activeSlideIndex = splide.index;
               // const activeSlideContent = items[activeSlideIndex];
               // console.log(activeSlideContent);
               // console.log(activeSlideIndex);
          });
     }
});

const items = ref([
     { id: 1, name: 'Item 1' },
     { id: 2, name: 'Item 2' },
     { id: 3, name: 'Item 3' },
     { id: 4, name: 'Item 4' },
     { id: 5, name: 'Item 5' },
])
</script>

<style scoped>
.dropdown-enter-active,
.dropdown-leave-active {
     transition:
          opacity 0.3s,
          transform 0.3s;
}

.dropdown-enter-from,
.dropdown-leave-to {
     opacity: 0;
     transform: translateY(-10px);
}

.dropdown-enter-to,
.dropdown-leave-from {
     opacity: 1;
     transform: translateY(0);
}

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
}

.custom-border-seperator {
     border-top: 0.5px solid #d9d9d9;
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

#litepicker {
     display: inline-block !important;
     position: relative !important;
}


.flex-column {
     display: flex;
     flex-direction: column;
     justify-content: space-between;
}

.splide {
     padding: 10px 0;
     display: flex;
     flex-direction: row;
     width: 100%
}

.splide__list {
     display: flex;
     width: 100%;
     flex-direction: row;
     background-color: #000;
}

.splide__track {
     width: 100%;
}

.splide__slide {
     align-items: center;
     flex-shrink: 0;
     border-radius: 20px;
     height: 470px;
     max-width: 320px;
     cursor: pointer;
     margin-right: 10px;
     background-color: #0000003a;
}

/* .splide__slide:first-child {
    background-color: #b8b8b8;
} */

.splide__slide.is-active {
     align-items: center;
     flex-shrink: 0;
     border-radius: 20px;
     height: 470px;
     max-width: 320px;
     cursor: pointer;
     margin-right: 10px;
}

.splide__slide img {
     background: rgba(0, 0, 0, 0.30);
}

/* .splide__slide.is-active img {
    align-items: center;
    flex-shrink: 0;
    border-radius: 20px;
    height: 470px;
    max-width: 320px;
    cursor: pointer;
    margin-right: 10px;
} */

.splide__slide:first-child img {
     display: none;
     background-color: #E4EEF3;
}

.splide__slide:first-child p {
     color: #000;
}

.splide__slide:first-child {
     background-color: #E4E9EC;
}

.splide__slide:first-child button {
     color: black;
}

.splide__arrow {
     transform: none;
     border-radius: unset;
}

.splide__arrow svg {
     fill: #000;
     height: 2em;
     width: 4em;
     display: flex;
     flex-direction: row;
}

.splide.splide__arrow {
     background: white;
}

.splide__arrow.splide__arrow--prev:disabled {
     opacity: 1;
     background: transparent
}

.splide__arrow.splide__arrow--prev {
     height: full;
     top: 150px;
     left: -3rem;
     opacity: 1;
     background: transparent;
     display: none;
}

.splide__arrow.splide__arrow--next {
     height: full;
     top: 200px;
     right: 18rem;
     opacity: 1;
     z-index: 10;
     background: transparent;
     padding: 40px;
     background: #E4E9EC;
     border-radius: 100%;
     width: 88px;
     height: 86px;
}

.splide__arrow.splide__arrow--next:disabled {
     height: full;
     top: 200px;
     right: 18rem;
     opacity: 1;
     z-index: 10;
     background: transparent;
     padding: 40px;
     background: #E4E9EC;
     border-radius: 100%;
     width: 88px;
     height: 86px;
}

@media (max-width: 1024px) {
     .splide__arrow.splide__arrow--next {
          display: none;
     }

     .splide__arrow.splide__arrow--next:disabled {
          display: none;
     }

}
</style>
