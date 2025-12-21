import { ReactNode } from 'react';

interface SectionProps {
  children: ReactNode;
  className?: string;
  background?: 'white' | 'gray';
  padding?: 'sm' | 'md' | 'lg' | 'xl';
  id?: string;
}

export default function Section({
  children,
  className = '',
  background = 'white',
  padding = 'lg',
  id,
}: SectionProps) {
  const backgrounds = {
    white: 'bg-gradient-to-b from-gray-50 to-white dark:from-[#0d2137] dark:to-[#0a1929]',
    gray: 'bg-gradient-to-b from-white to-gray-50 dark:from-[#0a1929] dark:to-[#0d2137]',
  };

  const paddings = {
    sm: 'py-12 lg:py-16',
    md: 'py-16 lg:py-24',
    lg: 'py-20 lg:py-32',
    xl: 'py-24 lg:py-40',
  };

  return (
    <section
      id={id}
      className={`${backgrounds[background]} ${paddings[padding]} ${className}`}
    >
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
