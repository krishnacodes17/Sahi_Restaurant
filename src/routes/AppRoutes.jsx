import { lazy, Suspense, useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router";
import { useDispatch } from "react-redux";
import { hydrateUserAction } from "../features/auth/state/authAction";
import AuthProtected from "./ProtectedRoutes/AuthProtected";
import HomeProtected from "./ProtectedRoutes/HomeProtected";
import AuthLayout from "../app/layouts/AuthLayout";
import HomeLayout from "../app/layouts/HomeLayout";
import ErrorBoundary from "../shared/ui/components/ErrorBoundary";
import PageLoader from "../shared/ui/components/PageLoader";
import NotFound from "../shared/ui/components/NotFound";

const Login = lazy(() => import("../features/auth/ui/pages/Login"));
const Register = lazy(() => import("../features/auth/ui/pages/Register"));
const HomePage = lazy(() => import("../features/recipes/ui/pages/HomePage"));
const RecipeDetails = lazy(() => import("../features/recipes/ui/pages/RecipeDetails"));
const OurMenu = lazy(() => import("../features/recipes/ui/pages/OurMenu"));
const StorePage = lazy(() => import("../features/cart/ui/pages/StorePage"));
const ProfilePage = lazy(() => import("../features/profile/ui/pages/ProfilePage"));
const OrderPage = lazy(() => import("../features/orders/ui/pages/OrderPage"));
const FavoritePage = lazy(() => import("../features/favorites/ui/pages/FavoritePage"));
const AboutPage = lazy(() => import("../features/recipes/ui/components/AboutPage"));
const ContactUs = lazy(() => import("../features/recipes/ui/components/ContactUs"));
const TermsConditions = lazy(() => import("../features/recipes/ui/components/TermsConditions"));
const PrivacyPage = lazy(() => import("../features/recipes/ui/components/PrivacyPage"));




function AppRoutes() {
  let dispatch = useDispatch();

  useEffect(() => {
    dispatch(hydrateUserAction());
  }, [dispatch]);

  let route = createBrowserRouter([
    {
      path: "/",
      element: <AuthProtected />,
      children: [
        {
          path: "",
          element: <AuthLayout />,
          children: [
            {
              path: "",
              element: (
                <Suspense fallback={<PageLoader />}>
                  <Login />
                </Suspense>
              ),
            },
            {
              path: "/register",
              element: (
                <Suspense fallback={<PageLoader />}>
                  <Register />
                </Suspense>
              ),
            },
          ],
        },
      ],
    },

    {
      path: "/home",
      element: <HomeProtected />,
      children: [
        {
          path: "",
          element: <HomeLayout />,
          children: [
            {
              path: "",
              element: (
                <ErrorBoundary>
                  <Suspense fallback={<PageLoader />}>
                    <HomePage />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: "recipe/:id",
              element: (
                <ErrorBoundary>
                  <Suspense fallback={<PageLoader />}>
                    <RecipeDetails />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: "menu",
              element: (
                <ErrorBoundary>
                  <Suspense fallback={<PageLoader />}>
                    <OurMenu />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: "cart",
              element: (
                <ErrorBoundary>
                  <Suspense fallback={<PageLoader />}>
                    <StorePage />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: "profile",
              element: (
                <ErrorBoundary>
                  <Suspense fallback={<PageLoader />}>
                    <ProfilePage />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: "orders",
              element: (
                <ErrorBoundary>
                  <Suspense fallback={<PageLoader />}>
                    <OrderPage />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: "favorites",
              element: (
                <ErrorBoundary>
                  <Suspense fallback={<PageLoader />}>
                    <FavoritePage />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: "about",
              element: (
                <ErrorBoundary>
                  <Suspense fallback={<PageLoader />}>
                    <AboutPage />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: "contact",
              element: (
                <ErrorBoundary>
                  <Suspense fallback={<PageLoader />}>
                    <ContactUs />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: "terms",
              element: (
                <ErrorBoundary>
                  <Suspense fallback={<PageLoader />}>
                    <TermsConditions />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
            {
              path: "privacy",
              element: (
                <ErrorBoundary>
                  <Suspense fallback={<PageLoader />}>
                    <PrivacyPage />
                  </Suspense>
                </ErrorBoundary>
              ),
            },
          ],
        },
      ],
    },

    {
      path: "*",
      element: <NotFound
       />,
    },
  ]);

  return <RouterProvider router={route} />;
}

export default AppRoutes;
