import { Link } from "react-router-dom";
import logo from "./logo";

export default function GuestHeader() {
  return (
    <header className="flex justify-between items-center px-6 py-4 shadow-md bg-white sticky top-0 z-50">
   
      <div className="text-2xl font-bold text-green-600">
        <span className="font-poppins-extrabold text-[48px] text-gray-900">Sedap <b className="text-hijau">.</b></span>
      </div>

      <nav className="hidden md:flex space-x-6 text-gray-700">
        <a href="#hero" className="hover:text-green-600 transition">Beranda</a>
        <a href="#tentang" className="hover:text-green-600 transition">Tentang</a>
        <a href="#produk" className="hover:text-green-600 transition">Produk</a>
        <a href="#ulasan" className="hover:text-green-600 transition">Ulasan</a>
        <a href="#kontak" className="hover:text-green-600 transition">Kontak</a>
      </nav>

      <div className="space-x-2">
        <Link to="/login">
          <button className="px-4 py-2 border border-green-600 text-green-600 rounded hover:bg-green-50 transition">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700 transition">
            Register
          </button>
        </Link>
      </div>
    </header>
  );
}
