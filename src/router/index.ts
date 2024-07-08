import { createRouter, createWebHistory } from 'vue-router'
import axios from 'axios'
import { ref, watch, computed } from 'vue';
import { useRouterStore } from '../stores/router'

const homeTitle = ref(null);
const priceTitle = ref(null);
const journeyTitle = ref(null);
const ticketTitle = ref(null);
const passengerTitle = ref(null);
const routeChanges = ref([]);
 
import { type IStaticMethods } from 'preline/preline'
import value from '../../globals';
declare global {
     interface Window {
          HSStaticMethods: IStaticMethods
     }
}

// localStorage'dan dil kodunu çek
const selectedLanguage = JSON.parse(localStorage.getItem('selectedLanguage') || '{"code":"tr"}')
console.log(selectedLanguage, 'selectedLanguage')
const languageCode = selectedLanguage.code.toLowerCase()

const routes = [
     {
          path: '/test',
          name: 'components',
          component: () => import('@/views/ComponentsTest.vue')
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
                         id: 1,
                    },
                    component: () => import('@/views/HomeView/HomeView.vue')
               },
               {
                    path: '/price',
                    name: 'price',
                    meta: {
                         title: priceTitle.value,
                         id: 2,
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
                    component: () => import('@/views/CampaingToursView.vue')
               },
               {
                    path: '/journey',
                    meta: {
                         title: journeyTitle.value,
                         id: 3,
                    },
                    name: 'journey',
                    component: () => import('../views/JourneyView.vue')
               },
               {
                    path: '/tickets',
                    id: 3,
                    name: 'tickets',
                    meta: {
                         title: ticketTitle.value,
                         id: 4,
                    },
                    component: () => import('../views/FerryTicketListingViews/OneWayListView.vue')
               },
               {
                    path: '/tickets/passenger',
                    meta: passengerTitle.value,
                    id: 4,
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
                    props: true
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
          const response = await axios.get(`https://testmeandercms.badblli.dev/api/pages?populate=deep&locale=${languageCode}`);
          const pages = response.data.data;
          console.log(pages, 'pages');

          // "Home" sayfasının pageTitle değerini almak
          const homePage = pages.find(page => page.pageName === 'Home');
          const pricePage = pages.find(page => page.pageName === 'Price');
          const journeyPage = pages.find(page => page.pageName === 'Journey');
          const ticketPage = pages.find(page => page.pageName === 'Ticket');
          const passengerPage = pages.find(page => page.pageName === 'Passenger');
          homeTitle.value = homePage.pageTitle
          priceTitle.value = pricePage.pageTitle
          journeyTitle.value = journeyPage.pageTitle
          ticketTitle.value = ticketPage.pageTitle
          passengerTitle.value = passengerPage.pageTitle
          // const homePageTitle = homePage ? homePage.pageTitle : 'Default Home Title';
          // Her rota için pageTitle verisini belirleme
          routes.forEach(route => {
               if (!route.meta) {
                    route.meta = {};
               }
               const pageData = pages.find(page => page.pageName === route.name);
               console.log(pageData, 'pageData');
               if (pageData && pageData.pageTitle) {
                    route.meta.pageTitle = pageData.pageTitle;
               }
          });
     } catch (error) {
          console.error('Error fetching page titles:', error);
     }
}

// Dinamik olarak Strapi'den pageTitle verisini almak için beforeEach kullanabiliriz
router.beforeEach(async (to, from, next) => {
     await fetchPageTitles()
     next()
})

router.afterEach((to, from, failure) => {
     console.log(to, 'tototototo')
     if (!failure) {
         setTimeout(() => {
             console.log(window)
             window.HSStaticMethods.autoInit()
         }, 10)
     }
     // Dinamik olarak sayfa başlığını güncelle
     document.title = to.meta.pageTitle || 'Default Title'
    
     const routerStore = useRouterStore();
     // Route değişikliklerini izlemek ve diziye atamak
     routerStore.addRouteChange({ to: to.fullPath, meta: to.meta, id: to.id });
     const routerChange = computed(() => routerStore.getRouterChange);
     console.log(routerChange, 'routerChange');
     console.log(routerStore.routerChange, 'routeChange store');
     console.log(routeChanges, 'routeChanges')
     console.log(routerStore, 'routerStore');
 })

watch(routeChanges, (newChanges) => {
     console.log('Route changes:', newChanges);
}, { deep: true });

export default router