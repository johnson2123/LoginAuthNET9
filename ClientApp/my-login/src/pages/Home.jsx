import { useNavigate } from "react-router-dom";


export default function Home({setIsAuthenticated}) {
    const username = localStorage.getItem("username");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        setIsAuthenticated(false);
        navigate("/");
    }

    return (
        <div className="flex flex-col items-center justify-center h-screen bg-green-100">
            <h1 className="text-3xl font-bold mb-6">
                {username} is logged in ✅
            </h1>
            <button
                onClick={handleLogout}
                className="bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
                Logout
            </button>
        </div>

    );
}