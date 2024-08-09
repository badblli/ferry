<template>
    <div>
        <div class="flex flex-col justify-center items-center m-auto relative">
            <div class="w-full bg-slate-200 flex flex-row items-center">
                <div class="relative w-full lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
                    <div class="flex flex-col md:flex-row md:items-center justify-between">
                        <div>
                            <ol class="flex items-center whitespace-nowrap mt-[30px] mb-3 md:mb-7" aria-label="Breadcrumb">
                                <li class="inline-flex items-center">
                                    <a class="mr-[6px] opacity-60 text-black text-base font-normal font-['Plus Jakarta Sans'] tracking-tight border-b border-black"
                                        href="#">
                                        Anasayfa
                                    </a>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                        fill="none">
                                        <g id="Chevron - Down" opacity="0.6">
                                            <path id="Union" fill-rule="evenodd" clip-rule="evenodd"
                                                d="M8.46967 18.5303C8.17678 18.2374 8.17678 17.7626 8.46967 17.4697L13.9393 12L8.46967 6.53033C8.17678 6.23744 8.17678 5.76256 8.46967 5.46967C8.76256 5.17678 9.23744 5.17678 9.53033 5.46967L15.5303 11.4697C15.8232 11.7626 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.23744 18.8232 8.76256 18.8232 8.46967 18.5303Z"
                                                fill="black" />
                                        </g>
                                    </svg>
                                </li>
                                <li class="ml-[6px] opacity-60 text-black text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight border-b border-black"
                                    aria-current="page">
                                    Turlar
                                </li>
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
                                    <g id="Chevron - Down" opacity="0.6">
                                        <path id="Union" fill-rule="evenodd" clip-rule="evenodd"
                                            d="M8.46967 18.5303C8.17678 18.2374 8.17678 17.7626 8.46967 17.4697L13.9393 12L8.46967 6.53033C8.17678 6.23744 8.17678 5.76256 8.46967 5.46967C8.76256 5.17678 9.23744 5.17678 9.53033 5.46967L15.5303 11.4697C15.8232 11.7626 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.23744 18.8232 8.76256 18.8232 8.46967 18.5303Z"
                                            fill="black" />
                                    </g>
                                </svg>
                                <li class="ml-[6px] text-black text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight border-b"
                                    aria-current="page">
                                    Samosa Paket Turlar
                                </li>
                            </ol>
                            <h1
                                class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide mb-5 md:mb-14 md:pl-0">
                                Paket Turlar
                            </h1>
                        </div>
                        <div class="relative mb-5 md:mb-0">
                            <div @click="togglePickerModal"
                                class="h-[78px] w-full bg-white rounded-xl border flex flex-row justify-between items-center px-6 sm:mx-2 cursor-pointer mb-0 md:mb-0">
                                <div class="cursor-pointer ">
                                    <div class="text-black text-base font-medium font-display tracking-tight">
                                        Ne Zaman Gitmek İstersiniz?</div>
                                    <!-- <div>Tarih Seçin</div> -->
                                    {{ selectedDatesLabel }}
                                </div>
                                <div>
                                    <div
                                        class="w-[58px] h-[58px] bg-slate-200 rounded-full flex flex-row justify-center items-center ml-7">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                            viewBox="0 0 24 24" fill="none">
                                            <g id="vuesax/outline/search-normal">
                                                <g id="search-normal">
                                                    <path id="Vector"
                                                        d="M11.5 21.75C5.85 21.75 1.25 17.15 1.25 11.5C1.25 5.85 5.85 1.25 11.5 1.25C17.15 1.25 21.75 5.85 21.75 11.5C21.75 17.15 17.15 21.75 11.5 21.75ZM11.5 2.75C6.67 2.75 2.75 6.68 2.75 11.5C2.75 16.32 6.67 20.25 11.5 20.25C16.33 20.25 20.25 16.32 20.25 11.5C20.25 6.68 16.33 2.75 11.5 2.75Z"
                                                        fill="black" />
                                                    <path id="Vector_2"
                                                        d="M22.0004 22.7504C21.8104 22.7504 21.6204 22.6804 21.4704 22.5304L19.4704 20.5304C19.1804 20.2404 19.1804 19.7604 19.4704 19.4704C19.7604 19.1804 20.2404 19.1804 20.5304 19.4704L22.5304 21.4704C22.8204 21.7604 22.8204 22.2404 22.5304 22.5304C22.3804 22.6804 22.1904 22.7504 22.0004 22.7504Z"
                                                        fill="black" />
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </div>
                            </div>
                            <div ref="datepicker" v-show="litepickerModalVisible" id="container"
                                class="w-full h-full absolute left-0">
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="w-full bg-white rounded-[20px] overflow-y-hidden">
                <div class="flex flex-col items-center m-auto relative justify-between">
                    <div
                        class="grid gap-4 sm:grid-cols-[295px,1fr] grid-cols-1 mt-0 sm:mt-14 w-full centered-w lg:px-[100px]">
                        <div @click="toggleVisibility"
                            class="bg-slate-200 px-4 p-2 rounded-xl mt-5 md:mt-10 sm:hidden w-36 ml-2 flex flex-row justify-between items-center cursor-pointer">
                            Filtreler
                            <IconFilter />
                        </div>
                        <!-- Left Column -->
                        <div
                            :class="['h-full custom-z bg-white overflow-y-auto sm:overflow-hidden inset-0 sm:inset-auto fixed sm:relative', { 'hidden': !isVisible }]">
                            <div
                                class="bg-neutral-100 flex flex-row justify-center items-center py-6 md:px-14 px-1 rounded-xl cursor-pointer">
                                <div class="text-center text-black text-lg font-semibold font-['Plus Jakarta Sans']">
                                    Tüm Filtreleri Temizle
                                </div>
                            </div>
                            <!-- First Box -->
                            <div class="p-2">
                                <div
                                    class="w-full bg-white left-card-border flex flex-col justify-between items-start mt-3">
                                    <div class="p-5 flex flex-col h-full w-full justify-between">
                                        <div class="mb-4 left-card-title w-full flex flex-row">Gece Sayısı</div>
                                        <li v-for="(item, index) in displayedItems" :key="index"
                                            class="flex flex-row justify-between mb-4">
                                            {{ item.item }}
                                            <input type="checkbox" :value="item.id"
                                                class="w-5 h-5 bg-gray-200 rounded-[5px] border-none cursor-pointer custom-checkbox">
                                        </li>
                                    </div>
                                    <div v-if="fakeData.length > 3" @click="toggleShowMore"
                                        class="bg-slate-200 w-full py-4 items-center justify-center flex rounded-xl cursor-pointer">
                                        {{ showMore ? 'Daha Az Göster' : `+${countItem} Daha Fazla` }}
                                    </div>
                                </div>
                                <!-- Second Box -->
                                <div
                                    class="w-full bg-white left-card-border flex flex-col justify-between items-start mt-3 p-5">
                                    <div class="flex flex-col h-full w-full justify-between">
                                        <div class="mb-4 left-card-title w-full flex flex-row">Gece Sayısı</div>
                                        <li v-for="(item, index) in displayedItems2" :key="index"
                                            class="flex flex-row justify-between mb-4">
                                            {{ item.item }}
                                            <input type="checkbox" :value="item.id"
                                                class="w-5 h-5 bg-gray-200 rounded-[5px] border-none cursor-pointer custom-checkbox">
                                        </li>
                                    </div>
                                    <div v-if="fakeData2.length > 3" @click="toggleShowMore2"
                                        class="bg-slate-200 w-full py-4 mt-2 items-center justify-center flex rounded-xl cursor-pointer">
                                        {{ showMore2 ? 'Daha Az Göster' : `+${countItem2} Daha Fazla` }}
                                    </div>
                                </div>
                                <!-- Third Box -->
                                <div
                                    class="w-full bg-white left-card-border flex flex-col justify-between items-start mt-3 p-5">
                                    <div class="flex flex-col h-full w-full justify-between">
                                        <div class="mb-4 left-card-title w-full flex flex-row">Kalkış Noktası</div>
                                        <li v-for="(item, index) in displayedItems3" :key="index"
                                            class="flex flex-row justify-between mb-4">
                                            {{ item.item }}
                                            <input type="checkbox" :value="item.id"
                                                class="w-5 h-5 bg-gray-200 rounded-[5px] border-none cursor-pointer custom-checkbox">
                                        </li>
                                    </div>
                                    <div v-if="fakeData3.length > 3" @click="toggleShowMore3"
                                        class="bg-slate-200 w-full py-4 mt-2 items-center justify-center flex rounded-xl cursor-pointer">
                                        {{ showMore3 ? 'Daha Az Göster' : `+${countItem3} Daha Fazla` }}
                                    </div>
                                </div>
                                <!-- Fourth Box -->
                                <div
                                    class="w-full bg-white left-card-border flex flex-col justify-between items-start mt-3 mb-24 p-5">
                                    <div class="flex flex-col h-full w-full justify-between">
                                        <div class="mb-4 left-card-title w-full flex flex-row">Konsept</div>
                                        <li v-for="(item, index) in displayedItems4" :key="index"
                                            class="flex flex-row justify-between mb-4">
                                            {{ item.item }}
                                            <input type="checkbox" :value="item.id"
                                                class="w-5 h-5 bg-gray-200 rounded-[5px] border-none cursor-pointer custom-checkbox">
                                        </li>
                                    </div>
                                    <div v-if="fakeData4.length > 3" @click="toggleShowMore4"
                                        class="bg-slate-200 py-4 items-center justify-center flex rounded-xl cursor-pointer w-full mt-2">
                                        {{ showMore4 ? 'Daha Az Göster' : `+${countItem4} Daha Fazla` }}
                                    </div>
                                </div>
                            </div>
                            <button @click="toggleVisibility"
                                class="fixed sm:hidden bottom-0 w-full h-20 bg-neutral-100 rounded-t-lg tracking-wider text-slate-700 text-lg font-bold font-['Plus Jakarta Sans']">
                                SEÇ
                            </button>
                        </div>
                        <!-- Right Column -->
                        <div class="w-full">
                            <div class="mb-5 mx-2">
                                <router-link to="/tours/detail">
                                    <div
                                        class="bg-white p-4 rounded-[20px] card-border flex flex-col sm:flex-row mb-5 cursor-pointer">
                                        <img class="sm:w-[180px] w-full h-[170px] rounded-[18px]"
                                            src="https://via.placeholder.com/180x170" />
                                        <div class="w-full">
                                            <div class="flex flex-row justify-between items-center">
                                                <div
                                                    class="text-black text-2xl font-bold font-['Plus Jakarta Sans'] tracking-wide sm:pl-5 mt-3 sm:mt-0 ">
                                                    Midilli Turu 1 Gece - Kasım</div>
                                                <IconShare3 />
                                            </div>
                                            <div
                                                class="text-black text-base font-light font-display leading-7 sm:pl-5 pl-0 pt-3">
                                                Feribot, liman vergisi, oda-kahvaltı konaklama
                                                içermektedir.</div>
                                            <div clas="flex flex-row justify-between">
                                                <div class="flex flex-col xl:flex-row mb-4 justify-between">
                                                    <div class="flex flex-col lg:flex-row">
                                                        <div
                                                            class="flex flex-row justify-center items-center rounded-xl mini-card-border sm:ml-5 xl:w-36 w-32 mt-4">
                                                            <div class="flex flex-row">
                                                                <div class="flex flex-row items-center justify-center">
                                                                    <IconMoon />
                                                                    <div class="flex flex-col ml-4 my-2">
                                                                        <span
                                                                            class="text-black text-sm font-light font-display leading-normal">
                                                                            1 gece </span>
                                                                        <span
                                                                            class="text-black text-base font-medium font-display leading-7">
                                                                            2 gün </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                        <div
                                                            class="flex flex-row justify-center items-center rounded-xl mini-card-border sm:ml-5 lg:w-36 w-32 mt-4">
                                                            <div class="flex flex-row">
                                                                <div class="flex flex-row items-center justify-center">
                                                                    <IconPersonSimpleRun />
                                                                    <div class="flex flex-col ml-4 my-2">
                                                                        <span
                                                                            class="text-black text-sm font-light font-display leading-normal">
                                                                            Bilgi </span>
                                                                        <span
                                                                            class="text-black text-base font-medium font-display leading-7">
                                                                            Rehberli </span>
                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div
                                                        class="flex flex-row justify-start mt-5 sm:ml-5 xl:ml-0 xl:mt-0 xl:justify-end items-end">
                                                        <div
                                                            class="mr-3 text-right text-black hover:text-blue-600 text-base font-medium font-display leading-[25.12px] justify-end flex flex-col items-end">
                                                            €59’dan başlayan fiyatlar</div>
                                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                                            viewBox="0 0 24 24" fill="none">
                                                            <path
                                                                d="M20.7806 12.5307L14.0306 19.2807C13.8899 19.4214 13.699 19.5005 13.5 19.5005C13.301 19.5005 13.1101 19.4214 12.9694 19.2807C12.8286 19.1399 12.7496 18.9491 12.7496 18.7501C12.7496 18.551 12.8286 18.3602 12.9694 18.2194L18.4397 12.7501H3.75C3.55109 12.7501 3.36032 12.671 3.21967 12.5304C3.07902 12.3897 3 12.199 3 12.0001C3 11.8011 3.07902 11.6104 3.21967 11.4697C3.36032 11.3291 3.55109 11.2501 3.75 11.2501H18.4397L12.9694 5.78068C12.8286 5.63995 12.7496 5.44907 12.7496 5.25005C12.7496 5.05103 12.8286 4.86016 12.9694 4.71943C13.1101 4.5787 13.301 4.49963 13.5 4.49963C13.699 4.49963 13.8899 4.5787 14.0306 4.71943L20.7806 11.4694C20.8504 11.5391 20.9057 11.6218 20.9434 11.7128C20.9812 11.8039 21.0006 11.9015 21.0006 12.0001C21.0006 12.0986 20.9812 12.1962 20.9434 12.2873C20.9057 12.3783 20.8504 12.461 20.7806 12.5307Z"
                                                                fill="#2249D6" />
                                                        </svg>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                        <!-- <div
                            class="flex flex-row justify-center items-center mt-[83px] cursor-pointer lg:mb-[146px] mb-10">
                            <div class="text-black text-lg font-medium font-display mr-[16px]">Daha fazla
                                yazı</div>
                            <IconArrowTopRight />
                        </div> -->
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

