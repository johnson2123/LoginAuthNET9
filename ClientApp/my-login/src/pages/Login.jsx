import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { register } from "../services/authService";
import { login } from "../services/authService";
import logo from "../assets/logo.png";
import { parseJwt } from "../services/jwtUtils";

export default function Login({ setIsAuthenticated }) {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [isRegister, setIsRegister] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (e) => {
        e.preventDefault();
        let result;
        if (isRegister) {
            result = await register(username, password);

            if (result.ok) {
                alert("Username created successfully! Please login.");
                setIsRegister(false); // switch back to login form
                setUsername("");      // clear input
                setPassword("");

            } else {
                alert(result.message || "Registration failed");
            }
        } else {
            result = await login(username, password);

            if (result.accessToken) {
                localStorage.setItem("accessToken", result.accessToken);
                localStorage.setItem("refreshToken", result.refreshToken);
                localStorage.setItem("username", username);

                const payload = parseJwt(result.accessToken);
                localStorage.setItem("userId",payload?.nameid);

                setIsAuthenticated(true);
                navigate("/home");
            } else {
                alert(result.message || "Authentication failed");
            }
        }
    };

    return (
        <div className="flex items-center justify-center flex-col gap-8 h-screen bg-gray-100">
            <img src={logo} alt="" />
            <form onSubmit={handleSubmit}
                className="bg-white p-6 rounded shadow-md w-96">
                <h2 className="text-2xl font-bold mb-4 text-center">
                    {isRegister ? "Register" : "Login"}
                </h2>
                <input
                    type="text"
                    placeholder="Username"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"
                />
                <input
                    type="password"
                    placeholder="Password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full p-2 mb-3 border rounded"
                />
                <button
                    type="submit"
                    className="w-full bg-blue-500 text-white py-2 rounded hover:bg-blue-600"
                >
                    {isRegister ? "Register" : "Login"}
                </button>
                <p onClick={() => setIsRegister(!isRegister)}
                    className="mt-4 text-sm text-blue-500 cursor-pointer text-center">
                    {isRegister ? "Already have an account? Login" : "Don't have an account? Register"}
                </p>
            </form>
        </div>
    );

}