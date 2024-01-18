import { createRouter, createWebHistory } from "vue-router";
import useUserStore from "@/stores/auth.js";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/main",
      component: () => import("@/layouts/MainLayout.vue"),
      children: [
        {
          path: "/",
          name: "home",
          component: () => import("@/views/HomeView.vue"),
        },
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
        {
          path: "/price",
          name: "price",
          component: () => import("@/views/TicketPrice.vue"),
        },
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
      ],
    },
  ],
});

// Global Navigation Guard
router.beforeEach((to, from, next) => {
  const userStore = useUserStore();
  const isAuthenticated = userStore.isAuthenticated;

  // Doğrulama gerektiren sayfalara erişim kontrolü
  if (to.matched.some((record) => record.meta.requiresAuth)) {
    if (!isAuthenticated) {
      // Kullanıcı giriş yapmamışsa giriş sayfasına yönlendir
      userStore.loginModal = true;
      // next("/login");
    } else {
      next(); // Kullanıcı giriş yapmışsa devam et
    }
  } else {
    next(); // Doğrulama gerektirmeyen sayfalarda devam et
  }
});

export default router;
