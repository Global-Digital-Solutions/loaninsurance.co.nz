'use client';

import { Shield, CheckCircle2, Lock, Zap, MessageCircle } from 'lucide-react';

interface TrustBannerProps {
  variant?: 'light' | 'dark' | 'gradient';
}

const trustItems = [
  { icon: Shield, text: 'ICNZ Registered Brokers' },
  { icon: CheckCircle2, text: 'No Broker Fees' },
  { icon: Lock, text: '256-bit SSL Secure' },
  { icon: Zap, text: '24hr Quote Response' },
  { icon: MessageCircle, text: 'Free Consultation' },
];

export default function TrustBanner({ variant = 'gradient' }: TrustBannerProps) {
  if (variant === 'dark') {
    return (
      <div className="bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-teal-400" />
                  <span className="text-sm font-semibold text-white">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  if (variant === 'light') {
    return (
      <div className="bg-white border-y border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
          <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
            {trustItems.map((item, idx) => {
              const Icon = item.icon;
              return (
                <div key={idx} className="flex items-center gap-2">
                  <Icon className="w-4 h-4 text-teal-600" />
                  <span className="text-sm font-semibold text-slate-800">{item.text}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    );
  }

  // gradient variant (default)
  return (
    <div className="bg-gradient-to-r from-sky-600 to-teal-500">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex flex-wrap justify-center gap-x-8 gap-y-3">
          {trustItems.map((item, idx) => {
            const Icon = item.icon;
            return (
              <div key={idx} className="flex items-center gap-2">
                <Icon className="w-4 h-4 text-white/90" />
                <span className="text-sm font-semibold text-white">{item.text}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
