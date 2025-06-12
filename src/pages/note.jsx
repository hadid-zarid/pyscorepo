import { notesAPI } from "../services/notesAPI"
import React, { useState, useEffect } from "react";
import { AiFillDelete } from "react-icons/ai";

// Komponen GenericTable
const GenericTable = ({ columns, data, renderRow }) => {
    return (
        <div className="overflow-x-auto">
            <table className="w-full">
                <thead className="bg-gray-50/50">
                    <tr>
                        {columns.map((column, index) => (
                            <th key={index} className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                {column}
                            </th>
                        ))}
                    </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                    {data.map((item, index) => (
                        <tr key={index} className="hover:bg-gray-50/30 transition-colors duration-200">
                            {renderRow(item, index)}
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

// Komponen LoadingSpinner
const LoadingSpinner = ({ text }) => (
    <div className="flex flex-col items-center justify-center py-12">
        <div className="w-12 h-12 border-4 border-emerald-200 border-t-emerald-500 rounded-full animate-spin mb-4"></div>
        <p className="text-gray-600 font-medium">{text}</p>
    </div>
);

// Komponen EmptyState
const EmptyState = ({ text }) => (
    <div className="flex flex-col items-center justify-center py-16">
        <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
            <span className="text-3xl">📝</span>
        </div>
        <h3 className="text-lg font-semibold text-gray-700 mb-2">
            {text.includes("Kesalahan") ? "Oops!" : "Belum ada catatan"}
        </h3>
        <p className="text-gray-500 text-center max-w-sm">
            {text}
        </p>
    </div>
);

// Komponen AlertBox dengan animasi dan ikon
const AlertBox = ({ type, children }) => {
    const config = {
        error: {
            bg: "bg-gradient-to-r from-red-50 to-pink-50",
            text: "text-red-700",
            border: "border-red-200",
            icon: "❌"
        },
        success: {
            bg: "bg-gradient-to-r from-green-50 to-emerald-50",
            text: "text-green-700",
            border: "border-green-200",
            icon: "✅"
        }
    };
    
    const { bg, text, border, icon } = config[type];
    
    return (
        <div className={`${bg} ${text} ${border} p-4 rounded-xl mb-4 border-2 shadow-sm animate-pulse flex items-center gap-3`}>
            <span className="text-lg">{icon}</span>
            <span className="font-medium">{children}</span>
        </div>
    );
};

export default function Note() {
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState("")
    const [success, setSuccess] = useState("")
    const [notes, setNotes] = useState([])
    const [isEditMode, setIsEditMode] = useState(false)
    const [editId, setEditId] = useState(null)

    const [dataForm, setDataForm] = useState({
        title: "", 
        content: "", 
        status: ""
    })

    useEffect(() => {
        loadNotes()
    }, [])

    const loadNotes = async () => {
        try {
            setLoading(true)
            setError("")
            const data = await notesAPI.fetchNotes()
            setNotes(data)
        } catch (err) {
            setError("Gagal memuat catatan")
            console.error(err)
        } finally {
            setLoading(false)
        }
    }

    const handleEdit = (note) => {
        setIsEditMode(true);
        setEditId(note.id);
        setDataForm({
            title: note.title,
            content: note.content,
            status: note.status || "" 
        });
    }

    const handleChange = (evt) => {
        const { name, value } = evt.target;
        setDataForm(prev => ({
            ...prev,
            [name]: value
        }));
    }
    
    const handleDelete = async (id) => {
        const konfirmasi = confirm("Yakin ingin menghapus catatan ini?")
        if (!konfirmasi) return

        try {
            setLoading(true)
            setError("")
            setSuccess("")
            await notesAPI.deleteNote(id)
            loadNotes()
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`)
        } finally {
            setLoading(false)
        }
    }
		
    const handleSubmit = async (e) => {
        e.preventDefault()
        try {
            setLoading(true)
            setError("")
            setSuccess("")
            await notesAPI.createNote(dataForm)
            setSuccess("Catatan berhasil ditambahkan!")
            setDataForm({ title: "", content: "", status:"" })
            setTimeout(() => setSuccess(""), 3000)
            loadNotes()
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`);
        } finally {
            setLoading(false)
        }
    }

    const handleUpdate = async (e) => {
        e.preventDefault();
        try {
            setLoading(true);
            setError("");
            setSuccess("");
            await notesAPI.updateNote(editId, dataForm);
            setSuccess("Catatan berhasil diperbarui!");
            setDataForm({ title: "", content: "", status: "" });
            setIsEditMode(false);
            setEditId(null);
            setTimeout(() => setSuccess(""), 3000);
            loadNotes();
        } catch (err) {
            setError(`Terjadi kesalahan: ${err.message}`);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div className="min-h-screen py-8 px-4">
            <div className="max-w-3xl mx-auto">
                <div className="text-center mb-8">
                    <div className="inline-flex items-center gap-3 mb-4">
                        <h1 className="text-4xl font-bold bg-green-600 bg-clip-text text-transparent">
                            Notes App
                        </h1>
                    </div>
                </div>

                {error && <AlertBox type="error">{error}</AlertBox>}
                {success && <AlertBox type="success">{success}</AlertBox>}

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden">
                    <div className="bg-green-500 p-6">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">🌿</span>
                            <h2 className="text-xl font-semibold text-white">
                                {isEditMode ? "Edit Catatan" : "Tambah Catatan Baru"}
                            </h2>
                        </div>
                    </div>

                    <div className="p-8">
                        <form onSubmit={isEditMode ? handleUpdate : handleSubmit} className="space-y-6">
                            <div className="group">
                                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                    <span className="text-lg">📌</span> Judul Catatan
                                </label>
                                <input
                                    disabled={loading}
                                    type="text"
                                    name="title"
                                    value={dataForm.title}
                                    placeholder="Masukkan judul catatan yang menarik..."
                                    onChange={handleChange}
                                    required
                                    className="w-full p-4 bg-gray-50/50 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300"
                                />
                            </div>

                            <div className="group">
                                <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-2">
                                    <span className="text-lg">📄</span> Isi Catatan
                                </label>
                                <textarea
                                    disabled={loading}
                                    name="content"
                                    value={dataForm.content}
                                    placeholder="Tulis isi catatan Anda di sini..."
                                    onChange={handleChange}
                                    required
                                    rows="5"
                                    className="w-full p-4 bg-gray-50/50 rounded-2xl border-2 border-gray-200 focus:outline-none focus:ring-4 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-300 resize-none"
                                />
                            </div>

                            <div className="pt-4">
                                <button
                                    type="submit"
                                    disabled={loading}
                                    className="w-full bg-gradient-to-r from-emerald-500 to-green-600 hover:from-emerald-600 hover:to-green-700 text-white font-semibold py-4 px-8 rounded-2xl focus:outline-none transition-all duration-300 shadow-lg"
                                >
                                    <div className="flex items-center justify-center gap-3">
                                        {loading ? (
                                            <>
                                                <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                <span>{isEditMode ? "Menyimpan Perubahan..." : "Menyimpan Catatan..."}</span>
                                            </>
                                        ) : (
                                            <>
                                                <span className="text-lg">💾</span>
                                                <span>{isEditMode ? "Perbarui Catatan" : "Simpan Catatan"}</span>
                                            </>
                                        )}
                                    </div>
                                </button>
                            </div>

                            {isEditMode && (
                                <div className="pt-2">
                                    <button
                                        type="button"
                                        onClick={() => {
                                            setIsEditMode(false);
                                            setEditId(null);
                                            setDataForm({ title: "", content: "", status: "" });
                                        }}
                                        className="w-full bg-gray-300 text-gray-700 font-semibold py-3 px-8 rounded-2xl hover:bg-gray-400"
                                    >
                                        Batal Edit
                                    </button>
                                </div>
                            )}
                        </form>
                    </div>
                </div>

                <div className="bg-white/80 backdrop-blur-sm rounded-3xl shadow-2xl border border-white/20 overflow-hidden mt-10">
                    <div className="bg-green-500 px-6 py-4">
                        <div className="flex items-center gap-3">
                            <span className="text-2xl">📋</span>
                            <h3 className="text-xl font-semibold text-white">
                                Daftar Catatan ({notes.length})
                            </h3>
                        </div>
                    </div>

                    <div className="p-6">
                        {loading && <LoadingSpinner text="Memuat catatan..." />}
                        {!loading && notes.length === 0 && !error && (
                            <EmptyState text="Belum ada catatan. Tambah catatan pertama!" />
                        )}
                        {!loading && notes.length === 0 && error && (
                            <EmptyState text="Terjadi Kesalahan. Coba lagi nanti." />
                        )}
                        {!loading && notes.length > 0 && (
                            <GenericTable
                                columns={["No", "Judul", "Isi Catatan", "Aksi"]}
                                data={notes}
                                renderRow={(note, index) => (
                                    <>
                                        <td className="px-6 py-4 font-medium text-gray-700">{index + 1}.</td>
                                        <td className="px-6 py-4">
                                            <div className="font-semibold text-emerald-600">{note.title}</div>
                                        </td>
                                        <td className="px-6 py-4 max-w-xs">
                                            <div className="truncate text-gray-600">{note.content}</div>
                                        </td>
                                        <td className="px-6 py-4 flex gap-3">
                                            <button onClick={() => handleEdit(note)} className="text-blue-500 hover:text-blue-700">✏️</button>
                                            <button onClick={() => handleDelete(note.id)} className="text-red-500 hover:text-red-700">
                                                <AiFillDelete className="text-2xl" />
                                            </button>
                                        </td>
                                    </>
                                )}
                            />
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
}
