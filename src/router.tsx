import { createBrowserRouter } from "react-router-dom";
import { RootLayout } from "./layout";
import { HomePage } from "./pages";
import { MainRedirect } from "./pages/MainRedirect";

export default createBrowserRouter([{
    path: "/",
    element: <RootLayout />,
    children: [{
        index: true, 
        element: <MainRedirect />
    }, {
        path: "home/*",
        element: <HomePage />
    }],
    
}])