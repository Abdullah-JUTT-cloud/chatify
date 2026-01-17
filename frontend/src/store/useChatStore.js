import {create} from "zustand";
import {axiosInstance} from "../lib/axios";
import {toast} from "react-hot-toast";

export const useChatStore = create((set,get) => ({
    allContacts:[],
    chats:[],
    messages:[],
    activeTab:'chats',
    slectedUser:null,
    isUsersLoading:false,
    isMessagesLoading:false,
    isSoundEnabled:localStorage.getItem('isSoundEnabled') === 'true' ,
    toggleSound:()=>{
        localStorage.setItem('isSoundEnabled', !(get().isSoundEnabled));
        set({isSoundEnabled: !(get().isSoundEnabled)});
    },
    setActiveTab:(tab)=>{
        set({activeTab:tab});
    },
    setSelectedUser:(slectedUser)=>{
        set({slectedUser});
    },
    getAllContacts: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/contacts");
      set({ allContacts: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },
  getMyChatPartners: async () => {
    set({ isUsersLoading: true });
    try {
      const res = await axiosInstance.get("/messages/chats");
      set({ chats: res.data });
    } catch (error) {
      toast.error(error.response.data.message);
    } finally {
      set({ isUsersLoading: false });
    }
  },
    // setAllContacts:(contacts)=>{
    //     set({allContacts:contacts});
    // },
    // setChats:(chats)=>{
    //     set({chats:chats});
    // },
    // setMessages:(messages)=>{
    //     set({messages:messages});
    // },
    // setIsUsersLoading:(value)=>{
    //     set({isUsersLoading:value});
    // },
    // setIsMessagesLoading:(value)=>{
    //     set({isMessagesLoading:value});
    // },
}));