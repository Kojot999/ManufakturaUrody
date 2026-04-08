import React from "react";
import Layout from "./app/Layout.jsx";
import HomePage from "@pages/HomePage/index.jsx";
import OfertPage from "@pages/OfertPage/index.jsx";
import ContactPage from "@pages/ContactPage/index.jsx";
import ProjectsPage from "@pages/ProjectsPage/index.jsx";

const routes = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "/zabiegi", element: <OfertPage /> },
      { path: "/galeria", element: <ProjectsPage /> },
      { path: "/kontakt", element: <ContactPage /> },
    ],
  },
];

export default routes;
