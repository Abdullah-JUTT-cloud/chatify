import axios from "axios";
export default  axiosInstance=axios.create({
    baseURL:import.meta.env.MODE==="development"?"http://localhost:300/api":"/api",
    withCredentials:true,
});