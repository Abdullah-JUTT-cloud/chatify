import {create} from "zustand"
export const useAuthStore=create((set)=>({
    authUser:{name:"ABD", _id:123 , age:20},
    isLoading:false,
    login:()=>{
        console.log("you logged in")
    }

}))