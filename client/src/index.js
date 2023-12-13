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
import Jobs from "./pages/Jobs";
import JobCandidates from "./pages/JobCandidates";
import Signup from "./pages/Signup";

const router = createBrowserRouter([
  {
    path: "/",
    element:<App />,
  }, {
    path: "/login",
    element:<Login />,
  } , {
    path: "/signup",
    element:<Signup />,
  } ,{
    path : "/edit",
    element : <EditProfile />
  }, {
    path : "/craetejob",
    element : <CreateJob />
  },{
    path: "/myjobs",
    element : <Jobs />
  },{
    path: "/jobcandidates",
    element : <JobCandidates />
  }
]);

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>
);