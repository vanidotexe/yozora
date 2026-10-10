import houseIcon from '../../assets/house-solid-full.svg?url&no-inline';
import mouseIcon from '../../assets/computer-mouse-solid-full.svg?url&no-inline';
import './BottomNav.css';

export type Page = 'home' | 'peripherals';

interface NavItem {
  id: Page;
  label: string;
  icon: string;
}

const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'home', icon: houseIcon },
  { id: 'peripherals', label: 'peripherals', icon: mouseIcon }
];

interface BottomNavProps {
  active: Page;
  onChange: (page: Page) => void;
}

export default function BottomNav({ active, onChange }: BottomNavProps) {
  return (
    <nav className="bottom-nav glass" aria-label="Primary">
      {NAV_ITEMS.map(item => (
        <button
          key={item.id}
          type="button"
          className={`bottom-nav-item${item.id === active ? ' is-active' : ''}`}
          aria-current={item.id === active ? 'page' : undefined}
          onClick={() => onChange(item.id)}
        >
          <span
            className="bottom-nav-icon"
            style={{ WebkitMaskImage: `url(${item.icon})`, maskImage: `url(${item.icon})` }}
            aria-hidden="true"
          />
          {item.label}
        </button>
      ))}
    </nav>
  );
}
