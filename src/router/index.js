import Vue from "vue";
import Router from "vue-router";

Vue.use(Router);

const routerOptions = [
  { path: "/datacomponents", component: "DataComponents" },
  { path: "/dataclasses", component: "DataClasses" },
  { path: "/", component: "Home" },
];

const routes = routerOptions.map(route => {
  return {
    ...route,
    component: () => import(`../components/${route.component}.vue`)
  };
});

export default new Router({
  routes
});
