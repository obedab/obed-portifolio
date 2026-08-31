interface LogoProps {
  className?: string;
}

export default function Logo({ className = '' }: LogoProps) {
  return (
    <div className={`flex items-center gap-3 ${className}`}>
      <div className="w-14 h-14 rounded-full border border-white/12 bg-white/6 text-cyan-200 flex items-center justify-center font-bold shadow-lg shadow-cyan-500/10">
        O
      </div>
      <div className="text-white/85 font-bold  tracking-widest md:text-8xl">
        <span className="text-cyan-200 font-black mr-1">Obed ABIRAGIYE</span>
        | Portfolio
      </div>
    </div>
  );
}