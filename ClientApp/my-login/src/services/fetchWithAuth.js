import { refreshToken } from "./authService";

export async function fetchWithAuth(url, options){
    let token = localStorage.getItem("accessToken");
    if(!token){
        throw new Error("No access token found. Please log in again.");
    }

    options.headers = {
        ...options.headers,
        Authorization: `Bearer ${token}`,
    };

    //first attempt
    let response = await fetch(url,options);

    //if token expired, try refresh and rety once
    if(response.status == 401){
        token = await refreshToken();
        options.headers.Authorization = `Bearer $(token)`;
        response = await fetch(url, options);
    }
    
    return response;
}