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
  const isDark = theme === 'dark' || theme === 'monochrome-white';
  const isMono = theme === 'monochrome-white' || theme === 'monochrome-black';

  const textColor = isMono
    ? theme === 'monochrome-white' ? '#FFFFFF' : '#07080B'
    : isDark ? '#FFFFFF' : '#07080B';

  const accentColor = isMono
    ? textColor
    : '#B91C1C'; // Bordeaux / Crimson Carmine

  const accentGradId = `e10-lux-grad-${theme}`;
  const badgeBg = isDark ? '#0D0F15' : '#F8FAFC';
  const badgeBorder = isDark ? '#222735' : '#E2E8F0';

  const sizeScales = {
    sm: { icon: 34, titleSize: 18, numSize: 20 },
    md: { icon: 42, titleSize: 22, numSize: 24 },
    lg: { icon: 54, titleSize: 28, numSize: 32 },
    xl: { icon: 70, titleSize: 36, numSize: 42 },
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
        aria-label="Espaço 10 Monograma Editorial E10"
      >
        <defs>
          <linearGradient id={accentGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#C5162E" />
            <stop offset="100%" stopColor="#991B1B" />
          </linearGradient>
        </defs>
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          rx="26"
          fill={badgeBg}
          stroke={badgeBorder}
          strokeWidth="1.5"
        />
        <circle
          cx="50"
          cy="50"
          r="41"
          stroke={accentColor}
          strokeWidth="0.8"
          strokeDasharray="2 3"
          opacity="0.5"
        />
        <text
          x="32"
          y="65"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="44"
          fontWeight="700"
          fill={textColor}
          textAnchor="middle"
        >
          E
        </text>
        <text
          x="68"
          y="65"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="40"
          fontWeight="700"
          fontStyle="italic"
          fill={isMono ? textColor : `url(#${accentGradId})`}
          textAnchor="middle"
        >
          10
        </text>
        <line x1="26" y1="76" x2="74" y2="76" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    );
  }

  if (variant === 'stacked') {
    return (
      <div className={`flex flex-col items-center justify-center text-center ${className}`}>
        <div className="mb-2">
          <Espaco10Logo variant="icon" theme={theme} size={size} />
        </div>
        <div className="flex items-baseline gap-2">
          <span
            className="font-serif font-bold tracking-[0.2em] uppercase"
            style={{ color: textColor, fontSize: scale.titleSize }}
          >
            ESPAÇO
          </span>
          <span
            className="font-serif italic font-bold tracking-wider"
            style={{
              color: isMono ? textColor : '#C5162E',
              fontSize: scale.numSize,
            }}
          >
            10
          </span>
        </div>
        {showTagline && (
          <span
            className="tracking-[0.3em] font-sans font-medium text-[8.5px] uppercase mt-1 opacity-70"
            style={{ color: textColor }}
          >
            HAUTE MODE • DESDE 2007
          </span>
        )}
      </div>
    );
  }

  // Default: Horizontal Luxury Logo
  return (
    <div className={`inline-flex items-center gap-3 select-none ${className}`}>
      {/* Monogram Seal */}
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
            <stop offset="0%" stopColor="#C5162E" />
            <stop offset="100%" stopColor="#991B1B" />
          </linearGradient>
        </defs>
        <rect
          x="3"
          y="3"
          width="94"
          height="94"
          rx="26"
          fill={badgeBg}
          stroke={badgeBorder}
          strokeWidth="1.5"
        />
        <circle
          cx="50"
          cy="50"
          r="41"
          stroke={accentColor}
          strokeWidth="0.8"
          strokeDasharray="2 3"
          opacity="0.5"
        />
        <text
          x="32"
          y="65"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="44"
          fontWeight="700"
          fill={textColor}
          textAnchor="middle"
        >
          E
        </text>
        <text
          x="68"
          y="65"
          fontFamily="'Playfair Display', Georgia, serif"
          fontSize="40"
          fontWeight="700"
          fontStyle="italic"
          fill={isMono ? textColor : `url(#${accentGradId})`}
          textAnchor="middle"
        >
          10
        </text>
        <line x1="26" y1="76" x2="74" y2="76" stroke={accentColor} strokeWidth="1.5" strokeLinecap="round" />
      </svg>

      {/* Haute Couture Typography & Subtitle */}
      <div className="flex flex-col justify-center text-left">
        <div className="flex items-baseline gap-1.5 leading-none">
          <span
            className="font-serif font-bold tracking-[0.22em] uppercase"
            style={{
              color: textColor,
              fontSize: scale.titleSize,
              fontFamily: "'Playfair Display', 'Cormorant Garamond', Georgia, serif",
            }}
          >
            ESPAÇO
          </span>
          <span
            className="font-serif italic font-bold tracking-tight"
            style={{
              color: isMono ? textColor : '#C5162E',
              fontSize: scale.numSize,
              fontFamily: "'Playfair Display', Georgia, serif",
            }}
          >
            10
          </span>
        </div>

        {showTagline && (
          <span
            className="text-[8.5px] tracking-[0.3em] font-sans font-medium uppercase mt-1 opacity-70"
            style={{ color: textColor }}
          >
            Planaltina-GO • Est. 2007
          </span>
        )}
      </div>
    </div>
  );
};
