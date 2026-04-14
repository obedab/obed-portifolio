"use client";
import { useState, MouseEvent } from "react";
import {
  Home as HomeIcon,
  Person as PersonIcon,
  Lightbulb as LightbulbIcon,
  Work as WorkIcon,
  Send as SendIcon,
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
  { name: "Home", href: "#home", icon: <HomeIcon fontSize="small" /> },
  { name: "About", href: "#about", icon: <PersonIcon fontSize="small" /> },
  { name: "Skills", href: "#skills", icon: <LightbulbIcon fontSize="small" /> },
  { name: "Experience", href: "#experience", icon: <WorkIcon fontSize="small" /> },
];

const dropdownItems = [
  { name: "Projects", icon: <GridViewIcon fontSize="small" /> },
  { name: "Certifications", icon: <EmojiEventsIcon fontSize="small" /> },
  { name: "Achievements", icon: <StarsIcon fontSize="small" /> },
  { name: "Location", icon: <LocationOnIcon fontSize="small" /> },
  { name: "Connect", icon: <PersonAddIcon fontSize="small" /> },
];

export default function Navbar() {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const isMenuOpen = Boolean(anchorEl);

  const handleToggleMenu = (event: MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleCloseMenu = () => setAnchorEl(null);

  const allItems = [...navItems, ...dropdownItems];

  return (
    <nav className="fixed top-0 left-0 right-0 w-full bg-transparent border-none shadow-none z-50">
      <div className="px-2 md:px-6 py-2 flex justify-center items-center gap-4 max-w-6xl mx-auto">
        {/* Logo */}
        <div className="flex items-center gap-3 min-w-fit">
          <div className="w-11 h-11 rounded-full border-2 border-cyan-300/30 bg-cyan-500/8 text-cyan-400 flex items-center justify-center font-extrabold text-xl shadow-lg shadow-cyan-500/15">
            O
          </div>
          <span className="text-white/90 text-sm font-semibold whitespace-nowrap">
            <span className="text-cyan-400 font-extrabold">Obed ABIRAGIYE</span> | Portfolio
          </span>
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="md:hidden ml-2 w-11 h-11 rounded-full border border-white/10 bg-white/5 text-white transition-all duration-250 hover:bg-purple-500/20"
          >
            {mobileMenuOpen ? <ExpandMoreIcon className="text-2xl" /> : <ExpandLessIcon className="text-2xl" />}
          </button>

          {mobileMenuOpen && (
            <div className="md:hidden absolute top-full mt-1 left-0 bg-gray-900/96 border border-white/12 shadow-2xl backdrop-blur-xl min-w-[220px] rounded-2xl p-1.5 z-50">
              {allItems.map((item, idx) => (
                <a
                  key={item.name}
                  href={item.href || "#"}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 text-white/90 text-sm font-semibold py-3 px-3 rounded-lg transition-all duration-250 ${
                    idx !== allItems.length - 1 ? "border-b border-white/8" : ""
                  } hover:bg-purple-500/25 hover:text-purple-400`}
                >
                  <span className="text-purple-400">{item.icon}</span>
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Nav Items + Dropdown */}
        <div className="hidden md:flex items-center gap-0 flex-1 justify-center">
          <div className="flex gap-2 p-2.5 px-4.5 rounded-full border border-white/10 bg-white/5 max-w-[760px] justify-center">
            {navItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                className={`px-2.5 py-1.2 flex items-center gap-1 rounded-full uppercase tracking-widest text-xs font-bold transition-all duration-250 ${
                  item.href === "#home"
                    ? "text-cyan-400 bg-cyan-500/12 border border-cyan-300/30 shadow-lg shadow-cyan-500/20"
                    : "text-white/28 bg-transparent border-none"
                } hover:bg-purple-500/20 hover:border-purple-400/35 hover:text-purple-400`}
              >
                {item.icon}
                {item.name}
              </a>
            ))}
          </div>

          <button
            onClick={handleToggleMenu}
            className="ml-1 w-11 h-11 rounded-full border border-white/10 bg-white/5 text-white transition-all duration-250 hover:bg-purple-500/20"
          >
            {isMenuOpen ? <ExpandMoreIcon className="text-2xl" /> : <ExpandLessIcon className="text-2xl" />}
          </button>

          {isMenuOpen && (
            <div className="absolute top-full mt-1 bg-gray-900/96 border border-white/12 shadow-2xl backdrop-blur-xl min-w-[220px] rounded-2xl p-1.5 z-50">
              {dropdownItems.map((item, idx) => (
                <a
                  key={item.name}
                  href="#"
                  onClick={handleCloseMenu}
                  className={`flex items-center gap-3 text-white/90 text-sm font-semibold py-3 px-3 rounded-lg transition-all duration-250 ${
                    idx !== dropdownItems.length - 1 ? "border-b border-white/8" : ""
                  } hover:bg-purple-500/25 hover:text-purple-400`}
                >
                  <span className="text-purple-400">{item.icon}</span>
                  {item.name}
                </a>
              ))}
            </div>
          )}
        </div>

        {/* Action Buttons */}
        <div className="flex items-center gap-1 min-w-fit">
          <button className="border border-white/15 text-white/90 uppercase tracking-wider py-1 px-2.5 text-xs font-bold rounded-full transition-all duration-250 hover:bg-purple-500/20 hover:border-purple-400/40 hover:text-purple-400 flex items-center gap-1">
            <SendIcon className="text-lg" />
            Let&apos;s talk
          </button>
          <button className="w-11 h-11 rounded-full border border-white/10 bg-white/5 text-white transition-all duration-250 hover:bg-purple-500/20">
            <WbSunnyIcon className="text-xl" />
          </button>
        </div>
      </div>
    </nav>
  );
}