'use client';

import { useState, useEffect, useRef } from 'react';

interface Stat {
  value: string;
  label: string;
}

const stats: Stat[] = [
  { value: '$3.9B', label: 'NZ Life Insurance Market' },
  { value: '31+', label: 'Life Insurers in NZ' },
  { value: '$3.8B', label: 'Claims Paid Annually' },
  { value: '95%', label: 'Market via ICNZ Members' },
];

function AnimatedCounter({ value, label, isVisible }: { value: string; label: string; isVisible: boolean }) {
  const [displayValue, setDisplayValue] = useState('0');
  const countRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!isVisible) return;

    const numericValue = parseInt(value.replace(/[^\d]/g, ''));
    const suffixes = value.match(/[^\d]+$/)?.[0] || '';

    let current = 0;
    const increment = Math.ceil(numericValue / 50);
    const interval = setInterval(() => {
      current += increment;
      if (current >= numericValue) {
        setDisplayValue(numericValue + suffixes);
        clearInterval(interval);
      } else {
        setDisplayValue(current + suffixes);
      }
    }, 30);

    return () => clearInterval(interval);
  }, [isVisible, value]);

  return (
    <div className="text-center">
      <div
        ref={countRef}
        className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-sky-600 to-teal-500 bg-clip-text text-transparent"
      >
        {displayValue}
      </div>
      <p className="text-slate-600 font-medium mt-2 text-sm sm:text-base">{label}</p>
    </div>
  );
}

export default function AnimatedStats() {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.3 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <div
      ref={containerRef}
      className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 py-8 sm:py-12"
    >
      {stats.map((stat, idx) => (
        <AnimatedCounter
          key={idx}
          value={stat.value}
          label={stat.label}
          isVisible={isVisible}
        />
      ))}
    </div>
  );
}
