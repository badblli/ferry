<template>
    <div class="w-full bg-slate-100 relative ">
        <img :src="example" alt="Background Image" class="absolute top-0 left-0 w-full h-full object-cover ">
        <div class="absolute top-0 left-0 w-full h-full bg-black/50"></div>
        <div class="relative flex h-[352px] items-center lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w z-10"
            aria-label="Breadcrumb">
            <div class="flex flex-row justify-between w-full items-center">
                <div>
                    <ul class="flex flex-row">
                        <li class="inline-flex items-center">
                            <a class="mr-[6px] opacity-60 text-white text-base font-normal font-['Plus Jakarta Sans'] tracking-tight"
                                href="#">
                                Anasayfa
                            </a>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                fill="none">
                                <g id="Chevron - Down" opacity="0.6">
                                    <path id="Union" fill-rule="evenodd" clip-rule="evenodd"
                                        d="M8.46967 18.5303C8.17678 18.2374 8.17678 17.7626 8.46967 17.4697L13.9393 12L8.46967 6.53033C8.17678 6.23744 8.17678 5.76256 8.46967 5.46967C8.76256 5.17678 9.23744 5.17678 9.53033 5.46967L15.5303 11.4697C15.8232 11.7626 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.23744 18.8232 8.76256 18.8232 8.46967 18.5303Z"
                                        fill="white" />
                                </g>
                            </svg>
                        </li>
                        <li class="ml-[6px] text-white opacity-60 text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight"
                            aria-current="page">
                            Turlar
                        </li>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g id="Chevron - Down" opacity="0.6">
                                <path id="Union" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8.46967 18.5303C8.17678 18.2374 8.17678 17.7626 8.46967 17.4697L13.9393 12L8.46967 6.53033C8.17678 6.23744 8.17678 5.76256 8.46967 5.46967C8.76256 5.17678 9.23744 5.17678 9.53033 5.46967L15.5303 11.4697C15.8232 11.7626 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.23744 18.8232 8.76256 18.8232 8.46967 18.5303Z"
                                    fill="white" />
                            </g>
                        </svg>
                        <li class="ml-[6px] text-white text-base font-medium font-display tracking-tight"
                            aria-current="page">
                            Sakız Adası Turu
                        </li>
                    </ul>
                    <ul class="flex flex-row box-border">
                        <li class="max-w-[679px] text-white text-[52px] font-medium font-display tracking-wide">
                            Samos Turu | 1 Gece | Ramazan Bayramı
                        </li>
                    </ul>
                </div>
                <div class="w-24 h-24 bg-white rounded-full justify-center items-center flex cursor-pointer">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32" fill="none">
                        <g id="ShareNetwork">
                            <path id="Vector"
                                d="M22.0003 20.0001C21.3332 19.9999 20.6729 20.1335 20.0584 20.3931C19.4439 20.6527 18.8877 21.0329 18.4228 21.5113L12.6603 17.8076C13.1136 16.6452 13.1136 15.355 12.6603 14.1926L18.4228 10.4888C19.2884 11.3755 20.4523 11.9092 21.689 11.9864C22.9257 12.0636 24.147 11.6789 25.1161 10.9068C26.0853 10.1347 26.7332 9.03025 26.9343 7.80758C27.1354 6.58492 26.8754 5.33113 26.2046 4.28931C25.5338 3.24749 24.5 2.49186 23.3038 2.16891C22.1075 1.84596 20.8339 1.97871 19.73 2.54142C18.626 3.10412 17.7703 4.0567 17.3288 5.21446C16.8873 6.37222 16.8914 7.65269 17.3403 8.8076L11.5778 12.5113C10.8839 11.7989 9.99328 11.3097 9.01985 11.106C8.04641 10.9024 7.03437 10.9937 6.11308 11.3682C5.1918 11.7428 4.40313 12.3835 3.8479 13.2086C3.29267 14.0337 2.99609 15.0056 2.99609 16.0001C2.99609 16.9946 3.29267 17.9665 3.8479 18.7916C4.40313 19.6167 5.1918 20.2574 6.11308 20.632C7.03437 21.0065 8.04641 21.0978 9.01985 20.8942C9.99328 20.6905 10.8839 20.2013 11.5778 19.4888L17.3403 23.1926C16.9543 24.1883 16.8971 25.2814 17.1773 26.3118C17.4574 27.3423 18.0602 28.256 18.8972 28.9192C19.7342 29.5823 20.7615 29.9601 21.8288 29.9971C22.896 30.0341 23.9471 29.7285 24.828 29.125C25.709 28.5214 26.3736 27.6517 26.7245 26.6431C27.0754 25.6345 27.0942 24.5401 26.7781 23.5201C26.462 22.5 25.8276 21.608 24.9679 20.9746C24.1081 20.3412 23.0682 19.9997 22.0003 20.0001ZM22.0003 4.0001C22.5936 4.0001 23.1737 4.17604 23.667 4.50569C24.1604 4.83533 24.5449 5.30387 24.7719 5.85205C24.999 6.40023 25.0584 7.00343 24.9427 7.58537C24.8269 8.16731 24.5412 8.70186 24.1216 9.12142C23.7021 9.54098 23.1675 9.8267 22.5856 9.94245C22.0036 10.0582 21.4004 9.9988 20.8523 9.77174C20.3041 9.54467 19.8355 9.16016 19.5059 8.66681C19.1762 8.17346 19.0003 7.59344 19.0003 7.0001C19.0003 6.20445 19.3164 5.44139 19.879 4.87878C20.4416 4.31617 21.2047 4.0001 22.0003 4.0001ZM8.0003 19.0001C7.40696 19.0001 6.82694 18.8242 6.33359 18.4945C5.84024 18.1649 5.45573 17.6963 5.22866 17.1481C5.0016 16.6 4.94219 15.9968 5.05795 15.4148C5.1737 14.8329 5.45942 14.2983 5.87898 13.8788C6.29854 13.4592 6.83309 13.1735 7.41503 13.0577C7.99697 12.942 8.60017 13.0014 9.14835 13.2285C9.69653 13.4555 10.1651 13.84 10.4947 14.3334C10.8244 14.8267 11.0003 15.4068 11.0003 16.0001C11.0003 16.7957 10.6842 17.5588 10.1216 18.1214C9.55901 18.684 8.79595 19.0001 8.0003 19.0001ZM22.0003 28.0001C21.407 28.0001 20.8269 27.8242 20.3336 27.4945C19.8402 27.1649 19.4557 26.6963 19.2287 26.1481C19.0016 25.6 18.9422 24.9968 19.0579 24.4148C19.1737 23.8329 19.4594 23.2983 19.879 22.8788C20.2985 22.4592 20.8331 22.1735 21.415 22.0577C21.997 21.942 22.6002 22.0014 23.1484 22.2285C23.6965 22.4555 24.1651 22.84 24.4947 23.3334C24.8244 23.8267 25.0003 24.4068 25.0003 25.0001C25.0003 25.7957 24.6842 26.5588 24.1216 27.1214C23.559 27.684 22.7959 28.0001 22.0003 28.0001Z"
                                fill="#1F2A37" />
                        </g>
                    </svg>
                </div>
            </div>
        </div>
    </div>
    <section>
        <div class="flex flex-col w-full mx-auto bg-neutral-100 h-full">
            <div
                class="flex justify-between items-end border-sub-line overflow-x-auto w-full mx-auto centered-small-w h-full">
                <div v-for="(tab, index) in copyTabs" :key="index" @click="handleTabClick(tab.id)"
                    class="tab md:mx-4 mx-2 md:px-20 px-2 h-full first:ml-20 md:last:mr-20"
                    :class="{ active: activeTab === tab.id }">{{ tab.title }}</div>
            </div>
        </div>
    </section>
    <div v-if="!showCustomComponent" class="flex flex-col lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
        <section class="w-full md:w-10/12">
            <div class="mb-16" id="1">
                <div class="mt-12 md:mt-28 md:mb-16 mb-7">
                    <h1
                        class="text-black text-[42px] font-bold font-['Plus Jakarta Sans'] tracking-wide mb-5  md:mb-[45px]">
                        Tur Programı</h1>
                    <p class="text-[#4D4D4D] text-base font-normal font-display leading-6 w-72">1 gece 2 günü kapsayan
                        bu turun<br /> programı aşağıdaki gibidir.</p>
                </div>
                <div>
                    <div class="hs-accordion-group">
                        <div v-for="(accordion, index) in accordions" :key="index"
                            class="hs-accordion hs-accordion-active:border-blue-700 border border-transparent rounded-xl mb-[24px]"
                            id="hs-active-bordered-heading-one">
                            <button
                                class="hs-accordion-toggle hs-accordion-active:text-blue-700 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-xl font-['Plus Jakarta Sans'] leading-[38px] text-start text-black px-11 disabled:opacity-50 disabled:pointer-events-none"
                                aria-controls="hs-basic-active-bordered-collapse-one">
                                {{ accordion.title }}
                                <div class="flex flex-row justify-center items-center ">
                                    <span
                                        class="flex flex-row justify-end text-sm rounded-md mr-[18px] my-4 py-3 px-6 bg-slate-200 hs-accordion-active:bg-white">
                                        GÜN {{ index + 1 }} </span>
                                    <IconAccordionActiveArrow class="hs-accordion-active:block hidden" />
                                    <IconAccordionArrow class="hs-accordion-active:hidden block" />
                                </div>
                            </button>
                            <div id="hs-basic-active-bordered-collapse-one"
                                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                aria-labelledby="hs-active-bordered-heading-one">
                                <div class="pb-4 px-11 justify-center items-center flex flex-row">
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
                </div>
            </div>
            <div id="2" class="border pl-10 rounded-[20px] mb-[30px]">
                <div class="bg-white">
                    <div>
                        <h1 class="text-black text-[42px] font-medium font-display tracking-wide pt-[74px] pb-[37px]">
                            Dahil Olan Servisler</h1>
                        <p
                            class="mb-[53px] text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
                            Altta yer alan servislerin hepsi satın<br />aldığınız turun içindedir.
                        </p>
                    </div>
                    <ul>
                        <li v-for="(item, index) in travelItems" :key="index">
                            {{ item }}
                            <div class="w-full md:w-3/4 mt-[35px] mb-[35px] half-pixel origin-top-left border border-neutral-200"
                                :class="{ 'border-none': index === travelItems.length - 1 }" />
                        </li>
                    </ul>
                    <div>
                        <div class="flex flex-row mt-10 md:mt-20 mb-9 md:mb-[89px]">
                            <IconAsteriskSimple />
                            <h2
                                class="ml-4 w-80 md:w-[500px]  text-black text-base font-normal font-['Plus Jakarta Sans'] leading-[26.88px] tracking-tight">
                                Dahil olan servisler ile ilgili soru işaretleriniz var ise blog yazılarımızı
                                okuyabilir ya
                                da destek alabilirsiniz.</h2>
                            <div
                                class="flex flex-row justify-center items-center bg-white py-[7px] pl-4 pr-[3px] rounded-full cursor-pointer">
                                <div class="text-black text-base font-medium font-display mr-4">Destek AL
                                </div>
                                <div
                                    class="w-[35px] h-[35px] relative flex-col rounded-full flex bg-slate-100 justify-center items-center">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.2" d="M19.3589 6.45703V16.727L9.08887 6.45703H19.3589Z"
                                            fill="black" />
                                        <path
                                            d="M19.3592 5.66699H9.08915C8.93281 5.66687 8.77995 5.71314 8.64992 5.79993C8.5199 5.88673 8.41854 6.01016 8.3587 6.15459C8.29885 6.29902 8.28321 6.45796 8.31374 6.61128C8.34428 6.76461 8.41962 6.90543 8.53022 7.01592L13.1073 11.592L6.16023 18.5381C6.08683 18.6115 6.0286 18.6986 5.98888 18.7945C5.94916 18.8904 5.92871 18.9932 5.92871 19.097C5.92871 19.2008 5.94916 19.3036 5.98888 19.3995C6.0286 19.4954 6.08683 19.5825 6.16023 19.6559C6.23362 19.7293 6.32076 19.7875 6.41666 19.8273C6.51256 19.867 6.61535 19.8874 6.71915 19.8874C6.82295 19.8874 6.92574 19.867 7.02164 19.8273C7.11754 19.7875 7.20468 19.7293 7.27808 19.6559L14.2242 12.7089L18.8002 17.2859C18.9107 17.3965 19.0515 17.4719 19.2049 17.5024C19.3582 17.5329 19.5171 17.5173 19.6616 17.4574C19.806 17.3976 19.9294 17.2962 20.0162 17.1662C20.103 17.0362 20.1493 16.8833 20.1492 16.727V6.45699C20.1492 6.24747 20.0659 6.04653 19.9178 5.89838C19.7696 5.75022 19.5687 5.66699 19.3592 5.66699ZM18.5692 14.8201L14.7831 11.0341L10.996 7.24699H18.5692V14.8201Z"
                                            fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="3" class="border pl-10 bg-slate-200 mb-[30px] rounded-[20px]">
                <div>
                    <div>
                        <h1 class="text-black text-[42px] font-medium font-display tracking-wide pt-[74px] pb-[37px]">
                            Dahil Olmayan Servisler</h1>
                        <p
                            class="mb-[53px] text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
                            Altta yer alan servislerin hepsi satın<br />aldığınız turun içindedir.
                        </p>
                    </div>
                    <ul>
                        <li v-for="(item, index) in travelItems" :key="index">
                            {{ item }}
                            <div class="w-full md:w-3/4 mt-[35px] mb-[35px] half-pixel origin-top-left border border-neutral-300"
                                :class="{ 'border-none': index === travelItems.length - 1 }" />
                        </li>
                    </ul>
                    <div>
                        <div class="flex flex-row mt-10 md:mt-20 mb-9 md:mb-[89px]">
                            <IconAsteriskSimple />
                            <h2
                                class="ml-4 w-80 md:w-[500px]  text-black text-base font-normal font-['Plus Jakarta Sans'] leading-[26.88px] tracking-tight">
                                Dahil olan servisler ile ilgili soru işaretleriniz var ise blog yazılarımızı
                                okuyabilir ya
                                da destek alabilirsiniz.</h2>
                            <div
                                class="flex flex-row justify-center items-center bg-white py-[7px] pl-4 pr-[3px] rounded-full cursor-pointer">
                                <div class="text-black text-base font-medium font-display mr-4 ">Destek AL
                                </div>
                                <div
                                    class="w-[35px] h-[35px] relative flex-col rounded-full flex bg-slate-100 justify-center items-center">
                                    <svg width="26" height="26" viewBox="0 0 26 26" fill="none"
                                        xmlns="http://www.w3.org/2000/svg">
                                        <path opacity="0.2" d="M19.3589 6.45703V16.727L9.08887 6.45703H19.3589Z"
                                            fill="black" />
                                        <path
                                            d="M19.3592 5.66699H9.08915C8.93281 5.66687 8.77995 5.71314 8.64992 5.79993C8.5199 5.88673 8.41854 6.01016 8.3587 6.15459C8.29885 6.29902 8.28321 6.45796 8.31374 6.61128C8.34428 6.76461 8.41962 6.90543 8.53022 7.01592L13.1073 11.592L6.16023 18.5381C6.08683 18.6115 6.0286 18.6986 5.98888 18.7945C5.94916 18.8904 5.92871 18.9932 5.92871 19.097C5.92871 19.2008 5.94916 19.3036 5.98888 19.3995C6.0286 19.4954 6.08683 19.5825 6.16023 19.6559C6.23362 19.7293 6.32076 19.7875 6.41666 19.8273C6.51256 19.867 6.61535 19.8874 6.71915 19.8874C6.82295 19.8874 6.92574 19.867 7.02164 19.8273C7.11754 19.7875 7.20468 19.7293 7.27808 19.6559L14.2242 12.7089L18.8002 17.2859C18.9107 17.3965 19.0515 17.4719 19.2049 17.5024C19.3582 17.5329 19.5171 17.5173 19.6616 17.4574C19.806 17.3976 19.9294 17.2962 20.0162 17.1662C20.103 17.0362 20.1493 16.8833 20.1492 16.727V6.45699C20.1492 6.24747 20.0659 6.04653 19.9178 5.89838C19.7696 5.75022 19.5687 5.66699 19.3592 5.66699ZM18.5692 14.8201L14.7831 11.0341L10.996 7.24699H18.5692V14.8201Z"
                                            fill="black" />
                                    </svg>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div id="4" class="border px-10 bg-white mb-[30px] rounded-[20px]">
                <div>
                    <div>
                        <h1 class="text-black text-[42px] font-medium font-display tracking-wide pt-[74px] pb-[37px]">
                            Fiyatlar</h1>
                        <p
                            class="mb-[53px] text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
                            Önümüzdeki tarihlerde uygun olan oteller <br /> listelenmektedir.
                        </p>
                    </div>
                </div>
                <div class="flex flex-col justify-center items-center m-auto relative">
                    <div className="w-full mx-auto rounded-[20px]">
                        <div className="flex flex-col overflow-x-auto">
                            <div>
                                <table className="relative bg-white mb-8 rounded-2xl w-full">
                                    <thead>
                                        <tr v-for="(header, index) in tableHeaders" :key="index"
                                            class="flex flex-row mb-[23px] justify-between items-center text-black text-lg font-normal rounded-lg">
                                            <th v-for="(label, labelIndex) in header" :key="labelIndex"
                                                class=" w-full flex">{{
                                                    label }}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr v-for="(row, index) in tableData" :key="index"
                                            className="flex flex-row justify-between text-black text-lg font-normal border border-neutral-200 rounded-lg mb-[10px]">
                                            <td v-for="(cell, cellIndex) in row" :key="cellIndex"
                                                className="w-full pt-8 pb-8 pl-8">
                                                {{ cell }}</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    </div>
    <section id="5" v-if="showCustomComponent" class="lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
        <div>
            <div class="mt-12 md:mt-28 md:mb-16 mb-7">
                <h1
                    class="text-black text-[42px] font-bold font-['Plus Jakarta Sans'] tracking-wide mb-5  md:mb-[45px]">
                    Tur Otel Seçimi</h1>
                <p class="text-[#4D4D4D] text-base font-normal font-display leading-6 w-72">Bu turu satın
                    almak için alttaki arama alanını kullanın.</p>
            </div>
            <div
                class="w-[604px] h-[92px] bg-white rounded-xl border border-[#a4a4a4] flex flex-row justify-between items-center">
                <div class="ml-5 cursor-pointer">
                    <p class="text-black text-base font-medium font-display tracking-tight">Katılmak İstenilen Tarih</p>
                    <p>Tarih Seçin</p>
                </div>
                <div class="h-14 border-l border-zinc-300 hidden md:block ml-0 md:ml-2 lg:ml-3">
                </div>
                <div class="cursor-pointer">
                    <p class="text-black text-base font-medium font-display tracking-tight">Kişi Sayısı</p>
                    <p>2 yetişkin, 2 çocuk, 1 bebek</p>
                </div>
                <div
                    class="bg-slate-200 rounded-full justify-centeer items-center sm:p-[17px] p-3 m-[11px] ml-0 lg:ml-3">
                    <IconSearchNormal />
                </div>
            </div>
        </div>
        <div class="mt-14">
            <div
                class="w-full h-auto flex flex-row items-center justify-between bg-white rounded-[20px] border border-[#a4a4a4] mb-5">
                <div class="flex flex-col my-8 ml-6">
                    <p class="text-black text-2xl font-bold font-['Plus Jakarta Sans'] tracking-wide">
                        Samos City Hotel - Standart Oda
                    </p>
                    <div>
                        <div class="flex flex-row gap-3 mt-[14px]">
                            <div class="py-[6px] px-[9px] bg-neutral-100 rounded-lg border flex justify-center">
                                <IconStar />
                                <p
                                    class="text-black text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight ml-2">
                                    3 Stars
                                </p>
                            </div>
                            <div class="py-[6px] px-[13px] bg-neutral-100 rounded-lg border flex justify-center">
                                <p class="text-black text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight">
                                    Standard Room</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mr-5 flex flex-row justify-center items-center">
                    <div class="flex flex-col">
                        <p class="text-right text-black text-[28px] font-medium font-['Plus Jakarta Sans']">
                            39 €
                        </p>
                        <p class="text-right text-[#353535] text-[15px] font-medium font-['Plus Jakarta Sans']">
                            /Kişi Başı
                        </p>
                    </div>
                    <div class="flex flex-col ml-20">
                        <div class="flex flex-row justify-center bg-[#f5ebeb] rounded-lg border p-1">
                            <IconHouse />
                            <span
                                class="text-[#8f2929] text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight ml-2">
                                Son 2 oda kaldı.
                            </span>
                        </div>
                        <div
                            class="max-w-[222px] cursor-pointer my-2 bg-[#2948b5] rounded-lg border text-white p-3 items-center flex flex-row justify-center">
                            Satın Al
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="w-full h-auto flex flex-row items-center justify-between bg-white rounded-[20px] border border-[#a4a4a4] mb-5">
                <div class="flex flex-col my-8 ml-6">
                    <p class="text-black text-2xl font-bold font-['Plus Jakarta Sans'] tracking-wide">
                        Samos City Hotel - Standart Oda
                    </p>
                    <div>
                        <div class="flex flex-row gap-3 mt-[14px]">
                            <div class="py-[6px] px-[9px] bg-neutral-100 rounded-lg border flex justify-center">
                                <IconStar />
                                <p
                                    class="text-black text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight ml-2">
                                    3 Stars
                                </p>
                            </div>
                            <div class="py-[6px] px-[13px] bg-neutral-100 rounded-lg border flex justify-center">
                                <p class="text-black text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight">
                                    Standard Room</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mr-5 flex flex-row justify-center items-center">
                    <div class="flex flex-col">
                        <p class="text-right text-black text-[28px] font-medium font-['Plus Jakarta Sans']">
                            39 €
                        </p>
                        <p class="text-right text-[#353535] text-[15px] font-medium font-['Plus Jakarta Sans']">
                            /Kişi Başı
                        </p>
                    </div>
                    <div class="flex flex-col ml-20">
                        <div class="flex flex-row justify-center bg-[#f5ebeb] rounded-lg border p-1">
                            <IconHouse />
                            <span
                                class="text-[#8f2929] text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight ml-2">
                                Son 2 oda kaldı.
                            </span>
                        </div>
                        <div
                            class="max-w-[222px] cursor-pointer my-2 bg-[#2948b5] rounded-lg border text-white p-3 items-center flex flex-row justify-center">
                            Satın Al
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="w-full h-auto flex flex-row items-center justify-between bg-white rounded-[20px] border border-[#a4a4a4] mb-5">
                <div class="flex flex-col my-8 ml-6">
                    <p class="text-black text-2xl font-bold font-['Plus Jakarta Sans'] tracking-wide">
                        Samos City Hotel - Standart Oda
                    </p>
                    <div>
                        <div class="flex flex-row gap-3 mt-[14px]">
                            <div class="py-[6px] px-[9px] bg-neutral-100 rounded-lg border flex justify-center">
                                <IconStar />
                                <p
                                    class="text-black text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight ml-2">
                                    3 Stars
                                </p>
                            </div>
                            <div class="py-[6px] px-[13px] bg-neutral-100 rounded-lg border flex justify-center">
                                <p class="text-black text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight">
                                    Standard Room</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="mr-5 flex flex-row justify-center items-center">
                    <div class="flex flex-col">
                        <p class="text-right text-black text-[28px] font-medium font-['Plus Jakarta Sans']">
                            39 €
                        </p>
                        <p class="text-right text-[#353535] text-[15px] font-medium font-['Plus Jakarta Sans']">
                            /Kişi Başı
                        </p>
                    </div>
                    <div class="flex flex-col ml-20">
                        <div class="flex flex-row justify-center bg-[#f5ebeb] rounded-lg border p-1">
                            <IconHouse />
                            <span
                                class="text-[#8f2929] text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight ml-2">
                                Son 2 oda kaldı.
                            </span>
                        </div>
                        <div
                            class="max-w-[222px] cursor-pointer my-2 bg-[#2948b5] rounded-lg border text-white p-3 items-center flex flex-row justify-center">
                            Satın Al
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- <div class="flex flex-col justify-center items-center">
            <div class="w-[152px] py-14 flex flex-row bg-neutral-100 rounded-full justify-center items-center">
                <IconReceiptX />
            </div>
            <div class="text-center text-black text-lg font-semibold font-['Plus Jakarta Sans'] mt-5">Bu tarih
                aralığında otel bulunmuyor.</div>
            <div class="w-[306px] text-center text-black text-base font-light font-display tracking-tight mt-5">En yakın
                tarih aralığına ilerleyip tatilini yeniden planlayabilirsin.</div>

            <div
                class="w-[222px] h-[53px] bg-[#2149d5] rounded-lg border mt-10 justify-center items-center flex flex-row">
                <div class="text-center text-white text-base font-medium font-display">En Uygun Tarihe
                    Git</div>
            </div>
        </div> -->
        <p class="flex flex-row justify-center text-black text-lg font-medium font-display mb-10 mt-10">
            Daha fazla
        </p>
    </section>
