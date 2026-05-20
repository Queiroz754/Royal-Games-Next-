import axios from "axios";

const apiLocal = "https://localhost:7215/api/"; 

const apiRemota = "";

export const api = axios.create({
    baseURL: apiLocal
})