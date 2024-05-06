import React from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider, createBrowserRouter } from "react-router-dom";

// import App from "./App.tsx";
import "./index.css";
import Registration from "./pages/Registration/index.tsx";
import TableData from "./pages/TableData/index.tsx";
import { FormDataProvider } from "./components/context/TableDataContext.tsx";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Registration />,
  },
  {
    path: "/data",
    element: <TableData />,
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <FormDataProvider>
      <RouterProvider router={router} />
    </FormDataProvider>
  </React.StrictMode>
);
