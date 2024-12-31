import React from "react";
import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import Home from "../pages/Home/Home";
import Service from "../pages/Service";
import About from "../pages/About";
import Login from "../commponent/Login";
import Register from "../commponent/Register";


const Router = createBrowserRouter(
    [
        {
            path: "/",
            element:<App />,
            children: [
                {
                    path: "/",
                    element: <Home />
                },
                {
                    path: "/home",
                    element: <Home />
                },
                {
                    path: "/about",
                    element: <About />
                },
                {
                    path: "/service",
                    element: <Service />
                },

            ]
        },
        {
            path:"/login",
            element:<Login />
        },
        {
            path:"/register",
            element:<Register />
        }
    ]
);

export default Router;