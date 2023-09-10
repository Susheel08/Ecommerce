import ProductCards from "../Components/ProductCards";
import ProductCards2 from "../Components/ProductCards2";
import ProductDetails from "../Components/ProductDetails";
import Products from "../Components/Products";
import Layout from "../Layout";
import AboutUs from "../Pages/AboutUs";
import Home from "../Pages/Home";

export const routes = [
  {
    id: 1,
    path: "/",
    element: <Layout component={<Home />} />,
  },
  {
    id: 2,
    path: "/about-us",
    element: <Layout component={<AboutUs />} />,
  },
  {
    id: 3,
    path: "/products",
    element: <Layout component={<Products />} />,
  },
  {
    id: 4,
    path: "/productcards",
    element: <Layout component={<ProductCards />} />,
  },
  {
    id: 5,
    path: "/product/:id/:name/:price/:image/",
    element: <Layout component={<ProductDetails />} />,
  },
  {
    id: 6,
    path: "/productcards2",
    element: <Layout component={<ProductCards2 />} />,
  },
];
