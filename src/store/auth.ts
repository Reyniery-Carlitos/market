import { create } from "zustand";

interface IAuthStore {
  isAuthenticated: boolean;

  login: () => void;
  logout: () => void;
}

export const useAuthStore = create<IAuthStore>((set) => ({
  isAuthenticated: true,

  login: () => set(() => ({ isAuthenticated: true })),
  logout: () => set(() => ({ isAuthenticated: false }))
}))