import { ref, computed, onMounted, onUnmounted, watch } from 'vue'
import IconMoon from '../components/icons/IconMoon.vue'
import IconPersonSimpleRun from '../components/icons/IconPersonSimpleRun.vue';
import { formatDateToString } from '@/utils/globalHelper'
import Litepicker from 'litepicker'
import IconFilter from '../components/icons/IconFilter.vue';

const findBool = computed(() => {
    if (fakeData2.value.length > 3) {
        return true
    } else {
        return false
    }
})

const isVisible = ref(false);
const isOverflowHidden = ref(false);

const toggleVisibility = () => {
    isVisible.value = !isVisible.value;
    isOverflowHidden.value = !isOverflowHidden.value;
};

watch(isOverflowHidden, (newValue) => {
    if (newValue) {
        document.documentElement.style.overflow = 'hidden';
    } else {
        document.documentElement.style.overflow = '';
    }
});

const isSmallScreen = ref(window.innerWidth < 640);

const handleResize = () => {
    isSmallScreen.value = window.innerWidth <= 640;
    if (isSmallScreen.value) {
        isVisible.value = false;
    } else {
        isVisible.value = true;
        isOverflowHidden.value = false;
    }
};

onMounted(() => {
    window.addEventListener('resize', handleResize);
    handleResize();
});

