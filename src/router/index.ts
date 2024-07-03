import { createRouter, createWebHistory } from 'vue-router'
import { useUserStore } from '../stores/auth'

import { type IStaticMethods } from 'preline/preline'
declare global {
     interface Window {
          HSStaticMethods: IStaticMethods
     }
}

const router = createRouter({
     history: createWebHistory(import.meta.env.BASE_URL),
     routes: [
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
                         component: () => import('@/views/HomeView/HomeView.vue')
                    },
                    {
                         path: '/price',
                         name: 'price',
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
                         name: 'journey',
                         component: () => import('../views/JourneyView.vue')
                    },
                    {
                         path: '/tickets',
                         name: 'tickets',
                         component: () => import('../views/FerryTicketListingViews/OneWayListView.vue')
                    },
                    {
                         path: '/tickets/passenger',
                         name: 'passenger',
                         component: () => import('../views/PassengerPaymentViews/PassengerDetails.vue')
                    },
                    // {
                    //   path: '/passenger',
                    //   name: 'passenger',
                    //   component: () => import('../views/PassengerPaymentViews/PassengerDetails.vue')
                    // },
                    {
                         path: '/payment',
                         name: 'payment',
                         component: () => import('../views/PassengerPaymentViews/PaymentStep.vue')
                    },
                    {
                         path: '/:name',
                         name: 'island',
                         component: () => import('../views/SubViews/SubHomeView.vue'),
                         props: true
                    }
                    // {
                    //   path: "/about",
                    //   name: "about",
                    //   component: () => import("@/views/AboutView.vue"),
                    // },
                    // {
                    //   path: "/support",
                    //   name: "support",
                    //   component: () => import("@/views/SupportView.vue"),
                    // },
                    // {
                    //   path: "/campaigns",
                    //   name: "campaigns",
                    //   component: () => import("@/views/CampaignsView.vue"),
                    // },

                    // {
                    //   path: "/schedule",
                    //   name: "schedule",
                    //   component: () => import("@/views/ScheduleView.vue"),
                    // },
                    // {
                    //   path: "/account",
                    //   name: "account",
                    //   component: () => import("@/views/ProfileView.vue"),
                    //   children: [
                    //     {
                    //       path: "profile",
                    //       name: "profile",
                    //       component: () => import("@/components/Profile.vue"),
                    //       meta: { requiresAuth: true },
                    //     },
                    //     {
                    //       path: "reservations",
                    //       name: "reservations",
                    //       component: () => import("@/components/Reservations.vue"),
                    //       meta: { requiresAuth: true },
                    //     },
                    //     {
                    //       path: "settings",
                    //       name: "settings",
                    //       component: () => import("@/components/Settings.vue"),
                    //       meta: { requiresAuth: true },
                    //     },
                    //     {
                    //       path: "notifications",
                    //       name: "notifications",
                    //       component: () => import("@/components/Notifications.vue"),
                    //       meta: { requiresAuth: true },
                    //     },
                    //   ],
                    // },
               ]
          },
          {
               path: '/:pathMatch(.*)*',
               name: 'not-found',
               component: () => import('../layouts/ErrorLayout.vue')
          }
     ]
})
// router.beforeEach((to, from, next) => {
//   const userStore = useUserStore()
//   const isAuthenticated = userStore.isAuthenticated

//   // Doğrulama gerektiren sayfalara erişim kontrolü
//   if (to.matched.some((record) => record.meta.requiresAuth)) {
//     if (!isAuthenticated) {
//       // Kullanıcı giriş yapmamışsa giriş sayfasına yönlendir
//       userStore.loginModal = true
//       // next("/login");
//     } else {
//       next() // Kullanıcı giriş yapmışsa devam et
//     }
//   } else {
//     next() // Doğrulama gerektirmeyen sayfalarda devam et
//   }
// })

router.afterEach((to, from, failure) => {
     if (!failure) {
          setTimeout(() => {
               console.log(window)
               window.HSStaticMethods.autoInit()
          }, 10)
     }
})

export default router
