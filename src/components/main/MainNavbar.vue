<template>
    <nav class="navbar w-full h-[100px] bg-white flex justify-between items-center z-50 lg:px-28 md:px-16 sm:px-8">
        <button class="block md:hidden bg-slate-200">
            ikon
        </button>
        <div className="hidden md:flex">
            <div v-for="(item, index) in navBarItems" :key="index">
                <a class="text-black text-base font-medium  tracking-tight mr-4">
                    {{ item.text }}
                </a>
            </div>
        </div>
        <div className="mr-48 flex justify-center items-center ">
            <IconMainSamosa />
            <div className="ml-4">
                <span className="text-black text-2xl font-bold font-['Plus Jakarta Display'] tracking-wide">Samosa</span>
                <span className="text-black text-2xl font-normal font-['Plus Jakarta">Feribot</span>
            </div>
        </div>
        <div>
            <div class="text-center cursor-pointer flex">
                <button type="button"
                    class="text-black text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight mr-1"
                    data-hs-overlay="#hs-medium-modal">
                    Giriş Yap
                </button>
                <div>
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path fill-rule="evenodd" clip-rule="evenodd"
                            d="M5.46967 8.46967C5.76256 8.17678 6.23744 8.17678 6.53033 8.46967L12 13.9393L17.4697 8.46967C17.7626 8.17678 18.2374 8.17678 18.5303 8.46967C18.8232 8.76256 18.8232 9.23744 18.5303 9.53033L12.5303 15.5303C12.2374 15.8232 11.7626 15.8232 11.4697 15.5303L5.46967 9.53033C5.17678 9.23744 5.17678 8.76256 5.46967 8.46967Z"
                            fill="black" />
                    </svg>
                </div>
            </div>
            <div>
                <div id="hs-medium-modal"
                    class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
                    <div
                        class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
                        <div class="  h-[629px] flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
                            <div class="text-black text-xl font-semibold font-['Plus Jakarta Sans']">
                                <h2 class="block text-2xl font-bold text-gray-800 text-center mt-10 mb-[83px]">Kullanıcı
                                    Girişi</h2>
                            </div>
                            <div>
                                <!-- Form -->
                                <form class="flex justify-center items-center">
                                    <div class="grid gap-y-4 my-auto justify-between items-center w-[398px]">
                                        <!-- Form Group -->
                                        <div>
                                            <div class="relative">
                                                <div class="flex items-center border-b border-gray-200">
                                                    <input
                                                        class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                                        type="email" id="email" name="email" placeholder="Email Address"
                                                        aria-label="Full name">
                                                    <span
                                                        class="flex-shrink-0 bg-white text-sm text-white flex justify-center items-center w-[50px] h-[50px] rounded-full"
                                                        type="button">
                                                    </span>
                                                </div>
                                                <!-- <div class="absolute inset-y-0 end-0 flex items-center pointer-events-none">
                                                    <svg class="h-5 w-5 text-red-500" width="16" height="16"
                                                        fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path
                                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div> -->
                                            </div>
                                            <!-- <p class="hidden text-xs text-red-600 mt-2" id="email-error">Please include a
                                                valid
                                                email address so we can get back to you</p> -->
                                        </div>
                                        <!-- End Form Group -->
                                        <!-- Form Group -->
                                        <div class="w-[398px]">
                                            <div class="relative mt-2">
                                                <div class="flex items-center border-b border-gray-200">
                                                    <input
                                                        class="mb-5 appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none focus:border-0"
                                                        type="password" id="password" name="password" placeholder="Password"
                                                        aria-label="Full name">
                                                    <span
                                                        class="flex-shrink-0 bg-white text-sm text-white flex justify-center items-center w-[50px] h-[50px] rounded-full"
                                                        type="button">
                                                    </span>
                                                </div>
                                                <div
                                                    class="hidden absolute inset-y-0 end-0 items-center pointer-events-none pe-3">
                                                    <svg class="h-5 w-5 text-red-500" width="16" height="16"
                                                        fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path
                                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div>
                                            </div>
                                            <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters
                                                required</p>
                                        </div>
                                        <!-- End Form Group -->
                                        <!-- Checkbox -->
                                        <!-- End Checkbox -->
                                        <button type="submit"
                                            class="m-auto w-[398px] h-[62px] py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                            <div
                                                class="text-center text-white text-base font-bold font-['Plus Jakarta Text'] leading-normal">
                                                Giriş Yap
                                            </div>
                                        </button>
                                    </div>
                                </form>
                                <div
                                    class="text-black text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px] tracking-widest mt-5 flex justify-center items-center mb-[20px]">
                                    YA DA </div>
                                <div class="flex justify-center items-center">
                                    <button
                                        class="flex p-4 h-14 bg-white rounded-xl border border-stone-300 mr-1 text-zinc-600 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                            fill="none">
                                            <g id="GoogleLogo">
                                                <path id="Vector"
                                                    d="M16 3C13.4288 3 10.9154 3.76244 8.77759 5.1909C6.63975 6.61935 4.97351 8.64968 3.98957 11.0251C3.00563 13.4006 2.74819 16.0144 3.2498 18.5362C3.75141 21.0579 4.98953 23.3743 6.80762 25.1924C8.6257 27.0105 10.9421 28.2486 13.4638 28.7502C15.9856 29.2518 18.5995 28.9944 20.9749 28.0104C23.3503 27.0265 25.3807 25.3603 26.8091 23.2224C28.2376 21.0846 29 18.5712 29 16C29 12.5522 27.6304 9.24558 25.1924 6.80761C22.7544 4.36964 19.4478 3 16 3ZM16 26C14.3791 25.9998 12.7825 25.6056 11.3478 24.8514C9.91306 24.0971 8.68318 23.0054 7.76408 21.6703C6.84497 20.3352 6.2642 18.7966 6.07177 17.1872C5.87934 15.5777 6.08103 13.9456 6.65946 12.4314C7.2379 10.9172 8.17574 9.56635 9.39221 8.49512C10.6087 7.42389 12.0673 6.66441 13.6425 6.28212C15.2177 5.89982 16.8622 5.90615 18.4344 6.30057C20.0066 6.69499 21.4593 7.46568 22.6675 8.54625C22.8603 8.72439 22.9752 8.97117 22.9877 9.23334C23.0001 9.4955 22.9089 9.75205 22.7339 9.94761C22.5588 10.1432 22.3139 10.2621 22.052 10.2786C21.79 10.2952 21.5321 10.2082 21.3338 10.0363C20.0005 8.84376 18.3061 8.13248 16.5212 8.01602C14.7363 7.89957 12.9638 8.38466 11.487 9.39381C10.0101 10.403 8.91405 11.8779 8.37388 13.5831C7.83371 15.2883 7.88059 17.1254 8.50703 18.8008C9.13348 20.4762 10.3033 21.8934 11.8298 22.8259C13.3562 23.7584 15.1511 24.1525 16.9277 23.9451C18.7044 23.7378 20.3603 22.941 21.631 21.6821C22.9016 20.4231 23.7137 18.7747 23.9375 17H16C15.7348 17 15.4804 16.8946 15.2929 16.7071C15.1054 16.5196 15 16.2652 15 16C15 15.7348 15.1054 15.4804 15.2929 15.2929C15.4804 15.1054 15.7348 15 16 15H25C25.2652 15 25.5196 15.1054 25.7071 15.2929C25.8946 15.4804 26 15.7348 26 16C25.997 18.6513 24.9425 21.1931 23.0678 23.0678C21.1931 24.9425 18.6513 25.997 16 26Z"
                                                    fill="#2249D6" />
                                            </g>
                                        </svg>
                                        <span class="ml-5">Sign up with Google</span>
                                    </button>
                                    <button
                                        class="flex p-4 h-14 bg-white rounded-xl border border-stone-300 text-zinc-600 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"
                                            fill="none">
                                            <g id="FacebookLogo">
                                                <path id="Vector"
                                                    d="M28.9999 16C28.9959 19.1772 27.8301 22.2433 25.7223 24.6208C23.6145 26.9982 20.7101 28.5228 17.5562 28.9075C17.486 28.9154 17.4149 28.9084 17.3475 28.8869C17.2802 28.8653 17.2182 28.8297 17.1657 28.7825C17.1131 28.7353 17.0712 28.6774 17.0426 28.6128C17.014 28.5481 16.9995 28.4781 16.9999 28.4075V19H19.9999C20.137 19.0003 20.2727 18.9724 20.3986 18.918C20.5244 18.8637 20.6378 18.784 20.7315 18.6841C20.8253 18.5841 20.8975 18.4659 20.9437 18.3368C20.9899 18.2077 21.009 18.0705 20.9999 17.9337C20.9779 17.6766 20.8592 17.4373 20.6679 17.2641C20.4766 17.0909 20.2268 16.9965 19.9687 17H16.9999V14C16.9999 13.4695 17.2107 12.9608 17.5857 12.5858C17.9608 12.2107 18.4695 12 18.9999 12H20.9999C21.137 12.0003 21.2727 11.9724 21.3986 11.918C21.5244 11.8637 21.6378 11.784 21.7315 11.6841C21.8253 11.5841 21.8975 11.4659 21.9437 11.3368C21.9899 11.2077 22.009 11.0705 21.9999 10.9337C21.9778 10.6761 21.8588 10.4365 21.667 10.2632C21.4751 10.0899 21.2247 9.99586 20.9662 9.99997H18.9999C17.9391 9.99997 16.9217 10.4214 16.1715 11.1715C15.4214 11.9217 14.9999 12.9391 14.9999 14V17H11.9999C11.8629 16.9997 11.7272 17.0276 11.6013 17.0819C11.4755 17.1362 11.3621 17.2159 11.2683 17.3159C11.1746 17.4159 11.1023 17.5341 11.0562 17.6632C11.01 17.7922 10.9909 17.9294 10.9999 18.0662C11.0221 18.3238 11.141 18.5634 11.3329 18.7367C11.5248 18.91 11.7752 19.0041 12.0337 19H14.9999V28.41C15.0004 28.4805 14.9859 28.5504 14.9574 28.6149C14.9289 28.6795 14.887 28.7373 14.8346 28.7845C14.7822 28.8317 14.7204 28.8673 14.6532 28.8889C14.5861 28.9106 14.5151 28.9177 14.4449 28.91C11.2066 28.5156 8.2344 26.9198 6.11654 24.4386C3.99867 21.9573 2.88955 18.7713 3.00869 15.5112C3.25869 8.76122 8.72619 3.27372 15.4812 3.01122C17.2301 2.94348 18.9746 3.22916 20.6105 3.85117C22.2464 4.47319 23.7401 5.41877 25.0021 6.63134C26.2642 7.84391 27.2687 9.29857 27.9556 10.9083C28.6425 12.5181 28.9977 14.2498 28.9999 16Z"
                                                    fill="#2249D6" />
                                            </g>
                                        </svg>
                                        <span class="ml-5">Sign up with Facebook</span>
                                    </button>
                                </div>
                                <p class="mt-8 text-sm h-14 flex justify-center">
                                    Üyeliğin yok mu?
                                    <a class="text-blue-600 decoration-2 hover:underline font-medium"
                                        href="../examples/html/modal-signup.html">
                                        &nbsp;Kayıt Ol
                                    </a>
                                </p>
                                <!-- End Form -->
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <!-- Navigation Toggle -->
        <!-- End Navigation Toggle -->
    </nav>
    <div class="w-full h-[0.5px] border border-gray-200"></div>
    <div class="w-full h-[0.5px] border border-gray-200"></div>
</template>

<script lang="ts">
import IconMainSamosa from "../icons/IconMainSamosa.vue";
import IconArrowDown from "../icons/IconArrowDown.vue";

export default {
    name: 'MainNavbar',
    data() {
        return {
            navBarItems: [
                { text: "Samos Turları", link: "#", items: [] },
                { text: "Ücretler", link: "#", items: [] },
                { text: "Seferlerimiz", link: "#", items: [] },
            ],
        };
    },
    components: {
        IconMainSamosa,
        IconArrowDown
    },
    // methods: {
    //     openModal() {
    //         this.isModalOpen = true;
    //         console.log('Modal opened. isModalOpen:', this.isModalOpen);
    //     },
    //     closeModal() {
    //         this.isModalOpen = false;
    //         console.log('Modal closed. isModalOpen:', this.isModalOpen);
    //     },
    // },
};
</script>


<style scoped></style>