onUnmounted(() => {
    window.removeEventListener('resize', handleResize);
});

const togglePickerModal = () => {
    litepickerModalVisible.value = !litepickerModalVisible.value
}

const litepickerModalVisible = ref(false)
const datepicker = ref(null)
const selectedDates = ref({
    start: '',
    end: ''
})

const selectedDatesLabel = computed(() => {
    if (datepicker.value) {
        return selectedDates.value.start && selectedDates.value.end ? `${formatDateToString(selectedDates.value.start)} - ${formatDateToString(selectedDates.value.end)}` : 'Tarih aralığı seçin'
    } else {
        return `${selectedDates.value.start} ${selectedDates.value.end}`
    }
})

const configureDatePicker = () => {
    const today = new Date()
    today.setDate(today.getDate() - 1)
    const maxDate = new Date(today)
    maxDate.setMonth(maxDate.getMonth() + 1)

    const picker = new Litepicker({
        element: datepicker.value,
        singleMode: false,
        format: 'YYYY-MM-DD',
        autoApply: true,
        minDate: today,
        maxDate: maxDate,
        startDate: today,
        inlineMode: true,
        setup: (picker) => {
            // picker.on('show', () => {
            //      picker.setDateRange(today, null)
            // })

            picker.on('selected', (startDate, endDate) => {
                selectedDates.value.start = startDate.format('YYYY-MM-DD')
                selectedDates.value.end = endDate.format('YYYY-MM-DD')
            })
        }
    })
}

