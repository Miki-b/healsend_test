import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Zap, Sparkles, Dna, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Switch } from '@/components/ui/switch';
const WOO_PRODUCT_MAP = {
  drive: {
    base: 'nad-injections',            // $249
    withGlutathione: 'nad-gluta',     // $249 + $129
  },
  radiance: {
    base: 'radiance-protocol',        // $199
  },
  reset: {
    full: 'cellular-reset',           // $399
    nadOnly: 'nad-injections',          // downgrade
  }
};
const protocols = {
  drive: {
    name: 'The Neural Drive Protocol',
    tagline: 'Mitochondrial Fuel for Unstoppable Energy',
    icon: Zap,
    gradient: 'from-amber-400 to-orange-500',
    glow: 'shadow-amber-500/30',
    includes: [
      'NAD+ Subcutaneous Injections',
      '4-week supply',
      'Physician consultation',
      'Progress tracking'
    ],
    price: 249,
    description:
      "NAD+ is the cellular fuel your mitochondria crave. This protocol restores your body's natural energy production."
  },
  radiance: {
    name: 'The Radiance Protocol',
    tagline: 'Master Detox for Luminous Skin',
    icon: Sparkles,
    gradient: 'from-rose-400 to-pink-500',
    glow: 'shadow-rose-500/30',
    includes: [
      'Glutathione Subcutaneous Injections',
      '4-week supply',
      'Physician consultation',
      'Progress tracking'
    ],
    price: 199,
    description:
      "Glutathione is your body's master antioxidant. This protocol flushes toxins at the cellular level."
  },
  reset: {
    name: 'The Cellular Reset Protocol',
    tagline: 'The Complete Longevity Stack',
    icon: Dna,
    gradient: 'from-emerald-400 to-teal-500',
    glow: 'shadow-emerald-500/30',
    includes: [
      'NAD+ Subcutaneous Injections',
      'Glutathione Subcutaneous Injections',
      '4-week supply',
      'Physician consultation',
      'Priority support'
    ],
    price: 399,
    savings: 49,
    description:
      "The ultimate cellular transformation. NAD+ fuels your mitochondria while Glutathione detoxifies."
  }
};


export default function ResultsPage({ protocol }) {

  const [addGlutathione, setAddGlutathione] = useState(false);
  const [downgradedToNadOnly, setDowngradedToNadOnly] = useState(false);

  const currentProtocol = protocols[protocol];
  if (!currentProtocol) return null;

  const isDrive = protocol === 'drive';
  const isReset = protocol === 'reset';

  // NAD+ only blue theme
  const isNadOnly = isReset && downgradedToNadOnly;

  const activeGradient = isNadOnly
    ? 'from-blue-400 to-indigo-500'
    : currentProtocol.gradient;

  const activeGlow = isNadOnly
    ? 'shadow-blue-500/30'
    : currentProtocol.glow;

  const finalPrice =
    isNadOnly
      ? 249
      : isDrive && addGlutathione
      ? currentProtocol.price + 129
      : currentProtocol.price;

  const displayedIncludes =
    isNadOnly
      ? [
          'NAD+ Subcutaneous Injections',
          '4-week supply',
          'Physician consultation',
          'Progress tracking'
        ]
      : currentProtocol.includes;

  const Icon = isNadOnly ? Zap : currentProtocol.icon;
function getWooProductFromLogic() {
  if (protocol === 'drive') {
    return addGlutathione
      ? WOO_PRODUCT_MAP.drive.withGlutathione
      : WOO_PRODUCT_MAP.drive.base;
  }

  if (protocol === 'radiance') {
    return WOO_PRODUCT_MAP.radiance.base;
  }

  if (protocol === 'reset') {
    return downgradedToNadOnly
      ? WOO_PRODUCT_MAP.reset.nadOnly
      : WOO_PRODUCT_MAP.reset.full;
  }

  return null;
}

function handleCheckoutClick() {
  const productSlug = getWooProductFromLogic();
  if (!productSlug) return;

  window.location.href = `/checkout-form/?product=${productSlug}`;
}
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
            className={`w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br ${activeGradient} flex items-center justify-center shadow-lg ${activeGlow}`}
          >
            <Icon className="w-10 h-10 text-white" />
          </motion.div>

          <h1 className="text-3xl md:text-4xl font-light text-white mb-2 tracking-tight">
            {isNadOnly ? 'NAD+ Essential Protocol' : currentProtocol.name}
          </h1>

          <p className="text-slate-400 text-lg">
            {isNadOnly
              ? 'Pure Mitochondrial Energy Optimization'
              : currentProtocol.tagline}
          </p>
        </motion.div>

        {/* Main Card */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <div
            className={`relative rounded-3xl bg-slate-800/50 border border-slate-700/50 overflow-hidden backdrop-blur-sm`}
          >
            {!isNadOnly && isReset && (
              <div className="absolute top-4 right-4">
                <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-400 text-xs font-medium border border-emerald-500/30">
                  BEST VALUE
                </span>
              </div>
            )}

            <div className="p-8">
              <p className="text-slate-300 mb-6 leading-relaxed">
                {isNadOnly
                  ? "A focused NAD+ protocol designed purely for cellular energy restoration."
                  : currentProtocol.description}
              </p>

              {/* Includes */}
              <div className="mb-6">
                <h3 className="text-white font-medium mb-3">What's Included:</h3>
                <ul className="space-y-2">
                  {displayedIncludes.map((item, i) => (
                    <motion.li
                      key={item}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.2 + i * 0.1 }}
                      className="flex items-center gap-3 text-slate-300"
                    >
                      <div
                        className={`w-5 h-5 rounded-full bg-gradient-to-br ${activeGradient} flex items-center justify-center flex-shrink-0`}
                      >
                        <Check className="w-3 h-3 text-white" />
                      </div>
                      {item}
                    </motion.li>
                  ))}
                </ul>
              </div>

              {/* Drive Upsell */}
              {isDrive && !isNadOnly && (
                <div className="mb-6 p-4 rounded-xl bg-slate-900/50 border border-slate-700/50 flex items-center justify-between">
                  <div>
                    <h4 className="text-white font-medium">
                      Add Glutathione Detox
                    </h4>
                    <p className="text-slate-400 text-sm">
                      Amplify cellular recovery
                    </p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-emerald-400 font-medium">
                      +$129/mo
                    </span>
                    <Switch
                      checked={addGlutathione}
                      onCheckedChange={setAddGlutathione}
                    />
                  </div>
                </div>
              )}

              {/* Price */}
              <div className="mb-6">
                <span className="text-slate-400 text-sm">
                  Monthly investment
                </span>
                <div className="flex items-baseline gap-2">
                  <span className="text-4xl font-semibold text-white">
                    ${finalPrice}
                  </span>
                  <span className="text-slate-500">/month</span>
                </div>
              </div>

              <Button  
                
                className={`w-full py-6 text-lg font-semibold rounded-xl bg-gradient-to-r ${activeGradient} hover:opacity-90 text-white shadow-lg ${activeGlow}`}
                onClick={handleCheckoutClick}
              >
                Start My Protocol
              </Button>

              {/* Downgrade Button */}
              {isReset && !downgradedToNadOnly && (
                <button
                  onClick={() => setDowngradedToNadOnly(true)}
                  className="w-full mt-4 text-slate-500 hover:text-slate-400 text-sm transition-colors"
                >
                  Remove Glutathione, keep NAD+ only ($249/mo) →
                </button>
              )}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
}