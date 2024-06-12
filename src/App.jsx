import { RouterProvider, createBrowserRouter } from "react-router-dom";
import AllRoutes from "./routes/RoutesConfig";
import "./App.css";
import "./assets/css/custom.css";

import { Helmet, HelmetProvider } from "react-helmet-async";

function App() {
  const allRoutes = createBrowserRouter(AllRoutes);
  return (
    <HelmetProvider>
      <RouterProvider router={allRoutes} />
    </HelmetProvider>
  );
}

export default App;
