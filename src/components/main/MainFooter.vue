<template>
     <!-- {{ console.log(mainFooter, 'mainFooter') }} -->
     <div v-if="!isLoading">
          <div
               class="w-full lg:px-[100px] px-16 md:px-16 sm:px-8 h-[172px] bg-slate-200 flex flex-col md:flex-row justify-evenly items-center grid-cols-4">
               <div class="text-center text-black md:text-lg text-base font-medium lg:m-0 m-2">
                    {{ mainFooter.ContactBar?.title }}
               </div>
               <div className="flex flex-row justify-evenly items-center cursor-pointer lg:m-0 m-2"
                    data-hs-overlay="#hs-vertically-centered-modal">
                    <span className="mr-3">{{ mainFooter.ContactBar?.btnLabel }}</span>
                    <div class="flex items-center justify-center w-7 h-7 p-1 flex-shrink-0 rounded-full bg-gray-800">
                         <IconFooter />
                    </div>
                    <ContactModal />
               </div>
          </div>

          <footer class="bg-white text-black p-8">
               <div
                    class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-7 gap-10 md:gap-0 xl:gap-0">
                    <div className="sm:hidden md:hidden lg:hidden xl:block 2xl:block">
                         <!-- for first column and space -->
                    </div>
                    <div>
                         <div class="text-lg font-bold mb-4 flex">
                              <img :src="getImage(imageURL)" alt="Image" class="w-full h-full object-cover" />
                              <!-- <div>
                                   <span className="text-black text-2xl font-bold font-display tracking-wide">{{ mainFooter.footerBrand?.title }}</span>
                              </div> -->
                         </div>
                         <ul>
                              <li>
                                   <div className="mb-8">
                                        <div className="text-black text-sm font-normal font-display">{{
                                             mainFooter.footerBrand?.copyright }}</div>
                                   </div>
                              </li>
                              <li>
                                   <div class="text-black text-2xl font-normal font-display leading-loose mb-2">{{
                                        mainFooter.footerBrand?.slogan }}</div>
                              </li>
                              <li>
                                   <form class="w-full max-w-sm">
                                        <div class="flex items-center border-b border-gray-200">
                                             <input
                                                  class="appearance-none bg-transparent border-none w-full text-gray-700 mr-3 py-1 px-2 leading-tight focus:outline-none"
                                                  type="text" placeholder="Email Address" aria-label="Full name" />
                                             <button
                                                  class="flex-shrink-0 bg-slate-200 text-sm text-white flex justify-center items-center w-[50px] h-[50px] rounded-full"
                                                  type="button">
                                                  <IconArrow />
                                             </button>
                                        </div>
                                   </form>
                              </li>
                         </ul>
                    </div>
                    <div className="sm:hidden md:hidden lg:hidden xl:block 2xl:block">
                         <!-- for first column and space -->
                    </div>
                    <div v-for="(item, index) in mainFooter.footerAreas" :key="index">
                         <div>
                              <div class="text-black text-lg font-medium font-display mb-5">{{ item.title }}</div>
                              <div v-for="(sub, index) in item.subItem" :key="index" className="mb-5">
                                   <router-link v-if="sub.url?.slug"
                                        :to="{ name: 'term', params: { slug: sub.url.slug } }"
                                        class="text-zinc-600 text-sm font-normal font-display">
                                        {{ sub.text }}
                                   </router-link>
                                   <a v-else :href="sub.href" class="text-zinc-600 text-sm font-normal font-display"> {{
                                        sub.text }} </a>
                              </div>
                         </div>
                    </div>

                    <div>
                         <div class="w-[50px] h-[50px] hidden sm:relative">
                              <div @click="toTop"
                                   class="w-[50px] h-[50px] left-0 top-0 absolute bg-slate-200 rounded-[25px] cursor-pointer">
                                   <IconArrowTop />
                              </div>
                              <div class="origin-top-left -rotate-90 w-5 h-5 left-[14.81px] top-[35.50px] absolute">
                              </div>
                         </div>
                    </div>
                    <div>
                         <div className="sm:hidden md:hidden lg:hidden xl:block 2xl:block"></div>
                    </div>
               </div>
          </footer>
     </div>
     <div v-else>
          <div class="loading-footer"></div>
     </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch } from 'vue'
import IconFooter from '../icons/IconFooter.vue'
import IconMainSamosa from '../icons/IconMainSamosa.vue'
import IconArrowTop from '../icons/IconArrowTop.vue'
import IconArrow from '../icons/IconArrow.vue'
import ContactModal from '../advanced/ContactModal.vue'
import { fetchData, getImage } from '@/utils/globalHelper'
import { useI18n } from 'vue-i18n'
const imageURL = ref('')

const { locale } = useI18n()
const isLoading = ref<boolean>(true)

interface SubUrls {
     href: string
     slug: string
}
interface SubItem {
     id: number
     text: string
     url: SubUrls[]
}

interface FooterAreas {
     id: number
     subItem: SubItem[]
     title: string
}

interface FooterBrand {
     copyright: string
     id: number
     slogan: string
     title: string
}

interface ContactBar {
     btnHref: string
     btnLabel: string
     id: number
     title: string
}

interface MainFooterData {
     ContactBar: ContactBar
     footerAreas: FooterAreas[]
     footerBrand: FooterBrand
}

const mainFooter = ref<MainFooterData | any>([])

const getFooter = async () => {
     try {
          isLoading.value = true
          let filters = {
               pageName: 'Home'
          }

          const res = await fetchData('pages', locale.value.toLowerCase(), filters)
          // console.log(res, 'res')

          // console.log(locale.value.toLowerCase(), 'locale value to lowercase');

          if (res) {
               let data = res.data[0].layout
               console.log(data, 'im in mainfooter compos')

               mainFooter.value = data.find((x: any) => x.__component === 'global.footer')
               imageURL.value = mainFooter.value.footerBrand.logo.url
               console.log(imageURL.value, 'global.navbarnavbarnavbarnavbarnav')
               console.log(mainFooter.value, 'global.footer!!!!!!!!!!!!!!')
          }
     } catch (error) {
          console.error('Hata:', error)
     } finally {
          isLoading.value = false
     }
}
watch(locale, (newLocale, oldLocale) => {
     if (newLocale !== oldLocale) {
          console.log(newLocale, 'new', oldLocale, 'old')
          getFooter()
     }
})
onMounted(() => {
     getFooter()
})

const toTop = () => {
     window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
     })
}
</script>

<style scoped>
.loading-footer {
     animation: pulse-bg 1s infinite;
}

@keyframes pulse-bg {
     0% {
          background-color: #f1f1f1;
     }

     50% {
          background-color: #e7e7e7;
     }

     100% {
          background-color: #f1f1f1;
     }
}
</style>
