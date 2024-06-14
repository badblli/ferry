<template>
    <div id="hs-medium-modal"
        class="hs-overlay hidden w-full h-full fixed top-0 start-0 z-[80] overflow-x-hidden overflow-y-auto pointer-events-none">
        <div
            class="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 opacity-0 ease-out transition-all md:max-w-2xl md:w-full m-3 md:mx-auto">
            <div class="h-[629px] flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto">
                <div class="text-black text-xl font-semibold font-['Plus Jakarta Sans']">
                    <h2 class="block text-2xl font-bold text-gray-800 text-center mt-10 mb-[83px]">Kullanıcı
                        Girişi</h2>
                </div>
                <div>
                    <!-- Form -->
                    <form class="flex justify-center items-center">
                        <div class="grid gap-y-4 my-auto justify-between items-center w-[298px]">
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
                            <div class="w-[298px]">
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
                                    <!-- <div
                                                    class="hidden absolute inset-y-0 end-0 items-center pointer-events-none pe-3">
                                                    <svg class="h-5 w-5 text-red-500" width="16" height="16"
                                                        fill="currentColor" viewBox="0 0 16 16" aria-hidden="true">
                                                        <path
                                                            d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM8 4a.905.905 0 0 0-.9.995l.35 3.507a.552.552 0 0 0 1.1 0l.35-3.507A.905.905 0 0 0 8 4zm.002 6a1 1 0 1 0 0 2 1 1 0 0 0 0-2z" />
                                                    </svg>
                                                </div> -->
                                </div>
                                <!-- <p class="hidden text-xs text-red-600 mt-2" id="password-error">8+ characters
                                                required</p> -->
                            </div>
                            <!-- End Form Group -->
                            <!-- Checkbox -->
                            <!-- End Checkbox -->
                            <button type="submit"
                                class="m-auto w-[398px] h-[62px] py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none">
                                <div class="text-center text-white text-base font-bold font-text leading-normal">
                                    Giriş Yap
                                </div>
                            </button>
                        </div>
                    </form>
                    <div
                        class="text-black text-sm font-semibold font-['Plus Jakarta Sans'] leading-[21px] tracking-widest mt-5 flex justify-center items-center mb-[20px]">
                        YA DA </div>
                    <div class="flex flex-col md:flex-row justify-center items-center">
                        <button
                            class="flex p-4 h-14 bg-white rounded-xl border border-stone-300 mr-1 text-zinc-600 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal flex flex-row items-center">
                            <IconGoogle />
                            <span class="ml-5">Sign up with Google</span>
                        </button>
                        <button
                            class="flex p-4 h-14 bg-white rounded-xl border border-stone-300  text-zinc-600 text-base font-semibold font-['Plus Jakarta Sans'] leading-normal flex flex-row items-center">
                            <IconFacebook />
                            <span class="ml-5">Sign up with Facebook</span>
                        </button>
                    </div>
                    <p class="mt-8 text-sm h-14 flex justify-center">
                        Üyeliğin yok mu?
                        <a class="text-blue-600 decoration-2 hover:underline font-medium"
                            href="./SignUpModal.vue">
                            &nbsp;Kayıt Ol
                        </a>
                    </p>
                    <!-- End Form -->
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">
import IconFacebook from "../icons/IconFacebook.vue";
import IconGoogle from "../icons/IconGoogle.vue"
import SignUpModal from "./SignUpModal.vue";

</script>

<style></style>