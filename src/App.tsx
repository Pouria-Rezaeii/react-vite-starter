import {BrowserRouter, useRoutes} from "react-router-dom";
import Layout from "./components/layout";
import Home from "./pages/Home";

export default function App() {
   return (
      <BrowserRouter>
         <Router />
      </BrowserRouter>
   );
}

function Router() {
   return useRoutes([
      {
         path: "/",
         element: <Layout />,
         children: [{path: "/", element: <Home />}],
      },
      {path: "*", element: <div>404</div>},
   ]);
}
