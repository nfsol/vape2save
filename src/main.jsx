import React from "react";
import ReactDOM from "react-dom/client";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import { MoreInfo } from "./routes/MoreInfo";
import { Calculator } from "./routes/Calculator";
import { Results } from "./routes/Results";
import { Welcome } from "./routes/Welcome";
import { Monk } from "./routes/Monk";

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Welcome />,
      },
      {
        path: "calc",
        element: <Calculator />,
      },
      {
        path: "info",
        element: <MoreInfo />,
      }, {
        path: "results/:perPack/:perWeek/:juice",
        element: <Results />,
      },
      {
        path: "monk",
        element: <Monk />,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);
