<template>
    <div class="relative top-[-10rem] w-full lg:px-28 md:px-16 sm:px-8">
        <div className="w-full mx-auto rounded-[20px]">
            <div className="flex flex-col">
                <div className="items-center">
                    <div
                        className="max-w-[850px] h-[115px] bg-white rounded-2xl border border-stone-300 flex justify-between items-center">
                        <div className="ml-[46px]">
                            <div className="flex justify-center items-center">
                                <div>
                                    <h2 className="mb-1 text-black text-base font-medium font-display">
                                        Şifre
                                    </h2>
                                    <div class="text-zinc-600 text-base font-normal font-display tracking-wider">
                                        ***********</div>
                                </div>
                                <div class="w-[146px] h-[29px] rounded-md border ml-[42px] bg-gray-200">
                                    <div class="flex items-center justify-center mt-1 text-black text-sm font-semibold ">
                                        2 gün önce değişti.
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div
                            class="w-[195px] h-14 px-8 py-4 rounded-md justify-center items-center gap-2.5 inline-flex hover:bg-slate-200 transition ease-in-out delay-100 cursor-pointer">
                            <div class="text-center text-zinc-900 text-base font-bold font-text leading-normal">
                                Şifremi Güncelle</div>
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