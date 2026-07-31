import { create } from "zustand";

interface UIState {
  // Mobile Navigation
  mobileNavOpen: boolean;
  openMobileNav: () => void;
  closeMobileNav: () => void;
  toggleMobileNav: () => void;

  // Active Desktop Navigation
  activeMenu: string | null;
  setActiveMenu: (menu: string | null) => void;

  // Reset All UI States
  resetUI: () => void;
}

export const useUIStore = create<UIState>((set) => ({
  // Mobile Navigation
  mobileNavOpen: false,

  openMobileNav: () =>
    set({
      mobileNavOpen: true,
    }),

  closeMobileNav: () =>
    set({
      mobileNavOpen: false,
    }),

  toggleMobileNav: () =>
    set((state) => ({
      mobileNavOpen: !state.mobileNavOpen,
    })),

  // Desktop Navigation
  activeMenu: null,

  setActiveMenu: (menu) =>
    set({
      activeMenu: menu,
    }),

  // Reset UI
  resetUI: () =>
    set({
      mobileNavOpen: false,
      activeMenu: null,
    }),
}));