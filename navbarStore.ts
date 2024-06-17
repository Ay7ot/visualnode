// store.ts (or store.tsx if using JSX)

import { create } from "zustand";

interface navItem {
    name: string,
    active: boolean
}

// State interface
type navState = {
    navigationState: navItem[]
}

// Action types
type navActions = {
    updateNavigationState: (newNavState: navItem[]) => void
};

export const useNavStore = create<navState & navActions>((set) => ({
    navigationState: [
        {
            name: "Home",
            active: true
        },
        {
            name: "Charts",
            active: false
        },
        {
            name: "Dashboards",
            active: false
        },
        {
            name: "Workbench",
            active: false
        },
        {
            name: "Alerts",
            active: false
        },
        {
            name: "Insights",
            active: false
        },
        {
            name: "Pulses",
            active: false
        },
    ],
    updateNavigationState: (newNavState) => set(() => ({ navigationState: newNavState }))
}));
