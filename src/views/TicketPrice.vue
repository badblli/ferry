<template>
    <div className="flex flex-col justify-center items-center m-auto">
        <div class="w-full h-[223px] bg-slate-200" />
        <div className="m-5 -top-48">
            <h1 className="text-black text-4xl font-bold font-['Plus Jakarta Display'] tracking-wide mb-9">
                Feribot Bileti Ücretleri
            </h1>
            <div className="w-[1240px] mx-auto bg-neutral-100 rounded-[20px] p-4">
                <div className="flex flex-col pt-8">
                    <div className="p-8">
                        <div className="flex flex-row items-center">
                            <IconMainSamosa />
                            <h2
                                className="text-black text-base font-medium font-['Plus Jakarta Sans'] leading-[26.88px] h-7 ml-3">
                                {{ whichFerry }}
                            </h2>
                        </div>
                        <table className="relative bg-white mt-8 mb-8 rounded-2xl w-full">
                            <thead>
                                <tr v-for="(header, index) in tableHeaders" :key="index"
                                    class="my-6 mx-8 flex flex-row justify-between items-center text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-loose rounded-lg">
                                    <th v-for="(label, labelIndex) in header" :key="labelIndex" class="p-3 w-full flex">{{
                                        label }}</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr v-for="(row, index) in tableData" :key="index"
                                    :class="{ 'border-none': index === tableData.length - 1 }"
                                    class="m-6 flex flex-row justify-between text-black text-lg font-semibold font-['Plus Jakarta Sans'] leading-loose border border-neutral-200 rounded-lg">
                                    <td v-for="(cell, cellIndex) in row" :key="cellIndex"
                                        class="w-full border-r border-neutral-300 pt-3 pb-3 pl-6">{{ cell }}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import IconAsteriskSimple from "../components/icons/IconAsteriskSimple.vue";
import IconMainSamosa from "../components/icons/IconMainSamosa.vue";

export default {
    name: 'HomeView',
    components: {
        IconAsteriskSimple,
        IconMainSamosa
    },
    data() {
        return {
            tableHeaders: [
                ["Bilet Tipi", "Yetişkin", "Çocuk 6-11", "Çocuk 6-11"]
            ],
            tableData: [
                ["Tek Yön", "39TL", "39TL", "39TL"],
                ["Tek Yön", "39TL", "39TL", "39TL"],
                ["Tek Yön", "39TL", "39TL", "39TL"]

            ],
            whichFerry: "Alttaki Samos’a feribot bileti ücretlerine Kuşadası ve Samos liman vergileri dahildir."
        };
    }
};
</script>
  
<style scoped></style>
  