import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import "./index.css";
import App from "./App.jsx";
import ItemPage from "./components/ItemPage";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      // {
      //   path: "login/",
      //   element: <LoginPage />,
      // },
      {
        path: "item/",
        element: <ItemPage />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