onMounted(() => {
    configureDatePicker()
})

// const findBool = computed(() => {
//     return fakeData2.value.length > 3;
// });

// const displayedItems = computed(() => {
//     return fakeData2.value.slice(0, findBool.value ? fakeData2.value.length : 3);
// });

// const displayedItems = computed(() => {
//     return fakeData.value.slice(0, showMore.value ? fakeData.value.length : 3)
// })

const displayedItems = computed(() => {
    return fakeData.value.slice(0, showMore.value ? fakeData.value.length : 3)
})

const displayedItems2 = computed(() => {
    return fakeData2.value.slice(0, showMore2.value ? fakeData2.value.length : 3)
})

const displayedItems3 = computed(() => {
    return fakeData3.value.slice(0, showMore3.value ? fakeData3.value.length : 3)
})

const displayedItems4 = computed(() => {
    return fakeData4.value.slice(0, showMore4.value ? fakeData4.value.length : 3)
})

const showMore = ref(false)
const showMore2 = ref(false);
const showMore3 = ref(false);
const showMore4 = ref(false)

// Toggle function for showMore
const toggleShowMore = () => {
    showMore.value = !showMore.value
}

const toggleShowMore2 = () => {
    showMore2.value = !showMore2.value
}

const toggleShowMore3 = () => {
    showMore3.value = !showMore3.value;
}

