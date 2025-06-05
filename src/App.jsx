import "./assets/tailwind.css";
import React, { Suspense, lazy } from "react";
import { Route, Routes } from "react-router-dom";
import Loading from "./components/Loading";

// Lazy loaded pages
const Dashboard = lazy(() => import("./pages/Dashboard"));
const Orders = lazy(() => import("./pages/Orders"));
const Customers = lazy(() => import("./pages/Customers"));
const Users = lazy(() => import("./pages/Users"));
const Products = lazy(() => import("./pages/Products"));
const ProductDetail = React.lazy(() => import("./pages/ProductDetail"))
const NotFound = lazy(() => import("./pages/NotFound"));
const NotFound400 = lazy(() => import("./pages/NotFound400"));
const NotFound401 = lazy(() => import("./pages/NotFound401"));
const NotFound403 = lazy(() => import("./pages/NotFound403"));


// Layouts
const MainLayout = lazy(() => import("./layouts/MainLayout"));
const AuthLayout = lazy(() => import("./layouts/AuthLayout"));
const GuestLayout = lazy(() => import("./layouts/GuestLayout"));

// Guest pages
const GuestHome = lazy(() => import("./pages/GuestHome"));

// Auth pages
const Login = lazy(() => import("./pages/auth/Login"));
const Register = lazy(() => import("./pages/auth/Register"));
const Forgot = lazy(() => import("./pages/auth/Forgot"));

function App() {
  return (
    <Suspense fallback={<Loading />}>
      <Routes>
        {/* Auth Routes */}
        <Route element={<AuthLayout />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/forgot" element={<Forgot />} />
        </Route>

        {/* Main Routes */}
        <Route element={<MainLayout />}>
          <Route path="/" element={<Dashboard />} />
          <Route path="/orders" element={<Orders />} />
          <Route path="/customers" element={<Customers />} />
          <Route path="/users" element={<Users />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<ProductDetail />} /> 
        </Route>

        {/* Guest Routes */}
        <Route element={<GuestLayout />}>
          <Route path="/guest" element={<GuestHome />} />
        </Route>

        {/* Error Pages */}
        <Route path="/error" element={<NotFound400 />} />
        <Route path="/notfound400" element={<NotFound400 />} />
        <Route path="/notfound401" element={<NotFound401 />} />
        <Route path="/notfound403" element={<NotFound403 />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </Suspense>
  );
}

export default App;
