import ListMenu from "./ListMenu";

export default function Sidebar() {
    return (
        <div id="sidebar" className="flex min-h-screen w-90 flex-col bg-white p-10 shadow-lg">
            {/* Logo */}
            <div id="sidebar-logo" className="flex flex-col">
                <span className="font-poppins-extrabold text-[48px] text-gray-900">Sedap <b className="text-hijau">.</b></span>
                <span className="font-semibold text-gray-400 ">Modern Admin Dashboard</span>
            </div>

            {/* List Menu */}
            <ListMenu/>
           
              {/* Footer */}
              <div id="sidebar-footer" className="mt-auto">
                <div
                    id="footer-card"
                    className="bg-hijau px-4 py-4 rounded-md shadow-lg mb-10 flex items-center gap-4"
                >
                    <div id="footer-text" className="text-white text-sm flex-1">
                        <p className="p-2">
                            Please organize your menus through button below!
                        </p>
                        <div id="add-menu-button">
                            <button className="w-full mt-3 px-4 py-2 bg-white text-hijau font-semibold rounded-md hover:bg-green-100 transition">
                                Add Menus
                            </button>
                        </div>
                    </div>
                    <img
                        id="footer-avatar"
                        className="w-20 rounded-full"
                        src="https://avatar.iran.liara.run/public/28"
                        alt="Admin Avatar"
                    />
                </div>
                <span className="font-bold text-gray-400">
                    Sedap Restaurant Admin Dashboard
                </span>
                <p className="font-light text-gray-400">
                    &copy; 2025 All Right Reserved
                </p>
            </div>
        </div>
    );
}