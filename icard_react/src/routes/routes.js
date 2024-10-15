import routesAdmin from "./routes.admin";
import routesClient from "./routes.client";
import { Error404 } from "../pages";
import { BasicLayout } from "../layouts";

const routes = [
  ...routesAdmin,
  ...routesClient,
  {
    layout: BasicLayout,
    path: "*",
    component: Error404,
  },
];

export default routes;
