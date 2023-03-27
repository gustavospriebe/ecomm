import { Products } from "./pages/Products";
import { Product } from "./pages/Product";
import { Home } from "./pages/Home";
import { Footer } from "./components/Footer";
import { Navbar } from "./components/Navbar";
import { createBrowserRouter, Outlet, RouterProvider } from "react-router-dom";
import GlobalStyle from "./styles/global";

const Layout = () => {
    return (
        <div>
            <Navbar />
            <Outlet />
            <Footer />
        </div>
    );
};

const router = createBrowserRouter([
    {
        path: "/",
        element: <Layout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/products/:id",
                element: <Products />,
            },
            {
                path: "/product/:id",
                element: <Product />,
            },
        ],
    },
]);

export function App() {
    return (
        <div className="App">
            <GlobalStyle />
            <RouterProvider router={router} />
        </div>
    );
}
