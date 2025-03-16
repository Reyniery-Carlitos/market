import { create } from "zustand";

type NotificationType = "success" | "error" | "warning" | "info";

type ProductViews = "grid" | "list"

interface UiStore {
  showLateralPanel: boolean;
  productsView: ProductViews;
  showSearchSuggestions: boolean;
  notification: {
    show: boolean;
    message: string | null;
    type: NotificationType;
  };

  setShowLateralPanel: () => void;
  toggleSearchSuggestions: () => void;
  toggleNotification: (show: boolean, text: string | null, type: NotificationType) => void;
  setProductsView: (view: ProductViews) => void;
}

export const useUiStore = create<UiStore>((set) => ({
  showLateralPanel: false,
  showSearchSuggestions: false,
  notification: {
    show: false,
    message: null,
    type: "success"
  },
  productsView: "grid",

  setShowLateralPanel: () => set((state) => ({ showLateralPanel: !state.showLateralPanel })),
  toggleSearchSuggestions: () => set((state) => ({ showSearchSuggestions: !state.showSearchSuggestions })),
  toggleNotification: (show: boolean, message: string | null, type: NotificationType) => set(() => ({ notification: { show, message, type } })),
  setProductsView: (view: ProductViews) => set(() => ({ productsView: view })),
}))
