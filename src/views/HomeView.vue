<template>
  <div class="flex flex-col justify-center items-center m-auto relative ">
    <div class="w-full ">
      <div class="lg:px-28 md:px-16 sm:px-8 relative centered-w">
        <SliderWithThumbnails />
      </div>
      <section class="lg:px-28 md:px-16 sm:px-8 -translate-y-12 centered-w">
        <div class="relative w-full h-[494px] rounded-xl flex flex-col justify-between mb-10">
          <div
            class="absolute bottom-0 z-10 bg-white md:max-w-[551px] md:h-[466px] p-7 md:ml-4 md:mb-4 m-3 rounded-xl flex flex-col justify-between">
            <div class="flex flex-col">
              <div
                class="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[18.46px] tracking-[2.96px] mb-[22px]">
                KAMPANYA
              </div>
              <div
                class="text-black lg:text-[42px] text-3xl font-bold font-['Plus Jakarta Sans'] leading-[48.47px] tracking-wide flex flex-row">
                Kasım’da Kuşadası<br />Samos Feribot Bileti<br />€30! Her Cumartesi<br />ve Pazar.
              </div>
            </div>
            <div class="flex flex-row cursor-pointer h-9">
              <div
                class="text-gray-800 text-base font-medium font-display leading-[24.86px] tracking-tight mb-[31px] mr-[10px]">
                Tüm Turları Keşfet
              </div>
              <div class="w-7 h-7 p-1 bg-gray-800 rounded-full justify-center items-center inline-flex">
                <IconFooter />
              </div>
            </div>
          </div>
          <img
            src="https://images.unsplash.com/photo-1583062482795-d2bef78e9bc1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="asd" class="object-fill w-full h-full rounded-xl flip-horizontal" />
        </div>
        <div class="flex flex-row gap-5 ">
          <div
            class="w-full flex flex-col custom-radiel-gradient h-[450px] rounded-xl pl-10 pt-10 overflow-hidden relative cursor-pointer">
            <div
              class="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[18.46px] tracking-[2.96px] mb-[14px]">
              1 GÜNDE VİZE
            </div>
            <div class="text-black text-[38px] font-bold font-['Plus Jakarta Sans'] leading-[43.85px] tracking-wide">
              Schengen Vizenizi<br />Biz Alalım
            </div>
            <img src="../assets//embeddedImages//mainPageTicketImage.png" alt="embedded"
              class="flip-horizontal absolute h-[650px] max-w-[850px] left-[180px] -top-3 -bottom-48 custom-z" />
            <div class="container">
              <div class="a"></div>
            </div>
          </div>
          <div class="relative w-full rounded-xl flex flex-col justify-between ">
            <div class="absolute bottom-0 z-10 bg-white md:w-2/3 w-full p-7 md:ml-4 md:mb-4 m-2 rounded-xl">
              <div class="flex flex-col justify-between h-full">
                <div
                  class="text-black text-base font-semibold font-['Plus Jakarta Sans'] leading-[18.46px] tracking-[2.96px] mb-4">
                  SAMOS TURLARI</div>
                <div
                  class="text-black text-[38px] font-bold font-['Plus Jakarta Sans'] leading-[43.85px] tracking-wide mb-[34px]">
                  Türkçe Rehberli<br />Samos Turu €25</div>
                <div class="flex flex-row w-[125px] bg-slate-200 pb-[7px] pl-3 pt-[6px] pr-[7px] rounded-lg cursor-pointer">
                  <div class="  text-black text-[15px] font-medium font-display rounded-md mr-[14px]">
                    Tüm Turlar
                  </div>
                  <IconArrowUpRight />
                </div>
              </div>
            </div>
            <img
              src="https://images.unsplash.com/photo-1583061386694-e364c84ba31d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="asd" class="object-fill w-full h-full rounded-xl flip-horizontal " />
          </div>
        </div>
      </section>

      <section class="lg:px-28 md:px-16 sm:px-8 centered-w">
        <div class="text-black text-[42px] font-medium font-display tracking-wide mt-[76px]">Hergün çıkışlı<br />Samos
          Turları</div>
        <div class="w-full flex flex-row justify-between items-center mt-[37px]">
          <div
            class="text-black text-lg font-normal font-display tracking-tight flex flex-row justify-center items-center">
            Eşsiz tarihi Yunan
            mimarisi, görülmeye değer mekanlar.</div>
          <div class="flex flex-row  items-center justify-centerh-8 bg-slate-200 rounded-lg border pr-[9px]">
            <div
              class="text-black text-[15px] font-medium font-display flex justify-center items-center mt-1 mr-1 pl-3 py-[6px] cursor-pointer">
              Hepsini Gör
            </div>
            <IconArrowUpRight />
          </div>
        </div>
        <div class="flex flex-col md:flex-row gap-5 md:mb-[120px] mb-20">
          <!-- sections -->
          <div class="w-[400px] h-[510px] rounded-xl border border-gray-200 mt-12 hover:bg-slate-100 transition delay-[10ms] cursor-pointer">
            <div class="rounded-xl m-5  bg-blue-400 ">
              <img
                src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="asd" class="object-fill w-full flip-horizontal rounded-xl" />
            </div>
            <div class="px-5 pt-2">
              <div class="text-black text-[23px] font-semibold font-['Plus Jakarta Sans'] tracking-wide pb-[38px]">1
                Gece
                2 Gün
              </div>
              <div class=" text-black text-base font-normal font-display leading-snug tracking-tight">
                Feribot biletleri, liman vergileri, oda/kahvaltı otel konaklaması, kah..</div>
              <div
                class="flex flex-row w-full items-center justify-between text-right text-black text-lg font-medium font-display leading-[18px] tracking-tight mt-7">
                <span>
                  €74’dan başlayan fiyatlar
                </span>
                <span>
                  <div class="flex flex-row items-center justify-center p-5 bg-white rounded-full">
                    <IconShare2 />
                  </div>
                </span>
              </div>
            </div>
          </div>
          <!-- sections -->
          <div class="w-[400px] h-[510px] rounded-xl border border-gray-200 mt-12  hover:bg-slate-100 transition delay-[10ms] cursor-pointer">
            <div class="rounded-xl m-5  bg-blue-400 ">
              <img
                src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="asd" class="object-fill w-full flip-horizontal rounded-xl" />
            </div>
            <div class="px-5 pt-2">
              <div class="text-black text-[23px] font-semibold font-['Plus Jakarta Sans'] tracking-wide pb-[38px]">1
                Gece
                2 Gün
              </div>
              <div class=" text-black text-base font-normal font-display leading-snug tracking-tight">
                Feribot biletleri, liman vergileri, oda/kahvaltı otel konaklaması, kah..</div>
              <div
                class="flex flex-row w-full items-center justify-between text-right text-black text-lg font-medium font-display leading-[18px] tracking-tight mt-7">
                <span>
                  €74’dan başlayan fiyatlar
                </span>
                <span>
                  <div class="flex flex-row items-center justify-center p-5 bg-white rounded-full">
                    <IconShare2 />
                  </div>
                </span>
              </div>
            </div>
          </div>
          <!-- sections -->
          <div class="w-[400px] h-[510px] rounded-xl border border-gray-200 mt-12 hover:bg-slate-100 transition delay-[10ms] cursor-pointer">
            <div class="rounded-xl m-5  bg-blue-400 ">
              <img
                src="https://images.unsplash.com/photo-1498307833015-e7b400441eb8?q=80&w=2128&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="asd" class="object-fill w-full flip-horizontal rounded-xl max-h-[241px]" />
            </div>
            <div class="px-5 pt-2">
              <div class="text-black text-[23px] font-semibold font-['Plus Jakarta Sans'] tracking-wide pb-[38px]">1
                Gece
                2 Gün
              </div>
              <div class=" text-black text-base font-normal font-display leading-snug tracking-tight">
                Feribot biletleri, liman vergileri, oda/kahvaltı otel konaklaması, kah..</div>
              <div
                class="flex flex-row w-full items-center justify-between text-right text-black text-lg font-medium font-display leading-[18px] tracking-tight mt-7">
                <span>
                  €74’dan başlayan fiyatlar
                </span>
                <span>
                  <div class="flex flex-row items-center justify-center p-5 bg-white rounded-full">
                    <IconShare2 />
                  </div>
                </span>
              </div>
            </div>
          </div>
        </div>
      </section>
      <HomeCardSplide />
      <section>
        <div class="w-full bg-slate-200 flex flex-col items-center mb-[120px]">
          <div class=" text-black text-[42px] font-medium font-display tracking-wide mt-[100px] mb-7">Samos
            Adasında<br />neler yapabilirim?</div>
          <div
            class="w-[534px] text-center text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
            Marzipan sweet roll gingerbread oat cake cheesecake pie. Pie macaroon sweet liquorice topping.</div>
          <div class="mt-[107px] flex flex-col centered-w">
            <div class="flex flex-row flex-wrap justify-center">
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
            </div>
            <div class="flex flex-row flex-wrap justify-center">
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
            </div>
            <div class="flex flex-row justify-center flex-wrap ">
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
              <div
                class="p-3 pr-5 m-2 flex flex-row  rounded-[128px] border border-neutral-200 items-center cursor-pointer bg-white">
                <img class="w-[66px] h-[66px] rounded-full ml-[17px]" alt="Slide Image"
                  src="https://via.placeholder.com/66x66" />
                <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">Macera Turu</div>
              </div>
            </div>
          </div>
          <div class="mt-[89px] mb-[119px] flex flex-row">
            <div class="w-[333px] text-neutral-600 text-base font-normal font-display leading-[24.86px] tracking-tight">
              Ve daha fazlası için blog yazılarımızı okuyun.</div>
            <div class="flex flex-row">
              <div class="text-gray-800 text-base font-medium font-display leading-[24.86px] tracking-tight mr-3">
                Samos’u
                Keşfet
              </div>
              <div
                class="flex items-center justify-center w-7 h-7 p-1 flex-shrink-0 rounded-full bg-gray-800 cursor-pointer">
                <IconFooter />
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  </div>
</template>

