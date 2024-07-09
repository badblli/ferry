import IconSearchNormal from '@/components/icons/IconSearchNormal.vue';
<template>
    <div>
        <div class="flex flex-col justify-center items-center m-auto relative">
            <div class="w-full h-[223px] bg-slate-200" />
            <div class="relative top-[-11rem] w-full lg:px-[100px] px-0 md:px-16 sm:px-8 centered-w">
                <div class="flex flex-row justify-between items-center">
                    <div>
                        <ol class="flex items-center whitespace-nowrap mt-[30px]" aria-label="Breadcrumb">
                            <li class="inline-flex items-center">
                                <a class="mr-[6px] opacity-60 text-black text-base font-normal font-['Plus Jakarta Sans'] tracking-tight"
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
                            <li class="ml-[6px] opacity-60 text-black text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight"
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
                            <li class="ml-[6px] text-black text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight"
                                aria-current="page">
                                Samosa Paket Turlar
                            </li>
                        </ol>
                        <h1
                            class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide mb-14 md:pl-0">
                            Paket Turlar
                        </h1>
                    </div>
                    <div
                        class="w-80 h-[78px] bg-white rounded-xl border flex flex-row justify-between items-center p-5">
                        <div>
                            <div>Ne Zaman Gitmek İstersiniz?</div>
                            <div>Tarih Seçin</div>
                        </div>
                        <div>
                            <div class="w-[58px] h-[58px] bg-slate-200 rounded-full p-5">
                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"
                                    fill="none">
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
                </div>
                <div className="w-full mx-auto bg-neutral-100 rounded-[20px] p-4">
                    <div className="flex flex-col overflow-x-auto">
                        <div className="p-8">
                            <div className="flex flex-row items-center">
                                <IconAsteriskSimple />
                                <h2 className="text-black text-base font-medium  h-7 ml-3 md:mb-0 mb-2">
                                    which ferry
                                </h2>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup>

</script>

<style scoped></style>