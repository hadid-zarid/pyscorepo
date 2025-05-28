import React from "react";
import op222 from "../assets/op222.jpg";
import op223 from "../assets/op223.jpg";
import op121 from "../assets/op121.png";
import opa from "../assets/opa.png";
import products from "../assets/products.json";
import reviews from "../assets/reviews.json";
import CekStokProduk from "../components/CekStokProduk";
import av1 from "../assets/av1.png";
import av2 from "../assets/av2.png";
import av3 from "../assets/av3.png";
import av4 from "../assets/av4.png";
import av5 from "../assets/av5.png";

const imageMap = {
  "op121.png": op121,
  "op222.jpg": op222,
  "op223.jpg": op223,
  "av1.png": av1,
  "av2.png": av2,
  "av3.png": av3,
  "av4.png": av4,
  "av5.png": av5,
};

export default function GuestHome() {
  return (
    <>
      <div className="font-sans text-gray-900 scroll-smooth bg-gray-50">
        {/* Hero Section */}
        <section
          id="hero"
          className="relative bg-gradient-to-br from-green-900 via-green-700 to-green-500 text-white py-36 px-6 text-center flex items-center justify-center overflow-hidden"
        >
          <div className="absolute inset-0 w-full h-full overflow-hidden">
            <img
              src={opa}
              alt="Delicious Food"
              className="w-full h-full object-cover opacity-25 transition-transform duration-1000 ease-in-out animate-parallax"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl mx-auto">
            <h1
              className="text-5xl md:text-7xl font-extrabold mb-4 leading-tight tracking-tight animate-staggeredFadeIn"
              style={{ animationDelay: "0.2s" }}
            >
              Selamat Datang di <span className="text-yellow-300 bg-green-800/30 px-3 py-1 rounded-md">Sedap!</span>
            </h1>
            <p
              className="text-xl md:text-2xl mb-8 text-white/90 font-light animate-staggeredFadeIn"
              style={{ animationDelay: "0.4s" }}
            >
              Nikmati hidangan lezat dengan bahan berkualitas tinggi, disajikan langsung dari dapur terbaik kami.
            </p>
            <a
              href="#produk"
              className="inline-block bg-gradient-to-r from-yellow-400 to-yellow-500 text-green-900 font-semibold px-8 py-4 rounded-full shadow-xl hover:from-yellow-300 hover:to-yellow-400 hover:scale-110 transition-all duration-300 animate-pulse"
            >
              Lihat Produk Unggulan
            </a>
          </div>
        </section>

        <section id="tentang" className="py-24 bg-gradient-to-br from-gray-50 to-green-50">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl md:text-5xl font-extrabold text-green-700 mb-12 text-center animate-slideUp">
              Tentang <span className="text-yellow-400">Kami</span>
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
              <div className="space-y-6 relative">
                <div className="absolute -left-4 top-0 h-full w-1 bg-green-500 rounded-full animate-pulseLine"></div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-staggeredFadeIn" style={{ animationDelay: "0.2s" }}>
                  <div className="flex items-center mb-4">
                    <svg
                      className="w-8 h-8 text-green-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M12 8c-1.657 0-3 .672-3 1.5S10.343 11 12 11s3-.672 3-1.5S13.657 8 12 8zm0 0c2.21 0 4 1.79 4 4v2H8v-2c0-2.21 1.79-4 4-4zm-7 7v2h14v-2H5z"
                      />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-800">Kualitas Terbaik</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    <strong className="text-green-600">Sedap</strong> menawarkan hidangan menggugah selera, hasil karya chef profesional dengan bahan-bahan pilihan.
                  </p>
                </div>
                <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 animate-staggeredFadeIn" style={{ animationDelay: "0.4s" }}>
                  <div className="flex items-center mb-4">
                    <svg
                      className="w-8 h-8 text-green-600 mr-3"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z"
                      />
                    </svg>
                    <h3 className="text-xl font-semibold text-gray-800">Pengalaman Kuliner</h3>
                  </div>
                  <p className="text-lg text-gray-700 leading-relaxed">
                    Kami percaya makanan adalah seni dan pengalaman yang membawa kebahagiaan kepada setiap pelanggan.
                  </p>
                </div>
              </div>
              <div className="flex justify-center">
                <div className="relative bg-gray-100 p-8 rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 animate-staggeredFadeIn" style={{ animationDelay: "0.6s" }}>
                  <div className="absolute -top-3 -right-3 bg-yellow-400 text-white text-sm font-semibold px-3 py-1 rounded-full shadow-md">
                    Cek Sekarang
                  </div>
                  <CekStokProduk />
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="produk" className="py-24 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-green-700 mb-12 animate-slideUp">
              Produk Unggulan
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product) => (
                <div
                  key={product.id}
                  className="bg-white rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300"
                >
                  <div className="relative overflow-hidden">
                    <img
                      src={imageMap[product.image] || product.image}
                      alt={product.title}
                      className="w-full h-56 object-cover transition-transform duration-500 hover:scale-110"
                    />
                    <div className="absolute top-0 right-0 bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded-bl-lg">
                      Populer
                    </div>
                  </div>
                  <div className="p-6 text-left">
                    <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
                    <p className="text-gray-600 mb-4 line-clamp-2">{product.desc}</p>
                    <span className="text-green-600 font-bold text-lg">{product.price}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="ulasan" className="py-24 bg-white">
          <div className="max-w-6xl mx-auto px-6 text-center">
            <h2 className="text-4xl font-bold text-green-700 mb-12 animate-slideUp">
              Apa Kata Pengguna
            </h2>
            <div className="relative overflow-hidden">
              <div className="flex animate-marquee">
                {[...reviews, ...reviews].map((review, idx) => (
                  <div
                    key={`${idx}-${review.name}`}
                    className="flex-shrink-0 w-80 mx-4 bg-gray-50 rounded-2xl p-6 shadow-lg hover:shadow-xl transition-all duration-300"
                  >
                    <div className="flex items-center mb-4">
                      <img
                        src={imageMap[review.image] || review.image}
                        alt={`Avatar ${review.name}`}
                        className="w-16 h-16 rounded-full mr-4 border-2 border-green-200"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-800">{review.name}</h4>
                        <p className="text-sm text-gray-500">Pengguna Sedap</p>
                      </div>
                    </div>
                    <p className="text-gray-700 text-base leading-relaxed line-clamp-3">
                      "{review.text}"
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }
          to {
            opacity: 1;
          }
        }
        @keyframes slideUp {
          from {
            transform: translateY(20px);
            opacity: 0;
          }
          to {
            transform: translateY(0);
            opacity: 1;
          }
        }
        @keyframes marquee {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-50%);
          }
        }
        @keyframes parallax {
          0% {
            transform: scale(1.1) translateY(0);
          }
          50% {
            transform: scale(1.15) translateY(-20px);
          }
          100% {
            transform: scale(1.1) translateY(0);
          }
        }
        @keyframes pulse {
          0% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 193, 7, 0.4);
          }
          70% {
            transform: scale(1.05);
            box-shadow: 0 0 0 10px rgba(255, 193, 7, 0);
          }
          100% {
            transform: scale(1);
            box-shadow: 0 0 0 0 rgba(255, 193, 7, 0);
          }
        }
        @keyframes staggeredFadeIn {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes pulseLine {
          0% {
            opacity: 0.4;
            transform: scaleY(0.8);
          }
          50% {
            opacity: 0.8;
            transform: scaleY(1);
          }
          100% {
            opacity: 0.4;
            transform: scaleY(0.8);
          }
        }
        .animate-fadeIn {
          animation: fadeIn 1s ease-in-out;
        }
        .animate-slideUp {
          animation: slideUp 0.8s ease-in-out;
        }
        .animate-marquee {
          display: flex;
          animation: marquee 20s linear infinite;
          width: max-content;
        }
        .animate-marquee:hover {
          animation-play-state: paused;
        }
        .animate-parallax {
          animation: parallax 10s ease-in-out infinite;
        }
        .animate-pulse {
          animation: pulse 2s ease-in-out infinite;
        }
        .animate-staggeredFadeIn {
          animation: staggeredFadeIn 0.8s ease-in-out forwards;
        }
        .animate-pulseLine {
          animation: pulseLine 2s ease-in-out infinite;
        }
      `}</style>
    </>
  );
}