import { ReactNode, useState } from 'react';

interface DropdownItem {
  name: string;
  icon: ReactNode;
  onClick?: () => void;
}

interface DropdownProps {
  trigger: ReactNode;
  items: DropdownItem[];
  className?: string;
}

export default function Dropdown({ trigger, items, className = '' }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);

  const handleToggle = () => setIsOpen(!isOpen);
  const handleClose = () => setIsOpen(false);

  return (
    <div className={`relative ${className}`}>
      <div onClick={handleToggle}>
        {trigger}
      </div>

      {isOpen && (
        <>
          <div
            className="fixed inset-0 z-10"
            onClick={handleClose}
          />
          <div className="absolute right-0 top-full mt-2 z-20 bg-gray-900/95 border border-white/10 rounded-lg shadow-2xl backdrop-blur-xl min-w-56 overflow-hidden">
            {items.map((item, idx) => (
              <button
                key={item.name}
                onClick={() => {
                  item.onClick?.();
                  handleClose();
                }}
                className={`w-full flex items-center gap-4 px-5 py-4 text-white/90 hover:bg-violet-500/15 hover:text-violet-100 transition-colors duration-200 text-left font-medium ${
                  idx !== items.length - 1 ? 'border-b border-white/5' : ''
                }`}
              >
                <div className="flex items-center justify-center text-violet-400">
                  {item.icon}
                </div>
                <span className="text-md">{item.name}</span>
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}