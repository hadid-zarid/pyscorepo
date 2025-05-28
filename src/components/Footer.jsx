import { FaInstagram, FaFacebookF, FaTwitter, FaYoutube } from 'react-icons/fa';
import pn32 from '../assets/io3.png';
import pn34 from '../assets/pn34.png';
import pn35 from '../assets/pn35.png';

export default function Footer() {
  return (
    <footer id="kontak" className="bg-gray-50 text-gray-700 pt-12 border-t border-gray-200">
      <div className="max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-3 gap-12">

        <div>
          <h2 className="text-xl font-semibold mb-4 text-green-700">Kontak Kami</h2>
          <ul className="space-y-2 text-sm">
            <li><strong>Email:</strong> my@sedap.id</li>
            <li><strong>Telepon:</strong> +62 812-3456-7890</li>
            <li><strong>Alamat:</strong> Jl. dimana kita bisa kembali</li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-green-700">Sosial Media</h2>
          <div className="flex space-x-4 text-lg">
            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors"><FaInstagram /></a>
            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors"><FaFacebookF /></a>
            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors"><FaTwitter /></a>
            <a href="#" className="text-gray-500 hover:text-green-600 transition-colors"><FaYoutube /></a>
          </div>
        </div>

        <div>
          <h2 className="text-xl font-semibold mb-4 text-green-700">Partner Kami</h2>
          <div className="flex flex-wrap items-center gap-4">
            <img src={pn32} alt="Partner 1" className="h-12 w-auto object-contain rounded-md shadow-sm hover:scale-105 transition-transform duration-200" />
            <img src={pn34} alt="Partner 2" className="h-12 w-auto object-contain rounded-md shadow-sm hover:scale-105 transition-transform duration-200" />
            <img src={pn35} alt="Partner 3" className="h-12 w-auto object-contain rounded-md shadow-sm hover:scale-105 transition-transform duration-200" />
          </div>
        </div>

      </div>

      <div className="text-center text-xs text-gray-400 mt-12 pb-6">
        © {new Date().getFullYear()} desain by ditt.
      </div>
    </footer>
  );
}
