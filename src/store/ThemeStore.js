import { create } from "zustand";

const ThemeStore = create((set) => ({
  theme: localStorage.getItem("theme") || "coffee",
  setTheme: (theme) => {
    localStorage.setItem("theme", theme);
    set({ theme });
  },
}));

export default ThemeStore;
