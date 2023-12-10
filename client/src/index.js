import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import "./index.css";
import App from "./App";
import Login from "./pages/Login";
import EditProfile from "./pages/EditProfile";
import CreateJob from "./pages/CreatJob";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  }, {
    path: "/login",
    element:<Login />,
  } , {
    path : "/edit",
    element : <EditProfile />
  }, {
    path : "/job",
    element : <CreateJob />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);