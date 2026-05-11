"use client";

import { useEffect, useRef, useState } from "react";

import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarDropdown from "./NavbarDropdown";
import MobileMenu from "./MobileMenu";
import ThemeToggle from "./ThemeToggle";

import { navItems, dropdownItems } from "./nav.data";

import { useTheme } from "./hooks/useTheme";

import {
  Comment as CommentIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
} from "@mui/icons-material";

export default function Navbar() {
  const [activeNav, setActiveNav] = useState("#home");

  const [mobileMenuOpen, setMobileMenuOpen] =
    useState(false);

  const [desktopMenuOpen, setDesktopMenuOpen] =
    useState(false);

  const navRef = useRef<HTMLElement | null>(null);

  const { isLight, toggleTheme } = useTheme();

  useEffect(() => {
    const setHashNav = () => {
      setActiveNav(window.location.hash || "#home");
    };

    setHashNav();

    window.addEventListener("hashchange", setHashNav);

    return () => {
      window.removeEventListener(
        "hashchange",
        setHashNav
      );
    };
  }, []);

  useEffect(() => {
    const handleClickOutside = (e: Event) => {
      const target = e.target as Node;

      if (
        navRef.current &&
        !navRef.current.contains(target)
      ) {
        setDesktopMenuOpen(false);
        setMobileMenuOpen(false);
      }
    };

    document.addEventListener(
      "mousedown",
      handleClickOutside
    );

    return () => {
      document.removeEventListener(
        "mousedown",
        handleClickOutside
      );
    };
  }, []);

  const handleNavClick = (href: string) => {
    setActiveNav(href);
    setDesktopMenuOpen(false);
    setMobileMenuOpen(false);
  };

  return (
    <nav
      ref={navRef}
      className="fixed top-0 left-0 right-0 z-50"
    >
      <div className="px-4 md:px-8 py-6 flex justify-center items-center gap-6 max-w-7xl mx-auto">
        <NavbarLogo
          mobileMenuOpen={mobileMenuOpen}
          toggleMobileMenu={() =>
            setMobileMenuOpen((prev) => !prev)
          }
        />

        <MobileMenu
          items={[...navItems, ...dropdownItems]}
          open={mobileMenuOpen}
          onNavClick={handleNavClick}
        />

        <div className="hidden md:flex items-center gap-0 flex-1 justify-center relative">
          <NavbarLinks
            items={navItems}
            activeNav={activeNav}
            onNavClick={handleNavClick}
          />

          <button
            onClick={() =>
              setDesktopMenuOpen((prev) => !prev)
            }
            className="ml-2 w-14 h-14 rounded-full border border-white/10 bg-white/5"
          >
            {desktopMenuOpen ? (
              <ExpandLessIcon />
            ) : (
              <ExpandMoreIcon />
            )}
          </button>

          <NavbarDropdown
            items={dropdownItems}
            open={desktopMenuOpen}
            onClose={() =>
              setDesktopMenuOpen(false)
            }
            onNavClick={handleNavClick}
          />
        </div>

        <div className="flex items-center gap-2 min-w-fit">
          <a
            href="#comment"
            className="border border-white/15 text-current tracking-wider py-2 px-4 text-sm font-bold rounded-full flex items-center gap-2"
          >
            <CommentIcon className="text-lg" />
            Let&apos;s talk
          </a>

          <ThemeToggle
            isLight={isLight}
            toggleTheme={toggleTheme}
          />
        </div>
      </div>
    </nav>
  );
}