<script setup lang="ts">
import SliderWithThumbnails from '@/components/advanced/SliderWithThumbnails.vue';
import IconArrowUpRight from '@/components/icons/IconArrowUpRight.vue';
import IconShare2 from '@/components/icons/IconShare2.vue';
import IconFooter from '@/components/icons/IconFooter.vue';
import HomeCardSplide from '@/components/advanced/HomeCardSplide.vue';
</script>

<style>
.container {
  width: 718px;
  height: 718px;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  background-color: transparent;
  border-radius: 50%;
  position: relative;
  left: -100px;
  bottom: -65px;
  z-index: 1;
}

.a {
  --circle-radius: 75%;
  /* changed as percent value */
  border-radius: 718px;
  height: 100%;
  width: 100%;
  --mask: radial-gradient(circle farthest-side at center center, transparent var(--circle-radius), #000 calc(var(--circle-radius) + 2px) 100%) 50% 50%/100% 100% no-repeat;
  -webkit-mask: var(--mask);
  mask: var(--mask);
  background: rgba(0, 0, 0, 0.05);
  z-index: 1;
}

.custom-z {
  z-index: 998;
}

.custom-radiel-gradient {
  background: rgb(199, 233, 231);
  background: linear-gradient(90deg, rgba(199, 233, 231, 1) 0%, rgba(243, 237, 228, 1) 50%, rgba(212, 199, 233, 1) 100%);
}
</style>