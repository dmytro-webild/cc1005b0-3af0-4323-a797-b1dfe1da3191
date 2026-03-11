import React from 'react';

interface SvgTextLogoProps {
  text: string;
  className?: string;
  fontSize?: number;
  fontWeight?: number | string;
  fill?: string;
  textAnchor?: 'start' | 'middle' | 'end';
  dominantBaseline?: 'middle' | 'hanging' | 'central';
  letterSpacing?: number;
  id?: string;
}

const SvgTextLogo: React.FC<SvgTextLogoProps> = ({
  text,
  className = '',
  fontSize = 24,
  fontWeight = 700,
  fill = 'currentColor',
  textAnchor = 'middle',
  dominantBaseline = 'middle',
  letterSpacing = 0,
  id,
}) => {
  return (
    <svg
      viewBox={`0 0 ${text.length * fontSize} ${fontSize * 1.5}`}
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={text}
    >
      <text
        x="50%"
        y="50%"
        fontSize={fontSize}
        fontWeight={fontWeight}
        fill={fill}
        textAnchor={textAnchor}
        dominantBaseline={dominantBaseline}
        letterSpacing={letterSpacing}
        id={id}
        fontFamily="inherit"
      >
        {text}
      </text>
    </svg>
  );
};

export default SvgTextLogo;