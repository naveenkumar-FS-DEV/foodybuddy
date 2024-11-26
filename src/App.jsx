import { createRoot } from "react-dom/client";
import "./index.css";
import "./App.css";
import Body from "./Components/Body";
import Navbar from "./Components/Navbar";
import ErrorPage from "./Components/ErrorPage";
import RestaurantMenu from "./Components/RestaurantMenu";
import { createBrowserRouter, RouterProvider, Outlet } from "react-router-dom";
import { lazy, Suspense } from "react";
import Spinner from "./Components/Spinner";
import CartPage from "./Components/CartPage";
import { Provider } from "react-redux";
import { appStore } from "./Utils/Store";

// codesplitting:
let AboutUs = lazy(() => import("./Components/AboutUs"));
let Gallery = lazy(() => import("./Components/Gallery"));


const App = () => {
  return (
    <Provider store={appStore}>
    <div>
        <Navbar />
        <Outlet />
    </div>
    </Provider>
  );
};

let appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Body />,
      },
      {
        path: "/about",
        element: (
          <Suspense fallback={<Spinner />}>
            <AboutUs />
          </Suspense>
        ),
      },
      {
        path: "/gallery",
        element: (
          <Suspense><Gallery /></Suspense>
        )
      },
      {
        path: "/cart",
        element: <CartPage />,
      },
      {
        path: "/restaurants/:resId",
        element: <RestaurantMenu />,
      },
    ],
  },
]);

createRoot(document.getElementById("root")).render(
  <RouterProvider router={appRouter} />
);

export default App;
