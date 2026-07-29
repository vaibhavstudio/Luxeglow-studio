import React, { useState } from 'react';

interface SafeImageProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
  src: string;
  alt: string;
  className?: string;
}

const DEFAULT_FALLBACK = 'https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&fit=crop&q=80&w=800';

export function SafeImage({ src, fallbackSrc = DEFAULT_FALLBACK, alt, className, ...props }: SafeImageProps) {
  const [imgSrc, setImgSrc] = useState(src);
  const [hasError, setHasError] = useState(false);

  return (
    <img
      src={imgSrc || fallbackSrc}
      alt={hasError ? "Image unavailable" : alt}
      onError={() => {
        if (!hasError) {
          setImgSrc(fallbackSrc);
          setHasError(true);
        }
      }}
      className={className}
      loading="lazy"
      {...props}
    />
  );
}
