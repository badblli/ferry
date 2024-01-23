<template>
    <div class="relative top-[-10rem] w-full lg:px-28 md:px-16 sm:px-8">
        <div className="w-full mx-auto rounded-[20px]">
            <div className="flex flex-col">
                <div className="items-center">
                    <h2
                        className="text-black text-xl font-medium font-['Plus Jakarta Display'] tracking-tight h-7 pt-[70px] pb-[57px]">
                        Profil Bilgilerim
                    </h2>
                    <div
                        className="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex justify-between items-center">
                        <div className="ml-[46px]">
                            <h2 className="mb-1 text-black text-base font-medium font-['Plus Jakarta Display']">İsim</h2>
                            <h2
                                classNmae="text-zinc-600 text-base font-normal font-['Plus Jakarta Display'] tracking-tight">
                                Antonio</h2>
                        </div>
                        <div
                            class="w-32 h-14 px-8 py-4 rounded-xl justify-center items-center gap-2.5 inline-flex mr-10 hover:bg-slate-200 cursor-pointer">
                            <button
                                class="text-center text-black text-base font-bold font-['Plus Jakarta Text'] leading-normal">
                                Düzenle</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
export default {
    name: 'MyProfile',
    // props: {
    //     profileData: {
    //         type: Array,
    //         required: true
    //     }
    // },
    // mockProfileData: [
    //     {
    //         firstName: "Antonio",
    //         lastName: "Giovanazzi",
    //         phoneNumber: "+90 537 311 9470",
    //         birthDate: "10.06.2000",
    //         nationality: "Türkiye Cumhuriyeti",
    //         identityNumber: "1241455124151",
    //         taxNumber: "36995118946",
    //         address: "Ata Mahallesi, 1087 Sokak, Vadi Öveçler Sitesi No: 1/10 Çankaya / ANKARA"
    //     },
    // ] as profileData,
}
</script>

<style></style>