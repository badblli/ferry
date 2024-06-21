<template>
     <div class="flex flex-col justify-center items-center m-auto relative">
          <div class="w-full h-[145px] bg-slate-200 flex flex-col justify-center items-center">
               <div class="relative w-full lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
                    <ol class="pb-4 flex items-center whitespace-nowrap pl-10 md:pl-0" aria-label="Breadcrumb">
                         <li v-for="(slug, index) in blogHeader.slug" :key="index" class="inline-flex items-center">
                              <a
                                   :class="{
                                        'mr-[6px] text-base font-normal font-[\'Plus Jakarta Sans\'] tracking-tight': true,
                                        'opacity-60': index !== blogHeader.slug.length - 1,
                                        'text-black  text-base font-semibold tracking-tight ': index === blogHeader.slug.length - 1
                                   }"
                                   :href="slug.href"
                              >
                                   {{ slug.name }}
                              </a>
                              <template v-if="index !== blogHeader.slug.length - 1">
                                   <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                        <g id="Chevron - Down" opacity="0.6">
                                             <path id="Union" fill-rule="evenodd" clip-rule="evenodd" d="M8.46967 18.5303C8.17678 18.2374 8.17678 17.7626 8.46967 17.4697L13.9393 12L8.46967 6.53033C8.17678 6.23744 8.17678 5.76256 8.46967 5.46967C8.76256 5.17678 9.23744 5.17678 9.53033 5.46967L15.5303 11.4697C15.8232 11.7626 15.8232 12.2374 15.5303 12.5303L9.53033 18.5303C9.23744 18.8232 8.76256 18.8232 8.46967 18.5303Z" fill="black" />
                                        </g>
                                   </svg>
                              </template>
                         </li>
                    </ol>

                    <h1 class="text-black md:text-4xl text-3xl font-medium font-display tracking-wide my-auto flex items-center pl-10 md:pl-0">{{ blogHeader.title }}</h1>
               </div>
          </div>
          <!-- CONTENT SWİPER SECTİON -->
          <section class="w-full px-10 md:pl-0">
               <div class="w-full h-[147px] justify-between relative items-center pt-6 lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
                    <Splide :options="splideOptions">
                         <SplideSlide v-for="item in blogCategories" :key="item.id" class="flex flex-row -w-[270px] h-[90px] rounded-[128px] border border-neutral-200 items-center cursor-pointer">
                              <img class="w-[66px] h-[66px] rounded-full ml-[17px]" :src="getImage(item.image.url)" :alt="item.image.name" />
                              <div class="text-gray-800 text-lg font-medium font-display ml-[26px]">{{ item.title }}</div>
                         </SplideSlide>
                    </Splide>
               </div>
          </section>

          <div class="w-full lg:px-[100px] px-2 md:px-16 sm:px-8 centered-w">
               <div class="mb-16 md:mb-[204px]">
                    <div class="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                         <router-link v-for="blog in blogCards" :key="blog.id" @click="setStore(blog)" :to="{ name: 'uniqueBlogPost', params: { name: blog.slug } }" class="cursor-pointer mb-[50px]">
                              <img class="w-full h-[295px] object-cover rounded-xl" :src="getImage(blog.images[0].url)" :alt="blog.images[0].name" />
                              <div class="text-blue-700 text-xs font-bold font-['Plus Jakarta Sans'] leading-3 tracking-wide uppercase mt-[31px]">{{ blog.subtitle }} - {{ readingTime(blog.content, blog.minute) }}</div>
                              <div class="text-black text-[21px] font-semibold font-['Plus Jakarta Sans'] tracking-wide mt-[13px]">
                                   {{ blog.title }}
                              </div>
                         </router-link>
                    </div>
                    <div v-if="blogCards && blogCards.length > 5" class="flex flex-row justify-center items-center mt-[83px] cursor-pointer">
                         <div class="text-black text-lg font-medium font-display mr-[16px]">Daha fazla yazı</div>
                         <IconArrowTopRight />
                    </div>
               </div>
          </div>
     </div>
</template>