const toggleShowMore4 = () => {
    showMore4.value = !showMore4.value
}

const countItem = computed(() => {
    return fakeData2.value.length - 3;
})

const countItem2 = computed(() => {
    return fakeData2.value.length - 3;
})

const countItem3 = computed(() => {
    return fakeData3.value.length - 3;
})

const countItem4 = computed(() => {
    return fakeData4.value.length - 3;
})

const fakeData = ref([
    {
        item: "Rehbersiz"
    },
    {
        item: "Rehberli"
    },
])

const fakeData2 = ref([
    {
        item: "1 Gece 2 Gün"
    },
    {
        item: "3 Gece 4 Gün"
    },
    {
        item: "5 Gece 6 Gün"
    },
    {
        item: "7 Gece 8 Gün"
    },
    {
        item: "2 Gece 3 Gün"
    },
    {
        item: "4 Gece 5 Gün"
    }
])

const fakeData3 = ref([
    {
        item: "Kuşadası Liman"
    },
    {
        item: "Vathy Liman"
    },
    {
        item: "Phyta Liman"
    },
    {
        item: "Samos Liman"
    },
])

const fakeData4 = ref([
    {
        item: "Bayram Paketi"
    },
    {
        item: "Yılbaşı Paketi"
    },
    {
        item: "Paskalya Turları"
    },
    {
        item: "Yurtiçi Turları"
    },
    {
        item: "Öğrenci Turları"
    },
    {
        item: "Kuşadası Turları"
    },
    {
        item: "Şehiriçi Turları"
    },
    {
        item: "Koy Turları"
    },
])
</script>

<style>
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
    border: 0.5px solid #c9c9c9;
    transition: border-color 0.1s ease;
}

.card-border:hover {
    border: 0.5px solid #2149d5;
    cursor: pointer;
}

.mini-card-border {
    border: 1px solid #c9c9c9;
}

.border-sub-line {
    border-bottom: 1px solid #dbdbdb;
}

.custom-form-border {
    border-radius: 12px;
    border: 1px solid #c9c9c9;
    background: var(--white, #fff);
}

.left-card-border {
    border: 1px solid #c9c9c9;
    border-radius: 20px;
}

.left-card-title {
    color: #000;
    font-family: "Plus Jakarta Display";
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.32px;
}

.custom-checkbox {
    display: grid;
    place-content: center;
    appearance: none;
    /* Remove default checkbox */
    -webkit-appearance: none;
    /* Remove default checkbox for Safari */
    background-color: #e5e7eb;
    border-radius: 0.3125rem;
    cursor: pointer;
}

.custom-checkbox::before {
    content: "";
    width: 1.25rem;
    height: 1.25rem;
    transition: 50ms transform ease-in-out;
    box-shadow: inset 1em 1em var(--form-control-color, #2149d5);
    border-radius: 0.3125rem;
    background-color: #2149d5;
    transform: scale(0);
}

.custom-checkbox:checked::before {
    transform: scale(1);
    border-radius: 0.3125rem;
}

@media (max-width: 639px) {
    .hidden {
        display: none;
    }
}

.custom-z {
    z-index: 70 ;
}

.overflow-hidden {
    overflow: hidden;
}

@media (max-width: 768px) {
    .overflow-hidden {
        html {
            overflow: hidden;
        }
    }
}
</style>