import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Home({ setIsAuthenticated }) {
    const username = localStorage.getItem("username");
    const navigate = useNavigate();

    const handleLogout = () => {
        localStorage.clear();
        setIsAuthenticated(false);
        navigate("/");
    }

    return (

        <div className="h-screen flex flex-col bg-green-50">
           
            <Navbar username={username} onLogout={handleLogout} />

            
            <main className="flex-1 flex flex-col items-center justify-center w-full">
                <h1 className="text-3xl font-bold mb-6">
                    Welcome, {username}! You are logged in ✅
                </h1>
                <p className="text-lg text-gray-700">Goto Exam Form to Fill Particulars</p>
            </main>
        </div>




    );
}