</template>

<script setup lang="ts">
import IconAccordionActiveArrow from '@/components/icons/IconAccordionActiveArrow.vue';
import IconAsteriskSimple from '@/components/icons/IconAsteriskSimple.vue';
import IconAccordionArrow from '@/components/icons/IconAccordionArrow.vue';
import example from '@/assets/embeddedImages/examp.jpg'
// import example from '@/assets/embeddedImages/new.jpg'
import IconSearchNormal from '@/components/icons/IconSearchNormal.vue'
import IconStar from '@/components/icons/IconStar.vue'
import IconHouse from '@/components/icons/IconHouse.vue'
import IconReceiptX from '@/components/icons/IconReceiptX.vue'

import { ref, onMounted, computed } from 'vue';

const isOpen = ref(true);
const showCustomComponent = ref(false);
const activeTab = ref(1)

const toggleDropdown = () => {
    isOpen.value = !isOpen.value;
};

const handleTabClick = (sectionId: any) => {
    if (sectionId === 5) {
        showCustomComponent.value = true;
    } else {
        showCustomComponent.value = false;
        console.log(sectionId, 'sectionId is here!');
    }
    activeTab.value = sectionId;
    setTimeout(() => {
        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' });
        }
    }, 0);  // 0 milisaniyelik gecikme ile kaydırma işlemi yapılır
};

