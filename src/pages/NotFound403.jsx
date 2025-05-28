import illustration from '../assets/op75.png'; // path relatif dari file NotFound.jsx

export default function NotFound403() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md">
        <h1 className="text-5xl font-bold mb-4 text-orange-500">Oops 403!</h1>
        <p className="text-lg text-gray-700 font-medium mb-2">Akses Ditolak</p>
        <p className="text-gray-600 mb-4">
          Kamu tidak memiliki izin untuk mengakses halaman ini. Meskipun kamu mungkin sudah login,
          peran atau hak aksesmu tidak mencukupi.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Hubungi administrator jika kamu merasa ini adalah kesalahan, atau kembali ke halaman utama.
        </p>

        <img
          src={illustration}
          alt="403 Illustration"
          className="w-full max-w-xs mx-auto mb-6 drop-shadow-md rounded-md"
        />

        <button
          onClick={() => window.location.href = '/'}
          className="bg-orange-500 hover:bg-orange-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-orange-400"
        >
          Kembali ke Beranda
        </button>
      </div>
    </div>
  );
}
