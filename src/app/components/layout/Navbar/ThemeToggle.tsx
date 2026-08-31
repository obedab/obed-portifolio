import {
  WbSunny as WbSunnyIcon,
  DarkMode as DarkModeIcon,
} from "@mui/icons-material";

interface Props {
  isLight: boolean;
  toggleTheme: () => void;
}

export default function ThemeToggle({
  isLight,
  toggleTheme,
}: Props) {
  return (
    <button
      onClick={toggleTheme}
      className="w-12 h-12 rounded-full border border-white/10 bg-white/5 text-current"
    >
      {isLight ? (
        <WbSunnyIcon className="text-lg" />
      ) : (
        <DarkModeIcon className="text-lg" />
      )}
    </button>
  );
}