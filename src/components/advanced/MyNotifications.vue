<template>
    <div class="relative top-[-10rem] w-full lg:px-28 md:px-16 sm:px-8">
        <div className="w-full mx-auto rounded-[20px]">
            <div className="flex flex-col">
                <div className="items-center">
                    <div
                        className="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex justify-between items-center">
                        <div className="ml-[46px]">
                            <h2 className="mb-3 text-black text-base font-medium font-['Plus Jakarta Display']">Teklifler ve
                                İpuçları</h2>
                            <h2 class="text-zinc-300 text-base font-normal font-['Plus Jakarta Display'] tracking-tight">
                                Günlük teklif ve ipuçları</h2>
                        </div>
                        <div
                            class="w-32 h-14 px-8 py-4 rounded-xl justify-center items-center gap-2.5 inline-flex mr-10  cursor-pointer">
                            <input type="checkbox" id="hs-basic-usage"
                                class="relative w-[3.25rem] h-7 p-px bg-gray-500 border-transparent text-transparent rounded-full cursor-pointer transition-colors ease-in-out duration-200 focus:ring-blue-600 disabled:opacity-50 disabled:pointer-events-none checked:bg-none checked:text-blue-600 checked:border-blue-600 focus:checked:border-blue-600 dark:bg-gray-800 dark:border-gray-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-600
before:inline-block before:w-6 before:h-6 before:bg-white checked:before:bg-blue-200 before:translate-x-0 checked:before:translate-x-full before:rounded-full before:shadow before:transform before:ring-0 before:transition before:ease-in-out before:duration-200 dark:before:bg-gray-400 dark:checked:before:bg-blue-200">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script setup lang="ts">

const name = 'MyProfile';

// const mockProfileData = ref([
//     {
//         firstName: "Antonio",
//         lastName: "Giovanazzi",
//         phoneNumber: "+90 537 311 9470",
//         birthDate: "10.06.2000",
//         nationality: "Türkiye Cumhuriyeti",
//         identityNumber: "1241455124151",
//         taxNumber: "36995118946",
//         address: "Ata Mahallesi, 1087 Sokak, Vadi Öveçler Sitesi No: 1/10 Çankaya / ANKARA",
//     },
// ]);
// You can uncomment the following lines if you want to use props
// const props = defineProps({
//   profileData: {
//     type: Array,
//     required: true,
//   },
// });

</script>

<style></style>