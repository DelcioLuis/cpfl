import axios from "axios";

const api = axios.create({
    baseURL: "https://desafiogamificacaocpfl20201114183303.azurewebsites.net/",
});

export default api;
