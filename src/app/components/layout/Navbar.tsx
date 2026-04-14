"use client";
import { useEffect, useState, MouseEvent } from "react";
import {
  Home as HomeIcon,
  Info as InfoIcon,
  Lightbulb as LightbulbIcon,
  Work as WorkIcon,
  Comment as CommentIcon,
  WbSunny as WbSunnyIcon,
  ExpandLess as ExpandLessIcon,
  ExpandMore as ExpandMoreIcon,
  GridView as GridViewIcon,
  EmojiEvents as EmojiEventsIcon,
  Star as StarsIcon,
  LocationOn as LocationOnIcon,
  PersonAdd as PersonAddIcon,
} from "@mui/icons-material";

const navItems = [
  { name: "Home", href: "#home", icon: <HomeIcon /> },
  { name: "About", href: "#about", icon: <InfoIcon /> },
  { name: "Skills", href: "#skills", icon: <LightbulbIcon /> },
  { name: "Experience", href: "#experience", icon: <WorkIcon /> },
];

const dropdownItems = [
  { name: "Projects", href:"#projects", icon: <GridViewIcon /> },
  { name: "Certifications",href:"#certifications", icon: <EmojiEventsIcon /> },
  { name: "Achievements", href: "#achievements", icon: <StarsIcon /> },
  { name: "Location", href: "#location",icon: <LocationOnIcon /> },
  { name: "Connect", href: "#connect", icon: <PersonAddIcon /> },
];


export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeNav, setActiveNav] = useState("#home");
  const isMenuOpen = Boolean(anchorEl);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const setHashNav = () => {
        setActiveNav(window.location.hash || "#home");
      };
      setHashNav();
      window.addEventListener("hashchange", setHashNav);
      return () => {
        window.removeEventListener("hashchange", setHashNav);
      };
    }
  }, []);

  const handleToggleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  const handleNavClick = (href: string) => {
    setActiveNav(href);
    setMobileMenuOpen(false);
  };

  const allItems = [...navItems, ...dropdownItems];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-transparent border-none shadow-none z-50">
      <div className="px-4 md:px-8 py-6 flex justify-center items-center gap-6 max-w-7xl mx-auto">
        {/* Logo */}
        <div className="relative flex items-center gap-4 min-w-fit">
          <div className="w-16 h-16 rounded-full border-2 border-cyan-300/30 bg-cyan-500/8 text-cyan-400 flex items-center justify-center font-extrabold text-4xl shadow-lg shadow-cyan-500/15 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-110">
            O
          </div>
          <span className="text-white/90 text-lg font-Black whitespace-nowrap">
            <span className="text-cyan-400 font-black">Obed ABIRAGIYE</span> | Portfolio
          </span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ml-3 w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-purple-500/20 hover:scale-105 hover:shadow-lg"
          >
            {mobileMenuOpen ? <ExpandMoreIcon className="text-lg" /> : <ExpandLessIcon className="text-lg" />}
          </button>

          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full mt-1 right-0 bg-gray-900/96 border border-white/12 shadow-2xl backdrop-blur-xl w-[200px] rounded-2xl p-1 z-50 animate-in slide-in-from-top-2 duration-300">
              {allItems.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href || "#"}
                  onClick={() => handleNavClick(item.href || "#home")}
                  className={`flex items-center gap-3 text-white/90 text-sm font-semibold py-2 px-3 rounded-lg transition-all duration-300 ${
                    idx !== allItems.length - 1 ? "border-b border-white/8" : ""
                  } hover:bg-purple-500/25 hover:text-white hover:scale-105 hover:shadow-md`}
                >
                  <span className="text-lg text-white">{item.icon}</span>
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Nav Items + Dropdown */}
        <div className="hidden md:flex items-center gap-0 flex-1 justify-center">
          <div className="flex gap-3 p-3 px-6 rounded-full border border-white/10 bg-white/5 max-w-[800px] justify-center shadow-lg hover:shadow-xl transition-shadow duration-300">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={() => handleNavClick(item.href)}
                className={`group px-4 py-2 flex items-center gap-2 rounded-full uppercase tracking-widest text-sm font-bold transition-all duration-300 transform hover:scale-105 border ${
                  item.href === activeNav
                    ? "border-cyan-300/30 text-cyan-400 bg-cyan-500/12 shadow-lg shadow-cyan-500/20"
                    : "border-transparent text-white/90 bg-transparent"
                } hover:border-cyan-300/40 hover:text-cyan-400 hover:bg-purple-500/10 hover:shadow-purple-500/20`}
              >
                <span className={`text-lg ${item.href === activeNav ? "text-cyan-400" : "text-white group-hover:text-cyan-400"}`}>
                  {item.icon}
                </span>
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={handleToggleMenu}
            className="ml-2 w-14 h-14 rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-purple-500/20 hover:scale-105 hover:shadow-lg"
          >
            {isMenuOpen ? <ExpandMoreIcon className="text-lg" /> : <ExpandLessIcon className="text-lg" />}
          </button>

          {isMenuOpen && (
            <div className="absolute top-full mt-1 bg-gray-900/96 border border-white/12 shadow-2xl backdrop-blur-xl w-[200px] rounded-2xl p-1 z-50 animate-in slide-in-from-top-2 duration-300">
              {dropdownItems.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={() => {
                    handleCloseMenu();
                    handleNavClick(item.href);
                  }}
                  className={`flex items-center gap-3 text-white/90 text-sm font-semibold py-2 px-3 rounded-lg transition-all duration-300 hover:scale-105 hover:shadow-md ${
                    idx !== dropdownItems.length - 1 ? "border-b border-white/8" : ""
                  } hover:bg-purple-500/25 hover:text-white`}
                >
                  <span className="text-lg text-white">{item.icon}</span>
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-2 min-w-fit">
          <a href="#comment" className="border border-white/15 text-white tracking-wider py-2 px-4 text-sm font-bold rounded-full transition-all duration-300 hover:bg-purple-500/20 hover:border-purple-400/40 hover:text-white hover:scale-105 hover:shadow-lg flex items-center gap-2">
            <CommentIcon className="text-lg" />
            Let&apos;s talk
          </a>
          <button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-white transition-all duration-300 hover:bg-purple-500/20 hover:scale-105 hover:shadow-lg">
            <WbSunnyIcon className="text-lg" />
          </button>
        </div>
      </div>
    </nav>
  );
}