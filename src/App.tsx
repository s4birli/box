import React from "react";
import ReactDOM from "react-dom/client";

//global styles
import "./globals.scss";

/* Routes */
import { RouterProvider } from "react-router-dom";
import { router } from "./routes/routes";

const gekkoElement = document.getElementById("gekko");

if (gekkoElement) {
  ReactDOM.createRoot(gekkoElement).render(
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}
