import Vue from "vue";
import Router from "vue-router";
import Home from "./views/Home.vue";

Vue.use(Router);

const router = new Router({
  mode: "history",
  routes: [
    {
      path: "/",
      name: "Home",
      component: Home
    },
    {
      path: "/math1",
      name: "Math1",
      component: () =>
          import(/* webpackChunkName: "Math1" */ "./views/Math1"),
    },
    {
      path: "/math2",
      name: "Math2",
      component: () =>
          import(/* webpackChunkName: "Math2" */ "./views/Math2"),
    },
    {
      path: "/math3",
      name: "Math3",
      component: () =>
          import(/* webpackChunkName: "Math3" */ "./views/Math3"),
    },
    {
      path: "/algebra",
      name: "Algebra",
      component: () =>
          import(/* webpackChunkName: "Algebra" */ "./views/Algebra"),
    },
    {
      path: "/trig",
      name: "Trig",
      component: () =>
          import(/* webpackChunkName: "Trig" */ "./views/Trig"),
    },
    {
      path: "/preCalc",
      name: "PreCalc",
      component: () =>
          import(/* webpackChunkName: "PreCalc" */ "./views/PreCalc"),
    },
    {
      path: "/calculus",
      name: "Calculus",
      component: () =>
          import(/* webpackChunkName: "Calculus" */ "./views/Calculus"),
    },
    {
      path: "/chemistry",
      name: "Chemistry",
      component: () =>
          import(/* webpackChunkName: "Chemistry" */ "./views/Chemistry"),
    },
    {
      path: "/coding",
      name: "Coding",
      component: () =>
          import(/* webpackChunkName: "Coding" */ "./views/Coding"),
    },
    {
      path: "/engineering",
      name: "Engineering",
      component: () =>
          import(/* webpackChunkName: "Engineering" */ "./views/Engineering"),
    },
    {
      path: "/contact",
      name: "Contact",
      component: () =>
          import(/* webpackChunkName: "Contact" */ "./views/Contact"),
    },
    {
      path: "/success",
      name: "Success",
      component: () =>
          import(/* webpackChunkName: "Success" */ "./views/Success"),
    },
    {
      path: "/404",
      alias: "*",
      name: "NotFound",
      component: () =>
          import(/* webpackChunkName: "NotFound" */ "./views/NotFound"),
    }
  ]
});

export default router;
