import axios from "axios";
export default axios.create({
    baseURL:import.meta.env.MODE==="development"?"http://localhost:300/api":"/api",
    withCredentials:true,
});