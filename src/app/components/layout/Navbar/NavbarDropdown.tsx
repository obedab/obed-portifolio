import { NavItem } from "./types";

interface Props {
  items: NavItem[];
  open: boolean;
  onClose: () => void;
  onNavClick: (href: string) => void;
}

export default function NavbarDropdown({
  items,
  open,
  onClose,
  onNavClick,
}: Props) {
  if (!open) return null;

  return (
    <div
      className="absolute top-full mt-1 shadow-2xl backdrop-blur-xl w-[200px] rounded-2xl p-1 z-50"
      style={{
        backgroundColor: 'hsl(var(--card))',
        border: '1px solid hsl(var(--border))',
        color: 'var(--foreground)'
      }}
    >
      {items.map((item, idx) => (
        <a
          key={item.name}
          href={item.href}
          onClick={() => {
            onClose();
            onNavClick(item.href);
          }}
          className={`flex items-center gap-3 text-current text-sm font-semibold py-2 px-3 rounded-lg transition-all duration-300 ${
            idx !== items.length - 1 ? 'border-b' : ''
          }`}
          style={
            idx !== items.length - 1
              ? { borderBottomColor: 'hsl(var(--border) / 0.08)' }
              : undefined
          }
        >
          <span>{item.icon}</span>
          {item.name}
        </a>
      ))}
    </div>
  );
}