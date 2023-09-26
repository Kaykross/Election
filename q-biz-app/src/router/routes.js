import { router_constituencies } from "./router";

console.log(router_constituencies);

const routes = [
  {
    path: "/",
    component: () => import("pages/LoginPage.vue"),
  },
  {
    path: "/charts",
    component: () => import("components/ChartsJs.vue"),
  },
  {
    path: "/2020/parliamentary",
    component: () => import("components/Dashboards/_Parliament2020.vue"),
  },
  {
    path: "/2020-pal",
    component: () => import("src/components/Dashboards/_Parliament2020.vue"),
  },
  {
    path: "/result",
    component: () => import("src/components/Result Views/_Presidential.vue"),
  },
  {
    path: "/heatmap",
    component: () => import("components/Maps/presidential/heat_map.vue"),
  },
  {
    path: "/map",
    component: () => import("components/Graphs/GhanaMap.vue"),
  },
  {
    path: "/regions",
    component: () => import("components/RegionalResults.vue"),
  },
  {
    path: "/register",
    component: () => import("pages/RegisterPage.vue"),
  },
  {
    path: "/2020/dashboard/",
    component: () => import("layouts/AppLayout.vue"),
    children: [
      { path: "", component: () => import("pages/dashboards/_2020.vue") },
      // { path: "/2020", component: () => import("pages/dashboards/_2020.vue") },
      {
        path: "/2020/dashboard/regional",
        component: () => import("pages/result views/RegionalPresidential.vue"),
      },
      { path: "/upload", component: () => import("pages/FileUpload.vue") },
    ],
  },

  {
    path: "/ahafo",
    component: () => import("components/Constituencies/Ahafo/_Ahafo.vue"),
  },

  {
    path: "/constituencies",
    component: () => import("layouts/AppLayout.vue"),
    children: [
      {
        path: "",
        component: () =>
          import("components/Constituencies/ConstituenciesList.vue"),
      },
      ...router_constituencies,
    ],
  },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: "/:catchAll(.*)*",
    component: () => import("pages/ErrorNotFound.vue"),
  },
];

export default routes;
