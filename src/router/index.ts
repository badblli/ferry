import { createRouter, createWebHistory } from 'vue-router'
import MainLayout from '../layouts/MainLayout.vue'
import HomeView from '../views/HomeView.vue'
import ComponentsView from '../views/ComponentsView.vue'
import { useUserStore } from '../stores/auth'

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/main',
      component: () => MainLayout,
      children: [
        {
          path: '/',
          name: 'home',
          component: () => HomeView
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
      path: '/components',
      name: 'components',
      component: ComponentsView,
      children: [
        {
          path: '/accordion',
          name: 'accordion',
          // route level code-splitting
          // this generates a separate chunk (About.[hash].js) for this route
          // which is lazy-loaded when the route is visited.
          component: () => import('../views/AccordionView.vue')
        },
        {
          path: '/carousel',
          name: 'carousel',
          component: () => import('../views/CarouselView.vue')
        },
        {
          path: '/collapse',
          name: 'collapse',
          component: () => import('../views/CollapseView.vue')
        },
        {
          path: '/dropdown',
          name: 'dropdown',
          component: () => import('../views/DropdownView.vue')
        },
        {
          path: '/input-number',
          name: 'input-number',
          component: () => import('../views/InputNumberView.vue')
        },
        {
          path: '/overlay',
          name: 'overlay',
          component: () => import('../views/OverlayView.vue')
        },
        {
          path: '/pin-input',
          name: 'pin-input',
          component: () => import('../views/PinInputView.vue')
        },
        {
          path: '/remove-element',
          name: 'remove-element',
          component: () => import('../views/RemoveElementView.vue')
        },
        {
          path: '/scrollspy',
          name: 'scrollspy',
          component: () => import('../views/ScrollspyView.vue')
        },
        {
          path: '/select',
          name: 'select',
          component: () => import('../views/SelectView.vue')
        },
        {
          path: '/stepper',
          name: 'stepper',
          component: () => import('../views/StepperView.vue')
        },
        {
          path: '/strong-password',
          name: 'strong-password',
          component: () => import('../views/StrongPasswordView.vue')
        },
        {
          path: '/tabs',
          name: 'tabs',
          component: () => import('../views/TabsView.vue')
        },
        {
          path: '/toggle-count',
          name: 'toggle-count',
          component: () => import('../views/ToggleCountView.vue')
        },
        {
          path: '/toggle-password',
          name: 'toggle-password',
          component: () => import('../views/TogglePasswordView.vue')
        },
        {
          path: '/tooltip',
          name: 'tooltip',
          component: () => import('../views/TooltipView.vue')
        }
      ]
    }
  ]
})
router.beforeEach((to, from, next) => {
  const userStore = useUserStore()
  const isAuthenticated = userStore.isAuthenticated

  // Doğrulama gerektiren sayfalara erişim kontrolü
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      // Kullanıcı giriş yapmamışsa giriş sayfasına yönlendir
      userStore.loginModal = true
      // next("/login");
    } else {
      next() // Kullanıcı giriş yapmışsa devam et
    }
  } else {
    next() // Doğrulama gerektirmeyen sayfalarda devam et
  }
})
// router.afterEach((to, from, failure) => {
//   if (!failure) {
//     setTimeout(() => {
//       HSStaticMethods.autoInit()
//     }, 100)
//   }
// })

export default router
