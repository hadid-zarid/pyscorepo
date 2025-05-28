import illustration from '../assets/op74.png'; // path relatif dari file NotFound.jsx

export default function NotFound401() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md">
        <h1 className="text-5xl font-bold mb-4 text-yellow-500">Oops 401!</h1>
        <p className="text-lg text-gray-700 font-medium mb-2">Unauthorized Access</p>
        <p className="text-gray-600 mb-4">
          Kamu tidak memiliki izin untuk mengakses halaman ini karena belum login atau autentikasi gagal.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Silakan login kembali, atau pastikan kamu memiliki kredensial yang sesuai untuk mengakses halaman ini.
        </p>

        <img
          src={illustration}
          alt="401 Illustration"
          className="w-full max-w-xs mx-auto mb-6 drop-shadow-md rounded-md"
        />

        <button
          onClick={() => window.location.href = '/login'}
          className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-yellow-400"
        >
          Login Sekarang
        </button>
      </div>
    </div>
  );
}
