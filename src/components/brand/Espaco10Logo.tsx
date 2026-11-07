import React from 'react';

interface Espaco10LogoProps {
  variant?: 'horizontal' | 'stacked' | 'icon' | 'badge';
  theme?: 'dark' | 'light' | 'monochrome-white' | 'monochrome-black';
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showTagline?: boolean;
  className?: string;
}

export const Espaco10Logo: React.FC<Espaco10LogoProps> = ({
  variant = 'horizontal',
  theme = 'dark',
  size = 'md',
  showTagline = true,
  className = '',
}) => {
  // Determine color scheme
  const isDark = theme === 'dark' || theme === 'monochrome-white';
  const isMono = theme === 'monochrome-white' || theme === 'monochrome-black';

  const textColor = isMono
    ? theme === 'monochrome-white' ? '#FFFFFF' : '#0B0C10'
    : isDark ? '#FFFFFF' : '#0B0C10';

  const accentColor = isMono
    ? textColor
    : '#E11D48'; // Scarlet / Carmine Red

  const accentGradId = `e10-grad-${theme}`;
  const badgeBg = isDark ? '#12141A' : '#F3F4F6';
  const badgeBorder = isDark ? '#232834' : '#E5E7EB';

  // Size scaling
  const sizeScales = {
    sm: { width: 140, height: 38, icon: 34 },
    md: { width: 190, height: 48, icon: 44 },
    lg: { width: 240, height: 62, icon: 56 },
    xl: { width: 310, height: 80, icon: 72 },
  };

  const scale = sizeScales[size] || sizeScales.md;

  if (variant === 'icon' || variant === 'badge') {
    return (
      <svg
        viewBox="0 0 100 100"
        width={scale.icon}
        height={scale.icon}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className={`transition-transform duration-300 hover:scale-105 ${className}`}
        aria-label="Espaço 10 Ícone Monograma E10"
      >
        <defs>
          <linearGradient id={accentGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E11D48" />
            <stop offset="100%" stopColor="#BE123C" />
          </linearGradient>
        </defs>
        {/* Background Squircle */}
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          rx="22"
          fill={badgeBg}
          stroke={badgeBorder}
          strokeWidth="2.5"
        />
        {/* Architectural E */}
        <path
          d="M 23 26 H 49 V 35 H 34 V 45 H 47 V 53 H 34 V 63 H 49 V 72 H 23 Z"
          fill={textColor}
        />
        {/* Architectural 1 */}
        <path
          d="M 54 36 L 62 26 H 69 V 72 H 59 V 40 L 54 44 Z"
          fill={isMono ? textColor : `url(#${accentGradId})`}
        />
        {/* Architectural 0 */}
        <path
          d="M 73 39 C 73 30 78 26 85 26 C 92 26 97 30 97 39 V 59 C 97 68 92 72 85 72 C 78 72 73 68 73 59 Z M 82 41 V 57 C 82 62 83 64 85 64 C 87 64 88 62 88 57 V 41 C 88 36 87 34 85 34 C 83 34 82 36 82 41 Z"
          fill={textColor}
        />
        {/* Subtle accent bar */}
        <rect x="23" y="80" width="74" height="3" rx="1.5" fill={accentColor} />
      </svg>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${className}`}>
        {/* Icon */}
        <div className="mb-2">
          <Espaco10Logo variant="icon" theme={theme} size={size} />
        </div>
        {/* Wordmark */}
        <div className="flex items-center gap-2">
          <span
            className="font-extrabold tracking-[0.2em] font-heading"
            style={{ color: textColor, fontSize: size === 'sm' ? 18 : size === 'md' ? 22 : 28 }}
          >
            ESPAÇO
          </span>
          <span
            className="px-2 py-0.5 rounded text-white font-black font-heading tracking-wider shadow-sm"
            style={{
              backgroundColor: isMono ? textColor : '#E11D48',
              color: isMono ? (theme === 'monochrome-white' ? '#000' : '#fff') : '#ffffff',
              fontSize: size === 'sm' ? 16 : size === 'md' ? 20 : 26,
            }}
          >
            10
          </span>
        </div>
        {showTagline && (
          <span
            className="tracking-[0.25em] font-semibold text-[9px] uppercase mt-1 opacity-70"
            style={{ color: textColor }}
          >
            Moda Feminina &amp; Masculina • 17 Anos
          </span>
        )}
      </div>
    );
  }

  // Default: Horizontal Logo
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Insignia E10 */}
      <svg
        viewBox="0 0 100 100"
        width={scale.icon}
        height={scale.icon}
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        className="flex-shrink-0"
        aria-hidden="true"
      >
        <defs>
          <linearGradient id={accentGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#E11D48" />
            <stop offset="100%" stopColor="#BE123C" />
          </linearGradient>
        </defs>
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          rx="22"
          fill={badgeBg}
          stroke={badgeBorder}
          strokeWidth="2.5"
        />
        <path
          d="M 23 26 H 49 V 35 H 34 V 45 H 47 V 53 H 34 V 63 H 49 V 72 H 23 Z"
          fill={textColor}
        />
        <path
          d="M 54 36 L 62 26 H 69 V 72 H 59 V 40 L 54 44 Z"
          fill={isMono ? textColor : `url(#${accentGradId})`}
        />
        <path
          d="M 73 39 C 73 30 78 26 85 26 C 92 26 97 30 97 39 V 59 C 97 68 92 72 85 72 C 78 72 73 68 73 59 Z M 82 41 V 57 C 82 62 83 64 85 64 C 87 64 88 62 88 57 V 41 C 88 36 87 34 85 34 C 83 34 82 36 82 41 Z"
          fill={textColor}
        />
        <rect x="23" y="80" width="74" height="3" rx="1.5" fill={accentColor} />
      </svg>

      {/* Brand Typography & Tagline */}
      <div className="flex flex-col justify-center">
        <div className="flex items-center gap-1.5 leading-none">
          <span
            className="font-extrabold tracking-[0.16em] font-heading uppercase"
            style={{
              color: textColor,
              fontSize: size === 'sm' ? 18 : size === 'md' ? 22 : size === 'lg' ? 28 : 34,
            }}
          >
            ESPAÇO
          </span>
          <span
            className="px-1.5 py-0.5 rounded text-white font-black font-heading tracking-wide transition-transform hover:scale-105"
            style={{
              backgroundColor: isMono ? textColor : '#E11D48',
              color: isMono ? (theme === 'monochrome-white' ? '#000' : '#fff') : '#ffffff',
              fontSize: size === 'sm' ? 16 : size === 'md' ? 20 : size === 'lg' ? 25 : 30,
            }}
          >
            10
          </span>
        </div>

        {showTagline && (
          <span
            className="text-[9px] tracking-[0.24em] font-medium uppercase mt-1 opacity-70"
            style={{ color: textColor }}
          >
            Planaltina-GO • Est. 2007
          </span>
        )}
      </div>
    </div>
  );
};
