import React from 'react';
import { motion } from 'framer-motion';
import { Syringe, Pill, Shield, Clock, Sparkles } from 'lucide-react';

export default function InjectionScreen({ onProceed, onExit }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-10"
      >
        <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-6 border border-emerald-500/20">
          Step 3 of 3
        </span>
        <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
          One important <span className="font-semibold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">question</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-lg mx-auto">
          This protocol uses subcutaneous injections for maximum bioavailability
        </p>
      </motion.div>

      {/* Info card */}
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.3 }}
        className="w-full max-w-md mb-8"
      >
        <div className="relative p-6 rounded-2xl bg-gradient-to-br from-slate-800/80 to-slate-900/80 border border-slate-700/50">
          <div className="absolute top-0 right-0 w-32 h-32 bg-violet-500/10 rounded-full blur-3xl" />
          
          <div className="relative space-y-4">
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <Shield className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">Painless & Simple</h3>
                <p className="text-slate-400 text-sm">Tiny needle, belly fat area. Most clients feel nothing.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <Clock className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">30 Seconds</h3>
                <p className="text-slate-400 text-sm">Quick self-administration, 2-3 times per week.</p>
              </div>
            </div>
            
            <div className="flex items-start gap-4">
              <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-violet-500/20 flex items-center justify-center">
                <Sparkles className="w-5 h-5 text-violet-400" />
              </div>
              <div>
                <h3 className="text-white font-medium mb-1">100% Absorption</h3>
                <p className="text-slate-400 text-sm">Unlike pills, injections bypass digestion for full effect.</p>
              </div>
            </div>
          </div>
        </div>
      </motion.div>

      {/* Options */}
      <div className="w-full max-w-md space-y-4">
        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          onClick={onProceed}
          className="w-full group relative"
        >
          <div className="absolute inset-0 bg-emerald-500/30 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
          <div className="relative flex items-center justify-center gap-3 p-5 rounded-2xl bg-gradient-to-r from-emerald-500 to-teal-500 text-white font-semibold text-lg shadow-lg shadow-emerald-500/25 hover:shadow-emerald-500/40 transition-all">
            <Syringe className="w-5 h-5" />
            I'm comfortable with this
          </div>
        </motion.button>

        <motion.button
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
          onClick={onExit}
          className="w-full group"
        >
          <div className="flex items-center justify-center gap-3 p-5 rounded-2xl bg-slate-800/50 border border-slate-700/50 text-slate-300 hover:text-white hover:border-slate-600 hover:bg-slate-800/80 transition-all">
            <Pill className="w-5 h-5" />
            I prefer pills
          </div>
        </motion.button>
      </div>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.7 }}
        className="mt-6 text-slate-500 text-sm text-center max-w-sm"
      >
        No judgment—we have oral alternatives if injections aren't for you
      </motion.p>
    </div>
  );
}