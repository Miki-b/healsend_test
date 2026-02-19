import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles, Dna, Check, Plus, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';

const protocols = {
  drive: {
    name: 'The Neural Drive Protocol',
    tagline: 'Mitochondrial Fuel for Unstoppable Energy',
    icon: Zap,
    gradient: 'from-amber-400 to-orange-500',
    glow: 'shadow-amber-500/30',
    includes: ['NAD+ Subcutaneous Injections', '4-week supply', 'Physician consultation', 'Progress tracking'],
    price: 249,
    description: 'NAD+ is the cellular fuel your mitochondria crave. This protocol restores your body\'s natural energy production, eliminating brain fog and afternoon crashes.'
  },
  radiance: {
    name: 'The Radiance Protocol',
    tagline: 'Master Detox for Luminous Skin',
    icon: Sparkles,
    gradient: 'from-rose-400 to-pink-500',
    glow: 'shadow-rose-500/30',
    includes: ['Glutathione Subcutaneous Injections', '4-week supply', 'Physician consultation', 'Progress tracking'],
    price: 199,
    description: 'Glutathione is your body\'s master antioxidant. This protocol flushes toxins at the cellular level, revealing radiant, glowing skin from the inside out.'
  },
  reset: {
    name: 'The Cellular Reset Protocol',
    tagline: 'The Complete Longevity Stack',
    icon: Dna,
    gradient: 'from-emerald-400 to-teal-500',
    glow: 'shadow-emerald-500/30',
    includes: ['NAD+ Subcutaneous Injections', 'Glutathione Subcutaneous Injections', '4-week supply', 'Physician consultation', 'Priority support'],
    price: 399,
    savings: 49,
    description: 'The ultimate cellular transformation. NAD+ fuels your mitochondria while Glutathione detoxifies—together, they unlock your body\'s full regenerative potential.'
  }
};

export default function ResultsPage({ protocol, tags }) {
  const [addGlutathione, setAddGlutathione] = useState(false);
  const currentProtocol = protocols[protocol];
  const Icon = currentProtocol.icon;

  const isDrive = protocol === 'drive';
  const isReset = protocol === 'reset';

  const finalPrice = isDrive && addGlutathione 
    ? currentProtocol.price + 129 
    : currentProtocol.price;

  return (
    <div className="min-h-screen px-6 py-16">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-10"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ type: 'spring', stiffness: 200, damping: 15 }}
            className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${currentProtocol.gradient} flex items-center justify-center shadow-lg ${currentProtocol.glow}`}
          >
            <Icon className="w-10 h-10 text-white" />
          </motion.div>
          
          <span className="inline-block px-4 py-1.5 rounded-full bg-emerald-500/10 text-emerald-400 text-sm font-medium mb-4 border border-emerald-500/20">
            Your Personalized Protocol
          </span>
          
          <h1 className="text-3xl md:text-4xl font-light text-white mb-2 tracking-tight">
            {currentProtocol.name}
          </h1>
          <p className="text-slate-400 text-lg">
            {currentProtocol.tagline}
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 }}
          className="relative"
        >
          <div className={`absolute inset-0 bg-gradient-to-br ${currentProtocol.gradient} opacity-10 rounded-3xl blur-xl`} />
          
          <div className="relative rounded-3xl bg-slate-800/50 border border-slate-700/50 overflow-hidden backdrop-blur-sm">
            {/* Badge */}
            {isReset && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium border border-emerald-500/30">
                  BEST VALUE
                </span>
              </div>
            )}

            <div className="p-8">
              {/* Description */}
              <p className="text-slate-300 mb-6 leading-relaxed">
                {currentProtocol.description}
              </p>

              {/* What's included */}
              <div className="mb-6">
                <h3 className="text-white font-medium mb-3">What's Included:</h3>
                <ul className="space-y-2">
                  {currentProtocol.includes.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + i * 0.1 }}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <div className={`w-5 h-5 rounded-full bg-gradient-to-br ${currentProtocol.gradient} flex items-center justify-center flex-shrink-0`}>
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Upsell for Drive protocol */}
              {isDrive && (
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.5 }}
                  className="mb-6 p-4 rounded-xl bg-slate-900/50 border border-slate-700/50"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-gradient-to-br from-rose-400 to-pink-500 flex items-center justify-center">
                        <Sparkles className="w-5 h-5 text-white" />
                      </div>
                      <div>
                        <h4 className="text-white font-medium">Add Glutathione Detox</h4>
                        <p className="text-slate-400 text-sm">Scrub cellular waste to amplify energy</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-3">
                      <span className="text-emerald-400 font-medium">+$129/mo</span>
                      <Switch
                        checked={addGlutathione}
                        onCheckedChange={setAddGlutathione}
                      />
                    </div>
                  </div>
                </motion.div>
              )}

              {/* Price */}
              <div className="flex items-end justify-between mb-6">
                <div>
                  <span className="text-slate-400 text-sm">Monthly investment</span>
                  <div className="flex items-baseline gap-2">
                    <span className="text-4xl font-semibold text-white">${finalPrice}</span>
                    <span className="text-slate-500">/month</span>
                  </div>
                  {isReset && currentProtocol.savings && (
                    <span className="text-emerald-400 text-sm">Save ${currentProtocol.savings} vs. buying separately</span>
                  )}
                </div>
              </div>

              {/* CTA */}
              <Button
                className={`w-full py-6 text-lg font-semibold rounded-xl bg-gradient-to-r ${currentProtocol.gradient} hover:opacity-90 text-white shadow-lg ${currentProtocol.glow} transition-all`}
              >
                Start My Protocol
              </Button>

              {/* Downgrade option for Reset */}
              {isReset && (
                <motion.button
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.6 }}
                  className="w-full mt-4 text-slate-500 hover:text-slate-400 text-sm transition-colors"
                >
                  Remove Glutathione, keep NAD+ only ($249/mo) →
                </motion.button>
              )}
            </div>
          </div>
        </motion.div>

        {/* Trust badges */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.7 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-6 text-slate-500 text-sm"
        >
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
            </svg>
            Physician Supervised
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path d="M9 2a1 1 0 000 2h2a1 1 0 100-2H9z" />
              <path fillRule="evenodd" d="M4 5a2 2 0 012-2 3 3 0 003 3h2a3 3 0 003-3 2 2 0 012 2v11a2 2 0 01-2 2H6a2 2 0 01-2-2V5zm3 4a1 1 0 000 2h.01a1 1 0 100-2H7zm3 0a1 1 0 000 2h3a1 1 0 100-2h-3zm-3 4a1 1 0 100 2h.01a1 1 0 100-2H7zm3 0a1 1 0 100 2h3a1 1 0 100-2h-3z" clipRule="evenodd" />
            </svg>
            FDA-Grade Compounds
          </div>
          <div className="flex items-center gap-2">
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
              <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
            </svg>
            Cancel Anytime
          </div>
        </motion.div>
      </div>
    </div>
  );
}