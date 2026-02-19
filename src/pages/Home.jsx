import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import GoalScreen from '@/components/funnel/GoalScreen';
import CrashScreen from '@/components/funnel/CrashScreen';
import InjectionScreen from '@/components/funnel/InjectionScreen';
import ResultsPage from '@/components/funnel/ResultsPage';
import EmailCapture from '@/components/funnel/EmailCapture';
import ExitPage from '@/components/funnel/ExitPage';

export default function Home() {
  const [step, setStep] = useState(0);
  const [tags, setTags] = useState([]);
  const [exited, setExited] = useState(false);

  const addTag = (tag) => {
    if (!tags.includes(tag)) {
      setTags([...tags, tag]);
    }
  };

  const getProtocol = () => {
    const hasEnergy = tags.includes('Energy');
    const hasGlow = tags.includes('Glow');
    const hasAll = tags.includes('All');

    if (hasAll || (hasEnergy && hasGlow)) {
      return 'reset';
    } else if (hasGlow) {
      return 'radiance';
    } else {
      return 'drive';
    }
  };

  const nextStep = () => setStep(step + 1);

  if (exited) {
    return <ExitPage />;
  }

  const screens = [
    <GoalScreen key="goal" onSelect={(tag) => { addTag(tag); nextStep(); }} />,
    <CrashScreen key="crash" onSelect={(tag) => { if (tag) addTag(tag); nextStep(); }} />,
    <InjectionScreen key="injection" onProceed={nextStep} onExit={() => setExited(true)} />,
    <EmailCapture key="email" onComplete={nextStep} />,
    <ResultsPage key="results" protocol={getProtocol()} tags={tags} />
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 overflow-hidden">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-emerald-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
      </div>

      {/* Progress indicator */}
      {step < 4 && (
        <div className="fixed top-0 left-0 right-0 z-50">
          <div className="h-1 bg-slate-800">
            <motion.div
              className="h-full bg-gradient-to-r from-emerald-400 to-emerald-500"
              initial={{ width: 0 }}
              animate={{ width: `${((step + 1) / 4) * 100}%` }}
              transition={{ duration: 0.5, ease: 'easeOut' }}
            />
          </div>
        </div>
      )}

      <AnimatePresence mode="wait">
        <motion.div
          key={step}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.4, ease: 'easeOut' }}
          className="relative z-10"
        >
          {screens[step]}
        </motion.div>
      </AnimatePresence>
    </div>
  );
}