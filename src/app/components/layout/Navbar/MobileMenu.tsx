import { NavItem } from "./types";

interface Props {
  items: NavItem[];
  open: boolean;
  onNavClick: (href: string) => void;
}

export default function MobileMenu({
  items,
  open,
  onNavClick,
}: Props) {
  if (!open) return null;

  return (
    <div className="md:hidden absolute top-full mt-1 right-0 bg-gray-900/96 border border-white/12 shadow-2xl backdrop-blur-xl w-[200px] rounded-2xl p-1 z-50">
      {items.map((item, idx) => (
        <a
          key={item.name}
          href={item.href}
          onClick={() => onNavClick(item.href)}
          className={`flex items-center gap-3 text-current opacity-90 text-sm font-semibold py-2 px-3 rounded-lg transition-all duration-300 ${
            idx !== items.length - 1
              ? "border-b border-white/8"
              : ""
          }`}
        >
          <span>{item.icon}</span>
          {item.name}
        </a>
      ))}
    </div>
  );
}