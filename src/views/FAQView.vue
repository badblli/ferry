<template>
    <div class="flex flex-col justify-center items-center m-auto relative">
        <div class="w-full h-[145px] bg-slate-200 flex flex-col justify-center items-center">
            <div class="relative w-full lg:px-28 md:px-16 sm:px-8">
                <h1
                    class="text-black text-4xl font-medium font-['Plus Jakarta Display'] tracking-wide my-auto flex items-center">
                    Sıkça Sorulan Sorular
                </h1>
            </div>
        </div>
        <div class="w-4/3">
            <div class="flex w-full justify-between lg:px-28 md:px-16 sm:px-8 bg-slate-200 w-4/3">
                <div
                    class="w-[484px] text-black text-2xl font-medium font-['Plus Jakarta Sans'] leading-[37.06px] md:mt-[74px]">
                    Sadece
                    soruları okumak yetmez. Samos’a ait tüm bilgilerin yer aldığı kanalımızı inceleyibilirsin.</div>
                <div class="flex flex-row">
                    <div
                        class="text-gray-800 text-base font-medium font-['Plus Jakarta Display'] leading-[24.86px] tracking-tight md:mt-[74px]">
                        Youtube Kanalımıza Gidin</div>
                </div>
            </div>
            <div class="w-full mb-44 relative lg:px-28 md:px-16 sm:px-8">
                <div>
                    <div class="hs-accordion-group">
                        <div class="hs-accordion hs-accordion-active:border-blue-600 border border-transparent rounded-xl"
                            id="hs-active-bordered-heading-one">
                            <button
                                class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none"
                                aria-controls="hs-basic-active-bordered-collapse-one">
                                Accordion #1
                                <svg class="hs-accordion-active:hidden block w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                </svg>
                                <svg class="hs-accordion-active:block hidden w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14" />
                                </svg>
                            </button>
                            <div id="hs-basic-active-bordered-collapse-one"
                                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                aria-labelledby="hs-active-bordered-heading-one">
                                <div class="pb-4 px-5">
                                    <p class="text-gray-800 dark:text-gray-200">
                                        <em>This is the third item's accordion body.</em> It is hidden by default, until the
                                        collapse plugin adds the appropriate classes that we use to style each element.
                                        These
                                        classes control the overall appearance, as well as the showing and hiding via CSS
                                        transitions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="hs-accordion hs-accordion-active:border-gray-200 active bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent"
                            id="hs-active-bordered-heading-two">
                            <button
                                class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                                aria-controls="hs-basic-active-bordered-collapse-two">
                                Accordion #2
                                <svg class="hs-accordion-active:hidden block w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                </svg>
                                <svg class="hs-accordion-active:block hidden w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14" />
                                </svg>
                            </button>
                            <div id="hs-basic-active-bordered-collapse-two"
                                class="hs-accordion-content w-full overflow-hidden transition-[height] duration-300"
                                aria-labelledby="hs-active-bordered-heading-two">
                                <div class="pb-4 px-5">
                                    <p class="text-gray-800 dark:text-gray-200">
                                        <em>This is the second item's accordion body.</em> It is hidden by default, until
                                        the
                                        collapse plugin adds the appropriate classes that we use to style each element.
                                        These
                                        classes control the overall appearance, as well as the showing and hiding via CSS
                                        transitions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <div class="hs-accordion hs-accordion-active:border-gray-200 bg-white border border-transparent rounded-xl dark:hs-accordion-active:border-gray-700 dark:bg-gray-800 dark:border-transparent"
                            id="hs-active-bordered-heading-three">
                            <button
                                class="hs-accordion-toggle hs-accordion-active:text-blue-600 inline-flex justify-between items-center gap-x-3 w-full font-semibold text-start text-gray-800 py-4 px-5 hover:text-gray-500 disabled:opacity-50 disabled:pointer-events-none dark:hs-accordion-active:text-blue-500 dark:text-gray-200 dark:hover:text-gray-400 dark:focus:outline-none dark:focus:text-gray-400"
                                aria-controls="hs-basic-active-bordered-collapse-three">
                                Accordion #3
                                <svg class="hs-accordion-active:hidden block w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14" />
                                    <path d="M12 5v14" />
                                </svg>
                                <svg class="hs-accordion-active:block hidden w-3.5 h-3.5" xmlns="http://www.w3.org/2000/svg"
                                    width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                    stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
                                    <path d="M5 12h14" />
                                </svg>
                            </button>
                            <div id="hs-basic-active-bordered-collapse-three"
                                class="hs-accordion-content hidden w-full overflow-hidden transition-[height] duration-300"
                                aria-labelledby="hs-active-bordered-heading-three">
                                <div class="pb-4 px-5">
                                    <p class="text-gray-800 dark:text-gray-200">
                                        <em>This is the first item's accordion body.</em> It is hidden by default, until the
                                        collapse plugin adds the appropriate classes that we use to style each element.
                                        These
                                        classes control the overall appearance, as well as the showing and hiding via CSS
                                        transitions.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style scoped></style>