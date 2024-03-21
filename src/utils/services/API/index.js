import axios from "axios";

const BACKEND_BASE_URL = process.env.REACT_APP_BACKEND_BASE_URL;

const ApiConfig = axios.create({
    baseURL: BACKEND_BASE_URL,
});

export default ApiConfig;
