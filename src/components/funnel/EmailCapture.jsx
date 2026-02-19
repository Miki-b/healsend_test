import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Mail, ArrowRight, Check, Sparkles } from 'lucide-react';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';

export default function EmailCapture({ onComplete }) {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showCelebration, setShowCelebration] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!email) return;
    
    setIsSubmitting(true);
    
    // Simulate a brief delay
    await new Promise(resolve => setTimeout(resolve, 500));
    
    setShowCelebration(true);
    
    // Wait for celebration animation then proceed
    setTimeout(() => {
      onComplete();
    }, 3000);
  };

  if (showCelebration) {
    return <CelebrationAnimation email={email} />;
  }

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16">
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="text-center mb-10"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.3, type: 'spring', stiffness: 200 }}
          className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/30"
        >
          <Mail className="w-10 h-10 text-white" />
        </motion.div>
        
        <h1 className="text-4xl md:text-5xl font-light text-white mb-4 tracking-tight">
          Almost <span className="font-semibold bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">there</span>
        </h1>
        <p className="text-slate-400 text-lg max-w-md mx-auto">
          Enter your email to unlock your personalized longevity protocol
        </p>
      </motion.div>

      <motion.form
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        onSubmit={handleSubmit}
        className="w-full max-w-md"
      >
        <div className="relative">
          <div className="absolute inset-0 bg-gradient-to-r from-emerald-500/20 to-teal-500/20 rounded-2xl blur-xl" />
          <div className="relative p-8 rounded-2xl bg-slate-800/50 border border-slate-700/50 backdrop-blur-sm">
            <div className="space-y-4">
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:border-emerald-500 focus:ring-emerald-500/20 text-lg"
                  required
                />
              </div>
              
              <Button
                type="submit"
                disabled={isSubmitting || !email}
                className="w-full py-4 bg-gradient-to-r from-emerald-500 to-teal-500 hover:from-emerald-600 hover:to-teal-600 text-white font-semibold text-lg rounded-xl shadow-lg shadow-emerald-500/25 disabled:opacity-50 transition-all"
              >
                {isSubmitting ? (
                  <motion.div
                    animate={{ rotate: 360 }}
                    transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                    className="w-6 h-6 border-2 border-white/30 border-t-white rounded-full"
                  />
                ) : (
                  <>
                    Reveal My Protocol
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </>
                )}
              </Button>
            </div>
          </div>
        </div>

        <p className="mt-4 text-slate-500 text-sm text-center">
          🔒 Your information is secure and never shared
        </p>
      </motion.form>
    </div>
  );
}

function CelebrationAnimation({ email }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 relative overflow-hidden">
      {/* Particle explosion */}
      {[...Array(50)].map((_, i) => (
        <motion.div
          key={i}
          initial={{ 
            opacity: 1, 
            scale: 0,
            x: 0,
            y: 0
          }}
          animate={{ 
            opacity: 0,
            scale: 1,
            x: (Math.random() - 0.5) * 600,
            y: (Math.random() - 0.5) * 600
          }}
          transition={{ 
            duration: 2,
            delay: Math.random() * 0.5,
            ease: 'easeOut'
          }}
          className={`absolute w-3 h-3 rounded-full ${
            i % 3 === 0 ? 'bg-emerald-400' : i % 3 === 1 ? 'bg-teal-400' : 'bg-violet-400'
          }`}
          style={{ left: '50%', top: '50%' }}
        />
      ))}

      {/* Ring burst */}
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 4, opacity: 0 }}
        transition={{ duration: 1.5, ease: 'easeOut' }}
        className="absolute w-40 h-40 rounded-full border-4 border-emerald-400"
      />
      <motion.div
        initial={{ scale: 0, opacity: 1 }}
        animate={{ scale: 3, opacity: 0 }}
        transition={{ duration: 1.5, delay: 0.2, ease: 'easeOut' }}
        className="absolute w-40 h-40 rounded-full border-4 border-teal-400"
      />

      {/* Success icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.3, type: 'spring', stiffness: 200, damping: 15 }}
        className="relative z-10"
      >
        <motion.div
          animate={{ 
            boxShadow: [
              '0 0 0 0 rgba(16, 185, 129, 0.4)',
              '0 0 0 30px rgba(16, 185, 129, 0)',
            ]
          }}
          transition={{ repeat: Infinity, duration: 1.5 }}
          className="w-28 h-28 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.6, type: 'spring' }}
          >
            <Check className="w-14 h-14 text-white stroke-[3]" />
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Text */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8 }}
        className="text-center mt-8 relative z-10"
      >
        <h2 className="text-3xl md:text-4xl font-light text-white mb-3">
          <span className="font-semibold">You're in!</span>
        </h2>
        <p className="text-slate-400 text-lg flex items-center justify-center gap-2">
          <Sparkles className="w-5 h-5 text-emerald-400" />
          Loading your personalized protocol
          <Sparkles className="w-5 h-5 text-emerald-400" />
        </p>
      </motion.div>

      {/* Loading dots */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="flex gap-2 mt-6"
      >
        {[0, 1, 2].map((i) => (
          <motion.div
            key={i}
            animate={{ y: [-5, 5, -5] }}
            transition={{ repeat: Infinity, duration: 0.8, delay: i * 0.15 }}
            className="w-3 h-3 rounded-full bg-emerald-400"
          />
        ))}
      </motion.div>
    </div>
  );
}