const copyTabs = [
    { id: 1, title: 'Tur Programı' },
    { id: 2, title: 'Dahil Olan Servisler' },
    { id: 3, title: 'Dahil Olmayan Servisler' },
    { id: 4, title: 'Fiyatlar' },
    { id: 5, title: 'Turu Satın Al' },
]

const accordions = ref([
    {
        title: '1. Gün : Kuşadası - Samos', body: 'Sabah 07:30da Kuşadası Meander ofisinde check-in ve pasaport işlemlerinizin ardın dan saat 09:00da Samosa harekt ediyor ve 10:15de varıyorsunuz. Vaktinizi Adanon güzel köşelerini keşfederek geçirebilirsiniz.', active: true
    },
    {
        title: '2. Gün : Samos Tarihi Yerleri Keşfetme',
        body: 'Sabah 09:00da otelden hareketle Samosun tarihi zenginlikleriyle dolu bölgelerini gezmeye başlıyoruz.Arkeolojik alanlarda rehber eşliğinde antik kalıntıları keşfedecek ve tarihi atmosferin tadını çıkaracaksınız.Tur sonrasında öğle yemeği için yöresel lezzetleri deneyebilirsiniz.',
        active: true
    },

    {
        title: '3. Gün : Samos Plajları ve Deniz Keyfi',
        body: 'Bugün Samosun muhteşem plajlarında unutulmaz bir gün geçireceksiniz.Sabah serbest zaman ile başlayacak ve adanın kristal berraklığındaki sularında serinleyebileceksiniz.Akşam saatlerinde grupla buluşup günün deniz keyfini paylaşabilirsiniz.',
        active: true
    },
    {
        title: '4. Gün : Samos Lezzet Yolculuğu ve Akşam Keyfi',
        body: 'Gününüzü Samosun eşsiz lezzetleriyle taçlandırın! Sabah serbest zamanın ardından adanın meşhur restoranlarında geleneksel yemekleri tatma şansı bulabilirsiniz.Akşam saatlerinde ise grupla birlikte Samosun eğlenceli atmosferinde keyifli bir akşam geçirebilirsiniz.',
        active: true
    }
]);

