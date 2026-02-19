import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Pill, ArrowRight, Check, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';

export default function ExitPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (email) {
      setSubmitted(true);
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950 flex flex-col items-center justify-center px-6 py-16">
      {/* Ambient glow */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="relative z-10 max-w-lg w-full"
      >
        {!submitted ? (
          <>
            <div className="text-center mb-10">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ type: 'spring', stiffness: 200 }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center shadow-lg shadow-violet-500/30"
              >
                <Pill className="w-10 h-10 text-white" />
              </motion.div>

              <h1 className="text-3xl md:text-4xl font-light text-white mb-4 tracking-tight">
                No problem—we have an <span className="font-semibold bg-gradient-to-r from-violet-400 to-purple-400 bg-clip-text text-transparent">oral alternative</span>
              </h1>
              <p className="text-slate-400 text-lg">
                Our Oral NMN supplement offers longevity benefits without injections
              </p>
            </div>

            {/* Product Card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="relative mb-8"
            >
              <div className="absolute inset-0 bg-violet-500/20 rounded-3xl blur-xl" />
              <div className="relative rounded-3xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm">
                <h2 className="text-xl font-semibold text-white mb-2">Premium Oral NMN</h2>
                <p className="text-slate-400 mb-4">
                  Pharmaceutical-grade NMN capsules for daily energy and cellular support
                </p>
                
                <ul className="space-y-2 mb-6">
                  {['500mg pure NMN per capsule', '30-day supply', 'No injections required', 'Easy daily routine'].map((item, i) => (
                    <li key={i} className="flex items-center gap-3 text-slate-300 text-sm">
                      <div className="w-5 h-5 rounded-full bg-gradient-to-br from-violet-400 to-purple-500 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="flex items-baseline gap-2 mb-4">
                  <span className="text-3xl font-semibold text-white">$79</span>
                  <span className="text-slate-500">/month</span>
                </div>
              </div>
            </motion.div>

            {/* Email capture */}
            <motion.form
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4 }}
              onSubmit={handleSubmit}
              className="space-y-4"
            >
              <p className="text-center text-slate-400 mb-4">
                Enter your email to get notified when oral NMN is available
              </p>
              <div className="relative">
                <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
                <Input
                  type="email"
                  placeholder="your@email.com"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full pl-12 pr-4 py-4 bg-slate-900/50 border-slate-700 rounded-xl text-white placeholder:text-slate-500 focus:border-violet-500 focus:ring-violet-500/20 text-lg"
                  required
                />
              </div>
              <Button
                type="submit"
                className="w-full py-4 bg-gradient-to-r from-violet-500 to-purple-500 hover:from-violet-600 hover:to-purple-600 text-white font-semibold text-lg rounded-xl"
              >
                Notify Me
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
            </motion.form>
          </>
        ) : (
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center">
              <Check className="w-10 h-10 text-white" />
            </div>
            <h2 className="text-2xl font-semibold text-white mb-2">You're on the list!</h2>
            <p className="text-slate-400">
              We'll notify you at <span className="text-white">{email}</span> when Oral NMN launches.
            </p>
          </motion.div>
        )}
      </motion.div>
    </div>
  );
}