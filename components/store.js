import { create } from "zustand";
import { channelList } from "./data";

export const useChannelStore = create((set) => ({
    channelList: channelList,
    channelData: {},
    setChannelData: (field, val) =>
        set((state) => ({ channelData: { ...state.channelData, [field]: val } })),
}));
