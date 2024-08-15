import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import { ref, computed, watch } from 'vue'
import { useRouterStore } from '../stores/router'
import { type IStaticMethods } from 'preline/preline'

const homeTitle = ref(null)
const priceTitle = ref(null)
const journeyTitle = ref(null)
const ticketTitle = ref(null)
const passengerTitle = ref(null)

declare global {
     interface Window {
          HSStaticMethods: IStaticMethods
     }
}

// localStorage'dan dil kodunu çek
const selectedLanguage = JSON.parse(localStorage.getItem('selectedLanguage'))
const languageCode = selectedLanguage ? selectedLanguage.code.toLowerCase() : 'TR'
// console.log(languageCode, 'langlang')

const routes = [
     {
          path: '/test',
          name: 'components',
          component: () => import('@/views/ComponentsTest.vue')
     },
     {
          path: '/threedsecure',
          name: 'threedsecure',
          component: () => import('../views/PassengerPaymentViews/components/ThreeDSecure.vue')
     },
     {
          path: '/paymentresult',
          name: 'paymentresult',
          component: () => import('../views/PassengerPaymentViews/components/PaymentResult.vue')
     },
     {
          path: '/main',
          component: () => import('../layouts/MainLayout.vue'),
          children: [
               {
                    path: '/',
                    name: 'home',
                    meta: {
                         title: homeTitle.value,
                         id: 1
                    },
                    component: () => import('@/views/HomeView/HomeView.vue')
               },
               {
                    path: '/price',
                    name: 'price',
                    meta: {
                         title: priceTitle.value,
                         id: 2
                    },
                    component: () => import('@/views/TicketPrice.vue')
               },
               {
                    path: '/reservation',
                    name: 'reservation',
                    component: () => import('@/views/MyReservation.vue')
               },
               {
                    path: '/contact',
                    name: 'contact',
                    component: () => import('@/views/ContactView.vue')
               },
               {
                    path: '/general',
                    name: 'general',
                    component: () => import('@/views/GeneralPage.vue')
               },
               {
                    path: '/blog',
                    name: 'blog',
                    component: () => import('@/views/BlogView.vue')
               },
               {
                    path: '/blog/:name',
                    name: 'uniqueBlogPost',
                    component: () => import('@/views/BlogPostView.vue')
               },
               {
                    path: '/faq',
                    name: 'faq',
                    component: () => import('@/views/FAQView.vue')
               },
               {
                    path: '/deals',
                    name: 'deals',
                    component: () => import('@/views/DealsView.vue')
               },
               {
                    path: '/campaign',
                    name: 'campaign',
                    component: () => import('@/views/CampaignView.vue')
               },
               {
                    path: '/tours',
                    name: 'tours',
                    component: () => import('@/views/ToursView.vue')
               },
               {
                    path: '/tours/:id',
                    name: 'tour',
                    component: () => import('@/views/ToursDetailView.vue')
               },
               {
                    path: '/journey',
                    meta: [
                         {
                              title: journeyTitle.value,
                              id: 3,
                         },
                    ],
                    name: 'journey',
                    component: () => import('../views/JourneyView.vue')
               },
               {
                    path: '/tickets',
                    id: 3,
                    name: 'tickets',
                    meta: {
                         title: ticketTitle.value,
                         id: 4
                    },
                    component: () => import('../views/FerryTicketListingViews/OneWayListView.vue')
               },
               {
                    path: '/tickets/passenger',
                    meta: {
                         title: passengerTitle.value,
                         id: 4
                    },
                    name: 'passenger',
                    component: () => import('../views/PassengerPaymentViews/PassengerDetails.vue')
               },
               {
                    path: '/payment',
                    name: 'payment',
                    component: () => import('../views/PassengerPaymentViews/PaymentStep.vue')
               },
               {
                    path: '/paymentsuccess',
                    name: 'paymentsuccess',
                    component: () => import('../views/PassengerPaymentViews/PaymentSuccess.vue')
               },
               {
                    path: '/:name',
                    name: 'island',
                    component: () => import('../views/SubViews/SubHomeView.vue'),
                    props: (route: any) => ({ name: route.params.name })
               },
               {
                    path: '/:slug',
                    name: 'term',
                    component: () => import('../views/DynamicPages/TermOfUse.vue'),
                    props: (route: any) => ({ slug: route.params.slug })
               }
          ]
     },
     {
          path: '/:pathMatch(.*)*',
          name: 'not-found',
          component: () => import('../layouts/ErrorLayout.vue')
     }
]

const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes
})

// Strapi API'sinden pageTitle verilerini çek ve rotalara ekle
async function fetchPageTitles() {
     try {
          const response = await axios.get(`https://testmeandercms.badblli.dev/api/pages?populate=deep&locale=${languageCode}`)
          console.log(languageCode, 'languageCode')
          const pages = response.data.data

          // Sayfaların pageTitle değerlerini ref değişkenlerine ata
          const homePage = pages.find((page) => page.pageName.toLowerCase() === 'home')
          const pricePage = pages.find((page) => page.pageName.toLowerCase() === 'price')
          const journeyPage = pages.find((page) => page.pageName.toLowerCase() === 'journey')
          const ticketPage = pages.find((page) => page.pageName.toLowerCase() === 'ticket')
          const passengerPage = pages.find((page) => page.pageName.toLowerCase() === 'passenger')

          homeTitle.value = homePage ? homePage.pageTitle : 'Home'
          priceTitle.value = pricePage ? pricePage.pageTitle : 'Price'
          journeyTitle.value = journeyPage ? journeyPage.pageTitle : 'Journey'
          ticketTitle.value = ticketPage ? ticketPage.pageTitle : 'Ticket'
          passengerTitle.value = passengerPage ? passengerPage.pageTitle : 'Passenger'
     } catch (error) {
          console.error('Error fetching page titles:', error)
     }
}

// Dinamik olarak Strapi'den pageTitle verisini almak için beforeEach kullanabiliriz.
router.beforeEach(async (to, from, next) => {
     await fetchPageTitles()
     if (to.meta) {
          if (to.name === 'home') to.meta.title = homeTitle.value
          if (to.name === 'price') to.meta.title = priceTitle.value
          if (to.name === 'journey') to.meta.title = journeyTitle.value
          if (to.name === 'tickets') to.meta.title = ticketTitle.value
          if (to.name === 'passenger') to.meta.title = passengerTitle.value
     }
     next()
})

router.afterEach((to, from, failure) => {
     if (!failure) {
          setTimeout(() => {
               window.HSStaticMethods.autoInit()
          }, 10)
     }

     document.title = to.meta.title || 'Meander Feribot'

     const routerStore = useRouterStore()
     routerStore.addRouteChange({ to: to.fullPath, meta: to.meta })
     const routerChange = computed(() => routerStore.getRouterChange)
     console.log(routerChange, 'routerChange')
})

watch(
     selectedLanguage,
     async () => {
          await fetchPageTitles()
          const routerStore = useRouterStore()
          console.log(selectedLanguage, 'selected language2')
          routerStore.updateLanguage(selectedLanguage) // Store'u güncelle
          const updatedStore = routerStore.getRouterChange
          console.log(updatedStore, 'updated store')
     },
     { deep: true }
)

export default router
