<template>
    <div className="flex flex-col">
        <div className="items-center">
            <div
                className="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex justify-between items-center">
                <div className="ml-[46px]">
                    <div className="flex justify-center items-center">
                        <div>
                            <h2 className="mb-1 text-black text-base font-medium font-['Plus Jakarta Display']">
                                Hesabımı Sil
                            </h2>
                            <div class="text-zinc-600 text-base font-normal font-['Plus Jakarta Display'] tracking-tight">
                                You can deactive your account permanantly.</div>
                        </div>
                    </div>
                </div>
                <div>
                    <button
                        class="text-center text-base text-red-500 font-bold font-['Plus Jakarta Text'] leading-normal bg-red-100 hover:bg-red-200 transition ease-in-out delay-100 w-[211px] h-14 px-8 py-4 mr-5 rounded-md justify-center items-center gap-2.5 inline-flex cursor-pointer"
                        type="button" data-hs-overlay="#hs-custom-backdrop-modal">
                        Şimdi Hesabımı Sil</button>
                </div>
            </div>
        </div>
    </div>
    <div>
        <div id="hs-custom-backdrop-modal"
            class="hs-overlay hs-overlay-backdrop-open:bg-red-400/50 hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
            <div
                class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto">
                <div
                    class="flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-gray-800 dark:border-gray-700 dark:shadow-slate-700/[.7]">
                    <div class="flex justify-between items-center py-3 px-4 border-b dark:border-gray-700">
                        <h3 class="font-bold text-gray-800 dark:text-white">
                            Modal title
                        </h3>
                        <button type="button"
                            class="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-gray-700 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            data-hs-overlay="#hs-custom-backdrop-modal">
                            <span class="sr-only">Close</span>
                            <svg class="flex-shrink-0 w-4 h-4" xmlns="http://www.w3.org/2000/svg" width="24" height="24"
                                viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"
                                stroke-linecap="round" stroke-linejoin="round">
                                <path d="M18 6 6 18" />
                                <path d="m6 6 12 12" />
                            </svg>
                        </button>
                    </div>
                    <div class="p-4 overflow-y-auto">
                        <p class="mt-1 text-gray-800 dark:text-gray-400">
                            This is a wider card with supporting text below as a natural lead-in to additional content.
                        </p>
                    </div>
                    <div class="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-gray-700">
                        <button type="button"
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-slate-900 dark:border-gray-700 dark:text-white dark:hover:bg-gray-800 dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600"
                            data-hs-overlay="#hs-custom-backdrop-modal">
                            Close
                        </button>
                        <button type="button"
                            class="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none dark:focus:outline-none dark:focus:ring-1 dark:focus:ring-gray-600">
                            Save changes
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

</script>

<style></style>