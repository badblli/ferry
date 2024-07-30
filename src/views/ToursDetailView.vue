<template>
    <div class="w-full bg-slate-100 relative">
        <img :src="example" alt="Background Image" class="absolute top-0 left-0 w-full h-full object-cover bg-black/50">
        <div class="relative flex h-[352px] items-center lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w z-10"
            aria-label="Breadcrumb">
            <div class="flex flex-col">
                <ul class="flex flex-row">
                    <li class="inline-flex items-center">
                        <a class="mr-[6px] opacity-60 text-black text-base font-normal font-['Plus Jakarta Sans'] tracking-tight"
                            href="#">
                            Anasayfa
                        </a>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                            <g id="Chevron - Down" opacity="0.6">
                                <path id="Union" fill-rule="evenodd" clip-rule="evenodd"
                                    d="M8.46967 18.5303C8.17678 18.2374 8.17678 17.7626 8.46967 17.4697L13.9393 12L8.46967 6.53033C8.17678 6.23744 8.17678 5.76256 8.46967 5.46967C8.76256 5.17678 9.23744 5.17678 9.53033 5.46967L15.5303 11.4697C15.8232 11.7626 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.23744 18.8232 8.76256 18.8232 8.46967 18.5303Z"
                                    fill="black" />
                            </g>
                        </svg>
                    </li>
                    <li class="ml-[6px] text-black opacity-60 text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight"
                        aria-current="page">
                        Turlar
                    </li>
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <g id="Chevron - Down" opacity="0.6">
                            <path id="Union" fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.46967 18.5303C8.17678 18.2374 8.17678 17.7626 8.46967 17.4697L13.9393 12L8.46967 6.53033C8.17678 6.23744 8.17678 5.76256 8.46967 5.46967C8.76256 5.17678 9.23744 5.17678 9.53033 5.46967L15.5303 11.4697C15.8232 11.7626 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.23744 18.8232 8.76256 18.8232 8.46967 18.5303Z"
                                fill="black" />
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
        </div>
    </div>
    <section>
        <div class="flex flex-col w-full mx-auto bg-neutral-100 ">
            <div
                class="flex justify-between items-end border-sub-line overflow-x-auto w-full mx-auto centered-small-w h-[91px]">
                <div v-for="(tab, index) in copyTabs" :key="index" @click="handleTabClick(tab.id)"
                    class="tab md:mx-4 mx-2 md:px-20 px-2 first:ml-20 md:last:mr-20"
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
                    <p class="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[17.06px]">1 gece
                        2
                        günü kapsayan bu turun<br /> programı aşağıdaki gibidir.</p>
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
    <div v-if="showCustomComponent" class="lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
        DENEME DENEME
    </div>
</template>

<script setup lang="ts">
import IconAccordionActiveArrow from '@/components/icons/IconAccordionActiveArrow.vue';
import IconAsteriskSimple from '@/components/icons/IconAsteriskSimple.vue';
import IconAccordionArrow from '@/components/icons/IconAccordionArrow.vue';
import example from '@/assets/embeddedImages/examp.jpg'
import { ref } from 'vue';

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
        console.log(sectionId, 'sectionId is here!')
        setTimeout(() => {
            const section = document.getElementById(sectionId);
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' });
            }
        }, 0);
    }
    activeTab.value = sectionId;
    const section = document.getElementById(sectionId);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
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
    border-bottom: 2px solid #2149d5;
    color: #2149d5;
    /* Aktif durumdaki alt çizgi rengi */
}

.tab {
    border-bottom: 2px solid rgb(255, 255, 255);
    /* Pasif durumdaki alt çizgi rengi */
    cursor: pointer;
    padding: 0px;
    height: 58px;
}

@media (max-width: 680px) {
    .tab {
        height: 75px;
    }
}
</style>
