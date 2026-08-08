import { createBrowserRouter } from "react-router";
import { Layout } from "../components/Layout";
import { Home } from '../pages/Home'
import { Simon } from "../pages/Simon";


export const router = createBrowserRouter([
    {
        path: "/",
        Component: Layout,
        children: [
            { index: true, Component: Home },
            { path: "simon", Component: Simon }
        ]
    }
])