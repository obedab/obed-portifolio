"use client";

import { useEffect, useState } from "react";

export function useTheme() {
  const [isLight, setIsLight] = useState<boolean>(() => {
    if (typeof window === "undefined") return false;

    try {
      const saved = localStorage.getItem("theme");

      if (saved) {
        return saved === "light";
      }

      return (
        window.matchMedia &&
        window.matchMedia("(prefers-color-scheme: light)").matches
      );
    } catch {
      return false;
    }
  });

  useEffect(() => {
    document.documentElement.classList.toggle("light-mode", isLight);

    try {
      localStorage.setItem("theme", isLight ? "light" : "dark");
    } catch {
      //
    }
  }, [isLight]);

  const toggleTheme = () => {
    setIsLight((prev) => !prev);
  };

  return {
    isLight,
    toggleTheme,
  };
}