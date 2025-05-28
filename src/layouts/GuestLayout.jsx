import GuestHeader from "../components/GuestHeader";
import Footer from "../components/Footer"; 
import { Outlet } from "react-router-dom";

export default function GuestLayout() {
  return (
    <div className="min-h-screen flex flex-col bg-white">

      <GuestHeader />
        <Outlet />
      <Footer />
    </div>
  );
}
