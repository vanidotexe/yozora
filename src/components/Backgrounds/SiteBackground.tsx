import { lazy, Suspense, useMemo } from 'react';
import { useTheme } from '../../hooks/useTheme';
import { cssVar } from '../../utils/cssVar';
import './SiteBackground.css';

const GhostFibers = lazy(() => import('./GhostFibers/GhostFibers'));

export default function SiteBackground() {
  const [theme] = useTheme();
  const isLight = theme === 'light';

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const lineColor = useMemo(() => (isLight ? cssVar('--color-accent-hover') : undefined), [theme]);
  // eslint-disable-next-line react-hooks/exhaustive-deps
  const glowColor = useMemo(() => cssVar('--color-accent'), [theme]);

  return (
    <div className="site-background" aria-hidden="true">
      <Suspense fallback={null}>
        <GhostFibers
          lightMode={isLight}
          lineColor={lineColor}
          glowColor={glowColor}
          layers={isLight ? 6 : undefined}
          lineSharpness={isLight ? 10 : undefined}
          vignette={isLight ? 0.4 : undefined}
          lightInkStrength={isLight ? 0.65 : undefined}
          lightBackdrop={isLight ? '#eeecee' : undefined}
        />
      </Suspense>
    </div>
  );
}
