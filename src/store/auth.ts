import { create } from "zustand";

interface IAuthStore {
  isAuthenticated: boolean;
  userAuthenticated: number | null;

  login: () => void;
  logout: () => void;
  setUserAuthenticated: (userId: number) => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isAuthenticated: false,
  userAuthenticated: null,

  login: () => set(() => ({ isAuthenticated: true })),
  logout: () => set(() => ({ isAuthenticated: false })),
  setUserAuthenticated: (userId: number) => set(() => ({ userAuthenticated: userId }))
}))
