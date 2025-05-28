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
    <div className="font-sans text-gray-900 scroll-smooth bg-white">
      <section
        id="hero"
        className="relative bg-gradient-to-br from-green-700 to-green-500 text-white py-28 px-6 text-center flex items-center justify-center overflow-hidden"
      >
        <img
          src={opa}
          alt="Delicious Food"
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        />
        <div className="relative z-10 max-w-3xl mx-auto">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Selamat Datang di Sedap!
          </h1>
          <p className="text-lg md:text-xl mb-8 text-white/90">
            Temukan berbagai hidangan lezat dengan kualitas terbaik langsung dari dapur terbaik kami.
          </p>
          <a
            href="#produk"
            className="inline-block bg-yellow-400 text-white font-semibold px-6 py-3 rounded-full shadow hover:bg-yellow-300 transition-all"
          >
            Lihat Produk Unggulan
          </a>
        </div>
      </section>


      <section id="tentang" className="py-20 bg-gray-100">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold text-green-600 mb-12 text-center">Tentang Kami</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-start">
            <div>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed">
                <strong>Sedap</strong> adalah platform makanan terbaik yang menawarkan hidangan menggugah selera hasil kerja sama dengan chef profesional dan bahan terbaik.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Kami percaya bahwa makanan adalah seni dan pengalaman, bukan sekadar konsumsi.
              </p>
            </div>
            <div>
              <CekStokProduk />
            </div>
          </div>
        </div>
      </section>


      <section id="produk" className="py-20 bg-white">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-12">Produk Unggulan</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
            {products.map((product) => (
              <div
                key={product.id}
                className="bg-white rounded-xl overflow-hidden shadow hover:shadow-xl transition-all duration-300"
              >
                <img
                  src={imageMap[product.image] || product.image}
                  alt={product.title}
                  className="w-full h-52 object-cover"
                />
                <div className="p-5 text-left">
                  <h3 className="text-xl font-semibold mb-1">{product.title}</h3>
                  <p className="text-gray-600 mb-3">{product.desc}</p>
                  <span className="text-green-600 font-bold text-lg">{product.price}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

  
      <section id="ulasan" className="py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold text-green-600 mb-12">Apa Kata Pengguna</h2>
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
            {reviews.map((review, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 shadow hover:shadow-lg transition duration-300 text-left"
              >
                <div className="flex items-center mb-4">
                  <img
                    src={imageMap[review.image] || review.image}
                    alt={`Avatar ${review.name}`}
                    className="w-14 h-14 rounded-full mr-4"
                  />
                  <div>
                    <h4 className="text-md font-semibold">{review.name}</h4>
                    <p className="text-sm text-gray-500">Pengguna Sedap</p>
                  </div>
                </div>
                <p className="text-gray-700 text-base leading-relaxed">"{review.text}"</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
