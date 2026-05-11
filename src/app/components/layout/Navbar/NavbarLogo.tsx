interface Props {
  mobileMenuOpen: boolean;
  toggleMobileMenu: () => void;
}

export default function NavbarLogo({
  mobileMenuOpen,
  toggleMobileMenu,
}: Props) {
  return (
    <div className="relative flex items-center gap-4 min-w-fit">
      <div className="w-12 h-12 rounded-full border-2 border-white-300/30 bg-slate-950 text-cyan-400 flex items-center justify-center font-extrabold text-2xl shadow-lg shadow-cyan-500/15 hover:shadow-cyan-500/30 transition-all duration-300 hover:scale-110">
        O
      </div>

      <span className="text-current opacity-90 text-lg font-black text-gray-800 whitespace-nowrap">
        <span className="text-cyan-600 font-black">
          Obed ABIRAGIYE
        </span>{" "}
        | Portfolio
      </span>

      <button
        onClick={toggleMobileMenu}
        className="md:hidden ml-3 w-12 h-12 rounded-full border border-white/10 bg-white/5"
      >
        {mobileMenuOpen ? "−" : "+"}
      </button>
    </div>
  );
}