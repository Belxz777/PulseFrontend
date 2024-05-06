import {create} from 'zustand';

export const useStore = create((set) => ({
  userInfo: null,
  setUserInfo: (info:OutCome) => set({ userInfo: info })
}));