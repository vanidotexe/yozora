import sunIcon from '../../assets/sun-solid-full.svg?url&no-inline';
import moonIcon from '../../assets/moon-solid-full.svg?url&no-inline';
import { useTheme } from '../../hooks/useTheme';
import './ThemeToggle.css';

export default function ThemeToggle() {
  const [theme, setTheme] = useTheme();
  const next = theme === 'dark' ? 'light' : 'dark';
  const icon = theme === 'dark' ? moonIcon : sunIcon;

  return (
    <button
      type="button"
      className="theme-toggle glass"
      onClick={() => setTheme(next)}
      aria-label={`Switch to ${next} theme`}
    >
      <span
        className="theme-toggle-icon"
        style={{ WebkitMaskImage: `url(${icon})`, maskImage: `url(${icon})` }}
        aria-hidden="true"
      />
    </button>
  );
}
