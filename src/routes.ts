import healthCheckRoutes from "./health-check/routes";
import searchRoutes from "./services";

export default [...healthCheckRoutes, ...searchRoutes];