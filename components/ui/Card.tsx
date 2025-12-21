'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

interface CardProps {
  children: ReactNode;
  className?: string;
  hover?: boolean;
  delay?: number;
}

export default function Card({
  children,
  className = '',
  hover = true,
  delay = 0,
}: CardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-100px' }}
      transition={{
        duration: 0.6,
        delay,
        ease: [0.4, 0, 0.2, 1],
      }}
      whileHover={hover ? { y: -8, transition: { duration: 0.2 } } : {}}
      className={`
        bg-white dark:bg-[#0d2137] rounded-2xl p-8 border border-gray-200/50 dark:border-blue-900/30
        ${hover ? 'hover:shadow-xl hover:border-gray-300/50 dark:hover:border-blue-800/50' : 'shadow-sm'}
        transition-all duration-300
        ${className}
      `}
    >
      {children}
    </motion.div>
  );
}
