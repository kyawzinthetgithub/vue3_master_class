import { createRouter, createWebHistory } from "vue-router";
import Home from "@/pages/Home.vue";
import ThreadShow from "@/pages/ThreadShow.vue";
import Forum from "@/pages/Forum.vue";
import Category from "@/pages/Category.vue";
import Profile from "@/pages/profile.vue";
import NotFound from "@/pages/NotFound.vue";
import sourceData from "@/data.json";

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "home",
      component: Home,
    },
    {
      path: "/thread/:id",
      name: "thread",
      component: ThreadShow,
      props: true,
      beforeEnter(to, from, next) {
        //check if thread exist
        const threadExist = sourceData.threads.find(
          (thread) => thread.id === to.params.id
        );
        //if exist containue
        if (threadExist) {
          return next();
        } else {
          next({
            name: "NotFound",
            params: { pathMatch: to.path.substring(1).split("/") },
            query: to.query,
            hash: to.hash,
          });
        }
      },
    },
    {
      path: "/category/:id",
      name: "Category",
      component: Category,
      props: true,
    },
    {
      path: "/forum/:id",
      name: "Froum",
      component: Forum,
      props: true,
    },
    {
      path: "/profile",
      name: "Profile",
      component: Profile,
    },
    {
      path: "/:pathMatch(.*)*",
      name: "NotFound",
      component: NotFound,
    },
  ],
});

export default router;
