import React from 'react';
import { useInView } from 'react-intersection-observer';
import { motion, AnimatePresence } from 'framer-motion';

interface LazyImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
}

export default function LazyImage({ 
  src, 
  alt, 
  className,
  width,
  height,
  priority = false 
}: LazyImageProps) {
  const [ref, inView] = useInView({
    triggerOnce: true,
    rootMargin: '50px 0px',
    skip: priority // 優先度が高い画像はスキップ
  });

  const aspectRatio = width && height ? `aspect-ratio: ${width}/${height};` : '';

  return (
    <div 
      ref={ref} 
      className={`relative overflow-hidden ${className}`}
      style={{ aspectRatio }}
    >
      <AnimatePresence>
        {(inView || priority) ? (
          <motion.img
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            src={src}
            alt={alt}
            width={width}
            height={height}
            className={`w-full h-full object-cover ${className}`}
            loading={priority ? 'eager' : 'lazy'}
            decoding="async"
          />
        ) : (
          <motion.div
            initial={{ opacity: 0.2 }}
            animate={{ opacity: 0.1 }}
            exit={{ opacity: 0 }}
            className={`w-full h-full bg-gray-200 animate-pulse ${className}`}
          />
        )}
      </AnimatePresence>
    </div>
  );
}