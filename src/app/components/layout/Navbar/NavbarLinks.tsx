import { NavItem } from "./types";

interface Props {
  items: NavItem[];
  activeNav: string;
  onNavClick: (href: string) => void;
}

export default function NavbarLinks({
  items,
  activeNav,
  onNavClick,
}: Props) {
  return (
    <div className="flex gap-3 p-3 px-6 rounded-full border border-white/10 bg-white/5 max-w-[800px] justify-center shadow-lg">
      {items.map((item) => (
        <a
          key={item.name}
          href={item.href}
          onClick={() => onNavClick(item.href)}
          className={`group px-4 py-2 flex items-center gap-2 rounded-full tracking-widest text-sm font-bold transition-all duration-300 border ${
            item.href === activeNav
              ? "border-cyan-300/30 text-cyan-400 bg-cyan-500/12"
              : "border-transparent text-current opacity-90"
          }`}
        >
          <span>{item.icon}</span>
          {item.name}
        </a>
      ))}
    </div>
  );
}