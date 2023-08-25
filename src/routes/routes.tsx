import { createBrowserRouter } from "react-router-dom";
import { Link } from "react-router-dom";
import React, { Suspense } from "react";

/* Pages */
import Home from "@pages/Home";

export const router = createBrowserRouter([
  {
    path: "/vault",
    element: <Home />,
    handle: {
      crumb: () => <Link to="/">Home</Link>,
    },
  },
  {
    path: "/vault/:id",
    element: <Home />,
    handle: {
      crumb: () => <Link to="/">Home</Link>,
    },
  },
]);
