import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import App from "./App";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import DashboardLayout from "./layouts/DashboardLayout";
import AdminDash from "./pages/admin/AdminDash";
import Partners from "./pages/admin/partners/Partners";
import PartnerCountries from "./pages/admin/partners/PartnerCountries";
import PartnerCities from "./pages/admin/partners/PartnerCities";
import AllPartners from "./pages/admin/partners/AllPartners";
import NewPartner from "./pages/admin/partners/NewPartner";
import DataProviders from "./pages/admin/data-providers/DataProviders";
import MTN from "./pages/admin/data-providers/mtn";
import Airtel from "./pages/admin/data-providers/airtel";
import Glo from "./pages/admin/data-providers/glo";
import NineMobile from "./pages/admin/data-providers/9mobile";
import Earnings from "./pages/admin/Earnings";
import AddProduct from "./pages/admin/AddProduct";
import PartnerDash from "./pages/partner/PartnerDash";
import Billings from "./pages/partner/Billings";
import Rentals from "./pages/partner/rentals/Rentals";
import NewRentals from "./pages/partner/rentals/NewRental";
import DueForPickup from "./pages/partner/rentals/DueForPickup";
import DueForReturn from "./pages/partner/rentals/DueForReturn";
import LateReturns from "./pages/partner/rentals/LateReturn";
import Damaged from "./pages/partner/rentals/Damaged";
import Notifications from "./pages/partner/Notifications";
import History from "./pages/partner/History";
import Settings from "./pages/partner/Settings";
import ErrorPage from "./pages/ErrorPage";
import ProtectedRoute from "./pages/ProtectedRoute";
import { getStoredData } from "./utils/Storage";

const token = getStoredData("token");

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    errorElement: <ErrorPage />,
  },
  {
    path: "/login",
    element: <Login />,
  },
  {
    path: "/signup",
    element: <Signup />,
  },
  {
    path: "/dashboard",
    element: (
      <ProtectedRoute token={String(token)}>
        <DashboardLayout />
      </ProtectedRoute>
    ),
    children: [
      {
        path: "/dashboard/admin",
        element: <AdminDash />,
      },
      {
        path: "/dashboard/admin/partners",
        element: <Partners />,
      },
      {
        path: "/dashboard/admin/partners/countries",
        element: <PartnerCountries />,
      },
      {
        path: "/dashboard/admin/partners/cities",
        element: <PartnerCities />,
      },
      {
        path: "/dashboard/admin/partners/partner",
        element: <AllPartners />,
      },
      {
        path: "/dashboard/admin/partners/new",
        element: <NewPartner />,
      },
      {
        path: "/dashboard/admin/data-providers",
        element: <DataProviders />,
      },
      {
        path: "/dashboard/admin/data-providers/mtn",
        element: <MTN />,
      },
      {
        path: "/dashboard/admin/data-providers/airtel",
        element: <Airtel />,
      },
      {
        path: "/dashboard/admin/data-providers/glo",
        element: <Glo />,
      },
      {
        path: "/dashboard/admin/data-providers/9mobile",
        element: <NineMobile />,
      },
      {
        path: "/dashboard/admin/earnings",
        element: <Earnings />,
      },
      {
        path: "/dashboard/admin/add-product",
        element: <AddProduct />,
      },
      {
        path: "/dashboard/partner",
        element: <PartnerDash />,
      },
      {
        path: "/dashboard/partner/billings",
        element: <Billings />,
      },
      {
        path: "/dashboard/partner/rentals",
        element: <Rentals />,
      },
      {
        path: "/dashboard/partner/rentals/new",
        element: <NewRentals />,
      },
      {
        path: "/dashboard/partner/rentals/due-for-pickup",
        element: <DueForPickup />,
      },
      {
        path: "/dashboard/partner/rentals/due-for-return",
        element: <DueForReturn />,
      },
      {
        path: "/dashboard/partner/rentals/late-returns",
        element: <LateReturns />,
      },
      {
        path: "/dashboard/partner/rentals/damaged",
        element: <Damaged />,
      },
      {
        path: "/dashboard/partner/notifications",
        element: <Notifications />,
      },
      {
        path: "/dashboard/partner/history",
        element: <History />,
      },
      {
        path: "/dashboard/partner/settings",
        element: <Settings />,
      },
    ],
  },
  {
    path: "/error",
    element: <ErrorPage />
  }
]);

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <RouterProvider router={router} />
  </StrictMode>
);
