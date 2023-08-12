import { Navigate, createBrowserRouter } from "react-router-dom";
import App from "../App";
import { Error404 } from "../components/pages/Error404";
import { Page } from "../components/pages/Page";
import { dataState } from "../dataState/dataState";
import { ProtectedRoute } from "./ProtectedRoute";
import { ProtectedPage } from "../components/pages/ProtectedPage";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <App />,
        errorElement: <Error404 />,
        children: [
            {
                path: "/page/:id",
                element: (
                    <Page pages={dataState.pages} />
                )
            },
            {
                path: "/",
                element: (
                    <Navigate to={"/page/0"} />
                )
            },
            {
                path: "/proptected",
                element: (
                    <ProtectedRoute>
                        <ProtectedPage />
                    </ProtectedRoute>
                )
            }
        ]
    }
])