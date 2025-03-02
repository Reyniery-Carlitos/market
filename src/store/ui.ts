import { create } from "zustand";

type NotificationType = "success" | "error" | "warning" | "info";

interface UiStore {
  showLateralPanel: boolean;
  showSearchSuggestions: boolean;
  notification: {
    show: boolean;
    message: string | null;
    type: NotificationType;
  };

  setShowLateralPanel: () => void;
  toggleSearchSuggestions: () => void;
  toggleNotification: (show: boolean, text: string | null, type: NotificationType) => void;
}

export const useUiStore = create<UiStore>((set) => ({
  showLateralPanel: false,
  showSearchSuggestions: false,
  notification: {
    show: false,
    message: null,
    type: "success" 
  },

  setShowLateralPanel: () => set((state) => ({ showLateralPanel: !state.showLateralPanel })),
  toggleSearchSuggestions: () => set((state) => ({ showSearchSuggestions: !state.showSearchSuggestions })),
  toggleNotification: (show: boolean, message: string | null, type: NotificationType) => set(() => ({ notification: { show, message, type } }))
}))
