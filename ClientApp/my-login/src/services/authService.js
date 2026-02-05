

const API_URL = "https://localhost:7004/api/Auth";
const API_BASE = "https://localhost:7004/api";

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

export async function submitDocuments(documents) {

    const token = localStorage.getItem("accessToken");

    if (!token) {
        throw new Error("No access token found. Please log in again.");
    }

    const response = await fetch(`${API_BASE}/Document/submit`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${token}`,
        },
        body: JSON.stringify(
            documents.map((doc) => ({
                documentName: doc.documentName,
                date: doc.date,
                softCopy: doc.softCopy,
                hardCopy: doc.hardCopy,
            }))
        ),
    });

    if(!response.ok){
        const error = await response.json();
        throw new Error(error.message || "Failed to submit documents");
    }

    return await response.json();

}

