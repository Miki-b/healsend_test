import React from 'react';
import { motion } from 'framer-motion';
import { Battery, BatteryLow } from 'lucide-react';

const options = [
  {
    id: 'strong',
    tag: null,
    icon: Battery,
    title: 'Still going strong',
    subtitle: 'My energy stays consistent throughout the day',
    color: 'emerald'
  },
  {
    id: 'wall',
    tag: 'Energy',
    icon: BatteryLow,
    title: 'I hit a wall',
    subtitle: 'The afternoon crash is real and frustrating',
    color: 'amber'
  }
];

export default function CrashScreen({ onSelect }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-12"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6 border border-emerald-500/20">
          Step 2 of 3
        </span>
        <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
          How do you feel at <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">3:00 PM</span>?
        </h1>
        <p className="text-slate-400 text-lg max-w-md mx-auto">
          Your afternoon energy tells us a lot about your cellular health
        </p>
      </motion.div>

      {/* Time indicator */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="mb-10"
      >
        <div className="relative w-32 h-32 rounded-full bg-slate-800/50 border border-slate-700/50 flex items-center justify-center">
          <div className="absolute inset-2 rounded-full bg-gradient-to-br from-slate-800 to-slate-900 flex items-center justify-center">
            <span className="text-3xl font-light text-white">3:00</span>
          </div>
          {/* Clock hands */}
          <div className="absolute w-0.5 h-8 bg-white/80 origin-bottom" style={{ transform: 'rotate(0deg) translateY(-50%)' }} />
          <div className="absolute w-0.5 h-6 bg-emerald-400 origin-bottom" style={{ transform: 'rotate(90deg) translateY(-50%)' }} />
        </div>
      </motion.div>

      <div className="w-full max-w-lg space-y-4">
        {options.map((option, index) => (
          <motion.button
            key={option.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            onClick={() => onSelect(option.tag)}
            className="w-full group relative"
          >
            <div className={`absolute inset-0 ${option.color === 'emerald' ? 'bg-emerald-500/20' : 'bg-amber-500/20'} rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
            <div className="relative flex items-center gap-5 p-6 rounded-2xl bg-slate-800/50 border border-slate-700/50 hover:border-slate-600 hover:bg-slate-800/80 transition-all duration-300">
              <div className={`flex-shrink-0 w-14 h-14 rounded-xl ${option.color === 'emerald' ? 'bg-gradient-to-br from-emerald-400 to-teal-500' : 'bg-gradient-to-br from-amber-400 to-orange-500'} flex items-center justify-center shadow-lg`}>
                <option.icon className="w-7 h-7 text-white" />
              </div>
              <div className="text-left flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">{option.title}</h3>
                <p className="text-slate-400 text-sm">{option.subtitle}</p>
              </div>
              <div className="flex-shrink-0 w-8 h-8 rounded-full bg-slate-700/50 flex items-center justify-center group-hover:bg-emerald-500/20 transition-all">
                <svg className="w-4 h-4 text-slate-500 group-hover:text-emerald-400 transition-colors" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </div>
            </div>
          </motion.button>
        ))}
      </div>
    </div>
  );
}