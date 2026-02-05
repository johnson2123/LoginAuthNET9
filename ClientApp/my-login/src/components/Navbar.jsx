import { Link } from "react-router-dom";
import Home from "../pages/Home";
import DocumentForm from "./DocumentForm";
import logo from "../assets/logo.png";
function Navbar({ username, onLogout }) {

    return (

        <nav className="w-full bg-gray-500 text-white px-6 py-3 flex justify-between items-center shadow-md">
            <div className="flex gap-5 items-center">
                <div>
                    <img src={logo} alt="" className="w-20" />
                </div>
                {/* Left side links */}
                <div className="flex space-x-6 text-xl">
                    <Link to="/home" className="hover:text-gray-200 font-semibold">
                        Home
                    </Link>
                    <Link to="/exam-form" className="hover:text-gray-200 font-semibold">
                        Exam Form
                    </Link>
                </div>

            </div>

            {/* Right side username + logout */}
            <div className="flex items-center space-x-4 text-xl">
                <span className="font-medium">{username}</span>
                <button
                    onClick={onLogout}
                    className="bg-red-500 hover:bg-red-600 text-white px-3 py-1 rounded"
                >
                    Logout
                </button>
            </div>
        </nav>

    );
}

export default Navbar;