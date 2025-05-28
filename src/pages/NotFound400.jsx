import illustration from '../assets/op6.png'; // path relatif dari file NotFound.jsx

export default function NotFound400() {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center px-4 bg-gray-100">
      <div className="bg-white p-8 rounded-xl shadow-xl max-w-md">
        <h1 className="text-5xl font-bold mb-4 text-red-500">Oops 400!</h1>
        <p className="text-lg text-gray-700 font-medium mb-2">Bad Request</p>
        <p className="text-gray-600 mb-4">
          Permintaan yang kamu kirim tidak dapat diproses oleh server karena ada format atau sintaks yang salah.
        </p>
        <p className="text-sm text-gray-500 mb-6">
          Hal ini bisa terjadi karena URL rusak, data yang dikirim tidak lengkap, atau format tidak sesuai.
        </p>

        <img
          src={illustration}
          alt="400 Illustration"
          className="w-full max-w-xs mx-auto mb-6 drop-shadow-md rounded-md"
        />

        <button
          onClick={() => window.location.href = '/'}
          className="bg-green-500 hover:bg-green-600 text-white font-semibold px-6 py-3 rounded-full shadow-lg transition transform hover:-translate-y-1 hover:scale-105 focus:outline-none focus:ring-4 focus:ring-green-400"
        >
          Kembali ke Dashboard
        </button>
      </div>
    </div>
  );
}
