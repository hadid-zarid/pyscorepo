import React, { useState } from "react";
import produk from "../assets/produk.json";

export default function CekStokProduk() {
  const [kode, setKode] = useState("");
  const [hasil, setHasil] = useState(null);
  const [error, setError] = useState("");

  const handleCek = () => {
    setError("");
    setHasil(null);

    if (!kode) {
      setError("Kode produk tidak boleh kosong.");
      return;
    }

    if (kode.length < 4) {
      setError("Kode produk minimal 4 karakter.");
      return;
    }

    const data = produk.find(
      (p) => p.kode_produk.toLowerCase() === kode.toLowerCase()
    );

    if (data) {
      setHasil(data);
    } else {
      setError(" Ulangi kode yang benar donk");
    }
  };

  return (
    <div className="bg-white p-6 rounded-xl shadow-md max-w-md mx-auto">
      <h3 className="text-xl font-semibold mb-4 text-green-700 text-align-center">
        Cek Ketersediaan Produk
      </h3>
      <input
        type="text"
        placeholder="Masukkan Kode Produk"
        value={kode}
        onChange={(e) => setKode(e.target.value)}
        className="w-full p-3 border border-gray-300 rounded-lg mb-4"
      />
      <button
        onClick={handleCek}
        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-lg w-full font-semibold"
      >
        Cek Sekarang
      </button>

      {error && (
        <p className="text-red-600 mt-4 font-medium text-center">{error}</p>
      )}

      {hasil && (
        <div className="mt-6 text-center">
          {hasil.stok > 0 ? (
            <div className="text-green-700">
              <p className="text-2xl mb-2">Produk {hasil.nama_produk} tersedia</p>
              <p className="text-lg font-semibold mb-2">
                Harga: Rp{hasil.harga.toLocaleString("id-ID")}
              </p>
              <p>Stok ready saat ini: {hasil.stok}</p>
            </div>
          ) : (
            <div className="text-yellow-600">
              <p className="text-2xl mb-2">Yahh Sayang Sekali Produk {hasil.nama_produk} sedang habis.</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}
