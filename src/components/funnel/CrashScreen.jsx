import React from "react"
import { motion } from "framer-motion"
import { Battery, BatteryLow, ArrowRight } from "lucide-react"

const options = [
  {
    id: "strong",
    tag: null,
    icon: Battery,
    title: "Still going strong",
    subtitle: "My energy stays consistent throughout the day",
    gradient:
      "linear-gradient(135deg, #34d399 0%, #10b981 40%, #059669 100%)",
  },
  {
    id: "wall",
    tag: "Energy",
    icon: BatteryLow,
    title: "I hit a wall",
    subtitle: "The afternoon crash is real and frustrating",
    gradient:
      "linear-gradient(135deg, #facc15 0%, #f59e0b 40%, #f97316 100%)",
  },
]

export default function CrashScreen({ onSelect }) {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6 py-16 bg-[#040B1A]">

      {/* Header */}
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
          How do you feel at{" "}
          <span className="font-semibold bg-gradient-to-r from-amber-400 to-orange-400 bg-clip-text text-transparent">
            3:00 PM
          </span>
          ?
        </h1>

        <p className="text-slate-400 text-lg max-w-md mx-auto">
          Your afternoon energy tells us a lot about your cellular health
        </p>
      </motion.div>

      {/* Clock stays EXACTLY same */}
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
          <div className="absolute w-0.5 h-8 bg-white/80 origin-bottom" style={{ transform: "rotate(0deg) translateY(-50%)" }} />
          <div className="absolute w-0.5 h-6 bg-emerald-400 origin-bottom" style={{ transform: "rotate(90deg) translateY(-50%)" }} />
        </div>
      </motion.div>

      {/* Options */}
      <div className="w-full max-w-lg space-y-6">
        {options.map((option, index) => (
          <motion.div
            key={option.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 + index * 0.1 }}
            className="group relative"
          >
            {/* Glow wrapper (new) */}
            <div
              className="absolute -inset-3 rounded-2xl opacity-50 blur-xl transition-all duration-500 group-hover:opacity-90 group-hover:blur-2xl"
              style={{ background: option.gradient }}
            />

            <div
              className="absolute -inset-1.5 rounded-2xl opacity-30 blur-md"
              style={{ background: option.gradient }}
            />

            {/* Original card shape preserved */}
            <button
              onClick={() => onSelect?.(option.tag)}
              className="relative w-full flex items-center gap-5 p-6 rounded-2xl text-white font-medium transition-transform duration-200 hover:scale-[1.02] active:scale-[0.98]"
              style={{ background: option.gradient }}
            >
              {/* Icon box preserved but upgraded */}
              <div className="flex-shrink-0 w-14 h-14 rounded-xl bg-white/15 flex items-center justify-center">
                <option.icon className="w-7 h-7 text-white" />
              </div>

              <div className="text-left flex-1">
                <h3 className="text-lg font-semibold text-white mb-1">
                  {option.title}
                </h3>
                <p className="text-white/80 text-sm">
                  {option.subtitle}
                </p>
              </div>

              <ArrowRight className="w-5 h-5 opacity-80" />
            </button>
          </motion.div>
        ))}
      </div>
    </div>
  )
}
