import React from 'react'
import ExportedImage from 'next-image-export-optimizer'

interface BackgroundImageProps {
  src: string
  alt?: string
  className?: string
  style?: React.CSSProperties
  children?: React.ReactNode
}

export const BackgroundImage: React.FC<BackgroundImageProps> = ({
  src,
  alt = '',
  className = '',
  style = {},
  children,
}) => {
  // Extract background-specific styles
  const { backgroundSize, backgroundPosition, ...otherStyles } = style as any;
  
  return (
    <div className={`relative ${className}`} style={otherStyles}>
      <ExportedImage
        src={src}
        alt={alt}
        fill
        style={{ 
          objectFit: 'cover', 
          zIndex: 0,
          objectPosition: backgroundPosition || 'center',
        }}
        sizes={backgroundSize || '100%'}
        className="absolute inset-0"
      />
      <div className="relative z-10">
        {children}
      </div>
    </div>
  )
}
