
const API_URL = "https://localhost:7004/api/Auth";

export async function login(username, password) {
    const response = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });
    return response.json();
}

export async function register(username, password) {
    const response = await fetch(`${API_URL}/register`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ username, password }),
    });
    let data;
    try {
        data = await response.json();
    } catch {
        const text = await response.text();
        data = { message: text };
    }

    return { ok: response.ok, ...data };

}