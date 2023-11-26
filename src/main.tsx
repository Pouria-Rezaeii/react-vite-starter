import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import {createBrowserRouter, RouterProvider} from "react-router-dom";
import Home from "./pages/Home.tsx";
import Layout from "./components/layout";
import App from "./App.tsx";

const routes = [{path: "/", element: <Home />}];

const router = createBrowserRouter(
   routes.map(({path, element}) => ({
      path,
      element: (
         <App>
            <Layout>{element}</Layout>
         </App>
      ),
   }))
);

ReactDOM.createRoot(document.getElementById("root")!).render(
   <React.StrictMode>
      <RouterProvider router={router} />
   </React.StrictMode>
);
