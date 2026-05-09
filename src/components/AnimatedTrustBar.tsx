'use client';

import { useEffect, useRef, useState } from 'react';

const trustItems = [
  { icon: '✓', text: 'ICNZ Registered Brokers' },
  { icon: '✓', text: 'No Broker Fees' },
  { icon: '✓', text: '256-bit SSL Secure' },
  { icon: '✓', text: '24hr Quote Response' },
  { icon: '✓', text: 'Free Consultation' },
];

export default function AnimatedTrustBar() {
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
      className="bg-gradient-to-r from-slate-50 to-teal-50 border border-slate-200 rounded-lg p-4 sm:p-6"
    >
      <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
        {trustItems.map((item, idx) => (
          <div
            key={idx}
            className={`flex items-center gap-2 transition-all duration-500 transform ${
              isVisible
                ? 'opacity-100 translate-y-0'
                : 'opacity-0 translate-y-4'
            }`}
            style={{
              transitionDelay: isVisible ? `${idx * 100}ms` : '0ms',
            }}
          >
            <span className="text-teal-600 font-bold text-lg">✓</span>
            <span className="text-slate-700 font-medium text-sm sm:text-base">
              {item.text}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