const travelItems = ref([
    'Kuş Adası / Samos gidiş-dönüş feribot bileti',
    'Kuşadası Samos liman vergileri',
    '1 Gece oda/kahvaltı konaklama',
    'Türsab zorunlu seyahat sigortası',
]);

const tableHeaders = [
    ["Otel", "Tarih Aralığı", "Kişi Başı", "İlave Yatak", "Tek Kişi", "Çocuk", "Bebek"]
];

const tableData = [
    ["Samosa City Hotel", "01-30 Kasım", "39TL", "39TL", "39TL", "Bebek 0TL", "Çocuk 39TL"],
    ["Samosa City Hotel", "01-30 Kasım", "39TL", "39TL", "39TL", "Bebek 0TL", "Çocuk 39TL"],
    ["Samosa City Hotel", "01-30 Kasım", "39TL", "39TL", "39TL", "Bebek 0TL", "Çocuk 39TL"],
    ["Samosa City Hotel", "01-30 Kasım", "39TL", "39TL", "39TL", "Bebek 0TL", "Çocuk 39TL"],
];

</script>

<style scoped>
.bg {
    background: rgba(0, 0, 0, 0.50);
}

.tab.active {
    border-bottom: 1px solid #2149d5;
    color: #2149d5;
}

.tab {
    border-bottom: 1px solid rgb(255, 255, 255);
    /* Pasif durumdaki alt çizgi rengi */
    cursor: pointer;
    padding: 32.5px 0px;
}

@media (max-width: 680px) {
    .tab {
        height: 75px;
    }
}
</style>