<script setup lang="ts">
// @ts-ignore
import { Splide, SplideSlide } from '@splidejs/vue-splide'
import IconArrowTopRight from '../components/icons/IconArrowTopRight.vue'
import { ref, onMounted, computed, watch } from 'vue'
import 'swiper/css'
import 'swiper/css/pagination'
import '@splidejs/splide/dist/css/themes/splide-default.min.css'
import '@splidejs/vue-splide/css'
import { fetchData, getImage } from '@/utils/globalHelper'
import { useI18n } from 'vue-i18n'
import { useBlog } from '../stores/blog'

const { locale } = useI18n()

const useBlogStore = useBlog()

const setStore = (blog: any) => {
     useBlogStore.setBlogPost(blog)
}

const readingTime = (text: string, minute: string | null) => {
     const wordsPerMinute = 200
     const noOfWords = text.split(/\s/g).length
     const minutes = noOfWords / wordsPerMinute
     const readTime = Math.ceil(minutes)
     return `${readTime ?? '1'} ${minute}`
}

const splideOptions = {
     type: 'loop',
     perPage: 4,
     arrows: false,
     focus: 0,
     pagination: false,
     gap: '1rem',
     watchOverflow: false,
     breakpoints: {
          1380: {
               perPage: 4
          },
          1140: {
               perPage: 3
          },
          840: {
               perPage: 2
          },
          580: {
               perPage: 1
          }
     }
}

const blogHeader = ref([])
const blogCards = ref([])
const blogCategories = ref([])

const clickedItemId = ref(null); // Başlangıçta null olarak başlatıyoruz

// Tıklanan öğenin id'sini alacak fonksiyon
const handleClick = (id: Number) => {
  clickedItemId.value = id;
};

const getBlogPage = async () => {
     try {
          let filters = {
               pageName: 'Blog'
          }
          const res = await fetchData('pages', locale.value.toLowerCase(), filters)
          console.log(res, 'res')
          // console.log(locale.value.toLowerCase(), 'locale value to lowercase main navbar');
          if (res) {
               let data = res.data[0].layout
               console.log(data, 'im in mainNavbar compos')
               blogHeader.value = data.find((x: any) => x.__component === 'shared.header')
               blogCards.value = data.filter((x: any) => x.__component === 'blog-page.blog-card')[0].blogs
               blogCategories.value = data.filter((x: any) => x.__component === 'blog-page.blog-page')[0].items
               console.log(blogCategories.value, 'blogCategories')
               console.log(blogCards.value, 'blogCards')
          }
     } catch (error) {
          return
     }
}

// Categorilere tıklandığında gelen id ile burayı güncelleyerek blog sayfasını güncelleyebiliriz.
// Blog sayfasını yukarıdaki formasyonda güncelleyebileceğimizi sanmıyorum.
// Çünkü strapi url lerinde iç içe filtering e izin vermiyor gibi geldi.
// const getBlogPage2 = async () => {
//      try {
//           let filters = {
//                pageName: clickedItemId
//           }
//           const res = await fetchData2('pages', locale.value.toLowerCase(), filters)
//           console.log(res, 'res')
//           // console.log(locale.value.toLowerCase(), 'locale value to lowercase main navbar');
//           if (res) {
//                let data = res.data[0].layout
//                console.log(data, 'im in mainNavbar compos')
//                blogHeader.value = data.find((x: any) => x.__component === 'shared.header')
//                blogCards.value = data.filter((x: any) => x.__component === 'blog-page.blog-card')[0].blogs
//                blogCategories.value = data.filter((x: any) => x.__component === 'blog-page.blog-page')[0].items
//                console.log(blogCategories.value, 'blogCategories')
//                console.log(blogCards.value, 'blogCards')
//           }
//      } catch (error) {
//           return
//      }
// }

watch(locale, (newLocale, oldLocale) => {
     if (newLocale !== oldLocale) {
          console.log(newLocale, 'new', oldLocale, 'old')
          getBlogPage()
     }
})
onMounted(async () => {
     await getBlogPage() // Veriyi asenkron bir şekilde yükleyin
})


</script>

<style scoped></style>
