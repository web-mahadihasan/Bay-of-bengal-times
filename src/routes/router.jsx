import { createBrowserRouter, Navigate } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import CategoryCard from "../pages/CategoryCard";
import LoginPage from "../pages/LoginPage";
import Register from "../pages/Register";
import AuthLayout from "../layouts/AuthLayout";
import NewsDetails from "../pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";


const Router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout/>,
        loader: () => fetch("/demoNews.json"),
        children: [
            {
                path: "",
                element: <Navigate to={"/category/01"}></Navigate>
            },
            {
                path: "/category/:id",
                element: <CategoryCard/>,
                loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`)
            }
        ]
    },
    {
        path: "/auth",
        element: <AuthLayout/>,
        children: [
            {
                path: "/auth",
                element: <LoginPage/>
            },
            {
                path: "/auth/login",
                element: <LoginPage/>
            },
            {
                path: "/auth/register",
                element: <Register/>
            }
        ]
    },
    {
        path: "/news/:id",
        element: <PrivateRoute><NewsDetails/></PrivateRoute>,
        loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`)
    }
])

export default Router;