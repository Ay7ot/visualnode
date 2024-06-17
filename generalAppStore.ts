// store.ts (or store.tsx if using JSX)

import { create } from "zustand";

// State interface
interface UiState {
    navbarShown: boolean;
}

// Action types
type UiActions = {
    toggleNavbar: (show: boolean) => void;
};

export const useUiStore = create<UiState & UiActions>((set) => ({
    // Mobile Navbar State
    navbarShown: false,

    // Actions using set to update mobile navbar
    toggleNavbar: (show: boolean) => set(() => ({ navbarShown: show })),
}));
