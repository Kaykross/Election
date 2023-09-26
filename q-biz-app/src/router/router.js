const createRoute = (path, template, folderName, _region) => [
  {
    path: `/constituencies/${path}/:name`,
    component: () =>
      import(`src/components/Constituencies/${folderName}/${template}`),
  },
  {
    path: `/constituencies/${path}`,
    component: () =>
      import(`components/Constituencies/${folderName}/${_region}`),
  },
];

const router_constituencies = [
  ...createRoute("ahafo", "AhafoRegion.vue", "Ahafo", "_Ahafo.vue"),
  ...createRoute("ashanti", "AshantiRegion.vue", "Ashanti", "_Ashanti.vue"),
  ...createRoute("bono", "BonoRegion.vue", "Bono", "_Bono.vue"),
  ...createRoute(
    "bono-east",
    "BonoEastRegion.vue",
    "Bono East",
    "_BonoEast.vue"
  ),
  ...createRoute("central", "CentralRegion.vue", "Central", "_Central.vue"),
  ...createRoute("eastern", "EasternRegion.vue", "Eastern", "_Eastern.vue"),
  ...createRoute(
    "greater-accra",
    "GreaterAccraRegion.vue",
    "Greater Accra",
    "_GreaterAccra.vue"
  ),
  ...createRoute(
    "north-east",
    "NorthEastRegion.vue",
    "North East",
    "_NorthEast.vue"
  ),
  ...createRoute("northern", "NorthernRegion.vue", "Northern", "_Northern.vue"),
  ...createRoute("oti", "OtiRegion.vue", "Oti", "_Oti.vue"),
  ...createRoute("savannah", "SavannahRegion.vue", "Savannah", "_Savannah.vue"),
  ...createRoute(
    "upper-east",
    "UpperEastRegion.vue",
    "Upper East",
    "_UpperEast.vue"
  ),
  ...createRoute(
    "upper-west",
    "UpperWestRegion.vue",
    "Upper West",
    "_UpperWest.vue"
  ),
  ...createRoute("volta", "VoltaRegion.vue", "Volta", "_Volta.vue"),
  ...createRoute("western", "WesternRegion.vue", "Western", "_Western.vue"),
  ...createRoute(
    "western-north",
    "WesternNorthRegion.vue",
    "Western North",
    "_WesternNorth.vue"
  ),
];

const ahf = createRoute("ahafo", "AhafoRegion.vue", "Ahafo", "_Ahafo.vue");

// const ahafo = [
//   {
//     path: "/constituencies/ahafo/:name",
//     component: () =>
//       import("src/components/Constituencies/Ahafo/AhafoRegion.vue"),
//   },
//   {
//     path: "/constituencies/ahafo",
//     component: () => import("components/Constituencies/Ahafo/_Ahafo.vue"),
//   },
// ];

export { router_constituencies };
