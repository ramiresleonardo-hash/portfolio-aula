import { motion } from 'framer-motion';
import { ElementType, ReactNode } from 'react';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  y?: number;
  as?: ElementType;
  className?: string;
}

const EASE: [number, number, number, number] = [0.25, 0.1, 0.25, 1];

export default function FadeIn({
  children,
  delay = 0,
  duration = 0.6,
  y = 24,
  as = 'div',
  className = '',
}: FadeInProps) {
  const MotionTag = motion.create(as as ElementType);

  return (
    <MotionTag
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '60px', amount: 0.1 }}
      transition={{ delay, duration, ease: EASE }}
    >
      {children}
    </MotionTag>
  );
}
