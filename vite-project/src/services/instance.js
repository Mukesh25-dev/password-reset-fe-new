import axios from "axios";

const instance = axios.create({
  baseURL: "https://passwordreset-node-backend.onrender.com",
  timeout: 3000,
  headers: {
    "Content-Type": "application/json",
  },
  withCredentials: true,
});

export default instance;
