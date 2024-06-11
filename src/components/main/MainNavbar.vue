<template>
     <div v-if="mainNavbar.links?.length > 0" ref="menu">
          <nav class="navbar centered-w w-full h-[100px] bg-white flex justify-between items-center z-50 lg:px-[100px] px-2 md:px-16 sm:px-8">
               <div class="hs-dropdown relative inline-flex md:hidden">
                    <!-- <button id="hs-dropdown-slideup-animation block md:hidden" type="button" class="hs-dropdown-toggle py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none">
                         <IconRwpNavbar />
                    </button> -->
                    <!-- <img :src="getImage(imageURL)" alt="Image" class="w-full h-full object-cover" /> -->
                    <div class="hs-dropdown-menu w-72 p-12 duration hs-dropdown-open:opacity-100 hidden z-10 transition-[margin,opacity] opacity-0 duration-300 mt-2 min-w-[15rem] bg-white shadow-md rounded-lg" aria-labelledby="hs-dropdsown-slideup-animation">
                         <div v-for="(item, index) in mainNavbar.links" :key="index">
                              <router-link :to="{ path: item.href }" class="flex cursor-pointer items-center gap-x-3.5 py-2 pr-6 rounded-lg text-md text-gray-800 hover:bg-gray-100 focus:outline-none" href="#">
                                   {{ item.label }}
                              </router-link>
                         </div>
                         <a class="flex items-center gap-x-3.5 py-2 pr-6 rounded-lg text-md text-gray-800 hover:bg-gray-100 focus:outline-none" href="#" data-hs-overlay="#hs-medium-modal">
                              {{ mainNavbar.LoginTitle }}
                         </a>
                    </div>
               </div>
               <!-- <div className="hidden md:flex">
            <router-link v-for="(item, index) in navBarItems" :key="index" :to="item.to"
                class="flex flex-row cursor-pointer items-center gap-x-3.5 py-2 pr-3 rounded-lg text-md text-gray-800 focus:outline-none">
                {{ item.text }}
            </router-link>
        </div> -->
               <div ref="dropdown" class="flex flex-row items-center">
                    <div class="relative">
                         <button @click="toggleDropdown" type="button" :class="{ 'bg-white': !isMeanderLayout }" class="w-[50px] h-[50px] bg-slate-200 rounded-full flex flex-row justify-center items-center cursor-pointer">
                              <IconRwpNavbar2 />
                         </button>
                         <transition name="dropdown">
                              <div v-show="isOpen" id="lang" class="absolute z-50 top-12 w-64 bg-white rounded-xl border transition-[opacity,margin] duration-300 mt-2 min-w-[15rem] p-7">
                                   <router-link v-for="(item, index) in mainNavbar.hamburgerMenu" :key="index" @click="setRedirect(item)" :to="redirect(item)" class="text-sm font-semibold flex flex-col my-1 hover:bg-slate-100 p-2 rounded-xl">
                                        {{ item.label }}
                                   </router-link>
                              </div>
                         </transition>
                    </div>

                    <div v-for="(item, index) in mainNavbar.links" :key="index">
                         <router-link :to="{ path: item.href }" class="hidden ml-4 md:flex flex-row cursor-pointer items-center gap-x-3.5 py-2 pr-3 rounded-lg text-md text-gray-800 focus:outline-none">
                              {{ item.label }}
                         </router-link>
                    </div>
               </div>
               <div class="flex flex-row justify-center items-center cursor-pointer lg:mr-16 mr-0" @click="navigateToHome">
                    <img :src="getImage(imageURL)" alt="Image" class="w-40 h-12 object-cover" />
                    <div v-if="!isMeanderLayout">
                         <div class="ml-[10px]">
                              <span class="text-black text-xl md:text-2xl font-bold font-display tracking-wide">{{ mainNavbar.NavTitle }}</span>
                              <span class="text-black text-xl md:text-2xl font-thin font-display tracking-wide">{{ mainNavbar.SecNavTitle }}</span>
                         </div>
                    </div>
               </div>
               <div>
                    <div v-if="isAuthenticated" class="text-center cursor-pointer hidden md:flex">
                         <button @click="showModal" type="button" class="text-black text-sm md:text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight mr-1" data-hs-overlay="#hs-medium-modal">{{ userName }}</button>
                         <IconChevronDown />
                    </div>
                    <div v-else class="text-center cursor-pointer hidden md:flex">
                         <button @click="showModal" type="button" class="text-black text-sm md:text-base font-semibold font-['Plus Jakarta Sans'] tracking-tight mr-1" data-hs-overlay="#hs-medium-modal">{{ mainNavbar.LoginTitle }}</button>
                         <IconChevronDown />
                    </div>

                    <Teleport to="#target">
                         <Transition name="custom-classes">
                              <newSıgnInModal v-if="showModalState" @closeModal="handleCloseModal" />
                         </Transition>
                    </Teleport>
               </div>
          </nav>
          <!-- <div class="w-full h-[1px] border border-gray-200"></div> -->
     </div>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import SignInModal from '../advanced/SignInModal.vue'
