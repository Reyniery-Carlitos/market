import { create } from "zustand";

interface ICartStore {
  show: boolean;

  toggleShow: () => void;
}

export const useCartStore = create<ICartStore>((set) => ({
  show: false,

  toggleShow: () => set((state) => ({ show: !state.show }))
}))