import IconChevronDown from '../icons/IconChevronDown.vue'
import IconRwpNavbar2 from '../icons/IconRwpNavbar2.vue'
import IconMainSamosa from '../icons/IconMainSamosa.vue'
import { fetchData } from '@/utils/globalHelper'
import { useI18n } from 'vue-i18n'
import newSıgnInModal from '../advanced/newSıgnInModal.vue'
const { locale } = useI18n()
import { computed, Teleport, ref, onMounted, onBeforeUnmount, watch } from 'vue'
import { useUserStore } from '@/stores/auth'
import { useModal } from '../../compasable/useModal'
import { getImage } from '@/utils/globalHelper'
import { useChannel } from '../../stores/channel'

const useChannelStore = useChannel()
const imageURL = ref('')
const menu = ref(null)
const dropdown = ref(null)

const { showModalState, showModal, closeModal } = useModal()
const userStore = useUserStore()
const handleCloseModal = () => {
     closeModal() // Call the closeModal function when the modal is closed
}

const handleClickOutside = (event: MouseEvent) => {
     if (menu.value && !menu.value.contains(event.target) && dropdown.value && !dropdown.value.contains(event.target)) {
          isOpen.value = false
     }
}

onMounted(() => {
     document.addEventListener('click', handleClickOutside)
})

onBeforeUnmount(() => {
     document.removeEventListener('click', handleClickOutside)
})

const props = defineProps({
     isMeanderLayout: {
          type: Boolean,
          default: false
     }
})

const isOpen = ref(false)
const toggleDropdown = () => {
     isOpen.value = !isOpen.value
}

let isAuthenticated = computed(() => userStore.isAuthenticated)
let userName = computed(() => userStore.user?.EmailAddress)
console.log(isAuthenticated.value, 'isAuthenticated')

interface Links {
     href: string
     id: number
     isExternal: boolean
     label: string
     target: string
}

interface Logo {
     id: number
     name: string
     alternativeText: null
     caption: null
     width: number
     height: number
     formats: null
     hash: string
     ext: string
     mime: string
     size: number
     url: string
     previewUrl: null
     provider: string
     provider_metadata: null
     createdAt: string
     updatedAt: string
}

interface MainNavbarData {
     LoginTitle: string
     Logo: Logo
     NavTitle: string
     id: number
     links: Links[]
}

const mainNavbar = ref<MainNavbarData | any>([])

const getNavbar = async () => {
     try {
          let filters = {
               pageName: 'Home'
          }
          const res = await fetchData('pages', locale.value.toLowerCase(), filters)
          // console.log(locale.value.toLowerCase(), 'locale value to lowercase main navbar');
          if (res) {
               let data = res.data[0].layout
               // console.log(data, 'im in mainNavbar compos')
               mainNavbar.value = data.find((x: any) => x.__component === 'global.navbar')
               console.log(mainNavbar.value.Logo.url, 'global.navbarnavbarnavbarnavbarnavbarnavbarnavbarnavbar')
               imageURL.value = mainNavbar.value.Logo.url
               console.log(imageURL.value, 'global.navbarnavbarnavbarnavbarnav')
          }
     } catch (error) {
          return
     }
}
const setRedirect = (item: any) => {
     let sc = item.href.replace('/', '')
     useChannelStore.setSubSaleChannel(sc, item.label)
}

const redirect = (item: Links) => {
     console.log('item', item.href.replace('/', ''))
     let sc = item.href.replace('/', '')

     return {
          name: 'island',
          params: {
               name: sc.toLocaleLowerCase()
          }
     }
}
onMounted(() => {
     getNavbar()
})

watch(locale, (newLocale, oldLocale) => {
     if (newLocale !== oldLocale) {
          console.log(newLocale, 'new', oldLocale, 'old')
          getNavbar()
     }
})

const router = useRouter()
const navigateToHome = () => {
     router.push('/')
}
</script>

<style scoped>
.loading-navbar {
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

/* we will explain what these classes do next! */

.custom-classes-enter-active,
.custom-classes-leave-active {
     transition: opacity 0.5s ease;
}

.custom-classes-enter-from,
.custom-classes-leave-to {
     opacity: 0;
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

.dropdown-enter-active,
.dropdown-leave-active {
     transition:
          opacity 0.3s,
          transform 0.3s;
}

.dropdown-enter-from,
.dropdown-leave-to {
     opacity: 0;
     transform: translateY(-10px);
}

.dropdown-enter-to,
.dropdown-leave-from {
     opacity: 1;
     transform: translateY(0);
}
</style>
